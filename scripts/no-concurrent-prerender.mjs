/* Garde-fou : refuse un `vite build` manuel pendant qu'un prerender tourne.
 * Le vite build vide dist/ que le prerender est en train de remplir → routes
 * en coquille vide (piège documenté, déjà mordu deux fois). Usage : script
 * npm "prebuild" ; `npm run build` refuse tant que scripts/prerender.mjs vit. */
import { execSync } from 'child_process';
try {
  const out = execSync("pgrep -f 'scripts/prerender.mjs' || true", { encoding: 'utf8' }).trim();
  if (out) {
    console.error('✋ Un prerender est en cours (PID ' + out.split('\n').join(', ') + ') : vite build viderait dist/ en plein vol.');
    console.error('   Attendre la fin du run ou le tuer (pkill -f scripts/prerender.mjs) avant de builder.');
    process.exit(1);
  }
} catch { /* pgrep absent : on laisse passer */ }
