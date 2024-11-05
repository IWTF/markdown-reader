// /app/posts/[slug]/page.tsx
import { promises as fs } from "fs";
import path from "path";
import { remark } from "remark";
import remarkHtml from "remark-html";

// 定义读取文件并将其转换为 HTML
async function getMarkdownContent() {
  const filePath = path.join(process.cwd(), "content", `home.md`);
  const fileContent = await fs.readFile(filePath, "utf-8");
  return fileContent;
}

// 页面组件，接收从服务器获取的 Markdown 内容并渲染
export default async function PostPage() {
  const markdownContent = await getMarkdownContent();

  // 使用 remark 将 Markdown 转换为 HTML
  const htmlContent = await remark()
    .use(remarkHtml)
    .process(markdownContent)
    .then((file) => file.toString());

  return (
    <div>
      {/* <h1>{slug}</h1> */}
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
