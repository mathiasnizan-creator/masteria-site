export const TAG_COLORS = {
  'Comparatif':      { bg: '#EFF6FF', text: '#2563EB', border: '#BFDBFE', bar: '#2563EB' },
  'Guide pratique':  { bg: '#F0FDF4', text: '#16A34A', border: '#BBF7D0', bar: '#22C55E' },
  'Guide':           { bg: '#F0FDF4', text: '#16A34A', border: '#BBF7D0', bar: '#22C55E' },
  'Guide décideur':  { bg: '#F0FDF4', text: '#15803D', border: '#BBF7D0', bar: '#22C55E' },
  'Financement':     { bg: '#FFF7ED', text: '#C2410C', border: '#FED7AA', bar: '#F97316' },
  'Outils':          { bg: '#FAF5FF', text: '#7C3AED', border: '#DDD6FE', bar: '#8B5CF6' },
  'Métier':          { bg: '#FFF1F2', text: '#BE123C', border: '#FECDD3', bar: '#F43F5E' },
  'Métiers':         { bg: '#FFF1F2', text: '#BE123C', border: '#FECDD3', bar: '#F43F5E' },
  'Stratégie':       { bg: '#F0F9FF', text: '#0369A1', border: '#BAE6FD', bar: '#0EA5E9' },
  'Management':      { bg: '#F5F3FF', text: '#4338CA', border: '#E0E7FF', bar: '#6366F1' },
  'Ressource':       { bg: '#ECFDF5', text: '#065F46', border: '#A7F3D0', bar: '#10B981' },
  'Réglementation':  { bg: '#FFFBEB', text: '#92400E', border: '#FDE68A', bar: '#F59E0B' },
  'Conformité':      { bg: '#FFFBEB', text: '#92400E', border: '#FDE68A', bar: '#F59E0B' },
  'Sécurité':        { bg: '#FFF1F2', text: '#BE123C', border: '#FECDD3', bar: '#F43F5E' },
  'Productivité':    { bg: '#ECFDF5', text: '#065F46', border: '#A7F3D0', bar: '#10B981' },
  'Marketing':       { bg: '#FDF4FF', text: '#86198F', border: '#F0ABFC', bar: '#C026D3' },
  'RH':              { bg: '#FFF1F2', text: '#BE123C', border: '#FECDD3', bar: '#F43F5E' },
  'Data':            { bg: '#F0F9FF', text: '#0369A1', border: '#BAE6FD', bar: '#0EA5E9' },
  'GEO / SEO':       { bg: '#FFF7ED', text: '#C2410C', border: '#FED7AA', bar: '#F97316' },
  'Sprint IA':       { bg: '#FAF5FF', text: '#7C3AED', border: '#DDD6FE', bar: '#8B5CF6' },
  'Pilotage':        { bg: '#F0F9FF', text: '#0369A1', border: '#BAE6FD', bar: '#0EA5E9' },
  'Retours terrain': { bg: '#ECFDF5', text: '#065F46', border: '#A7F3D0', bar: '#10B981' },
  'Conseil IA':      { bg: '#EFF6FF', text: '#2563EB', border: '#BFDBFE', bar: '#2563EB' },
  "Cas d'usage":     { bg: '#FAF5FF', text: '#7C3AED', border: '#DDD6FE', bar: '#8B5CF6' },
  'Géographie':      { bg: '#F0FDF4', text: '#16A34A', border: '#BBF7D0', bar: '#22C55E' },
  'Format':          { bg: '#F5F3FF', text: '#4338CA', border: '#E0E7FF', bar: '#6366F1' },
}

const DEFAULT_TAG = { bg: '#F1F5F9', text: '#475569', border: '#CBD5E1', bar: '#94A3B8' }

export function getTagColor(tag) {
  return TAG_COLORS[tag] || DEFAULT_TAG
}
