/* ─────────────────────────────────────────────
 *  Centralized portfolio data
 *  Edit this file to update all site content.
 * ───────────────────────────────────────────── */

export const personalInfo = {
  name: "Muhammad Alif",
  title: "Applied AI Engineer",
  subtitle: "Building production-ready LLM systems & scalable AI solutions",
  bio: `Applied AI Engineer focused on building and deploying production-ready LLM systems. Experienced in developing RAG pipelines, API-driven AI services, and automated workflows using FastAPI, Docker, and open-source models. Strong in translating business needs into scalable AI solutions, with hands-on experience in fullstack development and system design.`,
  email: "alifalferdiansyah7@gmail.com",
  location: "Tangerang Selatan, Indonesia",
  phone: "+62812-7823-9630",
  resumeUrl: "/CV_AI_engineer.pdf",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/adaalif", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-alif-alferdiansyah-8a100927b/", icon: "linkedin" },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "JavaScript", "TypeScript", "PHP"],
  },
  {
    category: "AI & ML",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    category: "Frameworks & Tools",
    items: ["FastAPI", "React", "Express.js", "Docker", "GCP", "Git"],
  },
];

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live?: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "AI Financial Tracker & Receipt Scanner",
    description:
      "An intelligent financial tracking application with AI-powered receipt scanning. Automatically extracts transaction data from receipts using computer vision and categorizes expenses for budgeting insights.",
    longDescription:
      "Leverages OCR and LLM capabilities to parse receipt images, extract line items, and categorize spending. Features a clean dashboard for visualizing financial trends and managing budgets.",
    tech: ["Python", "FastAPI", "React", "TensorFlow", "Docker"],
    github: "https://github.com/adaalif",
    live: "#",
    image: "/projects/financial-tracker.png",
    featured: true,
  },
  {
    title: "Ingrevia: Recipe Recommendation",
    description:
      "A smart recipe recommendation system that suggests recipes based on available ingredients. Uses NLP and similarity matching to find the best recipe matches from a curated database.",
    longDescription:
      "Built with a hybrid recommendation engine combining content-based filtering and ingredient-matching algorithms. Features a responsive UI for browsing, searching, and saving favorite recipes.",
    tech: ["Python", "Scikit-learn", "React", "FastAPI", "Docker"],
    github: "https://github.com/adaalif",
    live: "#",
    image: "/projects/ingrevia.png",
    featured: true,
  },
  {
    title: "RAG Notebook",
    description:
      "A NotebookLM-style Retrieval-Augmented Generation app that lets you upload documents and chat with them using AI. Built with hybrid retrieval (BM25 + vector search), reranking, and streaming responses.",
    longDescription:
      "Implements a full RAG pipeline with document chunking, embedding generation, hybrid BM25 + vector retrieval, cross-encoder reranking, and streaming LLM responses for interactive document Q&A.",
    tech: ["Python", "FastAPI", "React", "Docker", "LangChain"],
    github: "https://github.com/adaalif/RAG",
    live: "#",
    image: "/projects/RAG.png",
    featured: true,
  },
  {
    title: "Techporia",
    description:
      "A public-facing event management and registration platform with an admin dashboard for organizers to manage user submissions, track registrations, and process payments via Midtrans payment gateway.",
    longDescription:
      "Built with CodeIgniter, featuring role-based admin sections for organizers to review and manage submissions, integrated Midtrans for secure payment processing, and a user-facing registration flow for event participants.",
    tech: ["PHP", "CodeIgniter", "MySQL", "Midtrans", "Bootstrap"],
    github: "https://github.com/adaalif/Techporia-main-2024/tree/main",
    live: "#",
    image: "/projects/Techporia.png",
    featured: true,
  },
];

export interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: "Fullstack AI Engineer Intern",
    company: "M-Glitz",
    companyUrl: "#",
    period: "March 2025 — Aug. 2025",
    location: "Palembang, Indonesia",
    description:
      "Developed and designed web applications for an in-house inventory and information management system.",
    highlights: [
      "Built web application for inventory and information management using React and Express.js",
      "Engineered RESTful APIs to process stock transactions, ensuring secure and consistent data flow across internal dashboards",
      "Structured relational database schemas (ERDs) and mapped system workflows to digitize and automate manual inventory tracking",
    ],
  },
  {
    role: "IT Solution Intern",
    company: "BPJS Ketenagakerjaan",
    companyUrl: "https://www.bpjsketenagakerjaan.go.id",
    period: "July 2024 — Dec. 2024",
    location: "Palembang, Indonesia",
    description:
      "Developed automated systems and data tracking pipelines for internal operations.",
    highlights: [
      "Developed an automated WhatsApp messaging system using Python and Selenium to handle late payment notifications, eliminating manual outreach workflows",
      "Collaborated with division stakeholders to build data tracking pipelines, logging chat interactions and delivery statuses to monitor collection efforts",
    ],
  },
  {
    role: "Head of Research and Technology",
    company: "BEM KM Fasilkom Unsri",
    companyUrl: "#",
    period: "Feb. 2024 — Feb. 2025",
    location: "Palembang, Indonesia",
    description:
      "Directed a 10-person engineering team, managing project timelines and overseeing end-to-end delivery of organizational software solutions.",
    highlights: [
      "Engineered an internal management web application using PHP and MySQL, designing relational database schemas to centralize activity tracking and role assignments",
      "Developed 'Techporia,' a public-facing event registration platform using CodeIgniter, integrating secure payment gateways to process user transactions",
    ],
  },
];

export const education = {
  university: "Universitas Sriwijaya",
  degree: "Bachelor of Computer Engineering",
  period: "Aug. 2022 — March 2026",
  gpa: "3.96",
  ielts: "8.0/9.0",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
