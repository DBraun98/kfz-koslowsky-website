// @ts-check
import { defineConfig } from 'astro/config';

// Entwurf auf GitHub Pages:
//   site = https://<dein-github-name>.github.io
//   base = /<repo-name>   (muss exakt dem Namen des Repos entsprechen)
//
// Livegang auf eigener Domain:
//   site = https://www.kfz-koslowsky.de
//   base-Zeile löschen
export default defineConfig({
  site: 'https://dbraun98.github.io',
  base: '/kfz-koslowsky-website',
});
