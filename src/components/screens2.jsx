import { useState } from 'react';
import { FadeIn, PrimaryBtn } from './components';

export const FAQ_GENERAL = [
  { q: "Vos formations sont-elles certifiées Qualiopi ?", a: "Oui. Masteria est certifié Qualiopi, le référentiel national qualité pour les organismes de formation. Cette certification garantit la qualité de nos processus pédagogiques et est exigée pour toute prise en charge OPCO." },
  { q: "Comment financer ma formation via mon OPCO ?", a: "Toutes nos formations sont éligibles à une prise en charge par votre OPCO (opérateur de compétences). Nous vous accompagnons dans les démarches : identification de votre OPCO, constitution du dossier et suivi de la demande. Contactez-nous pour qu'on vous guide." },
  { q: "Faut-il des prérequis techniques ?", a: "Non. Nos formations sont conçues pour des professionnels de tous niveaux, sans aucun prérequis technique. La seule condition : utiliser un ordinateur et avoir envie d'apprendre." },
  { q: "Vos formations se déroulent-elles en présentiel ou à distance ?", a: "Les deux. Nous proposons des sessions en présentiel (dans vos locaux ou dans notre salle) et à distance via des outils de visioconférence interactifs. Le format est choisi lors du devis selon vos préférences." },
  { q: "Dans quels pays intervenez-vous ?", a: "Nous intervenons en France (toutes régions), en Suisse et en Belgique. Pour les formations intra-entreprise, nous nous déplaçons dans vos locaux." },
  { q: "Quel est le délai pour organiser une formation ?", a: "Pour les formations inter-entreprises, les prochaines sessions sont disponibles rapidement. Pour les formations intra ou sur mesure, comptez 2 à 4 semaines pour la phase de cadrage et d'organisation." },
];

export const FAQ_FORMATIONS = [
  { q: "Quelle est la durée des formations ?", a: "La plupart durent 1 journée (7h). Les formations intra-entreprise et sur mesure peuvent s'étendre sur plusieurs jours. Nous proposons aussi des demi-journées pour certains modules." },
  { q: "Combien de participants par session ?", a: "En inter-entreprises, les groupes sont limités à 8 participants pour garantir un suivi individualisé. En intra-entreprise, nous pouvons aller jusqu'à 12 participants simultanément." },
  { q: "Reçoit-on une attestation à l'issue de la formation ?", a: "Oui, chaque participant reçoit une attestation de formation certifiée Qualiopi. Ce document est nécessaire pour le remboursement OPCO et peut être joint à votre dossier de compétences." },
  { q: "Peut-on personnaliser le contenu ?", a: "Absolument. Pour les formations intra-entreprise, nous adaptons systématiquement le programme à votre secteur, vos outils et vos cas d'usage spécifiques." },
  { q: "Les formations sont-elles disponibles en e-learning ?", a: "Pas encore. Nous privilégions le format synchrone (présentiel ou classe virtuelle) pour maximiser les échanges et la pratique. Des ressources complémentaires en ligne sont incluses dans chaque formation." },
];

export const FAQ_CONTACT = [
  { q: "Sous quel délai recevrai-je une réponse ?", a: "Nous répondons à toutes les demandes sous 24 heures ouvrées. Pour les projets urgents, mentionnez-le dans votre message et nous ferons notre possible pour vous répondre encore plus vite." },
  { q: "Le devis est-il vraiment gratuit et sans engagement ?", a: "Oui, totalement. Notre devis est gratuit, personnalisé et sans aucun engagement de votre part. Il détaille le programme, les modalités, les tarifs et les options de financement." },
  { q: "Peut-on discuter avant de remplir le formulaire ?", a: "Bien sûr. Vous pouvez nous contacter directement par email à mathias.nizan@master-ia.fr pour un premier échange informel avant toute demande de devis formelle." },
];

