import { useParams, Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Clock, Users, Sparkles, Wallet } from 'lucide-react'
import SEOHead from '../components/SEOHead'

// Pages éditoriales transversales pour positionnement SEO sur des requêtes informationnelles
// à fort volume identifiées via Search Console / nexa.
// Chaque entrée = 1 page autonome avec sa propre config (title, H1, contenu, FAQ).
// Texte propre à chaque page (réécrit le 07/10/2026) : bandeau de réassurance, titre de FAQ,
// libellé du second bouton et CTA final sont propres au sujet, pour qu'aucune phrase ne soit
// partagée avec les autres pages du site.

const MODIFIED = '2026-10-07'

const TOPICS = {
  'formation-intelligence-artificielle-cpf': {
    badge: "CPF et financement d'une formation IA",
    h1: "Formation intelligence artificielle CPF : nos réponses",
    metaTitle: "Formation intelligence artificielle CPF | Masteria",
    metaDescription: "Formation IA et CPF : pourquoi nos formations courtes ne sont pas éligibles au CPF, et comment les financer par l'OPCO ou le plan de formation.",
    intro: "Vous cherchez une formation en intelligence artificielle payée par votre compte personnel de formation ? Le CPF ne finance que des parcours qui mènent à une certification enregistrée, ce qui écarte la plupart des formations courtes à l'usage de ChatGPT, de Copilot ou de Claude. Voici ce qu'il permet, ce qu'il ne permet pas, et les autres voies de financement pour un salarié comme pour une entreprise.",
    catalogueLabel: "Parcourir nos programmes",
    sections: [
      {
        h2: "Ce que le CPF finance en matière d'IA",
        body: "Le compte personnel de formation ne paie que des formations qui préparent une certification inscrite au RNCP (le Répertoire national des certifications professionnelles) ou au Répertoire spécifique, deux registres tenus par France Compétences. Les formations courtes à l'usage des assistants d'IA mènent rarement à une telle certification. Quand une offre annonce un financement par le CPF pour quelques jours de prise en main, vérifiez l'intitulé de la certification visée et son numéro d'enregistrement sur le site de France Compétences : il s'agit souvent d'un cursus long de data science ou de développement.",
      },
      {
        h2: "Pourquoi nos formations ne passent pas par le CPF",
        body: "Masteria forme en une ou deux journées, en intra pour une équipe d'au plus douze personnes ou en individuel, sur les dossiers et les outils de l'entreprise. Ce format sur mesure ne prépare aucune certification enregistrée : il vise l'usage dès le lendemain de la session. Nos clients, entreprises et organismes publics, financent la formation de leurs équipes par leur OPCO ou par leur budget de formation, et attendent un programme construit sur leurs cas plutôt qu'un référentiel national.",
      },
      {
        h2: "Les autres voies : OPCO, plan de développement des compétences, budget de l'entreprise",
        body: "Trois voies financent une formation Masteria sans toucher à votre compte. L'OPCO de votre branche (par exemple Atlas pour le conseil, le numérique et les services financiers, OPCO 2i pour l'industrie, Afdas pour la culture et les médias) peut la prendre en charge selon ses règles et ses fonds, qui varient avec la taille de l'entreprise. Le plan de développement des compétences, tenu par votre service RH, peut l'inscrire au budget de l'année. L'entreprise peut enfin la régler directement. La certification Qualiopi de Masteria, obtenue au titre des actions de formation, ouvre l'accès à ces fonds mutualisés ; nous préparons avec vous le devis, le programme et la convention que réclame l'OPCO.",
      },
    ],
    reassurance: [
      { t: 'Qualiopi', s: 'Au titre des actions de formation' },
      { t: 'OPCO de branche', s: 'Selon ses règles et ses fonds' },
      { t: 'Une ou deux journées', s: '1 980 € HT la journée' },
      { t: 'Douze personnes au plus', s: 'En intra, ou en individuel' },
    ],
    faqTitre: "Vos questions sur le CPF et la formation IA",
    faq: [
      { q: "Mon CPF peut-il payer une formation Masteria ?", a: "Non. Nos formations d'une ou deux journées ne mènent pas à une certification enregistrée au RNCP ou au Répertoire spécifique, condition pour mobiliser le CPF. Elles se financent par l'OPCO de votre branche, par le plan de développement des compétences ou par le budget de l'entreprise." },
      { q: "Quelles formations en IA le CPF finance-t-il ?", a: "Surtout des parcours longs, de plusieurs mois, en data science, en apprentissage automatique ou en développement, qui préparent un titre enregistré. Ils s'adressent plutôt aux personnes en reconversion qu'aux salariés qui veulent se servir d'un assistant d'IA dans leur poste. Avant de vous inscrire, consultez la fiche de la certification sur le site de France Compétences." },
      { q: "Mon employeur doit-il payer ma formation en IA ?", a: "Quand la formation est demandée par l'employeur, elle entre dans le plan de développement des compétences et l'entreprise la finance, avec l'aide éventuelle de son OPCO. Quand l'idée vient de vous, présentez-la à votre responsable ou au service RH en précisant les tâches qu'elle doit faciliter : une demande reliée à votre poste a plus de chances d'aboutir." },
      { q: "Combien coûte une formation IA chez Masteria ?", a: "1 980 € HT la journée, en intra pour une équipe de douze participants au plus comme en accompagnement individuel, et 3 960 € HT pour deux jours. Une journée suffit pour prendre en main un outil ; deux jours permettent d'aller plus loin ou de comparer plusieurs outils." },
      { q: "L'OPCO prend-il en charge toute la formation ?", a: "Cela dépend de votre OPCO : chaque branche fixe ses règles, ses plafonds et ses fonds disponibles, en fonction de la convention collective et de la taille de l'entreprise. Nous regardons avec vous les conditions de votre branche avant de déposer la demande." },
      { q: "À quel moment solliciter l'OPCO ?", a: "Avant le premier jour de formation : l'OPCO examine le dossier en amont. Le délai de réponse varie d'un OPCO à l'autre ; nous vous transmettons le devis, le programme détaillé et la convention dès que le projet est validé, pour que la demande parte au plus tôt." },
    ],
    cta: {
      titre: "Financer votre formation IA sans le CPF",
      texte: "Dites-nous combien de personnes vous voulez former et à quel outil. Vous recevez sous 24 heures un devis et un programme prêts à joindre à votre demande auprès de l'OPCO.",
    },
  },

  'formation-intelligence-artificielle-distanciel': {
    badge: 'Formation à distance, en classe virtuelle',
    h1: "Formation intelligence artificielle à distance",
    metaTitle: "Formation IA à distance | Visio · Qualiopi | Masteria",
    metaDescription: "Formation IA à distance en classe virtuelle, formateur en direct, exercices sur vos dossiers. Certifié Qualiopi, finançable par votre OPCO. Devis sous 24h.",
    intro: "Vos équipes sont réparties entre plusieurs sites, ou travaillent souvent de chez elles ? La formation à distance de Masteria se déroule en classe virtuelle, animée en direct par un formateur, et chaque participant travaille sur ses propres dossiers dans l'outil d'IA qu'il utilise déjà.",
    catalogueLabel: "Voir les programmes disponibles",
    sections: [
      {
        h2: "Comment se déroule une formation IA à distance",
        body: "La session a lieu en classe virtuelle synchrone, sur Teams, Zoom ou Google Meet selon l'outil de votre entreprise, et un formateur Masteria l'anime en direct. Le programme suit celui de la salle : sept heures par journée, des apports courts suivis d'exercices sur les cas de chaque participant. Chacun travaille dans son propre outil d'IA (ChatGPT, Microsoft Copilot, Gemini, Claude ou Vibe de Mistral) et partage son écran quand le groupe a besoin de voir un résultat.",
      },
      {
        h2: "À distance ou en salle : comment choisir",
        body: "La classe virtuelle convient aux équipes dispersées, aux salariés en télétravail et aux petits groupes, jusqu'à six personnes environ. Pour un groupe de huit à douze participants, ou quand la formation doit aussi souder une équipe autour d'un projet, la salle reste préférable. Le prix de la journée est le même dans les deux formats. Une formule mixte fonctionne bien : une première journée en salle pour lancer le projet, une seconde à distance pour approfondir sur les dossiers de chacun.",
      },
      {
        h2: "Ce qu'il faut prévoir : matériel, comptes, connexion",
        body: "Rien à installer : la session passe par votre outil de visioconférence habituel. Chaque participant a besoin d'un ordinateur, d'une connexion stable, d'un casque et d'un compte sur l'outil d'IA étudié. Nous vérifions avec vous, avant la session, les comptes et les droits de chacun, pour que personne ne passe la première heure à se connecter. Le lien de la classe virtuelle part 48 heures avant le début.",
      },
    ],
    reassurance: [
      { t: 'Formateur en direct', s: 'Aucune vidéo enregistrée' },
      { t: 'Sept heures par journée', s: 'Le programme de la salle' },
      { t: 'Teams, Zoom ou Meet', s: 'Votre outil habituel' },
      { t: 'Qualiopi et OPCO', s: 'Financement selon votre branche' },
    ],
    faqTitre: "Questions sur la formation IA à distance",
    faq: [
      { q: "Une formation IA à distance vaut-elle une formation en salle ?", a: "Oui, si le formateur est présent en direct et si chacun travaille sur ses propres cas. En classe virtuelle, les questions se posent au moment où elles viennent, les écrans se partagent et le formateur commente les prompts de chaque participant." },
      { q: "Combien de participants accepte une classe virtuelle ?", a: "Douze au plus, pour que le formateur puisse suivre ce que chacun produit. Au-delà, nous organisons plusieurs sessions à la suite." },
      { q: "Le distanciel coûte-t-il moins cher ?", a: "La journée coûte le même prix, 1 980 € HT en intra jusqu'à douze participants comme en accompagnement individuel. La différence tient aux frais de déplacement du formateur, qui disparaissent de la proposition." },
      { q: "Une formation à distance est-elle finançable par l'OPCO ?", a: "Oui, comme en salle. Masteria est certifié Qualiopi au titre des actions de formation, qu'elles se déroulent sur place ou à distance, et l'OPCO de votre branche peut financer la session selon ses règles et ses fonds." },
      { q: "Peut-on suivre la formation à son rythme, en vidéo ?", a: "Nous ne proposons que des sessions en direct. Les exercices sur vos dossiers et les corrections du formateur demandent un échange en temps réel, qu'une vidéo enregistrée ne remplace pas." },
      { q: "Quel outil de visioconférence utilisez-vous ?", a: "Celui de votre entreprise : Microsoft Teams, Zoom, Google Meet ou Webex. Le formateur s'y adapte, et le lien vous parvient deux jours avant la session." },
    ],
    cta: {
      titre: "Former une équipe dispersée à l'IA",
      texte: "Indiquez-nous le nombre de participants, leurs sites et l'outil d'IA qu'ils utilisent. Vous recevez sous 24 heures un programme pensé pour la classe virtuelle, avec son devis.",
    },
  },

  'formation-intelligence-artificielle-generative': {
    badge: 'IA générative en entreprise',
    h1: "Formation intelligence artificielle générative",
    metaTitle: "Formation IA générative en entreprise | Masteria",
    metaDescription: "Formation IA générative pour vos équipes : ChatGPT, Claude, Copilot, Gemini et Vibe de Mistral sur vos cas de travail. Certifié Qualiopi. Devis sous 24h.",
    intro: "ChatGPT, Claude, Gemini, Microsoft Copilot, Vibe de Mistral : ces outils d'IA générative rédigent, résument et analysent dans tous les métiers de bureau. Notre formation apprend à vos équipes à s'en servir sur leurs propres dossiers, avec les bons réflexes de vérification et de confidentialité.",
    catalogueLabel: "Découvrir les programmes par outil",
    sections: [
      {
        h2: "Ce que fait l'IA générative",
        body: "L'IA générative désigne des modèles capables de produire un contenu nouveau (un texte, une image, du code, une voix) à partir d'une consigne écrite en langage courant. En entreprise, les outils les plus répandus sont ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Microsoft Copilot et Vibe, l'assistant de Mistral. Ils servent à rédiger un mail ou une note, à résumer un long document, à analyser un tableau, à préparer une présentation, à traduire ou à écrire du code.",
      },
      {
        h2: "Quel outil d'IA générative choisir pour son entreprise",
        body: "Trois questions orientent le choix. La première porte sur votre environnement : Microsoft Copilot s'intègre à Microsoft 365, Gemini à Google Workspace. La deuxième porte sur les usages, car lire de longs documents, rédiger, analyser des données ou écrire du code n'appellent pas tous le même outil. La troisième porte sur vos données : les offres professionnelles (ChatGPT Business et Enterprise, Claude Team et Enterprise, Microsoft Copilot avec un compte professionnel, Gemini dans Workspace) n'entraînent pas leurs modèles sur vos échanges par défaut. Vibe héberge ses données dans l'Union européenne, mais sur l'offre Team l'entraînement reste actif tant qu'un administrateur ne l'a pas coupé.",
      },
      {
        h2: "Comment former ses équipes à l'IA générative",
        body: "Une formation utile se déroule en trois temps. D'abord comprendre comment fonctionne un modèle, pourquoi il peut inventer une réponse et comment la vérifier. Ensuite apprendre à écrire une consigne : le contexte, la tâche, le format attendu, puis les allers-retours qui améliorent le résultat. Enfin travailler sur les dossiers du métier, car un juriste et un commercial n'ont pas les mêmes cas. Chez Masteria, le programme part de votre secteur et de vos outils, et l'équipe repart avec ses propres prompts, testés pendant la session.",
      },
    ],
    reassurance: [
      { t: 'Cinq outils', s: 'ChatGPT, Claude, Copilot, Gemini, Vibe' },
      { t: 'Vos dossiers', s: 'Exercices sur vos cas de travail' },
      { t: 'Certifié Qualiopi', s: 'Finançable par votre OPCO' },
      { t: 'Intra ou individuel', s: "Jusqu'à douze participants" },
    ],
    faqTitre: "Questions sur la formation à l'IA générative",
    faq: [
      { q: "Quelle différence entre l'IA et l'IA générative ?", a: "L'IA générative est une branche de l'intelligence artificielle : elle produit un contenu nouveau (texte, image, code) au lieu de classer ou de prédire. Elle s'est diffusée auprès du grand public avec ChatGPT, fin 2022, et touche aujourd'hui l'ensemble des métiers de bureau." },
      { q: "Faut-il des connaissances techniques pour suivre la formation ?", a: "Non. Les outils d'IA générative se pilotent en langage courant. La formation s'adresse à tous les profils, du marketing aux RH, de la finance au juridique et à la direction, sans prérequis technique." },
      { q: "Peut-on se fier à l'IA générative dans son travail ?", a: "Oui, à condition d'en connaître les limites : une réponse inventée qui a l'air juste, des biais, des connaissances arrêtées à une date. Une partie de la formation apprend à vérifier une production avant de la diffuser, en exigeant des sources et en relisant les chiffres." },
      { q: "Comment protéger les données de l'entreprise ?", a: "Par trois mesures. Utilisez une offre professionnelle, qui n'entraîne pas les modèles sur vos échanges par défaut. Choisissez l'hébergement en fonction de vos données, dans l'Union européenne quand c'est nécessaire. Formez les équipes à ne jamais coller les données personnelles d'un client dans un outil grand public." },
      { q: "Combien de temps faut-il pour former une équipe ?", a: "Une journée suffit pour une prise en main solide d'un outil, sur cinq cas de travail environ. Deux jours permettent de comparer plusieurs outils et d'approfondir l'écriture des consignes. La journée coûte 1 980 € HT, les deux jours 3 960 € HT." },
      { q: "Quels métiers profitent le plus de l'IA générative ?", a: "Tous les métiers de bureau en profitent, et les effets se voient vite en marketing, en communication, en RH, au juridique, dans la vente et en finance. Le temps gagné dépend des tâches choisies ; nous le relevons avec vous avant et après la formation." },
    ],
    cta: {
      titre: "Former vos équipes à l'IA générative",
      texte: "Dites-nous quels métiers vous voulez former et quels outils ils utilisent. Vous recevez sous 24 heures un programme construit sur leurs cas, accompagné de son devis.",
    },
  },
}

