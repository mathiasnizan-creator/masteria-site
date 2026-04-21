import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { MasteriaHeader, MasteriaFooter } from '../components/components'
import { useIsMobile } from '../hooks/useMediaQuery'

/* ─────────────────────────────────────────────
 * Styles partagés
 * ───────────────────────────────────────────── */
const styles = (isMobile) => ({
  page: {
    background: '#fff',
    paddingTop: isMobile ? 80 : 120,
    paddingBottom: isMobile ? 64 : 96,
    paddingLeft: isMobile ? 20 : 40,
    paddingRight: isMobile ? 20 : 40,
  },
  container: { maxWidth: 820, margin: '0 auto' },
  breadcrumb: {
    fontSize: 13, color: '#6B7280', marginBottom: 20,
    fontFamily: 'DM Sans, sans-serif',
  },
  h1: {
    fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900,
    fontFamily: 'Nunito, sans-serif', color: '#0A0A0A',
    letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 16,
  },
  lastUpdate: {
    color: '#6B7280', fontSize: 14, marginBottom: 40,
    fontStyle: 'italic',
  },
  h2: {
    fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 800,
    fontFamily: 'Nunito, sans-serif', color: '#0A0A0A',
    marginTop: 40, marginBottom: 14, letterSpacing: '-0.01em',
  },
  h3: {
    fontSize: 17, fontWeight: 800, fontFamily: 'Nunito, sans-serif',
    color: '#0A0A0A', marginTop: 24, marginBottom: 10,
  },
  p: {
    fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 14,
  },
  card: {
    background: '#F9FAFB', border: '1px solid #E5E7EB',
    borderRadius: 10, padding: 20, marginBottom: 20,
  },
  keyVal: {
    display: 'grid', gridTemplateColumns: '180px 1fr', gap: '8px 16px',
    fontSize: 14, lineHeight: 1.7,
  },
  label: { color: '#6B7280', fontWeight: 600 },
  val: { color: '#0A0A0A' },
  ul: {
    paddingLeft: 20, marginBottom: 14, color: '#374151',
    fontSize: 15, lineHeight: 1.85,
  },
  a: { color: '#2563EB', textDecoration: 'underline' },
})

/* ═══════════════════════════════════════════════════════════
 * MENTIONS LÉGALES
 * ═══════════════════════════════════════════════════════════ */

