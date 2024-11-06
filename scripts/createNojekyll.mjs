import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// 获取当前模块的路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../out/.nojekyll');

fs.writeFileSync(filePath, '', 'utf8'); // 创建空文件
console.log('.nojekyll file created at', filePath);

// 将 .nojekyll 文件加入 git 暂存区
execSync('git add out/.nojekyll');

// 提交改动
execSync('git commit -m "Add .nojekyll file"');

// 打印成功信息
console.log('.nojekyll file added to git and committed.');