/* ──────────────────────────────────────────────────────────────────
 * lib/data.en.ts — English content, same shape as lib/data.ts.
 * Written for international DevOps / SRE readers, not translated word for word.
 * Same source of truth: nothing here may claim more than the French version.
 * AWS, Terraform and Kubernetes stay under "currently upskilling".
 * ────────────────────────────────────────────────────────────────── */

import type {
  NavLink,
  ServiceItem,
  ExperienceItem,
  EducationItem,
  ProjectItem,
  SkillCategory,
  BlogPost,
  StatItem,
  Testimonial,
  InterestTag,
} from "./data";

export { socialLinks } from "./data";

/** English CV, in public/. Generated from workflow_cdi/ressources/portfolio-en. */
export const cvUrl: string | null = "/CV_Salma_BABA_EN.pdf";

// ── Navigation ──

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// ── Hero ──

export const heroData = {
  eyebrow: "DevOps & DevSecOps Engineer",
  headline: "Automate.\nSecure.\nShip.",
  subline:
    "Software engineer, Polytech Marseille class of 2026, with three years of work-study at CEA Cadarache. I build CI/CD pipelines, automate with Python and ship reliable software in regulated environments.",
  ctaPrimary: { label: "View my work", href: "#work" },
  ctaSecondary: { label: "Get in touch", href: "#contact" },
} as const;

// ── Marquee ──

export const marqueeWords = [
  "DevSecOps",
  "CI/CD",
  "Automation",
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
  "Regulated environments",
  "Traceability",
];

// ── About ──

export const aboutData = {
  headline: "From code to infra,\nwhere reliability\nis not optional.",
  paragraphs: [
    "I'm a software engineer who graduated from Polytech Marseille in July 2026, in its first work-study cohort. My background comes down to three chapters.",
    "Three years at CEA Cadarache, the French Alternative Energies and Atomic Energy Commission, on the information system of a lab operating in a regulated nuclear environment: GitLab CI pipelines, migrating a legacy Access history to PostgreSQL, and a traceability application in C#/.NET under ISO 17025 (COFRAC) accreditation. That's where I learned to build things properly and make them last.",
    "A research internship at Université de Montréal on build pipeline security: SBOMs, vulnerability scanning, software diversity. That work is what pulled me towards DevSecOps.",
    "Today I'm upskilling on cloud and looking for a full-time DevOps role in the South of France (Aix-Marseille area).",
  ],
} as const;

// ── Services ──

export const services: ServiceItem[] = [
  {
    icon: "workflow",
    title: "CI/CD & automation",
    description:
      "If it runs twice, I automate it. At CEA I set up GitLab CI pipelines that build, test and deploy with no manual step, with sensitive data kept out of the pipeline. In Python, I turned the migration of a legacy Access history to PostgreSQL into a repeatable ETL job. The goal: reliable, reproducible releases and more time back for the team.",
  },
  {
    icon: "shield",
    title: "DevSecOps & supply chain",
    description:
      "Security from the first commit, not as a final gate (shift-left). In Montréal I worked on hardening build pipelines against the kind of attack SolarWinds made famous: automated SBOM generation, dependency and vulnerability scanning (Syft, Grype, Trivy) inside CI/CD, and build reproducibility checks.",
  },
  {
    icon: "code",
    title: "Mission-critical software & compliance",
    description:
      "Three years in a nuclear environment under ISO 17025 (COFRAC) accreditation, where every data point must be traceable. I designed and shipped a traceability application end to end (C#/.NET, MVVM, Entity Framework Core), from architecture to deployment, close to field constraints. Quality, compliance and documentation are habits I bring everywhere.",
  },
  {
    icon: "users",
    title: "From user need to solution",
    description:
      "Start from the user's problem, not the tech stack. Understand the domain, think about the user experience, keep business value in sight, and explain things clearly to technical and non-technical people alike.",
  },
  {
    icon: "sparkles",
    title: "AI as a cross-cutting skill",
    description:
      "I use generative AI daily to prototype, automate, document and learn faster, while keeping a critical eye on what it produces.",
  },
  {
    icon: "leaf",
    title: "FinOps, GreenOps & continuous improvement",
    description:
      "A topic I care about: infrastructure that costs and consumes what it needs, and nothing more. Measure, optimize, repeat.",
  },
];

// ── Experience ──

export const experiences: ExperienceItem[] = [
  {
    id: "01",
    year: "Sep 2023 — Aug 2026",
    role: "Software & DevOps Engineer (work-study)",
    company: "CEA Cadarache · LDCI laboratory, MADERE platform",
    description:
      "Mission-critical information system for a dosimetry lab, in a regulated nuclear environment.",
    bullets: [
      "Built CI/CD pipelines with GitLab CI: automated builds, tests and deployments, with sensitive data secured.",
      "Migrated a legacy Access history to a centralized PostgreSQL database through a Python ETL pipeline.",
      "Designed and shipped a dosimeter traceability application end to end (C#/.NET, WPF, MVVM, Entity Framework Core) under ISO 17025 (COFRAC) accreditation.",
      "Integrated precision scales over a low-level serial protocol (MT-SICS) to automate metrology data acquisition.",
    ],
  },
  {
    id: "02",
    year: "May 2025 — Aug 2025",
    role: "Research Intern — Cybersecurity & DevSecOps",
    company: "Université de Montréal · Canada",
    description:
      "Research on securing software supply chains through software diversity, working in English within an international team.",
    bullets: [
      "Analyzed attack vectors on build pipelines and modeled their attack surface.",
      "Brought the results into DevSecOps workflows: automated SBOM generation and vulnerability scanning in CI/CD pipelines.",
      "Migrated a Java build from Maven to Gradle and compared the generated bytecode to verify build equivalence.",
    ],
  },
];

