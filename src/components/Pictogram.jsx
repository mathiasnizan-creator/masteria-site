/**
 * Pictogram — convertit un glyphe emoji en pictogramme lucide-react.
 *
 * Pourquoi : le site stockait des icônes décoratives sous forme d'emoji
 * (champ `icon:` / `emoji:` dans les données, ou inline dans le JSX). Pour un
 * rendu premium type cabinet, on mappe chaque emoji vers une icône lucide.
 * Les fichiers de données restent inchangés : l'emoji devient une simple CLÉ
 * de correspondance, jamais affichée telle quelle.
 *
 * Usage :
 *   <Pictogram emoji={uc.icon} tile size={22} />   // pastille 44px bleue
 *   <Pictogram emoji="🎯" size={18} />              // icône inline
 *   emojiToIcon('📊')                               // -> composant lucide
 *   stripLeadingEmoji('🥇 Très large')              // -> 'Très large'
 */
import {
  BarChart3, TrendingUp, ClipboardList, Files, FileText, PenLine, PenTool,
  Target, Search, CheckCircle2, Check, XCircle, BookOpen, Mail, AlertTriangle,
  Siren, Palette, Mic, RefreshCw, Repeat, Bot, Users, User, MessageCircle,
  MessagesSquare, Shield, Lock, Star, Handshake, Scale, Smartphone, Newspaper,
  Calendar, Laptop, Tag, Building2, Landmark, Settings, Wrench, Hammer, Award,
  Trophy, Megaphone, Briefcase, GraduationCap, Rocket, Microscope, Folder,
  CreditCard, Globe, Puzzle, Link as LinkIcon, Film, Zap, Eraser, Brain,
  Map as MapIcon, Image as ImageIcon, Upload, Radio, Lightbulb, Gem, Bug,
  Cloud, Sparkles,
} from 'lucide-react'

/* Correspondance emoji -> icône lucide. Les variantes avec sélecteur de
   présentation (U+FE0F) sont normalisées au moment de la recherche. */
const MAP = {
  '📊': BarChart3, '📈': TrendingUp, '📉': TrendingUp,
  '📋': ClipboardList, '📑': Files, '📄': FileText, '📃': FileText, '📝': PenLine, '✍': PenTool,
  '🎯': Target, '🔍': Search, '🔎': Search,
  '✅': CheckCircle2, '✔': Check, '✓': Check, '☑': CheckCircle2,
  '❌': XCircle, '✖': XCircle,
  '📚': BookOpen, '📖': BookOpen,
  '📧': Mail, '✉': Mail, '📨': Mail, '📬': Mail,
  '⚠': AlertTriangle, '🚨': Siren, '🚦': AlertTriangle,
  '🎨': Palette, '🎤': Mic, '🎙': Mic,
  '🔄': RefreshCw, '🔁': Repeat,
  '🤖': Bot, '👥': Users, '👤': User, '🧑': User, '🙋': User,
  '💬': MessageCircle, '🗣': MessagesSquare,
  '🛡': Shield, '🔒': Lock, '🔐': Lock, '🔓': Lock,
  '★': Star, '⭐': Star, '🌟': Star,
  '🤝': Handshake, '⚖': Scale,
  '📱': Smartphone, '📰': Newspaper, '📅': Calendar, '🗓': Calendar,
  '💻': Laptop, '🖥': Laptop, '🏷': Tag,
  '🏗': Building2, '🏢': Building2, '🏦': Landmark, '🏛': Landmark,
  '⚙': Settings, '🔧': Wrench, '🛠': Hammer,
  '🥇': Award, '🥈': Award, '🥉': Award, '🏅': Award, '🏆': Trophy,
  '📣': Megaphone, '📢': Megaphone,
  '💼': Briefcase, '👔': Briefcase,
  '🎓': GraduationCap, '🚀': Rocket, '🔬': Microscope, '📁': Folder, '🗂': Folder,
  '💳': CreditCard, '🌍': Globe, '🌐': Globe, '🌎': Globe,
  '🧩': Puzzle, '🔗': LinkIcon, '🎬': Film,
  '⚡': Zap, '🧹': Eraser, '🧠': Brain, '🗺': MapIcon,
  '🖼': ImageIcon, '📤': Upload, '📡': Radio,
  '💡': Lightbulb, '💎': Gem, '🐛': Bug, '☁': Cloud,
}

/* Renvoie le composant lucide pour un emoji, ou null si non mappé. */
export function emojiToIcon(raw) {
  if (!raw) return null
  const key = String(raw).trim()
  if (MAP[key]) return MAP[key]
  const base = key.replace(/️/g, '')
  return MAP[base] || null
}

/* Retire un (ou plusieurs) emoji/symbole en tête de chaîne + l'espace qui suit.
   '🥇 Très large' -> 'Très large' ; 'Texte normal' -> 'Texte normal'. */
export function stripLeadingEmoji(str) {
  if (str == null) return str
  return String(str)
    // eslint-disable-next-line no-misleading-character-class -- le sélecteur de variante U+FE0F est volontairement inclus pour retirer les emojis à variante en tête de chaîne
    .replace(/^(?:[\p{Extended_Pictographic}←-⇿⬀-⯿\uFE0F✅✓✔✖☑★⭐⚠]\s*)+/u, '')
    .trim()
}

export default function Pictogram({
  emoji,
  size = 22,
  color = '#2563EB',
  strokeWidth = 2,
  tile = false,
  tileSize = 44,
  tileBg = '#DBEAFE',
  tileRadius = 12,
  style,
  ...rest
}) {
  const Icon = emojiToIcon(emoji) || Sparkles
  // eslint-disable-next-line react-hooks/static-components -- sélection dynamique d'un composant lucide existant selon la prop emoji, pas une définition de composant au render
  const glyph = <Icon size={size} color={color} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />
  if (!tile) return glyph
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: tileSize, height: tileSize, borderRadius: tileRadius,
        background: tileBg, flexShrink: 0, ...style,
      }}
    >
      {glyph}
    </span>
  )
}
