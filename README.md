# Fouad Dadache — Personal Portfolio

Static HTML/CSS/JS — no build step, no Node.js, no dependencies.
Trilingual: English, French, Arabic (with full RTL layout).

## Structure

```
fouad-site/
├── index.html          ← Single HTML page
├── css/
│   ├── tokens.css       ← Design tokens (colors, fonts, spacing) + RTL font rules
│   ├── layout.css       ← All component styles + responsive + RTL layout mirroring
│   └── interactions.css ← Custom cursor, magnetic buttons, photo tilt, scroll progress, hover polish
├── js/
│   ├── data.js           ← All content in English, French & Arabic
│   ├── main.js            ← Rendering, navigation, language persistence
│   └── interactions.js    ← Cursor/tilt/magnetic/scroll-progress behavior (desktop only)
└── assets/
    ├── photo.jpg                  ← Hero portrait
    ├── Fouad_Dadache_CV_EN.pdf    ← Downloadable CV (English, ATS-friendly)
    └── Fouad_Dadache_CV_FR.pdf    ← Downloadable CV (French, ATS-friendly)
```

## Language / RTL Notes

- Switching to Arabic sets `dir="rtl"` on `<html>` and swaps the font pairing
  to Amiri (serif) + Noto Kufi Arabic (sans) — see `tokens.css`.
- The chosen language is remembered via `localStorage` (`fd-lang`), so
  returning visitors land back in the same language.
- Email, phone number, LinkedIn URL, and project URLs stay left-to-right even
  in RTL mode (wrapped in `dir="ltr"`), since mixing direction on Latin
  strings inside an RTL sentence breaks readability.
- To edit Arabic content, edit `DATA.ar` in `js/data.js`. Name/location
  overrides per language live in `DATA.personalByLang`.
- The Arabic CV download currently falls back to the English PDF (no
  dedicated Arabic CV exists yet) — update `DATA.ar.contact.cvFile` in
  `js/data.js` if you add one.

## Interactive Polish (desktop only)

`interactions.js` adds a custom cursor, magnetic button pull, hero-photo
tilt/shine, and a scroll progress bar. All of it is gated behind
`(hover: hover) and (pointer: fine)` and `prefers-reduced-motion` checks, so
touch devices and reduced-motion preferences get the plain, accessible
experience automatically — no separate code path needed.

## Projects Section

Pulls from `DATA.<lang>.projects.items` in `data.js`. Each entry needs
`name`, `tag`, `desc`, `url`, `urlLabel`, and `cta`. There's no real
screenshot yet, so cards show a text placeholder — drop a real image at
`assets/<project>-preview.jpg` and reference it in `main.js`'s
`.project-thumb-placeholder` block to upgrade it to a real `<img>`.

## Editing the CV PDFs

The PDFs are generated from a script (not hand-edited) to guarantee they
stay ATS-parseable: single column, standard section headers (PROFILE,
EXPERIENCE, PROJECTS, EDUCATION, SKILLS, LANGUAGES), real selectable text,
no tables or icons standing in for words. If you update `data.js`, regenerate
the PDFs from the same content so the website and the CV never drift apart.

## Edit Content

All text (EN + FR + AR) is in `js/data.js`. Edit `DATA.en`, `DATA.fr`, `DATA.ar`.

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
