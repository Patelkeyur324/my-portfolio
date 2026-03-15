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
    title: "File-Converter-Tool",
    description:
      "A MERN stack file converter supporting multiple formats with optimized performance and secure data handling.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    liveUrl: "https://file-converter-tool-main.vercel.app",
    githubUrl: "https://github.com/Patelkeyur324/File-converter-tool",
    featured: true,
  },
  {
    title: "Developer Portfolio v1",
    description:
      "My first portfolio site — minimalist design with smooth scroll animations and a dark theme.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
    liveUrl: "https://keyur-patel-portfolio.vercel.app",
    githubUrl: "https://github.com/Patelkeyur324/my-portfolio",
    featured: false,
  },
  {
    title: "Real-Time Chat App",
    description:
      "A real-time messaging app with user authentication, group chats, and file sharing capabilities.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind", "Framer Motion"],
    liveUrl: "https://react-chat-app-chatterly.vercel.app/",
    githubUrl: "https://github.com/Patelkeyur324/real-Time-chat-app",
    featured: true,
  },

  {
    title: "VirtualR Landing Page",
    description:
      "Built by following a YouTube tutorial step by step, then extended with custom Framer Motion animations independently beyond what the video covered.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/Patelkeyur324/VirtualR",
    featured: false,
  },
  {
    title: "Animal Healthcare",
    description:
      "Built my first college project — a frontend-only animal healthcare app built independently from scratch.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/Patelkeyur324/Animal-Healthcare",
    featured: false,
  },
];