export function MentionsLegalesPage() {
  const isMobile = useIsMobile()
  const s = styles(isMobile)

  return (
    <>
      <SEOHead
        title="Mentions légales | Masteria"
        description="Mentions légales du site master-ia.fr, éditeur Co-création Digitale, SIRET 91925240300010, centre de formation IA certifié Qualiopi."
        slug="mentions-legales"
        noindex={false}
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: 'Mentions légales', slug: 'mentions-legales' },
        ]}
      />
      <MasteriaHeader />

      <main style={s.page}>
        <div style={s.container}>
          <nav style={s.breadcrumb} aria-label="Fil d'Ariane">
            <Link to="/" style={{ color: '#6B7280', textDecoration: 'none' }}>Accueil</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span>Mentions légales</span>
          </nav>

          <h1 style={s.h1}>Mentions légales</h1>
          <p style={s.lastUpdate}>Dernière mise à jour : avril 2026</p>

          <p style={s.p}>
            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site <strong>master-ia.fr</strong> les informations suivantes.
          </p>

          <h2 style={s.h2}>1. Éditeur du site</h2>
          <div style={s.card}>
            <div style={{ ...s.keyVal, gridTemplateColumns: isMobile ? '1fr' : '180px 1fr' }}>
              <span style={s.label}>Raison sociale</span>
              <span style={s.val}>Co-création Digitale</span>
              <span style={s.label}>Statut juridique</span>
              <span style={s.val}>Entrepreneur individuel</span>
              <span style={s.label}>SIRET</span>
              <span style={s.val}>919 252 403 00010</span>
              <span style={s.label}>TVA intracommunautaire</span>
              <span style={s.val}>FR79 919 252 403</span>
              <span style={s.label}>Siège social</span>
              <span style={s.val}>11 Rue Barodet, 69004 Lyon, France</span>
              <span style={s.label}>Directeur de publication</span>
              <span style={s.val}>Mathias Nizan</span>
              <span style={s.label}>Email</span>
              <span style={s.val}><a href="mailto:mathias.nizan@master-ia.fr" style={s.a}>mathias.nizan@master-ia.fr</a></span>
              <span style={s.label}>Téléphone</span>
              <span style={s.val}><a href="tel:+33667754128" style={s.a}>06 67 75 41 28</a></span>
            </div>
          </div>

          <h2 style={s.h2}>2. Activité et certification</h2>
          <p style={s.p}>
            Masteria est un organisme de formation professionnelle spécialisé dans l'intelligence artificielle générative, ainsi qu'un cabinet de conseil accompagnant les entreprises dans leur transformation par l'IA. Les formations dispensées sous la marque Masteria sont certifiées <strong>Qualiopi</strong> au titre de la catégorie « actions de formation ».
          </p>
          <p style={s.p}>
            Les sessions de formation se déroulent dans nos locaux situés au <strong>17 Rue Richan, 69004 Lyon</strong>, en distanciel par visioconférence, ou dans les locaux de nos clients (France, Suisse, Belgique) pour les formats intra-entreprises.
          </p>

          <h2 style={s.h2}>3. Hébergement du site</h2>
          <div style={s.card}>
            <div style={{ ...s.keyVal, gridTemplateColumns: isMobile ? '1fr' : '180px 1fr' }}>
              <span style={s.label}>Hébergeur</span>
              <span style={s.val}>Vercel Inc.</span>
              <span style={s.label}>Adresse</span>
              <span style={s.val}>440 N Barranca Ave #4133, Covina, CA 91723, USA</span>
              <span style={s.label}>Site web</span>
              <span style={s.val}><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={s.a}>vercel.com</a></span>
            </div>
          </div>

          <h2 style={s.h2}>4. Propriété intellectuelle</h2>
          <p style={s.p}>
            L'ensemble des éléments présents sur ce site (textes, graphismes, logos, vidéos, icônes, images, photographies, structure générale, interface, code source) sont la propriété exclusive de Co-création Digitale, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
          </p>
          <p style={s.p}>
            Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de Co-création Digitale, sous peine de constituer une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété intellectuelle.
          </p>

          <h2 style={s.h2}>5. Responsabilité</h2>
          <p style={s.p}>
            Les informations diffusées sur ce site sont présentées à titre indicatif et n'ont pas un caractère exhaustif. Co-création Digitale s'efforce d'assurer l'exactitude et la mise à jour des informations, mais ne peut être tenue responsable des erreurs, omissions ou résultats obtenus par un mauvais usage de ces informations.
          </p>
          <p style={s.p}>
            Le site peut contenir des liens vers d'autres sites internet. Co-création Digitale n'exerce aucun contrôle sur ces sites tiers et décline toute responsabilité quant à leur contenu ou à leur fonctionnement.
          </p>

          <h2 style={s.h2}>6. Données personnelles</h2>
          <p style={s.p}>
            Le traitement des données à caractère personnel collectées via ce site est décrit dans notre <Link to="/politique-de-confidentialite" style={s.a}>politique de confidentialité</Link>. Conformément au Règlement Général sur la Protection des Données (RGPD) et à la Loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité et d'opposition sur vos données personnelles.
          </p>
          <p style={s.p}>
            Pour exercer ces droits, adressez votre demande par email à <a href="mailto:mathias.nizan@master-ia.fr" style={s.a}>mathias.nizan@master-ia.fr</a> en précisant l'objet de votre demande.
          </p>

          <h2 style={s.h2}>7. Cookies</h2>
          <p style={s.p}>
            Ce site utilise des cookies strictement nécessaires à son bon fonctionnement, ainsi que des cookies de mesure d'audience anonymisée. Aucun cookie publicitaire ni de ciblage comportemental n'est déposé sans votre consentement explicite. Les modalités détaillées sont précisées dans notre politique de confidentialité.
          </p>

          <h2 style={s.h2}>8. Droit applicable et juridiction compétente</h2>
          <p style={s.p}>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
          </p>

          <h2 style={s.h2}>9. Contact</h2>
          <p style={s.p}>
            Pour toute question relative aux présentes mentions légales ou au site, vous pouvez nous contacter par email à <a href="mailto:mathias.nizan@master-ia.fr" style={s.a}>mathias.nizan@master-ia.fr</a> ou par téléphone au <a href="tel:+33667754128" style={s.a}>06 67 75 41 28</a>.
          </p>
        </div>
      </main>

      <MasteriaFooter />
    </>
  )
}

/* ═══════════════════════════════════════════════════════════
 * POLITIQUE DE CONFIDENTIALITÉ
 * ═══════════════════════════════════════════════════════════ */

