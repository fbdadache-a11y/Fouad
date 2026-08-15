/* ════════════════════════════════════════
   ICONS (inline SVG helpers)
════════════════════════════════════════ */
const ICONS = {
  arrowRight:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  externalLink: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  menu:         `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  close:        `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  chevDown:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  mapPin:       `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  mail:         `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  mailLg:       `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  mailMd:       `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  linkedin:     `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  linkedinLg:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  phone:        `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8a16 16 0 0 0 6 6l.88-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.92v1z"/></svg>`,
  briefcase:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12.01"/></svg>`,
  calendar:     `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  mapPinSm:     `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  mapPinMd:     `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  check:        `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  trendingUp:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  users:        `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  globe:        `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  monitor:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  palette:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  megaphone:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`,
  cpu:          `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
  clipboard:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,
};

/* ════════════════════════════════════════
   ICON KEY HELPER
   data.js uses kebab-case icon keys (e.g. "trending-up") for readability;
   ICONS above is keyed camelCase. Normalize before lookup.
════════════════════════════════════════ */
function getIcon(key) {
  if (!key) return '';
  const camel = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  return ICONS[camel] || ICONS[key] || '';
}

/* ════════════════════════════════════════
   STATE
════════════════════════════════════════ */
const RTL_LANGS = ['ar'];
let lang = (() => {
  try {
    const saved = localStorage.getItem('fd-lang');
    if (saved && DATA[saved]) return saved;
  } catch (e) { /* localStorage unavailable — fall back silently */ }
  return 'en';
})();

