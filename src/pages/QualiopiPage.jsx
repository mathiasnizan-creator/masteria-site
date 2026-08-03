import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Wallet, Clock, Users, Check, BadgeCheck } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const FAQ = [
  {
    q: "Qu'est-ce que la certification Qualiopi ?",
    a: "Qualiopi est la certification qualité des organismes de formation délivrée par l'État français. Elle est obligatoire pour tout organisme souhaitant accéder aux financements publics et mutualisés de la formation professionnelle (OPCO, CPF, Pôle Emploi, Région). Elle atteste que l'organisme répond à 32 indicateurs de qualité répartis autour du Référentiel National Qualité (RNQ). La certification est délivrée pour 3 ans, avec un audit de suivi à 18 mois.",
  },
  {
    q: "Masteria est-il certifié Qualiopi ?",
    a: "Oui. Masteria est certifié Qualiopi pour la catégorie « Actions de formation ». La certification a été délivrée par un organisme certificateur accrédité par le COFRAC. Son numéro de déclaration d'activité est le 84 69 23218 69 (préfet de région Auvergne-Rhône-Alpes), vérifiable sur la Liste Publique des Organismes de Formation. Elle couvre toutes nos formations IA : ChatGPT, Microsoft Copilot, Google Gemini, Claude, Mistral AI, ainsi que nos formations multi-outils et nos programmes par métier.",
  },
  {
    q: "Pourquoi la certification Qualiopi est-elle indispensable pour financer ma formation IA ?",
    a: "Sans Qualiopi, un organisme de formation ne peut pas percevoir de fonds via les OPCO, le CPF (Compte Personnel de Formation), France Travail ou les Conseils Régionaux. En choisissant Masteria, vous avez la garantie que 100 % du coût pédagogique peut être pris en charge par votre OPCO, sans avance de trésorerie pour l'entreprise.",
  },
  {
    q: "Comment fonctionne le financement OPCO d'une formation Masteria ?",
    a: "1) Vous contactez Masteria pour établir un devis et un programme sur mesure. 2) Nous vous fournissons tous les documents nécessaires (convention, programme détaillé, fiche organisme). 3) Vous déposez la demande auprès de votre OPCO (ou Masteria le fait pour vous). 4) L'OPCO accorde la prise en charge sous 5 à 15 jours. 5) La formation se déroule. 6) Masteria facture directement l'OPCO. Vous ne déboursez rien ou seulement le reste à charge éventuel.",
  },
  {
    q: "Quel OPCO finance la formation IA de mon entreprise ?",
    a: "L'OPCO dépend de votre convention collective. Les principaux : ATLAS (conseil, finance, assurance, numérique), AKTO (hôtellerie, services à la personne, propreté), OPCO 2i (industrie, métallurgie), AFDAS (médias, culture, tourisme), CONSTRUCTYS (BTP), OPCO EP (enseignement privé, associations), UNIFORMATION (économie sociale). En cas de doute, Masteria vous aide à identifier votre OPCO.",
  },
  {
    q: "Quel est le montant de la prise en charge OPCO pour une formation IA ?",
    a: "La prise en charge varie selon votre OPCO, votre convention collective et la taille de votre entreprise. Les TPE (moins de 11 salariés) bénéficient souvent d'une prise en charge à 100 % dans la limite des plafonds annuels. Pour les PME, la prise en charge est généralement de 50 à 80 %. Masteria vous aide à maximiser la prise en charge en adaptant le devis aux plafonds de votre OPCO.",
  },
  {
    q: "Puis-je utiliser la formation IA Masteria via France Travail (Pôle Emploi) ?",
    a: "La certification Qualiopi permet en théorie un financement via France Travail, mais cela dépend du statut du bénéficiaire (demandeur d'emploi) et du dispositif mobilisé (AIF, CPF de transition). Nos formations sont principalement conçues pour les salariés en activité financés par leur entreprise et son OPCO. Pour les demandeurs d'emploi, renseignez-vous directement auprès de votre conseiller France Travail.",
  },
  {
    q: "Y a-t-il des formations IA certifiantes chez Masteria ?",
    a: "Nos formations délivrent une attestation de formation certifiée Qualiopi, pas une certification professionnelle RNCP. Cela suffit pour le financement OPCO et le plan de développement des compétences. Si vous cherchez une certification inscrite au RNCP, elle nécessite un parcours plus long (bootcamp, cursus diplômant) que nous ne proposons pas.",
  },
]

