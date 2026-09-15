import kunde from '../data/kunde.json';
import alleStellen from '../data/stellen.json';

// Platzhalter-Anzeigen erscheinen nur im Entwurf.
export const stellen = alleStellen.filter((s) => kunde.entwurf || !s.platzhalter);

export function bewerbungsMail(stelle) {
  const betreff = stelle ? `Bewerbung: ${stelle.titel}` : 'Initiativbewerbung';
  return `mailto:${kunde.kontakt.email}?subject=${encodeURIComponent(betreff)}`;
}