/* ════════════════════════════════════════
   RENDER
════════════════════════════════════════ */
function render() {
  const t  = DATA[lang];
  const p  = { ...DATA.personal, ...(DATA.personalByLang[lang] || {}) };

  /* ── DOCUMENT DIRECTION / LANGUAGE ── */
  const isRTL = RTL_LANGS.includes(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir  = isRTL ? 'rtl' : 'ltr';

  /* ── WELCOME ── */
  document.getElementById('welcome-name').textContent      = p.short;
  document.getElementById('welcome-greeting').textContent = t.welcome.greeting;
  document.getElementById('welcome-sub').textContent      = t.welcome.sub;
  document.getElementById('welcome-cta').innerHTML        = `${t.welcome.cta} ${ICONS.arrowRight}`;

  /* ── NAV ── */
  ['about','experience','projects','skills','contact'].forEach(id => {
    const el = document.getElementById(`nav-${id}`);
    if (el) el.textContent = t.nav[id];
    const del = document.getElementById(`dnav-${id}`);
    if (del) del.textContent = t.nav[id];
  });

  /* ── HERO ── */
  document.getElementById('hero-badge').innerHTML        = `<span class="badge-dot"></span>${t.hero.badge}`;
  document.getElementById('hero-headline').innerHTML     = t.hero.headline.map(l => `<span>${l}</span>`).join('<br>');
  document.getElementById('hero-sub').textContent        = t.hero.sub;
  document.getElementById('hero-scroll-label').textContent = t.hero.scroll;
  document.getElementById('btn-email-hero').innerHTML    = `${ICONS.mailMd} ${t.contact.emailLbl}`;
  document.getElementById('btn-li-hero').innerHTML       = `${ICONS.linkedin} LinkedIn`;
  document.getElementById('hero-location').textContent    = p.location;

  const cvHero = document.getElementById('btn-cv-hero');
  if (cvHero) {
    cvHero.href = t.contact.cvFile;
    cvHero.setAttribute('download', t.contact.cvFile.split('/').pop());
    document.getElementById('btn-cv-hero-label').textContent = t.contact.cvLbl;
  }

  /* ── ABOUT ── */
  document.getElementById('about-label').textContent   = t.about.label;
  document.getElementById('about-title').textContent   = t.about.title;
  document.getElementById('about-bio1').textContent    = t.about.bio1;
  document.getElementById('about-bio2').textContent    = t.about.bio2;

  // Stats
  const statsEl = document.getElementById('about-stats');
  statsEl.innerHTML = t.about.stats.map(s => `
    <div class="stat-card reveal">
      <div class="stat-icon">${getIcon(s.icon)}</div>
      <span class="stat-value">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>`).join('');

  // Education
  document.getElementById('edu-label').textContent = t.about.eduLabel;
  document.getElementById('edu-grid').innerHTML = t.about.edu.map(e => `
    <div class="edu-item">
      <div class="edu-meta">
        <span class="edu-period">${e.period}</span>
        <span class="edu-location">${e.loc}</span>
      </div>
      <p class="edu-degree">${e.degree}</p>
      <p class="edu-inst">${e.inst}</p>
    </div>`).join('');

  /* ── EXPERIENCE ── */
  document.getElementById('exp-label').textContent = t.experience.label;
  document.getElementById('exp-title').textContent = t.experience.title;
  document.getElementById('exp-list').innerHTML = t.experience.items.map(item => `
    <article class="exp-card reveal">
      <div class="exp-header">
        <div class="exp-icon">${ICONS.briefcase}</div>
        <div>
          <h3 class="exp-role">${item.role}</h3>
          <span class="exp-org">${item.org}</span>
        </div>
      </div>
      <div class="exp-meta">
        <span class="exp-meta-item">${ICONS.mapPinSm} ${item.loc}</span>
        <span class="exp-meta-item">${ICONS.calendar} ${item.period}</span>
      </div>
      <div class="exp-divider"></div>
      <ul class="exp-bullets">
        ${item.bullets.map(b => `
          <li class="exp-bullet">
            <span class="bullet-icon">${ICONS.check}</span>
            <span>${b}</span>
          </li>`).join('')}
      </ul>
    </article>`).join('');

  /* ── PROJECTS ── */
  if (t.projects) {
    document.getElementById('projects-label').textContent = t.projects.label;
    document.getElementById('projects-title').textContent = t.projects.title;
    document.getElementById('projects-grid').innerHTML = t.projects.items.map(p => `
      <a class="project-card reveal" href="${p.url}" target="_blank" rel="noopener noreferrer" data-cursor="view" aria-label="${p.cta}: ${p.name}">
        <div class="project-thumb">
          <div class="project-thumb-placeholder">
            <span>${p.name}</span>
            <span>${p.urlLabel}</span>
          </div>
          <div class="project-thumb-overlay">
            <span class="project-visit">${ICONS.externalLink} ${p.cta}</span>
          </div>
        </div>
        <div class="project-body">
          <div class="project-body-top">
            <div>
              <h3 class="project-name">${p.name}</h3>
              <span class="project-tag">${p.tag}</span>
            </div>
            <span class="project-arrow" aria-hidden="true">${ICONS.externalLink}</span>
          </div>
          <p class="project-desc">${p.desc}</p>
          <span class="project-url" dir="ltr">${p.urlLabel}</span>
        </div>
      </a>`).join('');
  }

  /* ── SKILLS ── */
  document.getElementById('skills-label').textContent = t.skills.label;
  document.getElementById('skills-title').textContent = t.skills.title;
  document.getElementById('skills-grid').innerHTML = t.skills.cats.map(c => `
    <div class="skill-card reveal">
      <div class="skill-card-header">
        <div class="skill-icon">${getIcon(c.icon)}</div>
        <h3 class="skill-name">${c.name}</h3>
      </div>
      <ul class="skill-items">
        ${c.items.map(i => `<li class="skill-item">${i}</li>`).join('')}
      </ul>
    </div>`).join('');

  // Language bars
  document.getElementById('lang-label').textContent = t.skills.langLabel;
  document.getElementById('lang-bars').innerHTML = t.skills.langs.map(l => `
    <div class="lang-row">
      <div class="lang-row-header">
        <span class="lang-name">${l.name}</span>
        <span class="lang-level">${l.level}</span>
      </div>
      <div class="lang-track">
        <div class="lang-fill" data-pct="${l.pct}"></div>
      </div>
    </div>`).join('');

  /* ── CONTACT ── */
  document.getElementById('contact-label').textContent = t.contact.label;
  document.getElementById('contact-title').textContent = t.contact.title;
  document.getElementById('contact-sub').textContent   = t.contact.sub;
  document.getElementById('contact-email-label').textContent = t.contact.emailLbl;
  document.getElementById('contact-li-label').textContent    = t.contact.liLbl;
  document.getElementById('contact-location').textContent    = p.location;

  const cvCard = document.getElementById('contact-cv-card');
  if (cvCard) {
    cvCard.href = t.contact.cvFile;
    cvCard.setAttribute('download', t.contact.cvFile.split('/').pop());
    document.getElementById('contact-cv-label').textContent = t.contact.cvLbl;
    document.getElementById('contact-cv-value').textContent = t.contact.cvValue;
  }

  /* ── FOOTER ── */
  document.getElementById('footer-built').textContent  = t.footer.built;
  document.getElementById('footer-rights').textContent = `© ${new Date().getFullYear()} — ${t.footer.rights}`;

  /* Re-trigger scroll reveal after re-render */
  observeReveal();
  animateLangBars();
}

/* ════════════════════════════════════════
   LANG SWITCH
════════════════════════════════════════ */
function setLang(l) {
  if (!DATA[l]) return;
  lang = l;
  try { localStorage.setItem('fd-lang', l); } catch (e) { /* ignore */ }
  // Sync all lang buttons
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === l);
  });
  render();
}

