# Website KFZ-Meisterbetrieb Koslowsky

Entwurf von Peterschun. Gebaut mit Astro, Vorschau über GitHub Pages.

## Was wo steht

| Datei | Inhalt |
|---|---|
| `src/data/kunde.json` | Alle Texte, Kontaktdaten, Leistungen, Öffnungszeiten, Social-Links |
| `src/data/stellen.json` | Stellenanzeigen – eine Anzeige = ein Eintrag |
| `src/styles/global.css` | Farben und Schriften (oberster Block) |
| `public/img/` | Logo und später die Fotos |
| `astro.config.mjs` | GitHub-Name und Repo-Name |

`"entwurf": true` in `kunde.json` blendet die gelben Hinweise, die Entwurfsleiste und Platzhalter-Stellen ein und sperrt die Seite für Suchmaschinen. Auf `false` setzen, wenn es live geht.

## Einmalig einrichten

1. Node.js installieren (aktuelle LTS-Version).
2. Im Projektordner: `npm install` – legt `package-lock.json` an. **Diese Datei muss mit hochgeladen werden**, sonst schlägt der Build auf GitHub fehl.
3. Lokal ansehen: `npm run dev`, dann die angezeigte Adresse im Browser öffnen.
4. Probe-Build: `npm run build`.

## Auf GitHub Pages veröffentlichen

1. Auf GitHub ein Repo mit dem Namen `kfz-koslowsky-website` anlegen.
2. In `astro.config.mjs` `GITHUB-NAME` durch deinen GitHub-Namen ersetzen. Heißt das Repo anders, `base` anpassen.
3. Hochladen mit **GitHub Desktop** (nicht per Drag-and-drop im Browser – dort fehlt oft der versteckte Ordner `.github`, und `node_modules` würde mit hochgeladen).
4. Im Repo: Settings → Pages → Source: **GitHub Actions**.
5. Nach jedem Push baut GitHub die Seite neu. Adresse: `https://<github-name>.github.io/kfz-koslowsky-website/`

Hinweis: Ohne bezahltes GitHub-Konto ist das Repo öffentlich einsehbar.

## Neuer Kunde (Baukasten)

1. Ordner kopieren.
2. `kunde.json`, `stellen.json`, Logo und Farben tauschen.
3. `astro.config.mjs` anpassen.

## Vor dem Livegang

- [ ] `"entwurf": false`
- [ ] Alle gelben Punkte mit Eugen geklärt
- [ ] Echte Fotos in `public/img/`, Platzhalter ersetzt
- [ ] AutoFit-Logo nur mit Freigabe
- [ ] Impressum vollständig und geprüft
- [ ] Datenschutzerklärung aus geprüfter Quelle, inkl. Bewerbungen
- [ ] Hosting bei deutschem Anbieter, Domain `kfz-koslowsky.de` umziehen
- [ ] In `astro.config.mjs`: `site` auf die Domain, `base` löschen
- [ ] Kontaktformular ja/nein entscheiden (braucht Server oder Formulardienst)
- [ ] Google-Unternehmensprofil prüfen und verlinken
