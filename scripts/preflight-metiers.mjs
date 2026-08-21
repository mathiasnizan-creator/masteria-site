// Pré-vol des 19 pages métier : vite build puis rendu headless de chaque /formation-ia-<slug>
// (h1, geo-summary, en-bref, kicker Cadre/Atouts uniques, pas de bande painPoints, pas de résidu JSX,
// pas d'erreur JS). Usage : npx vite build && node scripts/preflight-metiers.mjs [slug1,slug2]
// À lancer AVANT le prerender complet (20 min) pour ne pas le relancer pour rien.
import http from 'http'; import fs from 'fs'; import path from 'path'; import puppeteer from 'puppeteer';
const DIST=path.resolve('dist'); const PORT=4196;
const MIME={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.woff2':'font/woff2','.xml':'application/xml','.txt':'text/plain'};
const server=http.createServer((req,res)=>{let p=decodeURIComponent(req.url.split('?')[0]); let f=path.join(DIST,p); if(!fs.existsSync(f)||fs.statSync(f).isDirectory()) f=path.join(DIST,'index.html'); res.writeHead(200,{'Content-Type':MIME[path.extname(f)]||'application/octet-stream'}); fs.createReadStream(f).pipe(res);});
await new Promise(r=>server.listen(PORT,r));
const METIERS=(process.argv[2]?process.argv[2].split(','):['marketing','ressources-humaines','commercial','finance','communication','management','assistante','seo','service-client','informatique','pedagogique','achats','qse','gestion-de-projet','marche-public','immobilier','commerce','sante','juridique','comptabilite','assurance','btp','tourisme','transverse']);
const browser=await puppeteer.launch({headless:true,args:['--no-sandbox']});
let bad=0;
for(const m of METIERS){
  const page=await browser.newPage(); const errs=[];
  page.on('pageerror',e=>{if(!/Unexpected token '<'/.test(e.message))errs.push('pageerror: '+e.message)}); page.on('console',msg=>{if(msg.type()==='error'&&!/Failed to load resource/.test(msg.text()))errs.push('console: '+msg.text().slice(0,120))}); page.on('response',r=>{if(r.status()>=400&&!/_vercel/.test(r.url()))errs.push('HTTP '+r.status()+' '+r.url().replace('http://127.0.0.1:4196',''))});
  await page.setViewport({width:1280,height:900});
  await page.goto(`http://127.0.0.1:${PORT}/formation-ia-${m}`,{waitUntil:'networkidle0',timeout:30000});
  await page.waitForSelector('h1',{timeout:10000}).catch(()=>{});
  const r=await page.evaluate(()=>{const t=document.body.innerText; return {h1:(document.querySelector('h1')?.innerText||'').replace(/\n/g,' ').slice(0,70), geo:!!document.getElementById('geo-summary'), enbref:!!document.getElementById('en-bref'), cadre:(t.match(/Le cadre, traité de front/gi)||[]).length, atouts:(t.match(/Ce que vous y gagnez/gi)||[]).length, resolvez:/vous résolvez/i.test(t), jsx:/style=\{\{|<\/Kicker>/.test(t), words:t.split(/\s+/).length, title:document.title.length, faq:(document.querySelectorAll('[itemtype*="Question"], details, h3').length)}});
  const ok=r.h1&&r.geo&&r.enbref&&r.cadre===1&&r.atouts===1&&!r.resolvez&&!r.jsx&&errs.length===0;
  if(!ok) bad++;
  console.log((ok?'✓':'✗'), m.padEnd(20), r.words+' mots', '| cadre='+r.cadre, 'atouts='+r.atouts, 'geo='+r.geo, 'enbref='+r.enbref, r.resolvez?'RESOLVEZ!':'', r.jsx?'JSX!':'', errs.length?('| '+errs.slice(0,4).join(' ; ')):'', '| h1: '+r.h1);
  await page.close();
}
await browser.close(); server.close();
console.log('---', bad===0?'PREFLIGHT OK':bad+' page(s) KO');
