/**
 * Méta-catégories du blog : regroupent les 26 tags en 6 grandes familles
 * pour une navigation plus claire. Les sous-tags restent visibles sur chaque carte d'article.
 */
import { BarChart3, BookOpen, Briefcase, Target, Shield, Wallet } from 'lucide-react'

export const META_CATEGORIES = [
  {
    id: 'comparatifs',
    label: 'Comparatifs IA',
    desc: 'Quel outil choisir',
    icon: BarChart3,
    color: { bg: '#EFF6FF', text: '#2563EB', border: '#BFDBFE', bar: '#2563EB', soft: '#DBEAFE' },
    tags: ['Comparatif', 'Outils'],
  },
  {
    id: 'guides',
    label: 'Guides & méthodes',
    desc: 'Comment faire',
    icon: BookOpen,
    color: { bg: '#F0FDF4', text: '#15803D', border: '#BBF7D0', bar: '#22C55E', soft: '#DCFCE7' },
    tags: ['Guide', 'Guide pratique', 'Guide décideur', 'Ressource', 'Format', 'Retours terrain'],
  },
  {
    id: 'metiers',
    label: 'Métiers',
    desc: 'IA par fonction',
    icon: Briefcase,
    color: { bg: '#FFF1F2', text: '#BE123C', border: '#FECDD3', bar: '#F43F5E', soft: '#FFE4E6' },
    tags: ['Métier', 'Métiers', 'RH', 'Marketing', "Cas d'usage"],
  },
  {
    id: 'strategie',
    label: 'Stratégie & pilotage',
    desc: 'Pour décideurs',
    icon: Target,
    color: { bg: '#F5F3FF', text: '#4338CA', border: '#E0E7FF', bar: '#6366F1', soft: '#E0E7FF' },
    tags: ['Stratégie', 'Management', 'Conseil IA', 'Pilotage', 'Productivité', 'Sprint IA', 'Data', 'GEO / SEO', 'Géographie'],
  },
  {
    id: 'conformite',
    label: 'Conformité & sécurité',
    desc: 'Risques & règles',
    icon: Shield,
    color: { bg: '#FFFBEB', text: '#92400E', border: '#FDE68A', bar: '#F59E0B', soft: '#FEF3C7' },
    tags: ['Réglementation', 'Conformité', 'Sécurité'],
  },
  {
    id: 'financement',
    label: 'Financement',
    desc: 'OPCO, CPF, FNE',
    icon: Wallet,
    color: { bg: '#FFF7ED', text: '#C2410C', border: '#FED7AA', bar: '#F97316', soft: '#FFEDD5' },
    tags: ['Financement'],
  },
]

export const TAG_TO_CATEGORY = META_CATEGORIES.reduce((acc, cat) => {
  cat.tags.forEach(t => { acc[t] = cat.id })
  return acc
}, {})

export function getCategoryForTag(tag) {
  const id = TAG_TO_CATEGORY[tag]
  return META_CATEGORIES.find(c => c.id === id) || null
}

export function getCategoryById(id) {
  return META_CATEGORIES.find(c => c.id === id) || null
}
