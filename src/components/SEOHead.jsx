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
}) {
  const fullUrl = slug ? `${SITE_URL}/${slug}` : `${SITE_URL}/`
  const imageUrl = ogImage || DEFAULT_OG_IMAGE

  /* ───── JSON-LD Organization (référence globale) ───── */
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'EducationalOrganization'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Masteria',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo-horizontal.png`,
    description:
      "Centre de formation IA certifié Qualiopi et cabinet de conseil. Formations ChatGPT, Microsoft Copilot, Google Gemini, Claude et Mistral AI, finançables OPCO.",
    founder: { '@type': 'Person', name: 'Mathias Nizan' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '17 Rue Richan',
      postalCode: '69004',
      addressLocality: 'Lyon',
      addressCountry: 'FR',
    },
    areaServed: ['FR', 'CH', 'BE'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+33-6-67-75-41-28',
      email: 'mathias.nizan@master-ia.fr',
      availableLanguage: ['fr', 'en'],
    },
    sameAs: ['https://www.linkedin.com/in/mathias-nizan/'],
  }

  /* ───── JSON-LD WebPage (page courante) ───── */
  const jsonLdWebPage = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebPage',
    '@id': `${fullUrl}#webpage`,
    url: fullUrl,
    name: title,
    description,
    inLanguage: 'fr-FR',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    primaryImageOfPage: { '@type': 'ImageObject', url: imageUrl },
  }

  /* ───── JSON-LD Course ───── */
  const jsonLdCourse = courseData
    ? {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: courseData.name,
        description: courseData.description,
        provider: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: 'Masteria',
          sameAs: SITE_URL,
        },
        educationalLevel: courseData.level || 'Tous niveaux',
        inLanguage: 'fr',
        url: fullUrl,
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: ['Onsite', 'Online'],
          courseWorkload: courseData.duration || 'PT7H',
          location: {
            '@type': 'Place',
            name: 'Masteria, présentiel ou distanciel',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'FR',
              addressLocality: 'Lyon',
            },
          },
        },
        offers: {
          '@type': 'Offer',
          price: courseData.price || '760',
          priceCurrency: 'EUR',
          category: 'Formation professionnelle',
          availability: 'https://schema.org/InStock',
          url: fullUrl,
        },
        audience: courseData.audience
          ? { '@type': 'EducationalAudience', educationalRole: courseData.audience }
          : undefined,
      }
    : null

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

  /* ───── JSON-LD Article (pour le blog) ───── */
  const jsonLdArticle = articleData
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: articleData.headline || title,
        description,
        image: articleData.image || imageUrl,
        datePublished: articleData.datePublished,
        dateModified: articleData.dateModified || articleData.datePublished,
        author: {
          '@type': 'Person',
          name: articleData.author || 'Mathias Nizan',
          url: 'https://www.linkedin.com/in/mathias-nizan/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Masteria',
          logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/logo-horizontal.png` },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': fullUrl },
        articleSection: articleData.tag,
        inLanguage: 'fr-FR',
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

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${title}, Masteria`} />

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
      <script type="application/ld+json">{JSON.stringify(jsonLdWebPage)}</script>
      {jsonLdCourse && <script type="application/ld+json">{JSON.stringify(jsonLdCourse)}</script>}
      {jsonLdFaq && <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>}
      {jsonLdBreadcrumb && <script type="application/ld+json">{JSON.stringify(jsonLdBreadcrumb)}</script>}
      {jsonLdArticle && <script type="application/ld+json">{JSON.stringify(jsonLdArticle)}</script>}
    </Helmet>
  )
}