// Pictogrammes du bandeau de réassurance, dans l'ordre des quatre libellés de chaque sujet
const REASSURANCE_ICONS = [ShieldCheck, Wallet, Clock, Users]

export default function TopicLandingPage() {
  const { '*': rest } = useParams()
  // Le slug arrive directement via la route : on l'extrait depuis location
  const slug = typeof window !== 'undefined'
    ? window.location.pathname.replace(/^\/|\/$/g, '')
    : (rest || '')

  const topic = TOPICS[slug]
  if (!topic) return null

  return (
    <>
      <SEOHead
        title={topic.metaTitle}
        description={topic.metaDescription}
        slug={slug}
        breadcrumbs={[
          { name: 'Accueil', slug: '' },
          { name: topic.h1, slug },
        ]}
        faqItems={topic.faq}
        dateModified={MODIFIED}
      />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
        padding: 'clamp(80px, 12vw, 120px) 24px 80px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#fff', padding: '8px 16px', borderRadius: 999,
            fontSize: 13, fontWeight: 700, color: '#1d4ed8', marginBottom: 24,
            border: '1px solid #BFDBFE',
          }}>
            <Sparkles size={16} /> {topic.badge}
          </div>
          <h1 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 900,
            fontSize: 'clamp(34px, 5.5vw, 54px)', lineHeight: 1.1,
            color: '#0A0A0A', marginBottom: 20,
          }}>
            {topic.h1}
          </h1>
          <p style={{
            fontSize: 'clamp(17px, 2.2vw, 20px)', color: '#4B5563',
            lineHeight: 1.6, maxWidth: 740, margin: '0 auto 36px',
          }}>
            {topic.intro}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#0A0A0A', color: '#fff', padding: '16px 28px',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
            }}>
              Demander un devis <ArrowRight size={18} />
            </Link>
            <Link to="/formation-intelligence-artificielle" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: '#0A0A0A', padding: '16px 28px',
              borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              border: '1px solid #E5E7EB',
            }}>
              {topic.catalogueLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* SECTIONS ÉDITORIALES */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          {topic.sections.map((s, i) => (
            <div key={i} style={{ marginBottom: 56 }}>
              <h2 style={{
                fontFamily: 'Nunito, sans-serif', fontWeight: 800,
                fontSize: 'clamp(24px, 3.4vw, 32px)', color: '#0A0A0A',
                marginBottom: 16, lineHeight: 1.25,
              }}>
                {s.h2}
              </h2>
              <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.7 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RÉASSURANCE */}
      <section style={{ padding: '60px 24px', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {topic.reassurance.map(({ t, s }, i) => {
            const Icon = REASSURANCE_ICONS[i % REASSURANCE_ICONS.length]
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 10, background: '#fff', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1d4ed8' }}>
                  <Icon size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0A0A0A', marginBottom: 2 }}>{t}</div>
                  <div style={{ fontSize: 14, color: '#6B7280' }}>{s}</div>
                </div>
              </div>
            )
          })}
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
            {topic.faqTitre}
          </h2>
          {topic.faq.map((item, i) => (
            <details key={i} style={{
              borderBottom: '1px solid #E5E7EB',
              padding: '20px 0',
            }}>
              <summary style={{
                cursor: 'pointer', fontWeight: 700, fontSize: 17,
                color: '#0A0A0A', listStyle: 'none', display: 'flex',
                justifyContent: 'space-between', alignItems: 'center', gap: 12,
              }}>
                <span>{item.q}</span>
                <span style={{ flexShrink: 0, color: '#1d4ed8' }}>+</span>
              </summary>
              <p style={{ marginTop: 12, color: '#374151', lineHeight: 1.7, fontSize: 16 }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '80px 24px', background: '#0A0A0A', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Nunito, sans-serif', fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 38px)', marginBottom: 16,
          }}>
            {topic.cta.titre}
          </h2>
          <p style={{ fontSize: 17, color: '#D1D5DB', marginBottom: 32, lineHeight: 1.6 }}>
            {topic.cta.texte}
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#fff', color: '#0A0A0A', padding: '16px 32px',
            borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
          }}>
            Demander un devis <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}

export const TOPIC_SLUGS = Object.keys(TOPICS)
