import { Link } from 'react-router-dom'
import { ArrowRight, Check, Filter, PenTool } from 'lucide-react'
import AvisGoogle from './AvisGoogle'
import ContactForm from './ContactForm'
import { HUBS } from '../data/catalog-meta'

/*
 * Habillage de /catalogue : la page partagée par mail aux décideurs
 * (14/10/2026). Même module de filtres que /formation-intelligence-artificielle
 * (MetiersHubPage, variant="catalogue"), avec un en-tête court et une fin
 * orientée réponse. Page en noindex, absente du sitemap : elle ne concurrence
 * pas la page SEO et n'entre pas dans la mesure du texte propre.
 * Les liens ?metier=… et ?outil=… des mails préfiltrent le module.
 */

const c = '#2563EB'
const nunito = 'Nunito, sans-serif'
const wrap = { maxWidth: 1140, margin: '0 auto' }

const BADGES = [
  'Qualiopi, actions de formation',
  "Prise en charge possible par l'OPCO",
  'Intra ou individuel, au même tarif',
  'Français ou anglais',
]

export function CatalogueHero({ isMobile }) {
  return (
    <section style={{ position: 'relative', background: '#0A0F1E', color: '#F8FAFC', padding: isMobile ? '48px 20px 44px' : '72px 40px 64px', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: c }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
      <div style={{ ...wrap, position: 'relative' }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7DA9F0', marginBottom: 20 }}>
          Masteria · Catalogue 2027
        </div>
        <h1 style={{ fontFamily: nunito, fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.06, margin: '0 0 20px', letterSpacing: '-0.03em', maxWidth: 860 }}>
          Former vos équipes à l'intelligence artificielle
        </h1>
        <p style={{ fontSize: 'clamp(16px, 2.1vw, 19px)', color: '#CBD5E1', lineHeight: 1.6, margin: '0 0 30px', maxWidth: 720 }}>
          Choisissez l'outil de votre entreprise et le métier à former : le catalogue affiche les programmes qui correspondent, avec leur durée, leurs objectifs et leur prix. Chaque session se prépare ensuite sur les dossiers de votre équipe.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
          <a href="#filtres" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c, color: '#fff', padding: '14px 26px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>
            <Filter size={16} strokeWidth={2.4} aria-hidden="true" /> Trouver la formation adaptée
          </a>
          <a href="#plus-loin" style={{ display: 'inline-flex', alignItems: 'center', color: '#E2E8F0', padding: '14px 24px', borderRadius: 11, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #2A3650' }}>
            Formats courts et conseil
          </a>
        </div>
        <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
          {BADGES.map((b) => (
            <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: '#CBD5E1', border: '1px solid #2A3650', borderRadius: 99, padding: '7px 14px' }}>
              <Check size={13} strokeWidth={2.6} style={{ color: '#60A5FA' }} aria-hidden="true" />{b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

const COURTS = [
  { nom: 'Sprint IA', href: '/formation-sprint-ia', duree: '3 heures', desc: "Une séance sur l'outil que l'entreprise fournit déjà, chacun sur une de ses tâches. Pour former beaucoup de monde vite." },
  { nom: 'IA pour le COMEX', href: '/formation-ia-comex', duree: '3 heures à 1 journée', desc: 'Le comité de direction au complet, en français ou en anglais, jusqu\'à une feuille de route écrite.' },
]

const PLUS_LOIN = [
  { nom: 'Diagnostic IA', href: '/diagnostic-ia', desc: 'Une feuille de route classée par priorité, avec fourchettes de budget et de délai.' },
  { nom: 'Accompagnement IA', href: '/accompagnement-ia', desc: 'Cadrer, équiper, faire adopter, mesurer, sans dépendre d\'un éditeur.' },
  { nom: 'Agents IA sur mesure', href: '/agents-ia-entreprise', desc: 'Un agent branché à vos logiciels, mis en service sous surveillance.' },
  { nom: 'Outils IA sur mesure', href: '/outils-ia-sur-mesure', desc: "Un outil interne dont le code et la documentation vous reviennent." },
]

const card = { background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: 22, textDecoration: 'none', display: 'block' }
const gridOf = (min) => ({ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, ${min}px), 1fr))`, gap: 18 })

export function CatalogueSuite({ isMobile, selectedTools = [], selectedMetiers = [] }) {
  const pad = isMobile ? '52px 20px' : '80px 40px'
  return (
    <>
      {/* Formats courts + aller plus loin */}
      <section id="plus-loin" style={{ padding: pad, background: '#F8FAFC', borderTop: '1px solid #E5E7EB', scrollMarginTop: 110 }}>
        <div style={wrap}>
          <h2 style={{ fontFamily: nunito, fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 22px' }}>Les formats courts</h2>
          <div style={gridOf(320)}>
            {COURTS.map((f) => (
              <Link key={f.nom} to={f.href} style={{ ...card, borderTop: `3px solid ${c}` }}>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: c, marginBottom: 8, fontFamily: nunito }}>{f.duree}</div>
                <div style={{ fontFamily: nunito, fontSize: 18, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{f.nom}</div>
                <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontFamily: nunito, fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#0A0A0A', margin: '56px 0 10px' }}>Aller plus loin</h2>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.7, margin: '0 0 22px', maxWidth: 760 }}>
            Quand la formation ne suffit plus, nos consultants et développeurs prennent le relais. Tout commence par trente minutes de cadrage, offertes.
          </p>
          <div style={gridOf(240)}>
            {PLUS_LOIN.map((p) => (
              <Link key={p.nom} to={p.href} style={card}>
                <div style={{ fontFamily: nunito, fontSize: 17, fontWeight: 800, color: '#0A0A0A', marginBottom: 8 }}>{p.nom}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sur mesure */}
      <section id="sur-mesure" style={{ padding: pad, background: '#fff', scrollMarginTop: 110 }}>
        <div style={{ ...wrap, display: isMobile ? 'block' : 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          <div style={{ marginBottom: isMobile ? 28 : 0 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12.5, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 14, fontFamily: nunito }}>
              <PenTool size={15} aria-hidden="true" /> Formation sur mesure
            </div>
            <h2 style={{ fontFamily: nunito, fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 16px', lineHeight: 1.2 }}>
              Le catalogue sert de point de départ, le programme s'écrit pour vous
            </h2>
            <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              Aucune session ne se donne telle quelle. Au cadrage, nous partons d'un programme du catalogue, puis nous l'ajustons à votre outil, à votre secteur et aux documents que vos équipes manipulent chaque semaine. Si aucune fiche ne correspond, nous écrivons le programme entier : même tarif à la journée, mêmes garanties Qualiopi.
            </p>
          </div>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 14 }}>
            {SUR_MESURE.map((e, i) => (
              <li key={e.t} style={{ display: 'flex', gap: 16, background: '#F8FAFC', border: '1px solid #E5E7EB', borderRadius: 14, padding: '18px 20px' }}>
                <span aria-hidden="true" style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 99, background: c, color: '#fff', fontWeight: 900, fontFamily: nunito, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
                <div>
                  <div style={{ fontFamily: nunito, fontWeight: 800, fontSize: 16, color: '#0A0A0A', marginBottom: 4 }}>{e.t}</div>
                  <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.6, margin: 0 }}>{e.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" style={{ padding: pad, background: '#F8FAFC', borderTop: '1px solid #E5E7EB', scrollMarginTop: 110 }}>
        <div style={wrap}>
          <h2 style={{ fontFamily: nunito, fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 10px' }}>Les tarifs</h2>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.7, margin: '0 0 26px', maxWidth: 760 }}>
            Un prix pour le groupe, pas par personne : jusqu'à douze participants, ou une seule personne en individuel, au même tarif.
          </p>
          <div style={gridOf(240)}>
            {TARIFS.map((t) => (
              <div key={t.nom} style={{ ...card, display: 'flex', flexDirection: 'column', gap: 6, borderTop: t.fort ? `3px solid ${c}` : '1px solid #E5E7EB' }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#6B7280', fontFamily: nunito }}>{t.nom}</div>
                {t.prix !== 'Forfait' && <div style={{ fontSize: 12, color: '#6B7280' }}>À partir de</div>}
                <div style={{ fontFamily: nunito, fontSize: 30, fontWeight: 900, color: '#0A0A0A', letterSpacing: '-0.02em' }}>{t.prix}</div>
                <div style={{ fontSize: 13.5, color: c, fontWeight: 700 }}>{t.unite}</div>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, margin: '6px 0 0' }}>{t.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, margin: '22px 0 0', maxWidth: 860 }}>
            Formation sur mesure : le temps de préparation s'ajoute, chiffré au devis. Prix hors taxes. Masteria est certifié Qualiopi pour les actions de formation : votre OPCO peut prendre la session en charge, selon ses critères et ses fonds, et nous fournissons programme, convention et attestations. Pas de CPF. Pour une session dans vos locaux, le devis indique les éventuels frais de déplacement.
          </p>
        </div>
      </section>

      {/* Étude de cas */}
      <section style={{ padding: pad, background: '#fff' }}>
        <div style={{ ...wrap, maxWidth: 960 }}>
          <div style={{ background: '#F3F7FF', border: '1px solid #DBEAFE', borderRadius: 20, padding: isMobile ? 26 : 44, display: isMobile ? 'block' : 'grid', gridTemplateColumns: '200px 1fr', gap: 40 }}>
            <div style={{ marginBottom: isMobile ? 18 : 0 }}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: c, marginBottom: 10, fontFamily: nunito }}>Étude de cas · Industrie</div>
              <div style={{ fontFamily: nunito, fontSize: 84, fontWeight: 900, lineHeight: 0.95, color: c, letterSpacing: '-0.04em' }}>59</div>
              <div style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.5, marginTop: 8 }}>managers formés à Copilot en 2026 dans un groupe industriel international</div>
            </div>
            <div>
              <p style={{ fontSize: 16, color: '#1F2937', lineHeight: 1.75, margin: '0 0 18px' }}>
                Une matinée en anglais pour le comité de direction, puis cinq sessions de deux jours pour les managers, de juillet à septembre, dont deux en anglais, sur treize ateliers bâtis avec les fichiers du groupe. Les sites des États-Unis et du Mexique suivent en octobre, l'Inde en décembre.
              </p>
              <Link to="/etudes-de-cas-ia#industrie" style={{ color: c, fontWeight: 700, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 6 }}>Lire l'étude de cas <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Avis Google */}
      <AvisGoogle bg="#F8FAFC" titre="Ce que nos clients en disent sur Google" />

      {/* FAQ */}
      <section id="faq" style={{ padding: pad, background: '#fff', scrollMarginTop: 110 }}>
        <div style={{ ...wrap, maxWidth: 860 }}>
          <h2 style={{ fontFamily: nunito, fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: '#0A0A0A', margin: '0 0 18px' }}>Questions fréquentes</h2>
          {FAQ.map((f) => (
            <details key={f.q} style={{ borderBottom: '1px solid #E5E7EB', padding: '4px 0' }}>
              <summary style={{ cursor: 'pointer', padding: '16px 0', fontFamily: nunito, fontWeight: 700, fontSize: 16, color: '#0A0A0A' }}>{f.q}</summary>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 18px' }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Formulaire */}
      <section id="contact" style={{ padding: pad, background: '#0A0F1E', scrollMarginTop: 110 }}>
        <div style={{ ...wrap, maxWidth: 820 }}>
          <h2 style={{ fontFamily: nunito, fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 800, color: '#F8FAFC', margin: '0 0 12px' }}>Recevoir un programme adapté</h2>
          <p style={{ fontSize: 16, color: '#94A3B8', lineHeight: 1.7, margin: '0 0 28px' }}>
            Dites-nous quel outil vous utilisez et quelle équipe vous voulez former : vous recevez un programme calé sur vos dossiers et un devis sous vingt-quatre heures ouvrées.
          </p>
          <div style={{ background: '#fff', borderRadius: 16, padding: 'clamp(24px, 4vw, 40px)', boxShadow: '0 8px 40px rgba(0,0,0,0.25)' }}>
            <ContactForm
              outils={selectedTools.map(id => HUBS.find(h => h.id === id)?.slug).filter(Boolean)}
              metiers={selectedMetiers}
              source="Page /catalogue (mail aux décideurs)"
            />
          </div>
        </div>
      </section>
    </>
  )
}

const SUR_MESURE = [
  { t: 'Le cadrage', d: "Trente minutes avec vous pour fixer le public, l'outil, les dossiers à traiter et les dates. La première demi-heure n'est pas facturée." },
  { t: 'Le programme ajusté', d: "Les ateliers reprennent vos cas : vos courriels types, vos tableaux, vos procédures. Le programme écrit sert de base à la convention et au dossier OPCO." },
  { t: 'La session', d: "Peu de diapositives, beaucoup de pratique sur les documents de l'équipe. Chacun repart avec ses demandes types et ses réglages." },
  { t: 'Le suivi', d: "Questionnaire d'acquis, fiche de satisfaction, certificat de réalisation, puis un point à trente jours sur les usages installés." },
]

const TARIFS = [
  { nom: 'Formation, 1 jour', prix: '1 980 €', unite: 'HT la journée', desc: "Pour un groupe de douze personnes au plus, ou une seule en individuel.", fort: true },
  { nom: 'Formation, 2 jours', prix: '3 960 €', unite: 'HT le parcours', desc: "Le format des programmes par outil et par métier, soit dès 330 € HT par participant dans un groupe complet.", fort: true },
  { nom: 'Sprint IA, 3 heures', prix: '1 980 €', unite: 'HT la séance', desc: "Une séance sur vos propres tâches, jusqu'à douze personnes, sur site ou à distance." },
  { nom: 'COMEX', prix: '1 980 €', unite: 'HT les 3 heures ou la demi-journée', desc: "À partir de 3 960 € HT pour une journée complète, pour le comité entier." },
  { nom: 'Conseil et développement', prix: 'Forfait', unite: 'fixé après le cadrage', desc: "Diagnostic, accompagnement, agents et outils sur mesure. Trente minutes de cadrage offertes." },
]

const FAQ = [
  { q: 'Les formations du catalogue sont-elles adaptées à notre entreprise ?', a: "Oui, toutes. Le catalogue donne la trame ; le cadrage fixe l'outil, le niveau du groupe et les dossiers sur lesquels il travaillera. Les exercices portent sur vos documents, pas sur des exemples génériques." },
  { q: 'Combien coûte une formation pour une équipe ?', a: "Comptez à partir de 1 980 € HT la journée et de 3 960 € HT les deux jours, pour un groupe de douze personnes au plus ou pour une personne seule. Dans un groupe complet de deux jours, cela fait au moins 330 € HT par participant. Si la formation est construite sur vos dossiers, la préparation s'ajoute et figure au devis." },
  { q: 'Notre OPCO peut-il financer la formation ?', a: "Souvent, selon ses critères et les fonds disponibles dans votre branche. Masteria est certifié Qualiopi pour les actions de formation et fournit le programme, la convention, les émargements et le certificat de réalisation. Le conseil et le développement ne relèvent pas de l'OPCO." },
  { q: 'Quel délai entre notre accord et la formation ?', a: "Une à deux semaines en individuel, deux à quatre semaines pour un groupe, le temps de préparer les ateliers sur vos dossiers." },
  { q: 'Faut-il des licences payantes avant de commencer ?', a: "Non. Copilot Chat ou la version gratuite de ChatGPT ou de Gemini suffisent pour une bonne partie des exercices. La formation aide aussi à décider quelles licences valent leur prix, et pour quels postes." },
  { q: 'La formation peut-elle se faire à distance ou en anglais ?', a: "Oui. Les sessions se tiennent dans vos locaux ou en visioconférence, en France, ailleurs en Europe, aux États-Unis et en Inde, en français ou en anglais." },
]
