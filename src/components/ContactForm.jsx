import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass, Zap, Rocket, Target, Lightbulb, GraduationCap, SlidersHorizontal,
  CheckCircle2, Send, Clock,
} from 'lucide-react';
import { ToolLogo } from './ToolLogo';
import { HUBS, METIERS } from '../data/catalog-meta';
import { trackEvent } from '../consent/ga4';

/*
 * Formulaire de demande (Formation / Conseil & projet), sorti de ContactScreen
 * le 14/10/2026 pour servir aussi à /catalogue.
 *  - demandeType / onDemandeTypeChange : onglet contrôlé par la page (Contact) ;
 *  - initialRdv : créneau de cadrage présélectionné (?rdv=30) ;
 *  - outils (slugs des hubs) et metiers (slugs) : présélection, suivie quand
 *    elle change (filtres de /catalogue) ;
 *  - source : envoyée à Formspree pour savoir d'où vient la demande.
 */
export default function ContactForm({
  demandeType: demandeTypeProp, onDemandeTypeChange, initialRdv = false,
  outils = [], metiers = [], source,
}) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  // Onglet contrôlé par la page (Contact lit ?type=projet) ou interne
  const [typeLocal, setTypeLocal] = useState('formation'); // 'formation' | 'projet'
  const demandeType = demandeTypeProp ?? typeLocal;
  const setDemandeType = onDemandeTypeChange ?? setTypeLocal;
  const [premierEchange, setPremierEchange] = useState(initialRdv ? 'visio' : 'ecrit');
  const [format, setFormat] = useState('intra');
  const [selectedTools, setSelectedTools] = useState(outils);
  const [selectedMetiers, setSelectedMetiers] = useState(metiers);
  // Sur /catalogue, la sélection suit les filtres de la page tant qu'ils changent
  const cleFiltres = outils.join(',') + '|' + metiers.join(',');
  const [derniereCle, setDerniereCle] = useState(cleFiltres);
  if (cleFiltres !== derniereCle) {
    setDerniereCle(cleFiltres);
    setSelectedTools(outils);
    setSelectedMetiers(metiers);
  }
  const [selectedBesoins, setSelectedBesoins] = useState([]);

  const toggleBesoin = (value) => setSelectedBesoins(prev =>
    prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
  );
  const BESOINS = [
    { value: 'conseil-audit', label: 'Conseil / audit IA', Icon: Compass },
    { value: 'automatisation', label: 'Automatisation de processus', Icon: Zap },
    { value: 'outil-application', label: "Développement d'outil ou d'application", Icon: Rocket },
    { value: 'agent-ia', label: "Développement d'agent IA", Icon: Target },
    { value: 'a-definir', label: 'Je ne sais pas encore', Icon: Lightbulb },
  ];
  const besoinsLabel = (vals) => vals.map(v => BESOINS.find(b => b.value === v)?.label || v);
  const PREMIER_ECHANGE = [
    { id: 'visio', label: '30 minutes de cadrage en visio' },
    { id: 'telephone', label: '30 minutes de cadrage par téléphone' },
    { id: 'ecrit', label: "Une première réponse par e-mail" },
  ];

  const toggleTool = (value) => setSelectedTools(prev =>
    prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
  );
  const toggleMetier = (value) => setSelectedMetiers(prev =>
    prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
  );

  const toolsLabel = (vals) => vals.map(v => {
    if (v === 'sur-mesure') return 'Sur mesure';
    if (v === 'ne-sais-pas') return 'À conseiller';
    const hub = HUBS.find(h => h.slug === v);
    if (hub?.id === 'sprint-ia') return 'Ateliers (Sprint IA · 3 h)';
    return hub?.tool || v;
  });
  const metiersLabel = (vals) => vals.map(v => METIERS.find(m => m.slug === v)?.label || v);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData(e.target);
      if (source) data.set('source', source);
      // Type de demande (onglet actif) en champ caché transmis à Formspree
      data.set('type_demande', demandeType === 'projet' ? 'Conseil & projet sur mesure' : 'Formation');
      if (demandeType === 'formation') {
        // Ajouter les sélections dynamiques (pas dans des vrais inputs)
        data.set('outils_ia', selectedTools.length ? toolsLabel(selectedTools).join(', ') : 'Non précisé');
        data.set('metiers', selectedMetiers.length ? metiersLabel(selectedMetiers).join(', ') : 'Équipe mixte');
        data.set('format', format);
      } else {
        data.set('besoin', selectedBesoins.length ? besoinsLabel(selectedBesoins).join(', ') : 'À cadrer ensemble');
        data.set('premier_echange', PREMIER_ECHANGE.find(p => p.id === premierEchange)?.label || premierEchange);
      }
      const res = await fetch('https://formspree.io/f/xzdyjbyn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSent(true);
        trackEvent('generate_lead', { form: source ? 'catalogue' : 'contact' });
      } else {
        const body = await res.json().catch(() => ({}));
        console.error('Formspree error:', res.status, body);
        alert(`Erreur ${res.status} : ${body.error || 'envoi impossible'}. Merci de réessayer dans quelques instants.`);
      }
    } catch (err) {
      console.error('Network error:', err);
      alert("Impossible d'envoyer le formulaire. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  };

  const inp = {
    width: '100%', fontFamily: 'DM Sans, sans-serif', fontSize: 14,
    padding: '12px 14px', border: '1.5px solid #E5E7EB', borderRadius: 10,
    color: '#0A0A0A', outline: 'none', background: '#fff',
    transition: 'border-color 150ms, box-shadow 150ms', boxSizing: 'border-box',
  };
  const lbl = { display: 'block', fontSize: 13, fontWeight: 700, color: '#0A0A0A', marginBottom: 6 };
  const grp = { marginBottom: 18 };
  const focus = e => { e.target.style.borderColor = '#2563EB'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.12)'; };
  const blur  = e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; };

  return (
    <>
    {sent ? (
      <div style={{ textAlign: 'center', padding: '56px 0' }}>
        <div style={{
          width: 72, height: 72, borderRadius: '50%',
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px',
          boxShadow: '0 8px 24px rgba(16,185,129,0.3)',
        }}>
          <CheckCircle2 size={36} color="#fff" strokeWidth={2.5} />
        </div>
        <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 26, fontWeight: 900, color: '#0A0A0A', marginBottom: 10, letterSpacing: '-0.01em' }}>
          Merci pour votre demande !
        </h2>
        <p style={{ fontSize: 15, color: '#4B5563', marginBottom: 32, lineHeight: 1.6, maxWidth: 420, margin: '0 auto 32px' }}>
          Nous revenons vers vous sous <strong>24 h ouvrées</strong> avec une proposition adaptée à vos besoins.
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => setSent(false)} style={{
            background: '#F3F4F6', color: '#0A0A0A', border: 'none',
            padding: '12px 22px', borderRadius: 10, fontWeight: 700, fontSize: 14,
            cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
          }}>
            Nouvelle demande
          </button>
          <Link to="/" style={{
            background: '#0A0A0A', color: '#fff',
            padding: '12px 22px', borderRadius: 10, fontWeight: 700, fontSize: 14,
            textDecoration: 'none',
          }}>
            Retour à l'accueil
          </Link>
        </div>
      </div>
    ) : (
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 20 }}>
          <h2 style={{ fontFamily: 'Nunito, sans-serif', fontSize: 22, fontWeight: 900, color: '#0A0A0A', marginBottom: 6, letterSpacing: '-0.01em' }}>
            Demande de devis personnalisé
          </h2>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.5 }}>
            Quelques informations suffisent, nous nous chargeons du reste.
          </p>
        </div>

        {/* Sélecteur d'onglet : Formation / Conseil & projet sur mesure */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6,
          background: '#F3F4F6', border: '1px solid #E5E7EB',
          borderRadius: 12, padding: 5, marginBottom: 24,
        }}>
          {[
            { id: 'formation', label: 'Formation', sub: 'Monter vos équipes en compétences', Icon: GraduationCap },
            { id: 'projet', label: 'Conseil & projet sur mesure', sub: 'Audit, automatisation, outil, agent IA', Icon: Compass },
          ].map(t => {
            const active = demandeType === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setDemandeType(t.id)}
                aria-pressed={active}
                style={{
                  background: active ? '#fff' : 'transparent',
                  border: active ? '1.5px solid #2563EB' : '1.5px solid transparent',
                  borderRadius: 9, padding: '11px 14px',
                  cursor: 'pointer', textAlign: 'left',
                  fontFamily: 'DM Sans, sans-serif',
                  boxShadow: active ? '0 2px 8px rgba(37,99,235,0.10)' : 'none',
                  transition: 'all 150ms',
                }}
              >
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontSize: 13.5, fontWeight: 800,
                  color: active ? '#2563EB' : '#374151',
                }}>
                  <t.Icon size={16} color={active ? '#2563EB' : '#6B7280'} strokeWidth={2.2} />
                  {t.label}
                </span>
                <span style={{ display: 'block', fontSize: 11.5, color: '#6B7280', marginTop: 3, lineHeight: 1.35 }}>
                  {t.sub}
                </span>
              </button>
            );
          })}
        </div>

        {/* Étape 1 : identité */}
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563EB', marginBottom: 14 }}>
          1 · Vos coordonnées
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
          <div style={grp}>
            <label style={lbl}>Prénom *</label>
            <input name="prenom" style={inp} placeholder="Sophie" required onFocus={focus} onBlur={blur} />
          </div>
          <div style={grp}>
            <label style={lbl}>Nom *</label>
            <input name="nom" style={inp} placeholder="Martin" required onFocus={focus} onBlur={blur} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
          <div style={grp}>
            <label style={lbl}>Email professionnel *</label>
            <input name="email" type="email" style={inp} placeholder="contact@entreprise.fr" required onFocus={focus} onBlur={blur} />
          </div>
          <div style={grp}>
            <label style={lbl}>Téléphone</label>
            <input name="telephone" type="tel" style={inp} placeholder="+33 6 12 34 56 78" onFocus={focus} onBlur={blur} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
          <div style={grp}>
            <label style={lbl}>Entreprise *</label>
            <input name="entreprise" style={inp} placeholder="Nom de votre entreprise" required onFocus={focus} onBlur={blur} />
          </div>
          <div style={grp}>
            <label style={lbl}>Votre fonction</label>
            <input name="fonction" style={inp} placeholder="Ex : DRH, Directeur Marketing…" onFocus={focus} onBlur={blur} />
          </div>
        </div>

        {/* Étape 2 — FORMATION : visible sur l'onglet Formation */}
        {demandeType === 'formation' && (
        <>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563EB', marginTop: 12, marginBottom: 14 }}>
          2 · Votre projet de formation
        </div>

        {/* Sélecteur 2 axes : OUTIL */}
        <div style={grp}>
          <label style={lbl}>
            Outil(s) IA <span style={{ fontWeight: 500, color: '#6B7280' }}>(plusieurs possibles)</span>
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 8 }}>
            {[
              ...HUBS.filter(h => h.id !== 'metiers').map(h => ({
                value: h.slug,
                label: h.id === 'sprint-ia' ? 'Ateliers (Sprint IA · 3 h)' : h.tool,
                color: h.color,
                logo: h.id,
              })),
              { value: 'sur-mesure', label: 'Sur mesure', color: '#F97316', icon: SlidersHorizontal },
              { value: 'ne-sais-pas', label: 'À conseiller', color: '#6B7280', icon: Lightbulb },
            ].map(t => {
              const active = selectedTools.includes(t.value);
              return (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => toggleTool(t.value)}
                  style={{
                    background: active ? `${t.color}12` : '#fff',
                    border: `1.5px solid ${active ? t.color : '#E5E7EB'}`,
                    borderRadius: 10, padding: '10px 12px',
                    cursor: 'pointer', textAlign: 'left',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 13, fontWeight: active ? 800 : 600,
                    color: active ? t.color : '#0A0A0A',
                    display: 'flex', alignItems: 'center', gap: 10,
                    transition: 'all 150ms',
                  }}
                >
                  <span style={{
                    width: 24, height: 24, flexShrink: 0,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {t.logo
                      ? <ToolLogo tool={t.logo} size={22} />
                      : <t.icon size={18} color={active ? t.color : '#6B7280'} strokeWidth={2} />
                    }
                  </span>
                  <span style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sélecteur 2 axes : MÉTIER */}
        <div style={grp}>
          <label style={lbl}>
            Thématique(s) / Métier(s){' '}
            <span style={{ fontWeight: 500, color: '#6B7280' }}>
              (plusieurs possibles, laisser vide = équipe mixte)
            </span>
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            <button
              type="button"
              onClick={() => setSelectedMetiers([])}
              style={{
                background: selectedMetiers.length === 0 ? '#0A0A0A' : '#fff',
                color: selectedMetiers.length === 0 ? '#fff' : '#475569',
                border: selectedMetiers.length === 0 ? 'none' : '1px solid #E5E7EB',
                borderRadius: 999,
                padding: '7px 14px',
                fontSize: 12.5,
                fontWeight: selectedMetiers.length === 0 ? 700 : 500,
                fontFamily: 'DM Sans, sans-serif',
                cursor: 'pointer',
                transition: 'all 150ms',
              }}
            >
              Équipe mixte
            </button>
            {METIERS.map(m => {
              const active = selectedMetiers.includes(m.slug);
              return (
                <button
                  key={m.slug}
                  type="button"
                  onClick={() => toggleMetier(m.slug)}
                  style={{
                    background: active ? '#0A0A0A' : '#fff',
                    color: active ? '#fff' : '#475569',
                    border: active ? 'none' : '1px solid #E5E7EB',
                    borderRadius: 999,
                    padding: '7px 14px',
                    fontSize: 12.5,
                    fontWeight: active ? 700 : 500,
                    fontFamily: 'DM Sans, sans-serif',
                    cursor: 'pointer',
                    transition: 'all 150ms',
                  }}
                >
                  {m.label}
                </button>
              );
            })}
          </div>

          {/* Récap de la sélection */}
          {(selectedTools.length > 0 || selectedMetiers.length > 0) && (
            <div style={{
              marginTop: 12,
              padding: '10px 14px',
              background: '#F9FAFB',
              border: '1px dashed #D1D5DB',
              borderRadius: 10,
              fontSize: 13,
              color: '#374151',
              fontFamily: 'DM Sans, sans-serif',
              lineHeight: 1.5,
            }}>
              <span style={{ color: '#6B7280', marginRight: 6 }}>Votre demande :</span>
              <strong style={{ color: '#0A0A0A' }}>
                {selectedTools.length > 0
                  ? `Formation ${toolsLabel(selectedTools).join(' + ')}`
                  : 'Outil à définir'}
                {selectedMetiers.length > 0 && ` · pour ${metiersLabel(selectedMetiers).join(', ')}`}
              </strong>
            </div>
          )}
        </div>

        <div style={grp}>
          <label style={lbl}>Format</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 8 }}>
            {[
              { id: 'individuel',  title: 'Accompagnement individuel', sub: '1 participant · sur mesure' },
              { id: 'intra',    title: 'Intra-entreprise',  sub: '12 participants max' },
              { id: 'sur-mesure', title: 'Sur mesure',      sub: 'Programme dédié' },
            ].map(f => {
              const active = format === f.id;
              return (
                <button key={f.id} type="button" onClick={() => setFormat(f.id)} style={{
                  background: active ? '#EFF6FF' : '#fff',
                  border: `1.5px solid ${active ? '#2563EB' : '#E5E7EB'}`,
                  borderRadius: 10, padding: '12px 14px',
                  cursor: 'pointer', textAlign: 'left',
                  fontFamily: 'DM Sans, sans-serif',
                  transition: 'all 150ms',
                }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: active ? '#2563EB' : '#0A0A0A' }}>
                    {f.title}
                  </div>
                  <div style={{ fontSize: 11, color: '#6B7280', marginTop: 2 }}>
                    {f.sub}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
          <div style={grp}>
            <label style={lbl}>Nombre de participants</label>
            <select name="nb_participants" style={{ ...inp, appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236B7280\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: 18, paddingRight: 40 }} onFocus={focus} onBlur={blur}>
              {['1–5 personnes', '6–10 personnes', '11–20 personnes', '20+ personnes', 'Je ne sais pas encore'].map(n => <option key={n}>{n}</option>)}
            </select>
          </div>
          <div style={grp}>
            <label style={lbl}>Délai souhaité</label>
            <select name="delai" style={{ ...inp, appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236B7280\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: 18, paddingRight: 40 }} onFocus={focus} onBlur={blur}>
              {['Dans le mois', 'Dans les 3 mois', 'Dans les 6 mois', 'Pas de date fixée'].map(n => <option key={n}>{n}</option>)}
            </select>
          </div>
        </div>
        </>
        )}

        {/* Étape 2 — CONSEIL & PROJET SUR MESURE : visible sur l'onglet Projet */}
        {demandeType === 'projet' && (
        <>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563EB', marginTop: 12, marginBottom: 14 }}>
          2 · Votre besoin
        </div>

        {/* Type de besoin (choix multiples) */}
        <div style={grp}>
          <label style={lbl}>
            Type de besoin{' '}
            <span style={{ fontWeight: 500, color: '#6B7280' }}>(plusieurs possibles)</span>
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 8 }}>
            {BESOINS.map(b => {
              const active = selectedBesoins.includes(b.value);
              return (
                <button
                  key={b.value}
                  type="button"
                  onClick={() => toggleBesoin(b.value)}
                  aria-pressed={active}
                  style={{
                    background: active ? '#DBEAFE' : '#fff',
                    border: `1.5px solid ${active ? '#2563EB' : '#E5E7EB'}`,
                    borderRadius: 10, padding: '11px 14px',
                    cursor: 'pointer', textAlign: 'left',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 13, fontWeight: active ? 800 : 600,
                    color: active ? '#2563EB' : '#0A0A0A',
                    display: 'flex', alignItems: 'center', gap: 10,
                    transition: 'all 150ms',
                  }}
                >
                  <span style={{
                    width: 24, height: 24, flexShrink: 0,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <b.Icon size={18} color={active ? '#2563EB' : '#6B7280'} strokeWidth={2} />
                  </span>
                  <span style={{ minWidth: 0 }}>{b.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Description du projet */}
        <div style={grp}>
          <label style={lbl}>Description du projet *</label>
          <textarea
            name="description_projet"
            style={{ ...inp, resize: 'vertical' }}
            rows={4}
            placeholder="Contexte, objectif visé, processus ou outils concernés, systèmes en place (CRM, ERP, données), contraintes éventuelles…"
            required={demandeType === 'projet'}
            onFocus={focus}
            onBlur={blur}
          />
        </div>

        {/* Budget + échéance */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
          <div style={grp}>
            <label style={lbl}>Budget indicatif <span style={{ fontWeight: 400, color: '#6B7280' }}>(optionnel)</span></label>
            <select name="budget" defaultValue="À définir" style={{ ...inp, appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236B7280\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: 18, paddingRight: 40 }} onFocus={focus} onBlur={blur}>
              {['Moins de 10 k€', '10 – 30 k€', '30 – 80 k€', 'Plus de 80 k€', 'À définir'].map(n => <option key={n}>{n}</option>)}
            </select>
          </div>
          <div style={grp}>
            <label style={lbl}>Échéance <span style={{ fontWeight: 400, color: '#6B7280' }}>(optionnel)</span></label>
            <select name="echeance" defaultValue="Pas de date fixée" style={{ ...inp, appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236B7280\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: 18, paddingRight: 40 }} onFocus={focus} onBlur={blur}>
              {['Dès que possible', 'Sous 1 à 3 mois', 'Sous 3 à 6 mois', 'Pas de date fixée'].map(n => <option key={n}>{n}</option>)}
            </select>
          </div>
        </div>

        {/* Premier échange : 30 minutes de cadrage offertes */}
        <div style={grp}>
          <label style={lbl}>
            Premier échange{' '}
            <span style={{ fontWeight: 500, color: '#6B7280' }}>(30 minutes de cadrage offertes)</span>
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 8 }}>
            {PREMIER_ECHANGE.map(p => {
              const active = premierEchange === p.id;
              return (
                <button key={p.id} type="button" onClick={() => setPremierEchange(p.id)} aria-pressed={active} style={{
                  background: active ? '#EFF6FF' : '#fff',
                  border: `1.5px solid ${active ? '#2563EB' : '#E5E7EB'}`,
                  borderRadius: 10, padding: '11px 14px',
                  cursor: 'pointer', textAlign: 'left',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 13, fontWeight: active ? 800 : 600,
                  color: active ? '#2563EB' : '#0A0A0A',
                  transition: 'all 150ms',
                }}>
                  {p.label}
                </button>
              );
            })}
          </div>
          {premierEchange !== 'ecrit' && (
            <p style={{ fontSize: 12.5, color: '#6B7280', lineHeight: 1.5, margin: '8px 0 0' }}>
              Indiquez vos disponibilités dans le message : nous vous proposons un créneau sous 24 h ouvrées.
            </p>
          )}
        </div>
        </>
        )}

        <div style={grp}>
          <label style={lbl}>Message <span style={{ fontWeight: 400, color: '#6B7280' }}>(optionnel)</span></label>
          <textarea name="message" style={{ ...inp, resize: 'vertical' }} rows={4} placeholder="Décrivez votre contexte : outils déjà utilisés, objectifs, enjeux métiers spécifiques…" onFocus={focus} onBlur={blur} />
        </div>

        <div style={grp}>
          <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, color: '#4B5563', lineHeight: 1.55, cursor: 'pointer' }}>
            <input type="checkbox" required style={{ marginTop: 3, accentColor: '#2563EB' }} />
            <span>J'accepte que Masteria traite mes données pour me recontacter. <Link to="/politique-de-confidentialite" style={{ color: '#2563EB', textDecoration: 'underline' }}>Politique de confidentialité</Link></span>
          </label>
        </div>

        <button type="submit" disabled={loading} style={{
          width: '100%',
          background: loading ? '#93C5FD' : 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
          color: '#fff', border: 'none',
          padding: '16px 28px', borderRadius: 12,
          fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 800,
          cursor: loading ? 'wait' : 'pointer',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          boxShadow: '0 4px 16px rgba(37,99,235,0.3)',
          transition: 'transform 150ms, box-shadow 150ms',
        }}
          onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.4)'; }}}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.3)'; }}
        >
          {loading ? 'Envoi en cours…' : <><Send size={16} /> Envoyer ma demande</>}
        </button>

        <div style={{
          marginTop: 16, display: 'flex', gap: 16, justifyContent: 'center',
          flexWrap: 'wrap', fontSize: 12, color: '#6B7280',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <Clock size={12} /> Réponse sous 24 h
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <CheckCircle2 size={12} /> Sans engagement
          </span>
        </div>
      </form>
    )}
    </>
  );
}
