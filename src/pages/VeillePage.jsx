import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Rss } from 'lucide-react';
import SEOHead from '../components/SEOHead';

/**
 * VeillePage — index de la rubrique Veille IA.
 *
 * Les éditions sont chargées depuis /veille-data/index.json au lieu d'être
 * importées comme les articles de blog. Raison : une édition par jour ouvré.
 * Si elles partaient dans le bundle, chaque publication changerait le hash des
 * assets et invaliderait les 230 pages déjà prérendues, ce qui imposerait un
 * rebuild complet quotidien. En restant dans public/, publier ne touche aucun
 * JavaScript et seules les routes nouvelles sont à prérendre.
 */

const BLEU = '#2563EB';

export default function VeillePage() {
  const [editions, setEditions] = useState([]);
  const [etat, setEtat] = useState('chargement');

  useEffect(() => {
    let actif = true;
    fetch('/veille-data/index.json')
      .then(r => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
      .then(data => {
        if (!actif) return;
        setEditions(Array.isArray(data.editions) ? data.editions : []);
        setEtat('ok');
      })
      .catch(() => actif && setEtat('erreur'));
    return () => { actif = false; };
  }, []);

  const derniere = editions[0];

  return (
    <>
      <SEOHead
        title="Veille IA : l'actualité de l'intelligence artificielle | Masteria"
        description="Chaque matin ouvré, une sélection commentée de l'actualité IA en Europe, aux États-Unis et en Chine, suivie d'une analyse signée Masteria."
        slug="veille"
        keywords="veille ia, actualité intelligence artificielle, actualité ia, ai act, veille technologique ia"
        breadcrumbs={[{ name: 'Accueil', slug: '' }, { name: 'Veille IA', slug: 'veille' }]}
        datePublished={derniere ? derniere.date : undefined}
        dateModified={derniere ? derniere.date : undefined}
      />

      <section style={{ background: '#0A0F1E', color: '#fff', padding: '72px 20px 64px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px',
            borderRadius: 999, background: 'rgba(37,99,235,0.18)', border: '1px solid rgba(37,99,235,0.4)',
            fontSize: 13, fontWeight: 600, marginBottom: 22,
          }}>
            <Rss size={14} strokeWidth={2.2} aria-hidden="true" />
            Publiée chaque matin ouvré
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.12, margin: '0 0 20px', fontWeight: 800 }}>
            Veille IA
          </h1>

          <p style={{ fontSize: 19, lineHeight: 1.6, color: '#CBD5E1', maxWidth: 700, margin: 0 }}>
            Une lecture de l'actualité de l'intelligence artificielle depuis l'Europe,
            ouverte sur les États-Unis et la Chine. Dix à quatorze actualités
            commentées, puis une analyse qui prend position.
          </p>
        </div>
      </section>

      <section style={{ padding: '56px 20px 80px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>

          {etat === 'chargement' && (
            <p style={{ color: '#64748B' }}>Chargement des éditions…</p>
          )}

          {etat === 'erreur' && (
            <p style={{ color: '#64748B' }}>
              Les éditions ne sont pas accessibles pour le moment.{' '}
              <Link to="/contact" style={{ color: BLEU, fontWeight: 600 }}>Nous signaler le problème</Link>.
            </p>
          )}

          {etat === 'ok' && editions.length === 0 && (
            <p style={{ color: '#64748B' }}>La première édition paraît prochainement.</p>
          )}

          {editions.map((ed, i) => (
            <article
              key={ed.date}
              style={{
                padding: '28px 0',
                borderTop: i === 0 ? 'none' : '1px solid #E2E8F0',
              }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                color: '#64748B', fontSize: 14, marginBottom: 10,
              }}>
                <Calendar size={14} strokeWidth={2.2} aria-hidden="true" />
                <time dateTime={ed.date}>{ed.dateAffichee}</time>
                {typeof ed.nbItems === 'number' && (
                  <span>· {ed.nbItems} actualités</span>
                )}
              </div>

              <h2 style={{ fontSize: 23, lineHeight: 1.3, margin: '0 0 10px', fontWeight: 700 }}>
                <Link to={`/veille/${ed.date}`} style={{ color: '#0F172A', textDecoration: 'none' }}>
                  {ed.titre}
                </Link>
              </h2>

              {ed.chapeau && (
                <p style={{ color: '#475569', lineHeight: 1.65, margin: '0 0 14px' }}>{ed.chapeau}</p>
              )}

              <Link
                to={`/veille/${ed.date}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: BLEU, fontWeight: 600, textDecoration: 'none', fontSize: 15,
                }}
              >
                Lire l'édition
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
