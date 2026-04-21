import fs from 'fs';
import path from 'path';

const root = '/Users/macos/Desktop/masteria-site';
const today = new Date().toISOString().split('T')[0];
const SITE = 'https://www.master-ia.fr';

// Hubs (5)
const hubSlugs = [
  'formation-chatgpt-entreprise',
  'formation-microsoft-copilot',
  'formation-gemini-entreprise',
  'formation-claude-entreprise',
  'formation-mistral-entreprise',
];

// Pages statiques
const staticRoutes = [
  { path: '',                         prio: 1.0, freq: 'weekly'  },
  { path: 'conseil-ia',               prio: 0.9, freq: 'monthly' },
  { path: 'a-propos',                 prio: 0.7, freq: 'monthly' },
  { path: 'contact',                  prio: 0.8, freq: 'monthly' },
  { path: 'blog',                     prio: 0.8, freq: 'weekly'  },
  { path: 'formation-ia-par-metier',  prio: 0.9, freq: 'monthly' },
  { path: 'mentions-legales',         prio: 0.2, freq: 'yearly'  },
  { path: 'politique-de-confidentialite', prio: 0.2, freq: 'yearly' },
];

// Métiers
const metierSlugs = [
  'marketing','ressources-humaines','commercial','finance',
  'juridique','communication','management','assistante',
  'seo','service-client','informatique','pedagogique',
].map(m => `formation-ia-${m}`);

// Spokes
const src = fs.readFileSync(path.join(root, 'src/data/seo-pages.js'), 'utf8');
const spokeSet = new Set();
const spokeRe = /slug:\s*['"](formation-(?:chatgpt|copilot|gemini|claude|mistral)-[a-z-]+)['"]/g;
let m;
while ((m = spokeRe.exec(src)) !== null) {
  if (!hubSlugs.includes(m[1])) spokeSet.add(m[1]);
}

// Blog
const blogSrc = fs.readFileSync(path.join(root, 'src/data/blog-articles.js'), 'utf8');
const blogSlugs = [];
const blogRe = /slug:\s*['"]([a-z0-9-]+)['"]/g;
while ((m = blogRe.exec(blogSrc)) !== null) blogSlugs.push(m[1]);

const urls = [];
for (const r of staticRoutes) urls.push({ loc: r.path ? `${SITE}/${r.path}` : `${SITE}/`, lastmod: today, changefreq: r.freq, priority: r.prio });
for (const s of hubSlugs)     urls.push({ loc: `${SITE}/${s}`,          lastmod: today, changefreq: 'monthly', priority: 0.9 });
for (const s of metierSlugs)  urls.push({ loc: `${SITE}/${s}`,          lastmod: today, changefreq: 'monthly', priority: 0.8 });
for (const s of [...spokeSet].sort()) urls.push({ loc: `${SITE}/${s}`,  lastmod: today, changefreq: 'monthly', priority: 0.7 });
for (const s of blogSlugs)    urls.push({ loc: `${SITE}/blog/${s}`,     lastmod: today, changefreq: 'monthly', priority: 0.6 });

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(root, 'public/sitemap.xml'), xml);
console.log(`✅ ${urls.length} URLs → public/sitemap.xml`);
console.log(`   ${staticRoutes.length} statiques, ${hubSlugs.length} hubs, ${metierSlugs.length} métiers, ${spokeSet.size} spokes, ${blogSlugs.length} articles`);
