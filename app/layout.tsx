// /app/layout.tsx
import React from "react";
import "./globals.css";  // 确保全局样式被引入
import Link from "next/link";
import 'katex/dist/katex.min.css'; // 引入 KaTeX 样式


const capitalize = ([first, ...rest]:string[], lowerRest:boolean = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const files = ['home', 'download', 'challenges', 'about']  // 获取所有 .md 文件名

  return (
    <html lang="en">
      <head><title>ImageNet</title></head>
      <body>
      <header>
          <h1 className="left">My Website</h1>
          <nav className="right">
            <div className="stats">14,197,122 images, 21841 synsets indexed</div>
            <ul>
              {files.map((slug) => {
                return (
                  <li key={slug}>
                    <Link href={`/${slug}`} prefetch={true}>{capitalize([...slug])}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>&copy; 2024 My Markdown Website. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
