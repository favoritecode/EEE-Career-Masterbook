import fs from 'node:fs';
import path from 'node:path';

const dir = import.meta.dirname;
const template = fs.readFileSync(path.join(dir, 'template.html'), 'utf8');

// ---- Extract CSS ----
const cssMatch = template.match(/<style>([\s\S]*?)<\/style>/);
const css = cssMatch?.[1] || '';
fs.mkdirSync(path.join(dir, 'assets'), { recursive: true });
fs.writeFileSync(path.join(dir, 'assets', 'styles.css'), css);

// ---- Extract main app script (the LAST inline <script> block) ----
const scriptMatches = [...template.matchAll(/<script>([\s\S]*?)<\/script>/g)];
const mainScript = scriptMatches[scriptMatches.length - 1]?.[1] || '';
const appJs = mainScript.replace('/*__BOOK_DATA__*/[]', 'window.BOOK_DATA||[]');
fs.writeFileSync(path.join(dir, 'assets', 'app.js'), appJs);

// ---- Build index.html from the widget markup ----
let html = template
  .replace(/<script>window\.MathJax=.*?<\/script>\s*/s, '')
  .replace(/<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/mathjax[^"]*"[^>]*><\/script>\s*/s, '')
  .replace(/<style>[\s\S]*?<\/style>\s*/, '')
  .replace(/<script>[\s\S]*?<\/script>\s*$/, '')
  .trim();

const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>EEE Career Masterbook</title>
<link rel="stylesheet" href="assets/styles.css">
<script>window.MathJax=window.MathJax||{tex:{inlineMath:[['\\\\(','\\\\)']],displayMath:[['\\\\[','\\\\]']]},options:{skipHtmlTags:['script','noscript','style','textarea','pre','code']}};</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
${html}
<script src="assets/data.js"></script>
<script src="assets/app.js"></script>
</body>
</html>
`;
fs.writeFileSync(path.join(dir, 'index.html'), indexHtml);

console.log('Split complete: index.html, assets/styles.css, assets/app.js');
console.log('CSS bytes:', css.length);
console.log('App JS bytes:', appJs.length);
console.log('HTML bytes:', html.length);