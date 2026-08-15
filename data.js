const DATA = {
  personal: {
    name:     "Fouad Bahaeddin Dadache",
    short:    "Fouad Dadache",
    email:    "Fbdadache@gmail.com",
    phone:    "0799647870",
    location: "Bordj Bou Arreridj, Algeria",
    linkedin: "https://www.linkedin.com/in/fouad-b-dadache-ab1907410",
  },

  en: {
    welcome: {
      greeting: "Welcome",
      sub:      "Glad you're here.",
      cta:      "Enter Portfolio",
    },
    nav: { about: "About", experience: "Experience", skills: "Skills", contact: "Contact" },
    hero: {
      badge:    "Open to remote opportunities",
      headline: ["Business student,", "community builder", "& digital creator."],
      sub:      "Co-founder of ECONOVO, first-year Business Administration student at Mohamed El Bachir El Ibrahimi University. I bridge academic rigour with hands-on community leadership and digital storytelling.",
      scroll:   "Scroll to explore",
    },
    about: {
      label: "About Me",
      title: "A student who builds while learning.",
      bio1:  "I'm Fouad, a first-year Business Administration student at the University of Mohamed El Bachir El Ibrahimi in Bordj Bou Arreridj, Algeria. In December 2025, I co-founded ECONOVO — a student club that generated 4,500 organic views in a single day and brought together 39 participants at its inaugural event.",
      bio2:  "My work sits at the intersection of administrative coordination, digital communication, and AI tools. I'm available for remote or on-site roles where I can apply my skills in content creation, community management, and organisational support.",
      stats: [
        { value: "4 500+", label: "Organic views in 24 h",    icon: "trending-up" },
        { value: "39",     label: "Event participants",        icon: "users" },
        { value: "3",      label: "Languages spoken",          icon: "globe" },
      ],
      eduLabel: "Education",
      edu: [
        {
          degree:  "Bachelor in Business Administration (1st year, Common Core)",
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
      title: "What I've built so far.",
      items: [
        {
          role:   "Co-founder & Communication & Administration Manager",
          org:    "Student Club ECONOVO",
          loc:    "Université Mohamed El Bachir El Ibrahimi, BBA",
          period: "December 2025 — Present",
          bullets: [
            "Planned and coordinated the club's launch event (December 2025), gathering 39 participants — managing full logistics, communication, and on-site welcome.",
            "Created and published visual content on Facebook and Instagram that achieved 4,500 organic views in 24 hours — with zero advertising budget.",
            "Designed the complete visual identity of the club: logo, brand guidelines, posters, and presentation materials using Canva and PowerPoint.",
            "Drafted official correspondence addressed to the University Dean to obtain the necessary administrative authorisations.",
            "Set up a member database via Google Forms connected to Google Sheets, enabling automated tracking of 39+ registrants.",
            "Coordinated with university administration for the validation and regular follow-up of club activities.",
          ],
        },
      ],
    },
    skills: {
      label: "Skills",
      title: "Tools & capabilities.",
      cats: [
        { name: "Office & Productivity",  icon: "monitor",      items: ["Microsoft Word", "PowerPoint", "Google Sheets", "Google Forms", "Google Drive"] },
        { name: "Design & Content",        icon: "palette",      items: ["Canva", "Visual Identity", "Poster Creation", "Presentation Design"] },
        { name: "Digital Marketing",       icon: "megaphone",    items: ["Facebook & Instagram", "Organic Content Strategy", "Community Management"] },
        { name: "Artificial Intelligence", icon: "cpu",          items: ["ChatGPT", "Claude AI", "AI-assisted Research"] },
        { name: "Administration",          icon: "clipboard",    items: ["Official Correspondence", "Document Management", "Event Coordination", "Database Management"] },
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
      sub:      "Available for remote or on-site opportunities.",
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
      badge:    "Disponible en remote",
      headline: ["Étudiant en gestion,", "bâtisseur de communauté", "& créateur digital."],
      sub:      "Cofondateur d'ECONOVO, étudiant en 1ère année de Licence en Administration des Affaires à l'Université Mohamed El Bachir El Ibrahimi. Je conjugue rigueur académique, leadership communautaire et storytelling digital.",
      scroll:   "Défiler pour explorer",
    },
    about: {
      label: "À propos",
      title: "Un étudiant qui construit en apprenant.",
      bio1:  "Je suis Fouad, étudiant en première année de Licence en Administration des Affaires à l'Université de Mohamed El Bachir El Ibrahimi à Bordj Bou Arreridj, Algérie. En décembre 2025, j'ai cofondé ECONOVO — un club étudiant qui a généré 4 500 vues organiques en une seule journée et rassemblé 39 participants lors de son événement inaugural.",
      bio2:  "Mon travail se situe à l'intersection de la coordination administrative, de la communication digitale et des outils d'IA. Je suis disponible pour des postes à distance ou en présentiel où je peux appliquer mes compétences en création de contenu, gestion de communauté et soutien organisationnel.",
      stats: [
        { value: "4 500+", label: "Vues organiques en 24 h",     icon: "trending-up" },
        { value: "39",     label: "Participants à l'événement",   icon: "users" },
        { value: "3",      label: "Langues parlées",              icon: "globe" },
      ],
      eduLabel: "Formation",
      edu: [
        {
          degree:  "Licence en Administration des Affaires (1ère année, Tronc Commun)",
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
      title: "Ce que j'ai construit jusqu'ici.",
      items: [
        {
          role:   "Cofondateur & Responsable Communication et Administration",
          org:    "Club Étudiant ECONOVO",
          loc:    "Université Mohamed El Bachir El Ibrahimi, BBA",
          period: "Décembre 2025 — Présent",
          bullets: [
            "Planifié et coordonné l'événement de lancement du club (décembre 2025) ayant réuni 39 participants, en gérant la logistique complète, la communication et l'accueil.",
            "Créé et publié du contenu visuel sur Facebook et Instagram ayant généré 4 500 vues organiques en 24 heures — sans budget publicitaire.",
            "Conçu l'identité visuelle complète du club : logo, charte graphique, affiches, supports de présentation, via Canva et PowerPoint.",
            "Rédigé des correspondances officielles adressées au Doyen de l'université pour l'obtention des autorisations administratives nécessaires.",
            "Mis en place une base de données des membres via Google Forms connecté à Google Sheets, permettant un suivi automatisé de 39+ inscrits.",
            "Assuré la coordination avec l'administration universitaire pour la validation et le suivi régulier des activités du club.",
          ],
        },
      ],
    },
    skills: {
      label: "Compétences",
      title: "Outils & capacités.",
      cats: [
        { name: "Bureautique & Productivité",    icon: "monitor",   items: ["Microsoft Word", "PowerPoint", "Google Sheets", "Google Forms", "Google Drive"] },
        { name: "Design & Création de contenu",  icon: "palette",   items: ["Canva", "Identité visuelle", "Création d'affiches", "Supports de présentation"] },
        { name: "Marketing Digital",             icon: "megaphone", items: ["Facebook & Instagram", "Stratégie de contenu organique", "Animation de communauté"] },
        { name: "Intelligence Artificielle",     icon: "cpu",       items: ["ChatGPT", "Claude AI", "Recherche assistée par IA"] },
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
      sub:      "Disponible pour des opportunités à distance ou en présentiel.",
      emailLbl: "Envoyer un e-mail",
      liLbl:    "Se connecter sur LinkedIn",
    },
    footer: {
      built:  "Conçu & développé par Fouad Dadache",
      rights: "Tous droits réservés.",
    },
  },
};
