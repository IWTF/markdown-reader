// 'use client'; // 这里指定为客户端组件

// import React, { useEffect, useState } from 'react';
// import { CopyToClipboard } from 'react-copy-to-clipboard'; // 导入复制组件
// import Prism from 'prismjs'; // 导入 Prism 库
// import 'prismjs/themes/prism-okaidia.css'; // 导入 Prism 主题
// import 'prismjs/components/prism-jsx'; // 支持 JSX
// import 'prismjs/components/prism-typescript'; // 支持 TypeScript
// import 'prismjs/components/prism-python'; // 支持 Python 等

// function CopyBtnImage() {
//   const base64String = "data:image/png;base64,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"; // 截断的示例

//   return (
//     // eslint-disable-next-line @next/next/no-img-element
//     <img style={{ width: '16px', height: '16px' }} src={base64String} alt="Example" />
//   );
// }

// const MarkdownContent = ({ content }: { content: string }) => {
//   const [showPopup, setShowPopup] = useState(false)
//   useEffect(() => {
//     Prism.highlightAll(); // 高亮所有的代码块
//   }, [content]);

//   const handleClick = () => {
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 700); // 1秒后隐藏弹窗
//   };

//   // 解析 HTML 内容，将每个 <pre><code> 转换为 React 组件
//   const renderHtmlContent = () => {
//     return content.split('<pre><code class="language-').map((part, index) => {
//       if (index === 0) {
//         return <div key={index} dangerouslySetInnerHTML={{ __html: part }} />;
//       }

//       const [language, code] = part.split('">');
//       const codeContent = code.split('</code></pre>')[0];

//       return (
//         <div key={index} className="code-container">
//           <CopyToClipboard text={codeContent} onCopy={() => handleClick()}>
//             <div>
//                 <button className="copy-btn"><CopyBtnImage /></button>
//                 {showPopup && (
//                     <div style={{
//                         position: 'absolute',
//                         top: '6px',
//                         right: '50px',
//                         padding: '5px 10px',
//                         borderRadius: '5px',
//                         backgroundColor: '#fff',
//                         color: '#000',
//                         fontSize: '12px',
//                         whiteSpace: 'nowrap',
//                         zIndex: 1,
//                     }}>
//                     Copied
//                     </div>
//                 )}
//             </div>
//           </CopyToClipboard>
//           <pre className={`language-${language}`}>
//             <code>{codeContent}</code>
//           </pre>
//           {part.split('</code></pre>')[1] && (
//             <div dangerouslySetInnerHTML={{ __html: part.split('</code></pre>')[1] }} />
//           )}
//         </div>
//       );
//     });
//   };

//   return <div className="markdown-content">{renderHtmlContent()}</div>;
// };

// export default MarkdownContent;


'use client'; // 这里指定为客户端组件

import React, { useEffect } from 'react';
// import { CopyToClipboard } from 'react-copy-to-clipboard'; // 导入复制组件
import Prism from 'prismjs'; // 导入 Prism 库
import 'prismjs/themes/prism-okaidia.css'; // 导入 Prism 主题
import 'prismjs/components/prism-jsx'; // 支持 JSX
import 'prismjs/components/prism-typescript'; // 支持 TypeScript
import 'prismjs/components/prism-python'; // 支持 Python 等

// function CopyBtnImage() {
//   const base64String = "data:image/png;base64,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"; // 截断的示例

//   return (
//     // eslint-disable-next-line @next/next/no-img-element
//     <img style={{ width: '16px', height: '16px' }} src={base64String} alt="Example" />
//   );
// }

const MarkdownContent = ({ content }: { content: string }) => {
  // const [showPopup, setShowPopup] = useState(false)
  useEffect(() => {
    Prism.highlightAll(); // 高亮所有的代码块
  }, [content]);

  // const handleClick = () => {
  //   setShowPopup(true);
  //   setTimeout(() => setShowPopup(false), 700); // 1秒后隐藏弹窗
  // };

  // 解析 HTML 内容，将每个 <pre><code> 转换为 React 组件
  const renderHtmlContent = () => {
    return content.split('<pre><code class="language-').map((part, index) => {
      if (index === 0) {
        return <div key={index} dangerouslySetInnerHTML={{ __html: part }} />;
      }

      const [language, code] = part.split('">');
      const codeContent = code.split('</code></pre>')[0];

      return (
        <div key={index} className="code-container">
          {/* <CopyToClipboard text={codeContent} onCopy={() => handleClick()}>
            <div>
                <button className="copy-btn"><CopyBtnImage /></button>
                {showPopup && (
                    <div style={{
                        position: 'absolute',
                        top: '6px',
                        right: '50px',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        backgroundColor: '#fff',
                        color: '#000',
                        fontSize: '12px',
                        whiteSpace: 'nowrap',
                        zIndex: 1,
                    }}>
                    Copied
                    </div>
                )}
            </div>
          </CopyToClipboard> */}
          <pre className={`language-${language}`}>
            <code>{codeContent}</code>
          </pre>
          {part.split('</code></pre>')[1] && (
            <div dangerouslySetInnerHTML={{ __html: part.split('</code></pre>')[1] }} />
          )}
        </div>
      );
    });
  };

  return <div className="markdown-content">{renderHtmlContent()}</div>;
};

export default MarkdownContent;