export function PolitiqueConfidentialitePage() {
  const isMobile = useIsMobile()
  const s = styles(isMobile)

  return (
    <>
      <SEOHead
        title="Politique de confidentialité | Masteria"
        description="Politique de confidentialité de Masteria, conforme au RGPD. Finalités, durées de conservation, destinataires, droits des utilisateurs sur leurs données personnelles."
        slug="politique-de-confidentialite"
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: 'Politique de confidentialité', slug: 'politique-de-confidentialite' },
        ]}
      />
      <MasteriaHeader />

      <main style={s.page}>
        <div style={s.container}>
          <nav style={s.breadcrumb} aria-label="Fil d'Ariane">
            <Link to="/" style={{ color: '#6B7280', textDecoration: 'none' }}>Accueil</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span>Politique de confidentialité</span>
          </nav>

          <h1 style={s.h1}>Politique de confidentialité</h1>
          <p style={s.lastUpdate}>Dernière mise à jour : avril 2026</p>

          <p style={s.p}>
            Masteria accorde une importance essentielle à la protection des données personnelles de ses visiteurs, prospects, clients et apprenants. La présente politique de confidentialité décrit la manière dont nous collectons, utilisons et protégeons les données à caractère personnel, en conformité avec le <strong>Règlement Général sur la Protection des Données (RGPD)</strong> et la <strong>Loi Informatique et Libertés</strong> modifiée.
          </p>

          <h2 style={s.h2}>1. Responsable du traitement</h2>
          <div style={s.card}>
            <div style={{ ...s.keyVal, gridTemplateColumns: isMobile ? '1fr' : '180px 1fr' }}>
              <span style={s.label}>Responsable</span>
              <span style={s.val}>Co-création Digitale (Masteria)</span>
              <span style={s.label}>SIRET</span>
              <span style={s.val}>919 252 403 00010</span>
              <span style={s.label}>Adresse</span>
              <span style={s.val}>11 Rue Barodet, 69004 Lyon, France</span>
              <span style={s.label}>Contact RGPD</span>
              <span style={s.val}><a href="mailto:mathias.nizan@master-ia.fr" style={s.a}>mathias.nizan@master-ia.fr</a></span>
            </div>
          </div>

          <h2 style={s.h2}>2. Données collectées</h2>
          <p style={s.p}>Nous collectons uniquement les données strictement nécessaires aux finalités décrites ci-dessous :</p>
          <ul style={s.ul}>
            <li><strong>Données d'identité</strong> : nom, prénom, civilité.</li>
            <li><strong>Données de contact</strong> : adresse email professionnelle, numéro de téléphone.</li>
            <li><strong>Données professionnelles</strong> : entreprise, fonction, secteur d'activité, effectif.</li>
            <li><strong>Données de navigation</strong> : adresse IP, type de navigateur, pages consultées, durée de visite, via notre outil de mesure d'audience.</li>
            <li><strong>Données relatives à la formation</strong> : émargement, évaluation à chaud, attestation de présence, pour les apprenants inscrits à une session.</li>
          </ul>
          <p style={s.p}>Aucune donnée sensible au sens de l'article 9 du RGPD (origine, opinions, santé, etc.) n'est collectée.</p>

          <h2 style={s.h2}>3. Finalités et bases légales</h2>
          <div style={s.card}>
            <ul style={{ ...s.ul, marginBottom: 0 }}>
              <li><strong>Répondre aux demandes de contact et devis</strong> — base légale : intérêt légitime et mesures précontractuelles.</li>
              <li><strong>Gérer la relation client et le suivi commercial</strong> — base légale : exécution du contrat.</li>
              <li><strong>Organiser et dispenser les formations</strong> (inscription, convention, émargement, attestation) — base légale : exécution du contrat et obligation légale (Qualiopi).</li>
              <li><strong>Envoyer des informations sur nos formations</strong> — base légale : consentement (pour les prospects) ou intérêt légitime (pour les clients existants).</li>
              <li><strong>Améliorer notre site et nos services</strong> par la mesure d'audience anonymisée — base légale : intérêt légitime.</li>
              <li><strong>Respecter nos obligations comptables et fiscales</strong> — base légale : obligation légale.</li>
            </ul>
          </div>

          <h2 style={s.h2}>4. Durées de conservation</h2>
          <ul style={s.ul}>
            <li><strong>Prospects</strong> (contact sans signature) : 3 ans à compter du dernier échange.</li>
            <li><strong>Clients actifs</strong> : durée de la relation commerciale, puis 3 ans à compter de la dernière interaction.</li>
            <li><strong>Documents de formation</strong> (convention, émargement, attestation) : 10 ans, conformément aux obligations Qualiopi et comptables.</li>
            <li><strong>Documents comptables et factures</strong> : 10 ans, conformément à l'article L.123-22 du Code de commerce.</li>
            <li><strong>Cookies</strong> : durée maximale de 13 mois.</li>
          </ul>

          <h2 style={s.h2}>5. Destinataires des données</h2>
          <p style={s.p}>Vos données sont exclusivement destinées à :</p>
          <ul style={s.ul}>
            <li>Les équipes internes de Masteria, dûment habilitées.</li>
            <li>Nos sous-traitants techniques (hébergement du site, outil d'envoi d'emails, outil de facturation), liés par une convention conforme à l'article 28 du RGPD.</li>
            <li>Les OPCO, dans le cadre d'une demande de prise en charge financière à votre demande expresse.</li>
            <li>Les autorités administratives ou judiciaires lorsque la loi l'exige.</li>
          </ul>
          <p style={s.p}>
            <strong>Vos données ne sont jamais vendues, louées ou cédées à des tiers à des fins commerciales.</strong>
          </p>

          <h2 style={s.h2}>6. Transferts hors Union européenne</h2>
          <p style={s.p}>
            Certains de nos sous-traitants techniques (hébergeur, service d'envoi d'emails) peuvent être situés en dehors de l'Union européenne, notamment aux États-Unis. Ces transferts sont encadrés par les <strong>clauses contractuelles types</strong> adoptées par la Commission européenne, qui garantissent un niveau de protection adéquat conformément au RGPD.
          </p>

          <h2 style={s.h2}>7. Vos droits</h2>
          <p style={s.p}>
            Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants sur vos données personnelles :
          </p>
          <ul style={s.ul}>
            <li><strong>Droit d'accès</strong> : obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie.</li>
            <li><strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes.</li>
            <li><strong>Droit à l'effacement</strong> (« droit à l'oubli ») : demander la suppression de vos données, dans les limites prévues par la loi.</li>
            <li><strong>Droit à la limitation du traitement</strong> : suspendre temporairement l'utilisation de vos données.</li>
            <li><strong>Droit d'opposition</strong> : refuser que vos données soient utilisées à des fins de prospection.</li>
            <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format structuré et lisible par machine.</li>
            <li><strong>Droit de définir des directives post-mortem</strong> relatives à la conservation, à l'effacement et à la communication de vos données après votre décès.</li>
          </ul>
          <p style={s.p}>
            Pour exercer ces droits, adressez votre demande par email à <a href="mailto:mathias.nizan@master-ia.fr" style={s.a}>mathias.nizan@master-ia.fr</a>, accompagnée d'une copie d'une pièce d'identité si nécessaire pour justifier de votre identité. Nous répondons dans un délai maximal d'un mois.
          </p>
          <p style={s.p}>
            Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) :
          </p>
          <ul style={s.ul}>
            <li>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={s.a}>www.cnil.fr</a></li>
            <li>Adresse : 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</li>
            <li>Téléphone : 01 53 73 22 22</li>
          </ul>

          <h2 style={s.h2}>8. Cookies et traceurs</h2>
          <p style={s.p}>
            Le site master-ia.fr utilise des cookies et traceurs dans le respect de vos choix. À votre première visite, un bandeau vous permet d'accepter ou refuser les cookies non essentiels.
          </p>

          <h3 style={s.h3}>Cookies strictement nécessaires</h3>
          <p style={s.p}>
            Ces cookies sont indispensables au fonctionnement du site (préférences de langue, gestion des sessions, sécurité). Ils ne nécessitent pas de consentement.
          </p>

          <h3 style={s.h3}>Cookies de mesure d'audience</h3>
          <p style={s.p}>
            Nous utilisons un outil de mesure d'audience anonymisée pour comprendre l'usage du site et l'améliorer. Aucune donnée personnelle identifiante n'est transmise. Ces cookies sont déposés uniquement avec votre consentement.
          </p>

          <h3 style={s.h3}>Gestion de vos préférences</h3>
          <p style={s.p}>
            Vous pouvez à tout moment modifier vos choix via le bandeau cookies ou les paramètres de votre navigateur. La plupart des navigateurs permettent de configurer le dépôt de cookies (Chrome, Firefox, Safari, Edge).
          </p>

          <h2 style={s.h2}>9. Sécurité des données</h2>
          <p style={s.p}>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour garantir la sécurité et la confidentialité de vos données : chiffrement HTTPS, sauvegardes régulières, accès restreint à nos équipes habilitées, sensibilisation au RGPD.
          </p>

          <h2 style={s.h2}>10. Modifications de la politique</h2>
          <p style={s.p}>
            La présente politique de confidentialité peut être modifiée pour refléter des évolutions légales, techniques ou organisationnelles. La date de dernière mise à jour figure en haut du document. Nous vous invitons à la consulter régulièrement.
          </p>

          <h2 style={s.h2}>11. Contact</h2>
          <p style={s.p}>
            Pour toute question relative à la présente politique ou au traitement de vos données personnelles, contactez-nous à <a href="mailto:mathias.nizan@master-ia.fr" style={s.a}>mathias.nizan@master-ia.fr</a>.
          </p>
        </div>
      </main>

      <MasteriaFooter />
    </>
  )
}
