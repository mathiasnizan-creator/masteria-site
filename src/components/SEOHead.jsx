import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.master-ia.fr'
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/logo-horizontal.png`

/**
 * SEOHead — composant central pour les balises SEO, Open Graph, Twitter,
 * et les données structurées JSON-LD.
 *
 * @param {string} title        — Title tag (≤60 chars recommandé)
 * @param {string} description  — Meta description (≤160 chars recommandé)
 * @param {string} slug         — slug de la page (sans slash initial) — sert au canonical
 * @param {string} type         — og:type : 'website' | 'article' | 'profile'
 * @param {object} courseData   — { name, description, price, duration, audience } → JSON-LD Course
 * @param {array}  faqItems     — [{ q, a }] → JSON-LD FAQPage
 * @param {array}  breadcrumbs  — [{ name, slug }] → JSON-LD BreadcrumbList
 * @param {object} articleData  — { headline, author, datePublished, dateModified, image, tag } → JSON-LD Article
 * @param {string} ogImage      — URL absolue de l'image OG (fallback : logo)
 * @param {boolean} noindex     — si true, n'indexe pas la page
 */
export default function SEOHead({
  title,
  description,
  slug = '',
  type = 'website',
  courseData,
  faqItems,
  breadcrumbs,
  articleData,
  ogImage,
  noindex = false,
  extraJsonLd,
  locale,           // ex: 'fr-CH' ou 'fr-BE' — ajoute un hreflang supplémentaire pour le SEO international
  keywords,         // mots-clés spécifiques à la page (fallback : keywords formation par défaut)
}) {
  const fullUrl = slug ? `${SITE_URL}/${slug}` : `${SITE_URL}/`
  const imageUrl = ogImage || DEFAULT_OG_IMAGE
  // Validité du tarif pour le schema Offer (recalculée à chaque build prerender) —
  // évite que Google considère le prix comme expiré. Fin de l'année suivante.
  const priceValidUntil = `${new Date().getFullYear() + 1}-12-31`

  /* ───── JSON-LD Person (Mathias Nizan — E-E-A-T réutilisable) ───── */
  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#mathias-nizan`,
    name: 'Mathias Nizan',
    givenName: 'Mathias',
    familyName: 'Nizan',
    jobTitle: 'Fondateur & formateur principal',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    url: `${SITE_URL}/centre-formation-ia-entreprise`,
    image: `${SITE_URL}/assets/mathias-nizan@240.jpg`,
    sameAs: [
      'https://www.linkedin.com/in/mathias-nizan/',
      'https://www.linkedin.com/company/masteria-conseil-et-formation-ia/',
    ],
    knowsAbout: [
      'Intelligence artificielle générative',
      'ChatGPT', 'Microsoft Copilot', 'Google Gemini', 'Claude (Anthropic)', 'Mistral AI',
      'Prompt engineering', 'Formation professionnelle IA', 'Transformation par l\'IA',
      'Conseil en stratégie IA', 'Développement de solutions IA sur mesure',
      'Agents IA', 'Automatisation des processus par IA', 'RAG (retrieval-augmented generation)',
      'Gouvernance et conformité IA (RGPD, AI Act)',
    ],
    // Citation presse vérifiable (E-E-A-T) : Mathias Nizan cité par Les Échos.
    subjectOf: {
      '@type': 'NewsArticle',
      headline: "ChatGPT, Claude, Copilot, Gemini, Mistral : comment choisir l'IA la plus adaptée à son métier",
      url: 'https://www.lesechos.fr/travailler-mieux/travailler-avec-lia/si-vous-choisissez-un-modele-pas-adapte-les-gens-vont-chercher-de-leur-cote-chatgpt-claude-copilot-gemini-mistral-comment-choisir-lia-la-plus-adaptee-a-son-metier-2236741',
      publisher: { '@type': 'NewsMediaOrganization', name: 'Les Échos', url: 'https://www.lesechos.fr' },
    },
    description: "Fondateur de Masteria, cabinet de conseil et développement IA et centre de formation certifié Qualiopi. Accompagne PME, ETI et grands groupes sur la stratégie, le développement de solutions IA sur mesure et la formation, depuis 2022. Cité par Les Échos.",
  }

  /* ───── JSON-LD Organization (référence globale) ───── */
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'EducationalOrganization'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Masteria',
    alternateName: 'Master IA',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/assets/logo-square.png`,
      width: 512,
      height: 512,
    },
    description:
      "Centre de formation IA certifié Qualiopi et cabinet de conseil. Formations ChatGPT, Microsoft Copilot, Google Gemini, Claude et Mistral AI, finançables OPCO.",
    foundingDate: '2022',
    founder: { '@id': `${SITE_URL}/#mathias-nizan` },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '17 Rue Richan',
      postalCode: '69004',
      addressLocality: 'Lyon',
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'Country', name: 'France' },
      { '@type': 'Country', name: 'Suisse' },
      { '@type': 'Country', name: 'Belgique' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+33-6-67-75-41-28',
      email: 'mathias.nizan@master-ia.fr',
      availableLanguage: ['fr', 'en'],
      areaServed: ['FR', 'CH', 'BE'],
    },
    sameAs: [
      'https://www.linkedin.com/company/masteria-conseil-et-formation-ia/',
      // Entité Knowledge Graph du profil Google Business (URL stable, remplace
      // l'ancien lien raccourci share.google qui passait par deux redirections).
      'https://www.google.com/search?kgmid=/g/11ys7st9c3',
      'https://www.linkedin.com/in/mathias-nizan/',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Certification Qualiopi',
      credentialCategory: 'Actions de formation',
      recognizedBy: { '@type': 'Organization', name: 'France Compétences' },
    },
    // NOTE — aggregateRating retiré (risque de pénalité manuelle Google "Structured data issue"
    // car non vérifiable publiquement). À ré-injecter UNIQUEMENT si branché sur une source
    // vérifiable (Google Reviews API, Trustpilot widget, etc.) avec sameAs/URL pointant
    // vers la source réelle des avis.
  }

  /* ───── JSON-LD WebSite (global + SearchAction) ───── */
  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Masteria',
    description: "Centre de formation IA certifié Qualiopi et cabinet de conseil.",
    inLanguage: 'fr-FR',
    publisher: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/formation-intelligence-artificielle?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  /* ───── JSON-LD WebPage (page courante) ───── */
  const jsonLdWebPage = {
    '@context': 'https://schema.org',
    // Pages blog : le BlogPosting (jsonLdArticle) porte déjà la sémantique article,
    // donc la WebPage reste 'WebPage' (évite le doublon Article + BlogPosting).
    // Pages comparatives (type=article sans articleData) : on garde 'Article'.
    '@type': (type === 'article' && !articleData) ? 'Article' : 'WebPage',
    '@id': `${fullUrl}#webpage`,
    url: fullUrl,
    name: title,
    description,
    inLanguage: 'fr-FR',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    primaryImageOfPage: { '@type': 'ImageObject', url: imageUrl },
  }

  /* ───── JSON-LD Course (enrichi : aggregateRating, teaches, timeRequired, hasCredential) ───── */
  const jsonLdCourse = courseData
    ? {
        '@context': 'https://schema.org',
        '@type': 'Course',
        '@id': `${fullUrl}#course`,
        name: courseData.name,
        description: courseData.description,
        provider: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: 'Masteria',
          url: SITE_URL,
          sameAs: SITE_URL,
        },
        educationalLevel: courseData.level || 'Intermédiaire',
        inLanguage: 'fr-FR',
        url: fullUrl,
        // Compétences enseignées (objectifs pédagogiques)
        teaches: courseData.teaches || courseData.objectives || undefined,
        // Sujets couverts (rich result Course)
        about: courseData.about || courseData.tool || undefined,
        // Durée totale au format ISO 8601 (PT14H = 14 heures = 2 jours)
        timeRequired: courseData.timeRequired || 'PT14H',
        // Pas de prérequis sauf indication contraire
        coursePrerequisites: courseData.prerequisites || 'Aucun prérequis technique. Maîtrise des outils bureautiques courants.',
        // Certification Qualiopi (rich result)
        occupationalCredentialAwarded: {
          '@type': 'EducationalOccupationalCredential',
          name: 'Attestation de fin de formation',
          credentialCategory: 'Attestation',
          recognizedBy: { '@type': 'Organization', name: 'Masteria (organisme certifié Qualiopi)' },
        },
        // aggregateRating retiré (cf. note dans jsonLdOrg) — à brancher sur source vérifiable.
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: ['Onsite', 'Online', 'Blended'],
          courseWorkload: courseData.duration || 'PT14H',
          inLanguage: 'fr-FR',
          location: {
            '@type': 'Place',
            name: 'Masteria — présentiel France/Suisse/Belgique ou distanciel',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '17 Rue Richan',
              postalCode: '69004',
              addressLocality: 'Lyon',
              addressRegion: 'Auvergne-Rhône-Alpes',
              addressCountry: 'FR',
            },
          },
        },
        // Offre unique et canonique (dédupliquée) — portée par le Course, avec priceValidUntil.
        offers: {
          '@type': 'Offer',
          '@id': `${fullUrl}#offer`,
          price: courseData.price || '1980',
          priceCurrency: 'EUR',
          priceValidUntil,
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: courseData.price || '1980',
            priceCurrency: 'EUR',
            valueAddedTaxIncluded: false,
            description: 'Tarif intra-entreprise par jour pour un groupe jusqu\'à 12 participants. Accompagnement individuel sur mesure : 1 980 €/jour.',
          },
          category: 'Formation professionnelle',
          availability: 'https://schema.org/InStock',
          url: fullUrl,
          seller: { '@id': `${SITE_URL}/#organization` },
          eligibleRegion: [
            { '@type': 'Country', name: 'France' },
            { '@type': 'Country', name: 'Suisse' },
            { '@type': 'Country', name: 'Belgique' },
          ],
        },
        audience: {
          '@type': 'EducationalAudience',
          educationalRole: courseData.audience || 'Professionnels en entreprise',
          audienceType: 'B2B',
        },
        // Financement OPCO (rich result)
        offers_alternative: undefined,
        // Indique que la formation est financée publiquement (OPCO)
        funder: {
          '@type': 'Organization',
          name: 'OPCO (financement professionnel)',
          description: 'Formation 100% finançable par les Opérateurs de Compétences (OPCO Atlas, AKTO, OPCO EP, etc.)',
        },
      }
    : null

  /* JSON-LD HowTo retiré (2026-06-14) : Google a supprimé les rich results HowTo
     en septembre 2023. Le balisage n'apportait plus aucun bénéfice et alourdissait
     le HTML. Le programme reste décrit par le schema Course (hasCourseInstance). */

  /* ───── JSON-LD FAQPage ───── */
  const jsonLdFaq = faqItems && faqItems.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : null

  /* ───── JSON-LD BreadcrumbList ───── */
  const jsonLdBreadcrumb = breadcrumbs && breadcrumbs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: b.slug ? `${SITE_URL}/${b.slug}` : SITE_URL,
        })),
      }
    : null

  /* ───── JSON-LD Article (pour le blog) ─────
     Article schema enrichi : wordCount, keywords, articleSection, image dimensions,
     creator/editor (E-E-A-T), isPartOf (rattachement explicite au blog).
     Tous les signaux que Google attend pour les pages éditoriales. */
  const jsonLdArticle = articleData
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${fullUrl}#article`,
        headline: articleData.headline || title,
        description,
        image: {
          '@type': 'ImageObject',
          url: articleData.image || imageUrl,
          width: 1200,
          height: 630,
        },
        datePublished: articleData.datePublished,
        dateModified: articleData.dateModified || articleData.datePublished,
        author: { '@id': `${SITE_URL}/#mathias-nizan` },
        creator: { '@id': `${SITE_URL}/#mathias-nizan` },
        editor: { '@id': `${SITE_URL}/#mathias-nizan` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        sourceOrganization: { '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: { '@type': 'WebPage', '@id': fullUrl },
        isPartOf: {
          '@type': 'Blog',
          '@id': `${SITE_URL}/blog#blog`,
          name: 'Blog Masteria',
          url: `${SITE_URL}/blog`,
        },
        articleSection: articleData.tag,
        keywords: Array.isArray(articleData.keywords) ? articleData.keywords.join(', ') : articleData.keywords,
        wordCount: articleData.wordCount,
        timeRequired: articleData.timeRequired,
        inLanguage: 'fr-FR',
        isAccessibleForFree: true,
        copyrightYear: articleData.datePublished ? articleData.datePublished.slice(0, 4) : undefined,
        copyrightHolder: { '@id': `${SITE_URL}/#organization` },
      }
    : null

  return (
    <Helmet>
      {/* Lang & charset sont gérés par index.html — juste override du title et meta */}
      <html lang="fr" />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* hreflang */}
      <link rel="alternate" hrefLang="fr-FR" href={fullUrl} />
      {locale && locale !== 'fr-FR' && (
        <link rel="alternate" hrefLang={locale} href={fullUrl} />
      )}
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Masteria" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title}, Masteria`} />

      {/* Twitter (avec site + creator pour SEO authority) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${title}, Masteria`} />
      <meta name="twitter:site" content="@masteria_ia" />
      <meta name="twitter:creator" content="@mathias_nizan" />

      {/* Keywords (utile pour Bing/Yandex + meilleure pertinence sémantique) */}
      <meta name="keywords" content={keywords || "formation IA entreprise, formation ChatGPT, formation Claude IA, formation Microsoft Copilot, formation Google Gemini, formation Mistral AI, IA en entreprise, certifié Qualiopi, finançable OPCO, Lyon"} />

      {/* Pragma : pas de cache pour navigation entre pages prerendées */}
      <meta httpEquiv="content-language" content="fr-FR" />

      {/* Article meta (si article) */}
      {articleData && articleData.datePublished && (
        <meta property="article:published_time" content={articleData.datePublished} />
      )}
      {articleData && (articleData.dateModified || articleData.datePublished) && (
        <meta property="article:modified_time" content={articleData.dateModified || articleData.datePublished} />
      )}
      {articleData && (
        <meta property="article:author" content={articleData.author || 'Mathias Nizan'} />
      )}
      {articleData && articleData.tag && (
        <meta property="article:section" content={articleData.tag} />
      )}

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLdOrg)}</script>
      <script type="application/ld+json">{JSON.stringify(jsonLdPerson)}</script>
      <script type="application/ld+json">{JSON.stringify(jsonLdWebsite)}</script>
      <script type="application/ld+json">{JSON.stringify(jsonLdWebPage)}</script>
      {jsonLdCourse && <script type="application/ld+json">{JSON.stringify(jsonLdCourse)}</script>}
      {jsonLdFaq && <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>}
      {jsonLdBreadcrumb && <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>}
      {jsonLdArticle && <script type="application/ld+json">{JSON.stringify(jsonLdArticle)}</script>}
      {extraJsonLd && (Array.isArray(extraJsonLd) ? extraJsonLd : [extraJsonLd]).map((schema, i) => (
        <script key={`extra-jsonld-${i}`} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  )
}
