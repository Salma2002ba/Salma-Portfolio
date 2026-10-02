/* ──────────────────────────────────────────────────────────────────
 * lib/data.ts — All portfolio content as typed constants.
 * Components receive data as props — zero hardcoded copy in JSX.
 * ────────────────────────────────────────────────────────────────── */

// ── Types ──

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: "github" | "linkedin" | "dribbble" | "globe";
}

export interface ServiceItem {
  icon: "shield" | "workflow" | "code" | "sparkles" | "users" | "leaf";
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
  bullets?: string[];
}

export interface EducationItem {
  id: string;
  year: string;
  degree: string;
  school: string;
  location: string;
}

export interface ProjectItem {
  title: string;
  tag: string;
  description: string;
  image: string;
  /** Lien public (dépôt GitHub). Absent pour un projet confidentiel. */
  href?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface BlogPost {
  date: string;
  title: string;
  readTime: string;
  excerpt: string;
  href: string;
  slug?: string;
  content?: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface InterestTag {
  label: string;
  active?: boolean;
}

/* Source de vérité du contenu : workflow_cdi/profil/cv_master.md et le profil
 * LinkedIn (audit du 29/09/2026). Rien ici ne doit contredire l'un ou l'autre.
 * AWS, Terraform et Kubernetes restent en « montée en compétences ». */

// ── Navigation ──

export const navLinks: NavLink[] = [
  { label: "À propos", href: "#about" },
  { label: "Parcours", href: "#experience" },
  { label: "Projets", href: "#work" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// ── Social ──

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/salma-baba-353aaa200/", icon: "linkedin" },
  { name: "GitHub", href: "https://github.com/Salma2002ba", icon: "github" },
];

/** CV téléchargeable, dans public/. Généré depuis workflow_cdi/ressources/portfolio
 * (outils\build_cv.ps1 -Dir ressources\portfolio). null masque le bouton. */
export const cvUrl: string | null = "/CV_Salma_BABA.pdf";

// ── Hero ──

export const heroData = {
  eyebrow: "Ingénieure DevOps & DevSecOps",
  headline: "Automatiser.\nSécuriser.\nLivrer.",
  subline:
    "Ingénieure informatique diplômée de Polytech Marseille (2026), trois ans d'alternance au CEA Cadarache. CI/CD, automatisation Python et logiciel fiable en environnement réglementé.",
  ctaPrimary: { label: "Voir mes projets", href: "#work" },
  ctaSecondary: { label: "Me contacter", href: "#contact" },
} as const;

// ── Marquee ──

export const marqueeWords = [
  "DevSecOps",
  "CI/CD",
  "Automatisation",
  "Docker",
  "Kubernetes",
  "GitLab CI",
  "GitHub Actions",
  "Supply chain security",
  "SBOM",
  "Trivy",
  "Python",
  "Bash",
  "Linux",
  "AWS",
  "Terraform",
  "Infrastructure as Code",
  "Environnement réglementé",
  "Traçabilité",
];

// ── About ──

export const aboutData = {
  headline: "Du code à l'infra,\ndans un cadre\nexigeant.",
  paragraphs: [
    "Je suis ingénieure informatique, diplômée de Polytech Marseille en juillet 2026, dans la première promotion en alternance. Mon parcours tient en trois étapes.",
    "Trois ans au CEA Cadarache, sur le système d'information d'un laboratoire en environnement nucléaire réglementé : pipelines GitLab CI, migration d'un historique Access vers PostgreSQL, application de traçabilité en C#/.NET sous accréditation COFRAC. C'est là que j'ai appris à travailler proprement et dans la durée.",
    "Un stage de recherche à l'Université de Montréal sur la sécurité des chaînes de build : SBOM, scan de vulnérabilités, diversité logicielle. C'est ce qui m'a orientée vers le DevSecOps.",
    "Aujourd'hui, je monte en compétences sur le cloud et je cherche un CDI DevOps en région PACA.",
  ],
} as const;

// ── Services ──

export const services: ServiceItem[] = [
  {
    icon: "workflow",
    title: "CI/CD & automatisation",
    description:
      "J'automatise ce qui se répète. Au CEA, j'ai mis en place des pipelines GitLab CI qui buildent, testent et déploient sans étape manuelle, avec les données sensibles protégées. En Python, j'ai industrialisé la reprise d'un historique Access vers PostgreSQL. Le but : des livraisons fiables, reproductibles, et du temps rendu aux équipes.",
  },
  {
    icon: "shield",
    title: "DevSecOps & supply chain",
    description:
      "La sécurité dès le début de la chaîne, pas en fin de projet (shift-left). À Montréal, j'ai travaillé sur la protection des chaînes de build, le type d'attaque révélé par SolarWinds : SBOM générés automatiquement, scan des dépendances et des vulnérabilités (Syft, Grype, Trivy) dans la CI/CD, vérification de la reproductibilité des builds.",
  },
  {
    icon: "code",
    title: "Logiciel critique & conformité",
    description:
      "Trois ans en environnement nucléaire sous accréditation COFRAC, où chaque donnée doit être traçable. J'y ai conçu une application de traçabilité de bout en bout (C#/.NET, MVVM, Entity Framework Core), de l'architecture au déploiement, au plus près des contraintes terrain. Qualité, conformité, documentation : des réflexes que j'emporte partout.",
  },
  {
    icon: "users",
    title: "Du besoin client à la solution",
    description:
      "Partir du problème de l'utilisateur, pas de la techno. Comprendre le métier, penser l'expérience utilisateur, garder en tête la valeur pour le client, et expliquer clairement à un public technique comme non technique.",
  },
  {
    icon: "sparkles",
    title: "L'IA comme compétence transversale",
    description:
      "J'utilise l'IA générative au quotidien pour prototyper, automatiser, documenter et apprendre plus vite, en gardant un regard critique sur ce qu'elle produit.",
  },
  {
    icon: "leaf",
    title: "FinOps, GreenOps & amélioration continue",
    description:
      "Un sujet qui m'intéresse de près : une infrastructure qui coûte et consomme ce qu'il faut, pas plus. Mesurer, optimiser, recommencer.",
  },
];

// ── Experience ──

export const experiences: ExperienceItem[] = [
  {
    id: "01",
    year: "Sept. 2023 — Août 2026",
    role: "Ingénieure Logiciel & DevOps (alternance)",
    company: "CEA Cadarache · Laboratoire LDCI, plateforme MADERE",
    description:
      "Système d'information critique d'un laboratoire de dosimétrie, en environnement nucléaire réglementé.",
    bullets: [
      "Mise en place de pipelines CI/CD (GitLab CI) : builds, tests et déploiements automatisés, données sensibles sécurisées.",
      "Migration d'un historique Access vers une base PostgreSQL centralisée, via un flux ETL en Python.",
      "Conception et développement de bout en bout d'une application de traçabilité de dosimètres (C#/.NET, WPF, MVVM, Entity Framework Core), sous accréditation COFRAC.",
      "Interfaçage bas niveau (protocole série MT-SICS) avec des balances de précision pour l'acquisition automatisée de données métrologiques.",
    ],
  },
  {
    id: "02",
    year: "Mai 2025 — Août 2025",
    role: "Stagiaire Recherche — Cybersécurité & DevSecOps",
    company: "Université de Montréal · Canada",
    description:
      "Recherche sur la sécurisation des software supply chains par diversité logicielle, en anglais, dans une équipe internationale.",
    bullets: [
      "Étude des vecteurs d'attaque sur les chaînes de build et modélisation des surfaces d'exposition.",
      "Intégration dans des workflows DevSecOps : génération automatisée de SBOM et scan de vulnérabilités dans les pipelines CI/CD.",
      "Migration d'un build Java de Maven vers Gradle et comparaison du bytecode généré, pour vérifier l'équivalence des builds.",
    ],
  },
];

// ── Education ──

export const education: EducationItem[] = [
  {
    id: "01",
    year: "2023 — 2026",
    degree: "Diplôme d'ingénieur Informatique, en alternance",
    school: "Polytech Marseille · alternance au CEA Cadarache",
    location: "Marseille, France",
  },
  {
    id: "02",
    year: "2020 — 2023",
    degree: "Licence Mathématiques et Informatique",
    school: "Aix-Marseille Université",
    location: "Marseille, France",
  },
  {
    id: "03",
    year: "2020",
    degree: "Baccalauréat scientifique, spécialité Mathématiques",
    school: "Lycée Moulay Ismail",
    location: "Meknès, Maroc",
  },
];

// ── Projects ──

export const projects: ProjectItem[] = [
  {
    title: "Traçabilité de dosimètres",
    tag: "CEA · LOGICIEL",
    description:
      "Application métier C#/.NET (WPF, MVVM, Entity Framework Core), de l'architecture au déploiement, sous accréditation COFRAC. Code confidentiel, non publié.",
    image: "/main.svg",
  },
  {
    // Lien GitHub à remettre une fois le dépôt finalisé : https://github.com/Salma2002ba/SlimAI-CHAT
    title: "SlimAI, application de chatbot",
    tag: "CLOUD · DEVOPS",
    description:
      "Projet académique : application de chatbot (frontend et backend) conteneurisée avec Docker, déployée sur AWS avec une infrastructure décrite en Terraform, livraison automatisée en CI/CD.",
    image: "/globe.svg",
  },
  {
    // Lien GitHub à remettre une fois le dépôt finalisé : https://github.com/Salma2002ba/SECOMO
    title: "SECOMO, serre connectée",
    tag: "IOT · FULL-STACK",
    description:
      "Projet inter-écoles : firmware ESP32, API REST FastAPI avec PostgreSQL, dashboard React temps réel en WebSocket.",
    image: "/webhook.svg",
  },
  {
    title: "Sécurité des chaînes de build",
    tag: "RECHERCHE · DEVSECOPS",
    description:
      "Diversité logicielle pour sécuriser les software supply chains, SBOM et scan de vulnérabilités dans la CI/CD. Université de Montréal, 2025.",
    image: "/webhook.svg",
  },
];

// ── Skills ──

export const skillCategories: SkillCategory[] = [
  {
    category: "CI/CD & DevOps",
    items: ["GitLab CI", "GitHub Actions", "Docker", "Maven", "Gradle", "Git", "Linux", "Bash"],
  },
  {
    category: "DevSecOps",
    items: ["SBOM", "Syft", "Grype", "Trivy", "Sécurisation des pipelines"],
  },
  {
    category: "Développement & données",
    items: ["Python", "Java", "C# / .NET", "C / C++", "WPF / MVVM", "Entity Framework Core", "PostgreSQL", "SQL"],
  },
  {
    category: "En montée en compétences",
    items: ["AWS", "Terraform", "Kubernetes"],
  },
];

// Soft skills, langues et centres d'intérêt (source : common.json du workflow CDI).
export const softSkillCategories: SkillCategory[] = [
  {
    category: "Compétences transversales",
    items: [
      "Communication technique et non technique",
      "Vulgarisation",
      "Documentation technique",
      "Rigueur",
      "Autonomie sur projets longs",
      "Adaptabilité internationale",
      "Veille technologique",
      "Collaboration avec l'IA",
    ],
  },
  {
    category: "Langues",
    items: ["Français : courant", "Anglais : professionnel", "Arabe : natif"],
  },
  {
    category: "Centres d'intérêt",
    items: ["IA générative", "Mixité dans la tech", "Running", "Vélo", "Danse"],
  },
];

// ── Blog ──
// Section retirée tant qu'il n'y a pas d'article réellement publié.

export const blogPosts: BlogPost[] = [];

// ── Stats ──

export const stats: StatItem[] = [
  { value: 3, suffix: " ans", label: "d'alternance au CEA Cadarache" },
  { value: 4, suffix: " mois", label: "de recherche à Montréal" },
  { value: 3, suffix: "", label: "langues : français, anglais, arabe" },
];

// ── Testimonials ──
// Avis des encadrants. Ne garder que des propos réellement tenus.

export const testimonials: Testimonial[] = [
  {
    quote: "Salma a su moderniser notre architecture applicative avec une grande rigueur. La traçabilité des données sensibles est maintenant assurée.",
    name: "Tuteur Entreprise",
    role: "Responsable Technique",
    company: "CEA Cadarache",
  },
  {
    quote: "Excellente approche sur les enjeux de sécurisation des pipelines CI/CD. Un esprit d'analyse précieux en DevSecOps.",
    name: "Directeur de Recherche",
    role: "Chercheur en Cybersécurité",
    company: "Université de Montréal",
  },
];

// ── Contact ──

export const contactData = {
  headline: "Un poste à pourvoir ?\nÉchangeons.",
  body: "Je cherche un CDI d'ingénieure DevOps ou DevSecOps en région PACA, idéalement à Aix-Marseille. Disponible dès maintenant.",
  email: "salma2002ba@gmail.com",
} as const;

export const interestTags: InterestTag[] = [];

// ── Footer ──

export const footerData = {
  logo: "salma.",
  copyright: `© ${new Date().getFullYear()} Salma BABA`,
  builtWith: "Next.js",
} as const;