export function FAQSection({ items, title = "Questions fréquentes", bg = "#F8F8F8" }) {
  const [open, setOpen] = useState(null);
  return (
    <section style={{ padding: 'clamp(48px, 8vw, 72px) clamp(18px, 4vw, 32px)', background: bg }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9A9A9A', marginBottom: 10 }}>FAQ</div>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 30, fontWeight: 800, color: '#111', letterSpacing: '-0.02em', marginBottom: 36 }}>{title}</h2>
        </FadeIn>
        <div>
          {items.map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid #E2E2E2' }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 600, color: '#111', lineHeight: 1.4 }}>{item.q}</span>
                <span style={{ fontSize: 20, color: open === i ? '#1C1C1C' : '#ADADAD', flexShrink: 0, transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 220ms ease', lineHeight: 1, fontWeight: 300 }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? 300 : 0, overflow: 'hidden', transition: 'max-height 320ms ease' }}>
                <p style={{ fontSize: 14, color: '#4A4A4A', lineHeight: 1.8, paddingBottom: 20 }}>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FormatTabs({ onContact }) {
  const [active, setActive] = useState('inter');
  const formats = [
    { key: 'inter', label: 'INTER', fullLabel: 'Inter-entreprises', price: '760 €', unit: '/ pers / jour', desc: "Rejoignez un groupe de professionnels issus de différentes entreprises. Format idéal pour bénéficier de retours d'expériences croisées. Sessions planifiées tout au long de l'année.", details: ['8 participants maximum', 'Sessions au calendrier', 'Mix de secteurs enrichissant', 'Finançable OPCO à 100%'] },
    { key: 'intra', label: 'INTRA', fullLabel: 'Intra-entreprise', price: '1 500 €', unit: '/ jour / groupe', desc: "Formation réservée à vos équipes, dans vos locaux ou à distance. Contenu adapté à votre secteur et à vos outils internes. Jusqu'à 12 participants simultanément.", details: ['12 participants maximum', 'Dans vos locaux ou distanciel', 'Contenu adapté à votre secteur', 'Finançable OPCO à 100%'] },
    { key: 'mesure', label: 'SUR MESURE', fullLabel: 'Sur mesure', price: 'Sur devis', unit: '', desc: "Programme entièrement construit autour de vos enjeux. Audit préalable, co-construction pédagogique, suivi post-formation renforcé sur 3 mois.", details: ['Durée et format flexibles', 'Programme co-construit', 'Audit de besoins inclus', 'Suivi 3 mois post-formation'] },
  ];
  const cur = formats.find(f => f.key === active);
  return (
    <section style={{ padding: 'clamp(48px, 8vw, 72px) clamp(18px, 4vw, 32px)', background: '#fff' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <FadeIn>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 32, fontWeight: 800, color: '#2563EB', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 28 }}>
            Choisissez le format<br />de votre formation
          </h2>
          <div style={{ display: 'inline-flex', background: '#606060', borderRadius: 999, padding: 4, marginBottom: 40, gap: 0 }}>
            {formats.map(f => (
              <button key={f.key} onClick={() => setActive(f.key)}
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 700, letterSpacing: '0.07em', background: active === f.key ? '#2563EB' : 'transparent', color: active === f.key ? '#fff' : '#C8C8C8', border: 'none', borderRadius: 999, padding: '12px 26px', cursor: 'pointer', transition: 'all 200ms ease', lineHeight: 1.2 }}>
                {f.label}
              </button>
            ))}
          </div>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(20px, 4vw, 32px)', alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 800, color: '#111', marginBottom: 12 }}>{cur.fullLabel}</div>
            <p style={{ fontSize: 15, color: '#4A4A4A', lineHeight: 1.8, marginBottom: 22 }}>{cur.desc}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {cur.details.map((d, i) => (
                <li key={i} style={{ fontSize: 14, color: '#2A2A2A', display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ width: 20, height: 20, background: '#DBEAFE', borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#2563EB', fontWeight: 800, flexShrink: 0 }}>✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: '#F8F8F8', borderRadius: 14, padding: '28px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9A9A9A', marginBottom: 10 }}>Tarif indicatif</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
              <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 30, fontWeight: 900, color: '#111' }}>{cur.price}</span>
              {cur.unit && <span style={{ fontSize: 13, color: '#9A9A9A' }}>{cur.unit}</span>}
            </div>
            <div style={{ fontSize: 12, color: '#16A34A', fontWeight: 600, marginBottom: 24 }}>✓ Finançable OPCO</div>
            <PrimaryBtn onClick={onContact} style={{ width: '100%', display: 'block', textAlign: 'center' }}>
              Contacter notre équipe
            </PrimaryBtn>
            <div style={{ marginTop: 10, fontSize: 11, color: '#9A9A9A', textAlign: 'center' }}>Réponse sous 24h · Sans engagement</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SidebarFormatPicker({ onContact }) {
  const [active, setActive] = useState('inter');
  const formats = [
    { key: 'inter', label: 'INTER', price: '760 €', unit: '/ pers / jour', details: ['8 participants max', 'Sessions calendrier', 'Finançable OPCO'] },
    { key: 'intra', label: 'INTRA', price: '1 500 €', unit: '/ jour / groupe', details: ['12 participants max', 'Dans vos locaux', 'Finançable OPCO'] },
    { key: 'mesure', label: 'SUR MESURE', price: 'Sur devis', unit: '', details: ['Durée flexible', 'Programme co-construit', 'Suivi 3 mois inclus'] },
  ];
  const cur = formats.find(f => f.key === active);
  return (
    <div style={{ background: '#fff', borderRadius: 14, border: '1.5px solid #E8E8E8', padding: '22px 24px' }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: '#111', marginBottom: 12 }}>Format de formation</div>
      <div style={{ display: 'flex', background: '#555', borderRadius: 999, padding: 3, marginBottom: 16, gap: 0 }}>
        {formats.map(f => (
          <button key={f.key} onClick={() => setActive(f.key)}
            style={{ flex: 1, fontFamily: 'DM Sans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', background: active === f.key ? '#2563EB' : 'transparent', color: active === f.key ? '#fff' : '#CCC', border: 'none', borderRadius: 999, padding: '8px 4px', cursor: 'pointer', transition: 'all 180ms ease', lineHeight: 1.3, textAlign: 'center' }}>
            {f.label}
          </button>
        ))}
      </div>
      <div style={{ marginBottom: 10 }}>
        <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 20, fontWeight: 900, color: '#111', whiteSpace: 'nowrap' }}>{cur.price}</span>
        {cur.unit && <span style={{ fontSize: 11, color: '#9A9A9A', marginLeft: 4 }}>{cur.unit}</span>}
      </div>
      {cur.details.map((d, i) => (
        <div key={i} style={{ fontSize: 12, color: '#4A4A4A', padding: '4px 0', display: 'flex', gap: 7, alignItems: 'center' }}>
          <span style={{ width: 16, height: 16, background: '#DBEAFE', borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#2563EB', fontWeight: 800, flexShrink: 0 }}>✓</span>
          {d}
        </div>
      ))}
      <div style={{ marginTop: 16 }}>
        <PrimaryBtn onClick={onContact} style={{ width: '100%', display: 'block', textAlign: 'center', fontSize: 14 }}>Contacter notre équipe</PrimaryBtn>
        <div style={{ marginTop: 8, textAlign: 'center', fontSize: 11, color: '#9A9A9A' }}>Réponse sous 24h · Gratuit</div>
      </div>
    </div>
  );
}

