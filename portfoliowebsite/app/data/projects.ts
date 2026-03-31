export interface Project {
  title: string;
  category: string;
  image: string;
  type: string;
  slug?: string;
  description: string;
  tags: string[];
  github: string;
  liveUrl: string | null;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "AI-powered Legal Document Intelligence Platform",
    category: "Featured • AI & Law",
    image: "/lawlens.png",
    type: "web",
    slug: "lawlens",
    description: "A sophisticated platform designed to revolutionize legal research and document review using state-of-the-art LLMs.",
    tags: ["Next.js 15", "Django", "GPT-4", "PostgreSQL"],
    github: "https://github.com/AnsahFredd/LawLens",
    liveUrl: "https://lawlens.vercel.app",
    featured: true,
  },
  {
    title: "Cofuel - Event Booking",
    category: "Web App",
    image: "/cofuel.png",
    type: "web",
    description: "Elegant event booking platform for high-end celebrations and corporate gatherings.",
    tags: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/AnsahFredd/Cofuel",
    liveUrl: "https://cofuel-umber.vercel.app/",
  },
  {
    title: "Movie Discovery Explorer",
    category: "Mobile App",
    image: "/movie.png",
    type: "mobile",
    description: "Sleek React Native application featuring immersive animations and deep-search capabilities.",
    tags: ["React Native", "TMDB API", "Reanimated"],
    github: "https://github.com/AnsahFredd/movie_app",
    liveUrl: null,
  },
  {
    title: "Personal Brand Portfolio",
    category: "Web App • 2026 Edition",
    image: "/portfolio.png",
    type: "web",
    description: "The site you are currently viewing. Built with Next.js 15, Tailwind 4, and Framer Motion.",
    tags: ["Next.js 15", "Tailwind 4", "Framer Motion"],
    github: "https://github.com/AnsahFredd/Portfolio",
    liveUrl: "https://portfolio-smoky-chi-16nwjts7uz.vercel.app/",
  },
  {
    title: "Elite E-commerce Hub",
    category: "Web App",
    image: "/ecommerce.png",
    type: "web",
    description: "Full-scale e-commerce solution with integrated payments and inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/AnsahFredd/CodeAlpha_E-commerce",
    liveUrl: "https://shophub-lake.vercel.app/",
  },
  {
    title: "NextGen Management Tool",
    category: "Web App",
    image: "/project_mg.png",
    type: "web",
    description: "Comprehensive project coordination tool focusing on velocity and team synergy.",
    tags: ["React", "Express", "PostgreSQL"],
    github: "https://github.com/AnsahFredd/CodeAlpha_Project_Management_Tool",
    liveUrl: "https://projecthub-phi-seven.vercel.app/dashboard",
  },
];
