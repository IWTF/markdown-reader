// app/updates/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import remarkGfm from 'remark-gfm';  // 引入 remark-gfm 插件
import remarkMath from 'remark-math'; // 数学插件
import remarkRehype from 'remark-rehype'; // 用于将remark转为rehype
import rehypeKatex from 'rehype-katex';  // 渲染数学公式
import rehypeHtml from 'rehype-stringify'; // 将 rehype 转换为 HTML
import MarkdownContent from './MarkdownContent'; // 客户端组件

type tParams = Promise<{ slug: string[] }>;
const contentDir = path.join(process.cwd(), 'content');

// 1. 使用 generateStaticParams 获取所有路径
export function generateStaticParams() {
  const filenames = fs.readdirSync(contentDir);
  return filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => ({
      slug: filename.replace(/\.md$/, ''),
    }));
}

export default async function PostPage(props: {params: tParams}) {
  const { slug } = await props.params;
  const fullPath = path.join(contentDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { content, data } = matter(fileContents);

  // 使用 remark 进行 Markdown 解析
  const processedContent = await remark()
    .use(remarkGfm)       // 启用 remark-gfm 插件
    .use(remarkMath)      // 启用 remark-math 插件
    .use(remarkRehype)    // 使用 remark-rehype 插件将 Markdown 转换为 HTML
    .use(rehypeKatex)     // 使用 rehype-katex 渲染 KaTeX 数学公式
    .use(rehypeHtml)      // 将处理后的 HTML 转换为字符串
    .process(content);

  const htmlContent = processedContent.toString();

  return (
    <div>
      <h1>{data.title}</h1>
      <MarkdownContent content={htmlContent} />
    </div>
  );
}
