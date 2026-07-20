import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';

/**
 * VeilleEditionPage — une édition quotidienne de la Veille IA.
 *
 * Le contenu vient de /veille-data/<date>.json (voir le commentaire de
 * VeillePage sur ce choix). Le corps est du HTML produit par publish.py à
 * partir du markdown relu et validé, pas une saisie libre.
 *
 * Le titre et le h1 sont dérivés de la date de l'URL avant l'arrivée des
 * données. Le prérendu valide la présence d'un <title> et d'un <h1> : sans
 * ce repli, une réponse lente ferait échouer le rendu de la page.
 */

const BLEU = '#2563EB';
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet',
  'août', 'septembre', 'octobre', 'novembre', 'décembre'];

function dateLisible(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
  if (!m) return '';
  const [, a, mo, j] = m;
  return `${Number(j)} ${MOIS[Number(mo) - 1]} ${a}`;
}

export default function VeilleEditionPage() {
  const { date } = useParams();
  const [edition, setEdition] = useState(null);
  const [etat, setEtat] = useState('chargement');

  useEffect(() => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date || '')) { setEtat('introuvable'); return; }
    let actif = true;
    setEtat('chargement');
    fetch(`/veille-data/${date}.json`)
      .then(r => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
      .then(data => { if (actif) { setEdition(data); setEtat('ok'); } })
      .catch(() => actif && setEtat('introuvable'));
    return () => { actif = false; };
  }, [date]);

  const lisible = dateLisible(date);
  const titre = (edition && edition.titre) || (lisible ? `Veille IA du ${lisible}` : 'Veille IA');

  return (
    <>
      <SEOHead
        title={`${titre} | Masteria`}
        description={
          (edition && edition.chapeau)
          || `L'actualité de l'intelligence artificielle du ${lisible}, commentée et analysée par Masteria.`
        }
        slug={`veille/${date}`}
        type="article"
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: 'Veille IA', slug: 'veille' },
          { name: lisible || 'Édition', slug: `veille/${date}` },
        ]}
        articleData={{
          headline: titre,
          author: 'Mathias Nizan',
          datePublished: date,
          dateModified: date,
          tag: 'Veille IA',
        }}
        datePublished={date}
        dateModified={date}
        noindex={etat === 'introuvable'}
      />

      <article style={{ padding: '48px 20px 80px', background: '#fff' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          <Link
            to="/veille"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6, color: '#64748B',
              textDecoration: 'none', fontSize: 14, fontWeight: 600, marginBottom: 26,
            }}
          >
            <ArrowLeft size={15} strokeWidth={2.4} aria-hidden="true" />
            Toutes les éditions
          </Link>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            color: '#64748B', fontSize: 14, marginBottom: 12,
          }}>
            <Calendar size={14} strokeWidth={2.2} aria-hidden="true" />
            {date && <time dateTime={date}>{lisible}</time>}
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 4.4vw, 40px)', lineHeight: 1.15, margin: '0 0 20px', fontWeight: 800, color: '#0F172A' }}>
            {titre}
          </h1>

          {edition && edition.chapeau && (
            <p style={{ fontSize: 19, lineHeight: 1.6, color: '#475569', margin: '0 0 36px' }}>
              {edition.chapeau}
            </p>
          )}

          {etat === 'chargement' && <p style={{ color: '#64748B' }}>Chargement de l'édition…</p>}

          {etat === 'introuvable' && (
            <p style={{ color: '#64748B' }}>
              Cette édition n'existe pas.{' '}
              <Link to="/veille" style={{ color: BLEU, fontWeight: 600 }}>Voir les éditions publiées</Link>.
            </p>
          )}

          {etat === 'ok' && edition && (
            <>
              {/* Contenu produit par publish.py depuis le markdown relu.
                  Le HTML est généré par notre convertisseur, pas recopié d'une source. */}
              <div
                className="veille-corps"
                dangerouslySetInnerHTML={{ __html: edition.corpsHtml || '' }}
              />

              {edition.analyseHtml && (
                <aside style={{
                  marginTop: 44, padding: '28px 26px', borderRadius: 14,
                  background: '#F1F5F9', borderLeft: `4px solid ${BLEU}`,
                }}>
                  <h2 style={{ fontSize: 20, margin: '0 0 14px', fontWeight: 700, color: '#0F172A' }}>
                    L'analyse Masteria
                  </h2>
                  <div
                    className="veille-corps"
                    dangerouslySetInnerHTML={{ __html: edition.analyseHtml }}
                  />
                </aside>
              )}

              {(edition.nbItems || edition.nbSources) && (
                <p style={{ marginTop: 32, color: '#94A3B8', fontSize: 14 }}>
                  Édition du {lisible}.
                  {edition.nbItems ? ` ${edition.nbItems} actualités retenues` : ''}
                  {edition.nbSources ? ` sur ${edition.nbSources} sources consultées` : ''}.
                </p>
              )}
            </>
          )}
        </div>
      </article>
    </>
  );
}
