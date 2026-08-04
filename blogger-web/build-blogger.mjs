import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const template = fs.readFileSync(path.join(import.meta.dirname, 'template.html'), 'utf8');
const volumeDirs = fs.readdirSync(root, { withFileTypes: true })
  .filter((item) => item.isDirectory() && /^\d+_Volume_/.test(item.name));

const chapters = [];
for (const volume of volumeDirs) {
  const volumePath = path.join(root, volume.name);
  for (const item of fs.readdirSync(volumePath, { withFileTypes: true })) {
    if (!item.isDirectory() || !/^Chapter-\d+_/.test(item.name)) continue;
    const folder = path.join(volumePath, item.name);
    const number = item.name.match(/^Chapter-(\d+)/)?.[1] || '00';
    const read = (suffix = '') => {
      const file = path.join(folder, `Chapter-${number}${suffix}.md`);
      return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
    };
    const main = read();
    const headings = [...main.matchAll(/^\\?## Topic \d+:\s*(.+)$/gm)].map((m) => m[1].trim());
    const chapterTitle = [...main.matchAll(/^\\?#\s+(.+)$/gm)]
      .map((match) => match[1].trim())
      .find((heading) => !/^Chapter\s+\d+$/i.test(heading));
    chapters.push({
      id: `${volume.name}/${item.name}`,
      volume: volume.name.replace(/^\d+_Volume_/, '').replaceAll('_', ' '),
      number: Number(number),
      slug: item.name.replace(/^Chapter-\d+_/, '').toLowerCase().replaceAll('_', '-'),
      title: chapterTitle || item.name.replace(/^Chapter-\d+_/, '').replaceAll('_', ' '),
      topics: headings,
      content: main,
      mcq: read('_MCQ'),
      viva: read('_Viva'),
      glossary: read('_Glossary'),
      references: read('_References'),
      videos: read('_Videos')
    });
  }
}
chapters.sort((a, b) => a.number - b.number);
const payload = JSON.stringify(chapters).replaceAll('</script', '<\\/script');
let html = template.replace('/*__BOOK_DATA__*/[]', payload);
html = html.replace(/assets\/([^'"`]+)\.png/g, (reference, relativePath) => {
  const webpPath = path.join(import.meta.dirname, 'assets', `${relativePath}.webp`);
  return fs.existsSync(webpPath) ? `assets/${relativePath}.webp` : reference;
});
fs.writeFileSync(path.join(import.meta.dirname, 'eee-career-masterbook-blogger.html'), html);
let selfContained = html;
const assetsPath = path.join(import.meta.dirname, 'assets');
function inlineAssets(folder, relative = '') {
  for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
    const relativePath = path.posix.join(relative, entry.name);
    const absolutePath = path.join(folder, entry.name);
    if (entry.isDirectory()) { inlineAssets(absolutePath, relativePath); continue; }
    if (!/\.(png|jpg|jpeg|webp|svg)$/i.test(entry.name)) continue;
    const ext = path.extname(entry.name).slice(1).replace('jpg', 'jpeg');
    const mime = ext === 'svg' ? 'svg+xml' : ext;
    const data = `data:image/${mime};base64,${fs.readFileSync(absolutePath).toString('base64')}`;
    selfContained = selfContained.replaceAll(`assets/${relativePath}`, data);
    if (relativePath.startsWith('chapter-03-electrical-safety-symbols-tools-and-basic-measurements/') || relativePath.startsWith('chapter-07-dc-network-theorems-and-circuit-simplification/') || relativePath.startsWith('chapter-08-capacitors-inductors-rl-rc-and-dc-transient-circuits/') || relativePath.startsWith('chapter-10-alternating-current-ac-fundamentals/') || relativePath.startsWith('chapter-11-complex-numbers-phasors-and-ac-mathematics/') || relativePath.startsWith('chapter-13-resonance-and-basic-filter-circuits/') || relativePath.startsWith('chapter-14-three-phase-ac-systems/') || relativePath.startsWith('chapter-15-transformers/') || relativePath.startsWith('chapter-16-dc-generators-and-dc-motors/') || relativePath.startsWith('chapter-17-three-phase-induction-motors/') || relativePath.startsWith('chapter-18-single-phase-motors/') || relativePath.startsWith('chapter-19-synchronous-generators-and-motors/') || relativePath.startsWith('chapter-20-motor-starting-speed-control-and-maintenance/') || relativePath.startsWith('chapter-21-generation-of-electrical-power/') || relativePath.startsWith('chapter-22-transmission-and-distribution/') || relativePath.startsWith('chapter-23-electrical-wiring-cables-and-installation/') || relativePath.startsWith('chapter-24-earthing-protection-switchgear-and-circuit-breakers/') || relativePath.startsWith('chapter-25-electrical-estimation-load-calculation-and-energy-management/') || relativePath.startsWith('chapter-26-semiconductor-fundamentals-diodes-and-rectifiers/') || relativePath.startsWith('chapter-27-transistors-amplifiers-and-operational-amplifiers/') || relativePath.startsWith('chapter-28-digital-electronics-and-basic-logic-circuits/') || relativePath.startsWith('chapter-29-introduction-to-power-electronics-and-motor-drives/') || relativePath.startsWith('chapter-30-renewable-energy-batteries-troubleshooting-and-practical-eee-review/') || relativePath.startsWith('chapter-12-ac-circuit-analysis/')) {
      selfContained = selfContained.replaceAll(`'${entry.name}'`, `'${data}'`);
    }
  }
}
if (fs.existsSync(assetsPath)) inlineAssets(assetsPath);
selfContained = selfContained.replace(/\.map\(name=>'assets\/(chapter-(?:03|07|08|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30)-[^']+)\/'\+name\)/g, ".map(name=>name.startsWith('data:')?name:'assets/$1/'+name)");
fs.writeFileSync(path.join(import.meta.dirname, 'eee-career-masterbook-self-contained.html'), selfContained);
console.log(`Built ${chapters.length} chapter(s): blogger-web/eee-career-masterbook-blogger.html`);