export default function QualiopiPage() {
  return (
    <>
      <SEOHead
        title="Formation IA Qualiopi | Financement OPCO garanti | Masteria"
        description="Masteria est certifié Qualiopi pour toutes ses formations IA : ChatGPT, Copilot, Gemini, Claude, Mistral. Financement OPCO jusqu'à 100 %, dossier accompagné."
        slug="formation-ia-qualiopi"
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: 'Formation IA Qualiopi', slug: 'formation-ia-qualiopi' },
        ]}
        faqItems={FAQ}
      />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
        padding: 'clamp(80px, 12vw, 120px) 24px 80px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', padding: '8px 16px', borderRadius: 999,
            fontSize: 13, fontWeight: 700, color: '#16a34a', marginBottom: 24,
            border: '1px solid #BBF7D0',
          }}>
            <BadgeCheck size={16} /> Certifié Qualiopi · Financement OPCO garanti
          </div>
          <h1 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 900,
            fontSize: 'clamp(34px, 5.5vw, 54px)', lineHeight: 1.1,
            color: '#0A0A0A', marginBottom: 20,
          }}>
            Formation IA Qualiopi :<br />financement OPCO jusqu'à 100 %
          </h1>
          <p style={{
            fontSize: 'clamp(17px, 2.2vw, 20px)', color: '#4B5563',
            lineHeight: 1.6, maxWidth: 740, margin: '0 auto 36px',
          }}>
            Masteria est certifié Qualiopi pour toutes ses formations intelligence artificielle.
            Vos collaborateurs se forment à ChatGPT, Copilot, Gemini, Claude ou Mistral — votre OPCO finance.
            Masteria gère le dossier de bout en bout.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#0A0A0A', color: '#fff', padding: '16px 28px',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
            }}>
              Vérifier mon financement OPCO <ArrowRight size={18} />
            </Link>
            <Link to="/formation-intelligence-artificielle" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: '#0A0A0A', padding: '16px 28px',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              border: '1px solid #E5E7EB',
            }}>
              Voir le catalogue formations
            </Link>
          </div>
        </div>
      </section>

      {/* QUALIOPI EXPLAINER */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(26px, 3.8vw, 34px)', color: '#0A0A0A',
            marginBottom: 16, lineHeight: 1.2,
          }}>
            Pourquoi la certification Qualiopi change tout
          </h2>
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, marginBottom: 24 }}>
            Depuis le 1er janvier 2022, la certification Qualiopi est obligatoire pour tout organisme de formation
            souhaitant accéder aux financements publics. Sans elle, impossible d'obtenir une prise en charge OPCO,
            CPF ou France Travail. Masteria est certifié Qualiopi (certificat n° 725311-1, délivré par CERTIFOPAC,
            valide du 29/01/2026 au 28/01/2029) et le maintient avec rigueur : audit de suivi à 18 mois, audit de
            renouvellement à échéance du cycle de 3 ans. Notre déclaration d'activité est enregistrée sous le numéro
            84 69 23218 69 auprès du préfet de la région Auvergne-Rhône-Alpes : votre OPCO peut vérifier notre statut
            en quelques secondes sur la Liste Publique des Organismes de Formation, ou consulter{' '}
            <a href="/assets/qualiopi-certificat-masteria.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', fontWeight: 700 }}>
              notre certificat Qualiopi (PDF)
            </a>.
          </p>
          <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.7, marginBottom: 40 }}>
            Concrètement pour vous : chaque formation IA Masteria — ChatGPT, Microsoft Copilot, Google Gemini,
            Claude, Mistral AI — est finançable par votre OPCO. Le coût pédagogique peut être pris en charge
            jusqu'à 100 % selon votre convention collective et la taille de votre entreprise.
            Masteria gère l'intégralité du dossier : devis, convention, programme, attestation, facturation directe à l'OPCO.
          </p>

          {/* Étapes */}
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(24px, 3.4vw, 30px)', color: '#0A0A0A',
            marginBottom: 24, lineHeight: 1.2,
          }}>
            Comment ça se passe, étape par étape
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { num: '1', t: 'Devis et cadrage', d: "Vous nous contactez. En 24h, nous vous envoyons un devis personnalisé et un programme adapté à votre équipe et à votre secteur." },
              { num: '2', t: 'Dossier OPCO', d: "Masteria vous fournit convention de formation, programme détaillé et fiche organisme. Vous déposez ou nous déposons pour vous auprès de votre OPCO." },
              { num: '3', t: 'Accord de financement', d: "L'OPCO répond sous 5 à 15 jours ouvrés. La prise en charge peut atteindre 100 % du coût pédagogique." },
              { num: '4', t: 'Formation', d: "La session se déroule en présentiel dans vos locaux ou en distanciel. Durée : 1 à 2 jours selon le programme." },
              { num: '5', t: 'Attestation + facturation OPCO', d: "Masteria remet une attestation de formation à chaque participant et facture directement l'OPCO. Zéro avance de trésorerie pour vous." },
            ].map(({ num, t, d }) => (
              <div key={num} style={{
                display: 'flex', gap: 20, alignItems: 'flex-start',
                background: '#F9FAFB', borderRadius: 12, padding: '20px 24px',
              }}>
                <div style={{
                  flexShrink: 0, width: 40, height: 40, borderRadius: '50%',
                  background: '#0A0A0A', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: 18, fontFamily: 'Nunito, sans-serif',
                }}>
                  {num}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0A0A0A', marginBottom: 4, fontSize: 17 }}>{t}</div>
                  <div style={{ color: '#374151', lineHeight: 1.6, fontSize: 16 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPCO TABLE */}
      <section style={{ padding: '60px 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(24px, 3.4vw, 30px)', color: '#0A0A0A',
            marginBottom: 8, textAlign: 'center',
          }}>
            Quel OPCO finance votre formation IA ?
          </h2>
          <p style={{ textAlign: 'center', color: '#6B7280', marginBottom: 32, fontSize: 16 }}>
            L'OPCO dépend de votre convention collective. Les principaux en France :
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { opco: 'ATLAS', secteurs: 'Conseil, finance, assurance, numérique, banque' },
              { opco: 'AKTO', secteurs: 'Hôtellerie, propreté, services à la personne, sécurité' },
              { opco: 'OPCO 2i', secteurs: 'Industrie, métallurgie, chimie, aéronautique' },
              { opco: 'AFDAS', secteurs: 'Médias, culture, sport, tourisme, publicité' },
              { opco: 'CONSTRUCTYS', secteurs: 'BTP, immobilier, bois' },
              { opco: 'OPCO EP', secteurs: 'Enseignement privé, associations, mutuelles' },
              { opco: 'UNIFORMATION', secteurs: 'Économie sociale et solidaire, ESS' },
              { opco: 'OCAPIAT', secteurs: 'Agriculture, coopératives, pêche, forêt' },
            ].map(({ opco, secteurs }) => (
              <div key={opco} style={{
                background: '#fff', borderRadius: 10, padding: '16px 20px',
                border: '1px solid #E5E7EB',
              }}>
                <div style={{ fontWeight: 800, color: '#0A0A0A', marginBottom: 4, fontSize: 16 }}>{opco}</div>
                <div style={{ color: '#6B7280', fontSize: 14, lineHeight: 1.5 }}>{secteurs}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 36px)', color: '#0A0A0A',
            marginBottom: 32, textAlign: 'center',
          }}>
            Questions sur Qualiopi et le financement
          </h2>
          {FAQ.map((item, i) => (
            <details key={i} style={{ borderBottom: '1px solid #E5E7EB', padding: '20px 0' }}>
              <summary style={{
                cursor: 'pointer', fontWeight: 700, fontSize: 17,
                color: '#0A0A0A', listStyle: 'none', display: 'flex',
                justifyContent: 'space-between', alignItems: 'center', gap: 12,
              }}>
                <span>{item.q}</span>
                <span style={{ flexShrink: 0, color: '#16a34a' }}>+</span>
              </summary>
              <p style={{ marginTop: 12, color: '#374151', lineHeight: 1.7, fontSize: 16 }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: '#0A0A0A', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 38px)', marginBottom: 16,
          }}>
            Prêt à former vos équipes à l'IA sans débourser ?
          </h2>
          <p style={{ fontSize: 17, color: '#D1D5DB', marginBottom: 32, lineHeight: 1.6 }}>
            Masteria s'occupe du dossier OPCO. Vous choisissez vos dates.
            Devis personnalisé sous 24h.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#fff', color: '#0A0A0A', padding: '16px 32px',
            borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
          }}>
            Vérifier mon financement <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
