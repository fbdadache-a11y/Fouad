# Fouad Dadache — Personal Portfolio

Static HTML/CSS/JS — no build step, no Node.js, no dependencies.
Trilingual: English, French, Arabic (with full RTL layout).

## Structure

```
fouad-site/
├── index.html        ← Single HTML page
├── css/
│   ├── tokens.css    ← Design tokens (colors, fonts, spacing) + RTL font rules
│   └── layout.css    ← All component styles + responsive + RTL layout mirroring
├── js/
│   ├── data.js       ← All content in English, French & Arabic
│   └── main.js       ← Rendering, animations, interactions, language persistence
└── assets/           ← Put your photo here
```

## Language / RTL Notes

- Switching to Arabic sets `dir="rtl"` on `<html>` and swaps the font pairing
  to Amiri (serif) + Noto Kufi Arabic (sans) — see `tokens.css`.
- The chosen language is remembered via `localStorage` (`fd-lang`), so
  returning visitors land back in the same language.
- Email, phone number, and LinkedIn URL stay left-to-right even in RTL mode
  (wrapped in `dir="ltr"`), since mixing direction on Latin strings inside an
  RTL sentence breaks readability.
- To edit Arabic content, edit `DATA.ar` in `js/data.js`. Name/location
  overrides per language live in `DATA.personalByLang`.

## Add Your Photo

1. Put your photo in `assets/photo.jpg`
2. In `index.html`, find `.hero-photo` and replace the placeholder div with:

```html
<div class="hero-photo">
  <img src="assets/photo.jpg" alt="Fouad Dadache" />
</div>
```

## Edit Content

All text (EN + FR) is in `js/data.js`. Edit `DATA.en` and `DATA.fr`.

## Run Locally

Open `index.html` directly in any browser. Or use any static server:

```bash
# Python
python3 -m http.server 3000

# Node (npx)
npx serve .
```

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/fouad-portfolio.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source: main branch → / (root) → Save**

Your site will be live at `https://YOUR_USERNAME.github.io/fouad-portfolio`

## Deploy to Vercel

```bash
# Just drag & drop the folder on vercel.com
# OR connect the GitHub repo on vercel.com → Import → Deploy
```

Zero configuration needed — Vercel detects static HTML automatically.
