// Re-rend des routes précises dans dist/ (rattrapage des flakes de prerender).
// Usage : node scripts/rerender-routes.mjs /route-a /route-b ...
import fs from 'fs'; import path from 'path'; import http from 'http';
import puppeteer from 'puppeteer';
const root = process.cwd(); const dist = path.join(root, 'dist');
const ROUTES = process.argv.slice(2);
if (!ROUTES.length) { console.log('aucune route à re-rendre'); process.exit(0); }
const MIME = { '.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.txt':'text/plain','.xml':'application/xml','.ico':'image/x-icon' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  let f = path.join(dist, p);
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
  if (!fs.existsSync(f)) f = fs.existsSync(f + '.html') ? f + '.html' : path.join(dist, 'spa.html');
  res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});
await new Promise(r => server.listen(4195, r));
const browser = await puppeteer.launch({ headless: 'new', executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', args: ['--no-sandbox','--disable-gpu','--disable-dev-shm-usage'] });
let fail = 0;
for (const route of ROUTES) {
  let ok = false;
  for (let attempt = 0; attempt < 3 && !ok; attempt++) {
    const page = await browser.newPage();
    try {
      await page.setViewport({ width: 1280, height: 800 });
      await page.goto(`http://127.0.0.1:4195${route}`, { waitUntil: 'networkidle0', timeout: 60000 });
      await new Promise(r => setTimeout(r, 1800));
      const html = await page.content();
      if (html.length < 20000 || !/<title>[^<]{8,}<\/title>/.test(html) || !/<h1[\s>]/.test(html)) throw new Error('empty-shell ' + html.length);
      const d = path.join(dist, route); fs.mkdirSync(d, { recursive: true }); fs.writeFileSync(path.join(d, 'index.html'), html);
      console.log(`✓ ${route} (${html.length}o)`); ok = true;
    } catch (e) { console.log(`  retry ${route}: ${e.message.split('\n')[0]}`); }
    finally { try { await page.close(); } catch {} }
  }
  if (!ok) { console.log(`✗ ${route} — échec après 3 tentatives`); fail++; }
}
await browser.close(); server.close(); process.exit(fail ? 1 : 0);
