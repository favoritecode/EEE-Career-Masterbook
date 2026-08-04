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

const assetVersion = '20260805-panel-dark3';
const criticalEmbedCss = `<style id="ecm-embed-critical">
html,body{overflow-x:hidden;scrollbar-width:none}html::-webkit-scrollbar,body::-webkit-scrollbar,#eee-masterbook *::-webkit-scrollbar{width:0;height:0;display:none}#eee-masterbook *{scrollbar-width:none}
@media(min-width:761px){#eee-masterbook .ecm-layout{align-items:stretch!important}#eee-masterbook .ecm-chapters{position:relative!important;top:auto!important;height:auto!important;max-height:none!important;overflow:visible!important}#eee-masterbook .ecm-viewer{display:flex!important;flex-direction:column!important;height:auto!important;overflow:visible!important}#eee-masterbook .ecm-content{flex:1!important}}
html.dark #eee-masterbook,html.dark #eee-masterbook p,html.dark #eee-masterbook li,html.dark #eee-masterbook span,html.dark #eee-masterbook small,html.dark #eee-masterbook b,html.dark #eee-masterbook td,html.dark #eee-masterbook th,html.dark #eee-masterbook button,html.dark #eee-masterbook input,#eee-masterbook.dark,#eee-masterbook.dark p,#eee-masterbook.dark li,#eee-masterbook.dark span,#eee-masterbook.dark small,#eee-masterbook.dark b,#eee-masterbook.dark td,#eee-masterbook.dark th,#eee-masterbook.dark button,#eee-masterbook.dark input{color:#f2f7fb!important}
</style>`;
const criticalEmbedScript = `<script>
(function(){
  var raf=0;
  function root(){return document.getElementById('eee-masterbook')}
  function setDark(dark){document.documentElement.classList.toggle('dark',dark);var r=root();if(r)r.classList.toggle('dark',dark)}
  function parentDark(){try{return !!((parent.document.body&&parent.document.body.classList.contains('dark'))||parent.document.documentElement.classList.contains('dark'))}catch(e){return !!((document.body&&document.body.classList.contains('dark'))||document.documentElement.classList.contains('dark'))}}
  function syncDark(){setDark(parentDark())}
  function syncPanels(){raf=0;var r=root(),l=r&&r.querySelector('.ecm-chapters'),v=r&&r.querySelector('.ecm-viewer');if(!l||!v)return;l.style.minHeight='';v.style.minHeight='';if(innerWidth<=760)return;var h=Math.ceil(Math.max(l.offsetHeight,v.offsetHeight));l.style.minHeight=h+'px';v.style.minHeight=h+'px'}
  function queuePanels(){if(raf)cancelAnimationFrame(raf);raf=requestAnimationFrame(syncPanels)}
  window.addEventListener('message',function(e){try{if(e.data&&typeof e.data.ecmDark==='boolean')setDark(e.data.ecmDark)}catch(err){}});
  window.addEventListener('resize',queuePanels);
  document.addEventListener('load',function(e){if(e.target&&e.target.closest&&e.target.closest('#eee-masterbook'))queuePanels()},true);
  syncDark();queuePanels();setTimeout(queuePanels,300);setTimeout(queuePanels,1200);setTimeout(queuePanels,3000);
  try{if(window.MutationObserver){var obs=new MutationObserver(function(){syncDark();queuePanels()});obs.observe(document.documentElement,{attributes:true,attributeFilter:['class']});if(document.body)obs.observe(document.body,{attributes:true,attributeFilter:['class']});var pr=parent.document;if(pr&&pr!==document){if(pr.body)obs.observe(pr.body,{attributes:true,attributeFilter:['class']});obs.observe(pr.documentElement,{attributes:true,attributeFilter:['class']})}var r=root();if(r)obs.observe(r,{childList:true,subtree:true,attributes:true})}}catch(err){}
})();
</script>`;

const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>EEE Career Masterbook</title>
<link rel="stylesheet" href="assets/styles.css?v=${assetVersion}">
${criticalEmbedCss}
<script>window.MathJax=window.MathJax||{tex:{inlineMath:[['\\\\(','\\\\)']],displayMath:[['\\\\[','\\\\]']]},options:{skipHtmlTags:['script','noscript','style','textarea','pre','code']}};</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
${html}
<script src="assets/data.js?v=${assetVersion}"></script>
<script src="assets/app.js?v=${assetVersion}"></script>
${criticalEmbedScript}
</body>
</html>
`;
fs.writeFileSync(path.join(dir, 'index.html'), indexHtml);

console.log('Split complete: index.html, assets/styles.css, assets/app.js');
console.log('CSS bytes:', css.length);
console.log('App JS bytes:', appJs.length);
console.log('HTML bytes:', html.length);
