// Baut interne Links so, dass sie mit und ohne base-Pfad funktionieren.
// url('')            -> /kfz-koslowsky-website/
// url('karriere/')   -> /kfz-koslowsky-website/karriere/
// url('#kontakt')    -> /kfz-koslowsky-website/#kontakt
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = String(path).replace(/^\//, '');
  return p ? `${base}/${p}` : `${base}/`;
}

// Telefonnummer für tel:-Links: nur Ziffern und führendes +
export function telLink(nummer) {
  return 'tel:' + String(nummer).replace(/[^\d+]/g, '');
}
