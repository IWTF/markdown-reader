// app/updates/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import {remark} from 'remark';
import remarkGfm from 'remark-gfm';  // 引入 remark-gfm 插件
import remarkMath from 'remark-math'; // 数学插件
import remarkRehype from 'remark-rehype'; // 用于将remark转为rehype
import rehypeKatex from 'rehype-katex';  // 渲染数学公式
import rehypeHtml from 'rehype-stringify'; // 将 rehype 转换为 HTML
import MarkdownContent from './MarkdownContent'; // 客户端组件

type tParams = Promise<{ slug: string[] }>;

// Static Params function: Used by Next.js to generate the dynamic routes at build time
export async function generateStaticParams() {
  const updatesDir = path.join(process.cwd(), 'content/updates');
  const files = fs.readdirSync(updatesDir);  // List all files in the content/updates directory

  // Filter only markdown files and extract their names as slugs
  const slugs = files.filter(file => file.endsWith('.md')).map(file => ({ slug: file.replace('.md', '') }));

  // Return the list of slugs, which Next.js will use to generate the static pages
  return slugs;
}

export default async function PostPage(props: {params: tParams}) {
  const { slug } = await props.params;

  // 获取 Markdown 文件路径
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);

  let content = '';
  try {
    // 读取 Markdown 文件内容
    content = fs.readFileSync(filePath, 'utf8');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return <div>Post not found.</div>; // 处理文件未找到的情况
  }

  // 使用 remark 转换 Markdown 为 HTML
  const result = await remark()
    .use(remarkGfm)       // 启用 remark-gfm 插件
    .use(remarkMath)      // 启用 remark-math 插件
    .use(remarkRehype)    // 使用 remark-rehype 插件将 Markdown 转换为 HTML
    .use(rehypeKatex)     // 使用 rehype-katex 渲染 KaTeX 数学公式
    .use(rehypeHtml)      // 将处理后的 HTML 转换为字符串
    .process(content);
  const htmlContent = result.toString(); // 转换为 HTML 字符串

  // 将内容传递给客户端组件
  return (
    <div>
      <MarkdownContent content={htmlContent} />
    </div>
  );
}
