import {
  Code2,
  Layers,
  Smartphone,
  GitBranch,
  Palette,
  Zap,
  Search,
  Package,
} from "lucide-react";

export const navItems = [
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    icon: <Code2 size={20} />,
    text: "React",
    description:
      "Building fast, component-driven UIs with hooks, context, and modern React patterns.",
    level: 90,
  },
  {
    icon: <Zap size={20} />,
    text: "JavaScript",
    description:
      "Deep knowledge of ES6+, async patterns, closures, and the JS runtime.",
    level: 88,
  },
  {
    icon: <Package size={20} />,
    text: "TypeScript",
    description:
      "Type-safe codebases that scale — interfaces, generics, and strict mode.",
    level: 78,
  },
  {
    icon: <Palette size={20} />,
    text: "Tailwind CSS",
    description:
      "Rapid UI development with utility classes, custom configs, and responsive design.",
    level: 92,
  },
  {
    icon: <Layers size={20} />,
    text: "Next.js",
    description:
      "SSR, SSG, API routes, and the App Router for full-stack React apps.",
    level: 80,
  },
  {
    icon: <Smartphone size={20} />,
    text: "HTML / CSS",
    description:
      "Semantic markup, accessibility, animations, and layout mastery with Flexbox & Grid.",
    level: 95,
  },
  {
    icon: <GitBranch size={20} />,
    text: "Git & GitHub",
    description:
      "Version control, branching strategies, PRs, and collaborative workflows.",
    level: 85,
  },
  {
    icon: <Search size={20} />,
    text: "Performance & SEO",
    description:
      "Core Web Vitals, lazy loading, code splitting, and meta optimization.",
    level: 75,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover & Plan",
    description:
      "I start by understanding the problem deeply — goals, users, and constraints. Good planning prevents bad surprises.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description:
      "Wireframes, component hierarchy, and design system decisions before a single line of code is written.",
  },
  {
    step: "03",
    title: "Build & Iterate",
    description:
      "Shipping in small, working increments. Clean code, reusable components, and continuous feedback loops.",
  },
  {
    step: "04",
    title: "Test & Deploy",
    description:
      "Cross-browser testing, performance audits, and smooth deployment pipelines to production.",
  },
];

export const projects = [
  {
    title: "E-Commerce Storefront",
    description:
      "A fully responsive online store with cart, filtering, and checkout flow. Built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A drag-and-drop kanban board with real-time updates, user auth, and team collaboration features.",
    tags: ["React", "Firebase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Developer Portfolio v1",
    description:
      "My first portfolio site — minimalist design with smooth scroll animations and a dark theme.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "A location-aware weather app with 7-day forecasts, charts, and a clean data visualization layer.",
    tags: ["React", "Chart.js", "OpenWeather API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Blog Platform",
    description:
      "A Markdown-powered blog with syntax highlighting, dark mode, and RSS feed support.",
    tags: ["Next.js", "MDX", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "UI Component Library",
    description:
      "A personal design system — buttons, forms, modals, and more — documented with Storybook.",
    tags: ["React", "TypeScript", "Storybook"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const socialLinks = [
  { label: "GitHub", href: "#", icon: "github" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Twitter", href: "#", icon: "twitter" },
];