# Génère public/assets/carte-presence.svg (carte « Où nous intervenons » de la home).
# Données : world-atlas@2.0.2/countries-50m.json (Natural Earth, domaine public).
# Usage : python3 scripts/generer-carte-presence.py countries-50m.json public/assets/carte-presence.svg
# Les positions affichées en fin de script se reportent dans src/components/PresenceInternationale.jsx.
import json, math, sys
src, out = sys.argv[1], sys.argv[2]
topo = json.load(open(src))
sx, sy = topo['transform']['scale']; tx, ty = topo['transform']['translate']
arcs = []
for a in topo['arcs']:
    x = y = 0; pts = []
    for dx, dy in a:
        x += dx; y += dy
        pts.append((x * sx + tx, y * sy + ty))
    arcs.append(pts)

LON0, LON1, LAT0, LAT1 = -128, 34, 8, 66
W = 1000
merc = lambda la: math.log(math.tan(math.pi / 4 + math.radians(la) / 2))
K = W / math.radians(LON1 - LON0)
YT = merc(LAT1)
H = round(K * (YT - merc(LAT0)), 1)
def proj(lo, la):
    la = max(min(la, 85), -85)
    return (K * math.radians(lo - LON0), K * (YT - merc(la)))

def ring(idx):
    pts = []
    for i in idx:
        a = arcs[i] if i >= 0 else arcs[~i][::-1]
        pts.extend(a if not pts else a[1:])
    return pts

def path(rings):
    d = []
    for r in rings:
        # Anneaux qui franchissent l'antiméridien (Russie, Fidji...) : sans correction ils
        # tracent une bande horizontale sur toute la largeur. On ramène l'est en 180-360.
        if any(abs(r[i][0] - r[i - 1][0]) > 180 for i in range(1, len(r))):
            r = [(lo + 360 if lo < 0 else lo, la) for lo, la in r]
        p = [proj(*q) for q in r]
        xs = [q[0] for q in p]; ys = [q[1] for q in p]
        if max(xs) < -20 or min(xs) > W + 20 or max(ys) < -20 or min(ys) > H + 20:
            continue
        if (max(xs) - min(xs)) < 0.8 and (max(ys) - min(ys)) < 0.8:
            continue
        s = []; last = None
        for x, y in p:
            if last and abs(x - last[0]) + abs(y - last[1]) < 1.6:
                continue
            s.append(f'{x:.1f} {y:.1f}'); last = (x, y)
        if len(s) > 2:
            d.append('M' + 'L'.join(s) + 'Z')
    return ''.join(d)

ACTIFS = {'250', '056', '756', '840', '484'}
autres, actifs = [], []
for g in topo['objects']['countries']['geometries']:
    if g['type'] == 'Polygon':
        polys = [g['arcs']]
    elif g['type'] == 'MultiPolygon':
        polys = g['arcs']
    else:
        continue
    d = path([ring(r) for p in polys for r in p])
    if d:
        (actifs if g.get('id') in ACTIFS else autres).append(d)

svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}">'
       f'<path d="{"".join(autres)}" fill="#CDD7E8" stroke="#FFFFFF" stroke-width="0.8" stroke-linejoin="round"/>'
       f'<path d="{"".join(actifs)}" fill="#2563EB" stroke="#FFFFFF" stroke-width="0.9" stroke-linejoin="round"/>'
       '</svg>')
open(out, 'w').write(svg)
print('H', H, 'taille', len(svg))
for nom, lo, la in [('lyon', 4.835, 45.764), ('be', 4.352, 50.847), ('ch', 7.447, 46.948), ('us', -77.037, 38.907), ('mx', -100.389, 20.588)]:
    x, y = proj(lo, la); print(nom, round(x, 1), round(y, 1))
