const DATA = {
  personal: {
    name:     "Fouad Bahaeddin Dadache",
    short:    "Fouad Dadache",
    email:    "Fbdadache@gmail.com",
    phone:    "0799647870",
    location: "Bordj Bou Arreridj, Algeria",
    linkedin: "https://www.linkedin.com/in/fouad-b-dadache-ab1907410",
  },

  /* Per-language display overrides for fields that shouldn't be literally
     translated (name order, location name, phone formatting). */
  personalByLang: {
    ar: {
      name:     "فؤاد بهاء الدين دادش",
      short:    "فؤاد دادش",
      location: "برج بوعريريج، الجزائر",
    },
    fr: {
      location: "Bordj Bou Arréridj, Algérie",
    },
  },

  en: {
    welcome: {
      greeting: "Welcome",
      sub:      "Glad you're here.",
      cta:      "Enter Portfolio",
    },
    nav: { about: "About", experience: "Experience", skills: "Skills", contact: "Contact" },
    hero: {
      badge:    "Open to opportunities",
      headline: ["Business student,", "AI-assisted builder", "& designer."],
      sub:      "Second-year Business Administration student at Mohamed El Bachir El Ibrahimi University. I combine business fundamentals with vibe coding and design to turn ideas into working products — open to remote, on-site, or internship opportunities.",
      scroll:   "Scroll to explore",
    },
    about: {
      label: "About Me",
      title: "A student who builds while learning.",
      bio1:  "I'm Fouad, a second-year Business Administration student at the University of Mohamed El Bachir El Ibrahimi in Bordj Bou Arreridj, Algeria. My work blends business thinking with hands-on building — I use AI-assisted development (vibe coding) and design tools to ship real projects, not just plan them on paper.",
      bio2:  "My path started with co-founding a student club, where I picked up community management and administrative coordination — and it's since grown into building websites and visual content with AI tools. I'm open to remote, on-site, or internship opportunities where I can apply this mix of business, design, and AI-assisted development.",
      stats: [
        { value: "2nd",  label: "Year, Business Administration", icon: "trending-up" },
        { value: "1",    label: "Website built solo (ECONOVO)",  icon: "monitor" },
        { value: "3",    label: "Languages spoken",              icon: "globe" },
      ],
      eduLabel: "Education",
      edu: [
        {
          degree:  "Bachelor in Business Administration (2nd year)",
          inst:    "Université Mohamed El Bachir El Ibrahimi",
          loc:     "Bordj Bou Arreridj, Algeria",
          period:  "2025 — 2028",
        },
        {
          degree:  "Claude AI 101 — Applied Artificial Intelligence Certification",
          inst:    "Anthropic",
          loc:     "Online",
          period:  "2025",
        },
      ],
    },
    experience: {
      label: "Experience",
      title: "Where I started building.",
      items: [
        {
          role:   "Co-founder & Communication and Administration Manager",
          org:    "Student Club ECONOVO",
          loc:    "Université Mohamed El Bachir El Ibrahimi, BBA",
          period: "December 2025 — Present",
          bullets: [
            "Designed and built the club's website solo — from layout to content, with no external help.",
            "Planned and coordinated the club's launch event, gathering 39 participants — managing full logistics, communication, and on-site welcome.",
            "Created and published visual content on Facebook and Instagram that achieved 4,500 organic views in 24 hours — with zero advertising budget.",
            "Designed the complete visual identity of the club: logo, brand guidelines, posters, and presentation materials using Canva and PowerPoint.",
            "Drafted official correspondence addressed to the University Dean to obtain the necessary administrative authorisations.",
            "Set up a member database via Google Forms connected to Google Sheets, enabling automated tracking of 39+ registrants.",
          ],
        },
      ],
    },
    skills: {
      label: "Skills",
      title: "Tools & capabilities.",
      cats: [
        { name: "AI-Assisted Development", icon: "cpu",       items: ["Vibe Coding", "Claude AI", "ChatGPT", "AI-assisted Research"] },
        { name: "Design & Content",        icon: "palette",   items: ["Canva", "Visual Identity", "Poster Creation", "Presentation Design"] },
        { name: "Digital Marketing",       icon: "megaphone", items: ["Facebook & Instagram", "Organic Content Strategy", "Community Management"] },
        { name: "Office & Productivity",   icon: "monitor",   items: ["Microsoft Word", "PowerPoint", "Google Sheets", "Google Forms", "Google Drive"] },
        { name: "Administration",          icon: "clipboard", items: ["Official Correspondence", "Document Management", "Event Coordination", "Database Management"] },
      ],
      langLabel: "Languages",
      langs: [
        { name: "Arabic",  level: "Native",       pct: 100 },
        { name: "French",  level: "Intermediate", pct: 60 },
        { name: "English", level: "Intermediate", pct: 60 },
      ],
    },
    contact: {
      label:    "Contact",
      title:    "Let's connect.",
      sub:      "Open to remote, on-site, or internship opportunities.",
      emailLbl: "Send an email",
      liLbl:    "Connect on LinkedIn",
    },
    footer: {
      built:  "Designed & built by Fouad Dadache",
      rights: "All rights reserved.",
    },
  },

  fr: {
    welcome: {
      greeting: "Bienvenue",
      sub:      "Ravi de vous accueillir.",
      cta:      "Entrer dans le portfolio",
    },
    nav: { about: "À propos", experience: "Expérience", skills: "Compétences", contact: "Contact" },
    hero: {
      badge:    "Ouvert aux opportunités",
      headline: ["Étudiant en gestion,", "bâtisseur assisté par l'IA", "& designer."],
      sub:      "Étudiant en 2ème année de Licence en Administration des Affaires à l'Université Mohamed El Bachir El Ibrahimi. Je combine les fondamentaux de la gestion avec le vibe coding et le design pour transformer des idées en produits concrets — ouvert au remote, au présentiel ou aux stages.",
      scroll:   "Défiler pour explorer",
    },
    about: {
      label: "À propos",
      title: "Un étudiant qui construit en apprenant.",
      bio1:  "Je suis Fouad, étudiant en 2ème année de Licence en Administration des Affaires à l'Université de Mohamed El Bachir El Ibrahimi à Bordj Bou Arreridj, Algérie. Mon travail allie la réflexion business à la construction concrète — j'utilise le développement assisté par IA (vibe coding) et des outils de design pour livrer de vrais projets, pas seulement les planifier sur papier.",
      bio2:  "Mon parcours a commencé par la cofondation d'un club étudiant, où j'ai appris la gestion de communauté et la coordination administrative — et s'est depuis étendu à la création de sites web et de contenus visuels avec des outils d'IA. Je suis ouvert à des opportunités à distance, en présentiel ou en stage où je peux appliquer ce mélange de gestion, design et développement assisté par IA.",
      stats: [
        { value: "2e",   label: "Année, Administration des Affaires", icon: "trending-up" },
        { value: "1",    label: "Site web construit seul (ECONOVO)",  icon: "monitor" },
        { value: "3",    label: "Langues parlées",                    icon: "globe" },
      ],
      eduLabel: "Formation",
      edu: [
        {
          degree:  "Licence en Administration des Affaires (2ème année)",
          inst:    "Université Mohamed El Bachir El Ibrahimi",
          loc:     "Bordj Bou Arreridj, Algérie",
          period:  "2025 — 2028",
        },
        {
          degree:  "Claude AI 101 — Certification en Intelligence Artificielle appliquée",
          inst:    "Anthropic",
          loc:     "En ligne",
          period:  "2025",
        },
      ],
    },
    experience: {
      label: "Expérience",
      title: "Là où j'ai commencé à construire.",
      items: [
        {
          role:   "Cofondateur & Responsable Communication et Administration",
          org:    "Club Étudiant ECONOVO",
          loc:    "Université Mohamed El Bachir El Ibrahimi, BBA",
          period: "Décembre 2025 — Présent",
          bullets: [
            "Conçu et développé seul le site web du club — de la mise en page au contenu, sans aide extérieure.",
            "Planifié et coordonné l'événement de lancement du club ayant réuni 39 participants, en gérant la logistique complète, la communication et l'accueil.",
            "Créé et publié du contenu visuel sur Facebook et Instagram ayant généré 4 500 vues organiques en 24 heures — sans budget publicitaire.",
            "Conçu l'identité visuelle complète du club : logo, charte graphique, affiches, supports de présentation, via Canva et PowerPoint.",
            "Rédigé des correspondances officielles adressées au Doyen de l'université pour l'obtention des autorisations administratives nécessaires.",
            "Mis en place une base de données des membres via Google Forms connecté à Google Sheets, permettant un suivi automatisé de 39+ inscrits.",
          ],
        },
      ],
    },
    skills: {
      label: "Compétences",
      title: "Outils & capacités.",
      cats: [
        { name: "Développement assisté par IA", icon: "cpu",       items: ["Vibe Coding", "Claude AI", "ChatGPT", "Recherche assistée par IA"] },
        { name: "Design & Création de contenu", icon: "palette",   items: ["Canva", "Identité visuelle", "Création d'affiches", "Supports de présentation"] },
        { name: "Marketing Digital",             icon: "megaphone", items: ["Facebook & Instagram", "Stratégie de contenu organique", "Animation de communauté"] },
        { name: "Bureautique & Productivité",    icon: "monitor",   items: ["Microsoft Word", "PowerPoint", "Google Sheets", "Google Forms", "Google Drive"] },
        { name: "Compétences administratives",   icon: "clipboard", items: ["Courriers officiels", "Gestion documentaire", "Coordination d'événements", "Bases de données"] },
      ],
      langLabel: "Langues",
      langs: [
        { name: "Arabe",    level: "Langue maternelle", pct: 100 },
        { name: "Français", level: "Intermédiaire",     pct: 60 },
        { name: "Anglais",  level: "Intermédiaire",     pct: 60 },
      ],
    },
    contact: {
      label:    "Contact",
      title:    "Connectons-nous.",
      sub:      "Ouvert au remote, au présentiel ou aux stages.",
      emailLbl: "Envoyer un e-mail",
      liLbl:    "Se connecter sur LinkedIn",
    },
    footer: {
      built:  "Conçu & développé par Fouad Dadache",
      rights: "Tous droits réservés.",
    },
  },

  ar: {
    welcome: {
      greeting: "أهلاً بك",
      sub:      "يسعدني وجودك هنا.",
      cta:      "الدخول إلى الموقع",
    },
    nav: { about: "نبذة", experience: "الخبرة", skills: "المهارات", contact: "تواصل" },
    hero: {
      badge:    "متاح لأي فرصة مناسبة",
      headline: ["طالب إدارة أعمال،", "وباني منتجات بمساعدة الذكاء الاصطناعي", "ومصمم."],
      sub:      "طالب سنة ثانية إدارة أعمال بجامعة محمد البشير الإبراهيمي. أجمع بين أساسيات إدارة الأعمال وVibe Coding والتصميم لتحويل الأفكار إلى منتجات فعلية — متاح للعمل عن بُعد أو حضوريًا أو للتدريب.",
      scroll:   "مرّر للأسفل لاستكشاف المزيد",
    },
    about: {
      label: "نبذة عني",
      title: "طالب يبني وهو يتعلّم.",
      bio1:  "أنا فؤاد، طالب سنة ثانية إدارة أعمال بجامعة محمد البشير الإبراهيمي في برج بوعريريج، الجزائر. يجمع عملي بين التفكير الإداري والبناء الفعلي — أستخدم البرمجة بمساعدة الذكاء الاصطناعي (Vibe Coding) وأدوات التصميم لإنجاز مشاريع حقيقية، لا مجرد التخطيط لها على الورق.",
      bio2:  "بدأت مساري بالمشاركة في تأسيس نادٍ طلابي، حيث اكتسبت مهارات إدارة المجتمعات والتنسيق الإداري — وتطور منذ ذلك الوقت ليشمل بناء المواقع والمحتوى البصري باستخدام أدوات الذكاء الاصطناعي. أنا متاح لفرص عمل عن بُعد أو حضورية أو تدريب أستطيع من خلالها توظيف هذا المزيج من إدارة الأعمال والتصميم والبرمجة بمساعدة الذكاء الاصطناعي.",
      stats: [
        { value: "الثانية", label: "سنة دراسية، إدارة أعمال",        icon: "trending-up" },
        { value: "1",       label: "موقع ويب بنيته بمفردي (ECONOVO)", icon: "monitor" },
        { value: "3",       label: "لغات يتحدث بها",                  icon: "globe" },
      ],
      eduLabel: "المسار الدراسي",
      edu: [
        {
          degree:  "ليسانس في إدارة الأعمال (السنة الثانية)",
          inst:    "جامعة محمد البشير الإبراهيمي",
          loc:     "برج بوعريريج، الجزائر",
          period:  "2025 — 2028",
        },
        {
          degree:  "Claude AI 101 — شهادة في الذكاء الاصطناعي التطبيقي",
          inst:    "Anthropic",
          loc:     "عبر الإنترنت",
          period:  "2025",
        },
      ],
    },
    experience: {
      label: "الخبرة",
      title: "من أين بدأت البناء.",
      items: [
        {
          role:   "شريك مؤسس ومسؤول التواصل والإدارة",
          org:    "نادي ECONOVO الطلابي",
          loc:    "جامعة محمد البشير الإبراهيمي، برج بوعريريج",
          period: "ديسمبر 2025 — إلى الآن",
          bullets: [
            "صممت وبنيت موقع النادي الإلكتروني بمفردي بالكامل — من التصميم إلى المحتوى، دون أي مساعدة خارجية.",
            "خطّطت ونسّقت فعالية إطلاق النادي بحضور 39 مشاركًا، مع إدارة كاملة للّوجستيات والتواصل واستقبال الحضور.",
            "أنشأت ونشرت محتوى بصريًا على فيسبوك وإنستغرام حقق 4500 مشاهدة عضوية خلال 24 ساعة — دون أي ميزانية إعلانية.",
            "صممت الهوية البصرية الكاملة للنادي: الشعار، دليل العلامة، الملصقات، ومواد العرض باستخدام Canva وPowerPoint.",
            "حررت مراسلات رسمية موجهة إلى عميد الجامعة للحصول على التصاريح الإدارية اللازمة.",
            "أنشأت قاعدة بيانات للأعضاء عبر Google Forms مرتبطة بـ Google Sheets، مما مكّن من تتبع آلي لأكثر من 39 مسجَّلًا.",
          ],
        },
      ],
    },
    skills: {
      label: "المهارات",
      title: "الأدوات والقدرات.",
      cats: [
        { name: "البرمجة بمساعدة الذكاء الاصطناعي", icon: "cpu",       items: ["Vibe Coding", "Claude AI", "ChatGPT", "البحث بمساعدة الذكاء الاصطناعي"] },
        { name: "التصميم وصناعة المحتوى",           icon: "palette",   items: ["Canva", "الهوية البصرية", "تصميم الملصقات", "تصميم العروض"] },
        { name: "التسويق الرقمي",                   icon: "megaphone", items: ["فيسبوك وإنستغرام", "استراتيجية المحتوى العضوي", "إدارة المجتمعات"] },
        { name: "المكتبية والإنتاجية",               icon: "monitor",   items: ["Microsoft Word", "PowerPoint", "Google Sheets", "Google Forms", "Google Drive"] },
        { name: "المهارات الإدارية",                 icon: "clipboard", items: ["المراسلات الرسمية", "إدارة الوثائق", "تنسيق الفعاليات", "إدارة قواعد البيانات"] },
      ],
      langLabel: "اللغات",
      langs: [
        { name: "العربية",    level: "اللغة الأم", pct: 100 },
        { name: "الفرنسية",   level: "متوسط",      pct: 60 },
        { name: "الإنجليزية", level: "متوسط",      pct: 60 },
      ],
    },
    contact: {
      label:    "تواصل",
      title:    "لنبقَ على تواصل.",
      sub:      "متاح لفرص عمل عن بُعد أو حضورية أو تدريب.",
      emailLbl: "أرسل بريدًا إلكترونيًا",
      liLbl:    "تواصل عبر LinkedIn",
    },
    footer: {
      built:  "صُمم وبُني بواسطة فؤاد دادش",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};