/* ════════════════════════════════════════
   WELCOME → ENTER
════════════════════════════════════════ */
function enterSite() {
  const welcome = document.getElementById('welcome');
  const site    = document.getElementById('site');
  welcome.classList.add('leaving');
  setTimeout(() => {
    welcome.style.display = 'none';
    site.classList.add('visible');
    document.body.style.overflow = '';
  }, 600);
}

/* ════════════════════════════════════════
   NAVBAR SCROLL + ACTIVE SECTION
════════════════════════════════════════ */
const SECTIONS = ['about','experience','projects','skills','contact'];

function updateNav() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  let current = '';
  SECTIONS.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  document.querySelectorAll('.nav-link, .drawer-link').forEach(link => {
    const target = link.dataset.section;
    link.classList.toggle('active', target === current);
  });
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  closeDrawer();
}

/* ════════════════════════════════════════
   DRAWER
════════════════════════════════════════ */
function openDrawer() {
  document.getElementById('drawer').classList.add('open');
  document.querySelector('.drawer-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.querySelector('.drawer-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ════════════════════════════════════════
   SCROLL REVEAL
════════════════════════════════════════ */
function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '-40px' });

  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('visible');
    io.observe(el);
  });
}

/* ════════════════════════════════════════
   LANGUAGE BAR ANIMATION
════════════════════════════════════════ */
function animateLangBars() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const pct = e.target.dataset.pct;
        e.target.style.width = pct + '%';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.lang-fill').forEach(el => io.observe(el));
}

/* ════════════════════════════════════════
   BOOT
════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  /* Prevent scroll while welcome is showing */
  document.body.style.overflow = 'hidden';

  /* Sync lang buttons to restored language, then render */
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  render();

  /* Welcome CTA */
  document.getElementById('welcome-cta').addEventListener('click', enterSite);

  /* Lang buttons — welcome */
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  /* Nav scroll */
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* Nav links */
  document.querySelectorAll('[data-section]').forEach(link => {
    link.addEventListener('click', () => scrollToSection(link.dataset.section));
  });

  /* Logo → top */
  document.querySelectorAll('.nav-logo').forEach(el => {
    el.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  });

  /* Hamburger */
  document.getElementById('hamburger').addEventListener('click', openDrawer);
  document.getElementById('drawer-close').addEventListener('click', closeDrawer);
  document.querySelector('.drawer-overlay').addEventListener('click', closeDrawer);

  /* Scroll hint */
  document.getElementById('scroll-hint').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });

  /* Staggered reveal on initial hero elements */
  document.querySelectorAll('.hero-reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 120);
  });
});