// ── Education ──

export const education: EducationItem[] = [
  {
    id: "01",
    year: "2023 — 2026",
    degree: "Master's-level Engineering Degree in Computer Science (work-study)",
    school: "Polytech Marseille · work-study at CEA Cadarache",
    location: "Marseille, France",
  },
  {
    id: "02",
    year: "2020 — 2023",
    degree: "Bachelor's Degree in Mathematics and Computer Science",
    school: "Aix-Marseille University",
    location: "Marseille, France",
  },
  {
    id: "03",
    year: "2020",
    degree: "Scientific Baccalaureate, Mathematics major",
    school: "Lycée Moulay Ismail",
    location: "Meknes, Morocco",
  },
];

// ── Projects ──

export const projects: ProjectItem[] = [
  {
    title: "Software Diversity",
    tag: "RESEARCH · DEVSECOPS",
    description:
      "Research internship in Montréal: do Maven and Gradle produce the same artifact? Build comparison, SBOMs and vulnerability scanning to catch a compromised build pipeline.",
    keywords: ["Supply chain security", "SBOM", "Syft", "Grype", "Maven · Gradle", "GitHub Actions"],
    icon: "shield",
    accent: "pink",
    href: "https://github.com/Salma2002ba/software-diversity-build-security",
  },
  {
    title: "Cloud Chat on AWS",
    tag: "CLOUD · INFRASTRUCTURE AS CODE",
    description:
      "Real-time chat built as microservices and provisioned on AWS with Terraform: Lambda, ECS Fargate, RDS in private subnets, S3. CI pipeline with secret, IaC and image scanning.",
    keywords: ["AWS", "Terraform", "Docker", "ECS Fargate", "Lambda", "Checkov · Trivy"],
    icon: "cloud",
    accent: "green",
    href: "https://github.com/Salma2002ba/cloud-chat-aws",
  },
  {
    title: "SECOMO",
    tag: "IOT · DEVOPS",
    description:
      "Connected greenhouse (ESP32, FastAPI, React) productionized end to end: platform provisioned with Ansible, Jenkins pipeline, Kubernetes deployment, metrics and logs.",
    keywords: ["Kubernetes", "Jenkins", "Ansible", "Prometheus", "Grafana · Loki", "pytest"],
    icon: "sprout",
    accent: "blue",
    href: "https://github.com/Salma2002ba/secomo",
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
    items: ["SBOM", "Syft", "Grype", "Trivy", "Pipeline hardening"],
  },
  {
    category: "Development & data",
    items: ["Python", "Java", "C# / .NET", "C / C++", "WPF / MVVM", "Entity Framework Core", "PostgreSQL", "SQL"],
  },
  {
    category: "Currently upskilling",
    items: ["AWS", "Terraform", "Kubernetes"],
  },
];

export const softSkillCategories: SkillCategory[] = [
  {
    category: "Soft skills",
    items: [
      "Technical and non-technical communication",
      "Explaining complex topics simply",
      "Technical writing",
      "Attention to detail",
      "Ownership on long-running projects",
      "International adaptability",
      "Tech watch",
      "Working with AI",
    ],
  },
  {
    category: "Languages",
    items: ["French: fluent", "English: professional", "Arabic: native"],
  },
  {
    category: "Interests",
    items: ["Generative AI", "Diversity in tech", "Running", "Cycling", "Dance"],
  },
];

// ── Blog ──

export const blogPosts: BlogPost[] = [];

// ── Stats ──

export const stats: StatItem[] = [
  { value: 3, suffix: " yrs", label: "of work-study at CEA Cadarache" },
  { value: 4, suffix: " mo", label: "of research in Montréal" },
  { value: 3, suffix: "", label: "languages: French, English, Arabic" },
];

// ── Testimonials ──
// Translated from French. Only keep things that were actually said.

export const testimonials: Testimonial[] = [
  {
    quote: "Salma modernized our application architecture with great rigor. Traceability of sensitive data is now guaranteed.",
    name: "Company Tutor",
    role: "Technical Lead",
    company: "CEA Cadarache",
  },
  {
    quote: "Excellent approach to securing CI/CD pipelines. A valuable analytical mind for DevSecOps.",
    name: "Research Director",
    role: "Cybersecurity Researcher",
    company: "Université de Montréal",
  },
];

// ── Contact ──

export const contactData = {
  headline: "Hiring?\nLet's talk.",
  body: "I'm looking for a full-time DevOps or DevSecOps engineer role in the South of France, ideally in the Aix-Marseille area. Available now.",
  email: "salma2002ba@gmail.com",
} as const;

export const interestTags: InterestTag[] = [];

// ── Footer ──

export const footerData = {
  logo: "salma.",
  copyright: `© ${new Date().getFullYear()} Salma BABA`,
  builtWith: "Next.js",
} as const;

// ── Interface ──

export const ui = {
  locale: "en",
  sections: {
    about: "About",
    services: "What I do",
    servicesTitle: "What I bring.",
    experience: "Experience",
    experienceTitle: "My journey.",
    education: "Education",
    educationTitle: "Where I studied.",
    projects: "Projects",
    projectsTitle: "What I've built.",
    viewCode: "View the code",
    skills: "Skills",
    skillsTitle: "My toolbox.",
    softSkillsTitle: "Beyond the tech.",
    testimonials: "Mentors",
    testimonialsTitle: "What my supervisors say.",
    contact: "Contact",
  },
  downloadCv: "Download my CV",
  writeMe: "Email me",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  languageSwitch: { label: "FR", href: "/", ariaLabel: "Version française" },
} as const;
