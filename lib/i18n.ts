export type Lang = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      logo: "Artisan du Business",
    },
    hero: {
      title: "Vos clients vous cherchent.\nIls ne vous trouvent pas.",
      subtitle:
        "Chaque mois, des prospects qualifiés cherchent vos services sur Google Maps — et cliquent sur un concurrent mieux référencé. Artisan du Business mesure exactement ce que vous perdez.",
      cta: "Recevoir mon rapport gratuit",
      scoreLabel: "31 / 100 — Zone critique",
      chips: [
        { label: "Note Google : 4,2/5 — 6 avis seulement", type: "amber" },
        { label: "Avis totaux : 6 — Objectif : 30+", type: "red" },
        { label: "Classement local : #11 sur 18", type: "red" },
        { label: "Pack local Google : Absent", type: "red" },
      ],
    },
    problems: {
      title: "Ce que Google Maps révèle sur vous",
      cards: [
        {
          icon: "star",
          title: "Peu ou pas d'avis Google",
          body: "Un prospect compare les fiches en 10 secondes. Sans avis, vous n'existez pas dans sa décision.",
        },
        {
          icon: "location",
          title: "Absent du pack local Maps",
          body: "Les 3 premiers résultats captent 70% des clics. Si vous n'y êtes pas, vos concurrents prennent vos clients.",
        },
        {
          icon: "alert",
          title: "Avis négatifs sans réponse",
          body: "Le silence face à une critique publique confirme l'accusation aux yeux de chaque nouveau visiteur.",
        },
      ],
    },
    how: {
      title: "Simple. Concret. Actionnable.",
      steps: [
        {
          num: "01",
          title: "Rapport gratuit",
          body: "Score de visibilité, 3 points de friction prioritaires, position estimée face à la concurrence locale. Livré sur simple demande par email.",
          badge: "Gratuit",
        },
        {
          num: "02",
          title: "Rapport complet",
          body: "Classement précis parmi vos concurrents locaux, plan d'action 90 jours, protocole d'avis clients, recommandations SEO local actionnables.",
          badge: "149 CHF",
        },
        {
          num: "03",
          title: "Suivi mensuel",
          body: "Suivi de progression, alertes concurrentielles, nouvelles recommandations chaque mois. Résiliable à tout moment.",
          badge: "49 €/mois",
        },
      ],
    },
    pricing: {
      title: "Transparent. Sans surprise.",
      free: {
        tag: "Rapport gratuit",
        price: "0 CHF",
        sub: "Sur demande par email",
        items: [
          "Score de visibilité",
          "3 points de friction identifiés",
          "Position vs concurrence (aperçu)",
        ],
        cta: "Demander le rapport →",
      },
      full: {
        tag: "Rapport complet",
        price: "149 CHF",
        sub: "Livré par email sous 48h",
        items: [
          "Analyse concurrentielle complète",
          "Classement local précis",
          "Plan d'action 90 jours",
          "Protocole d'avis clients",
          "Recommandations SEO local",
          "6 publications Google Business",
        ],
        cta: "Commander →",
      },
    },
    contact: {
      title: "Prêt à savoir où vous en êtes ?",
      subtitle: "Remplissez le formulaire — je vous envoie votre rapport gratuit sous 24h.",
      fields: {
        name: "Votre nom",
        email: "Votre email",
        company: "Nom de votre entreprise",
      },
      cta: "Envoyer",
    },
    footer: {
      copy: "© 2026 Artisan du Business — Seddik",
    },
  },
  en: {
    nav: {
      logo: "Artisan du Business",
    },
    hero: {
      title: "Your clients are searching.\nThey can't find you.",
      subtitle:
        "Every month, qualified prospects search for your services on Google Maps — and click on a better-ranked competitor. Artisan du Business measures exactly what you're losing.",
      cta: "Get my free report",
      scoreLabel: "31 / 100 — Critical zone",
      chips: [
        { label: "Google rating: 4.2/5 — 6 reviews only", type: "amber" },
        { label: "Total reviews: 6 — Target: 30+", type: "red" },
        { label: "Local ranking: #11 of 18", type: "red" },
        { label: "Google local pack: Absent", type: "red" },
      ],
    },
    problems: {
      title: "What Google Maps reveals about you",
      cards: [
        {
          icon: "star",
          title: "Few or no Google reviews",
          body: "A prospect compares listings in 10 seconds. Without reviews, you don't exist in their decision.",
        },
        {
          icon: "location",
          title: "Missing from Google Maps local pack",
          body: "The top 3 results capture 70% of clicks. If you're not there, competitors take your clients.",
        },
        {
          icon: "alert",
          title: "Negative reviews with no response",
          body: "Silence in the face of public criticism confirms the accusation to every new visitor.",
        },
      ],
    },
    how: {
      title: "Simple. Concrete. Actionable.",
      steps: [
        {
          num: "01",
          title: "Free report",
          body: "Visibility score, top 3 friction points, estimated position vs local competitors. Delivered on request by email.",
          badge: "Free",
        },
        {
          num: "02",
          title: "Full report",
          body: "Precise ranking among local competitors, 90-day action plan, client review protocol, actionable local SEO recommendations.",
          badge: "149 CHF",
        },
        {
          num: "03",
          title: "Monthly follow-up",
          body: "Progress tracking, competitive alerts, new monthly recommendations. Cancel anytime.",
          badge: "€49/month",
        },
      ],
    },
    pricing: {
      title: "Transparent. No surprises.",
      free: {
        tag: "Free report",
        price: "0 CHF",
        sub: "On request by email",
        items: [
          "Visibility score",
          "3 friction points identified",
          "Position vs competition (preview)",
        ],
        cta: "Request the report →",
      },
      full: {
        tag: "Full report",
        price: "149 CHF",
        sub: "Delivered within 48h",
        items: [
          "Full competitive analysis",
          "Precise local ranking",
          "90-day action plan",
          "Client review protocol",
          "Local SEO recommendations",
          "6 Google Business posts",
        ],
        cta: "Order →",
      },
    },
    contact: {
      title: "Ready to find out where you stand?",
      subtitle: "Fill the form — I'll send your free report within 24 hours.",
      fields: {
        name: "Your name",
        email: "Your email",
        company: "Company name",
      },
      cta: "Send",
    },
    footer: {
      copy: "© 2026 Artisan du Business — Seddik",
    },
  },
} as const;

export type Translations = typeof translations[Lang];
