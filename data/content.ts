import { FaTrophy, FaLightbulb, FaCheckCircle } from "react-icons/fa";
import { AchievementItem, ExperienceItem, Project } from "./interfaces"; // Adjust path as needed

export const achievementsData: AchievementItem[] = [
  {
    icon: FaTrophy,
    title: "Smart India Hackathon 2024 Champion",
    description: "Secured 1st place and a ₹1,00,000 prize at NIT Surathkal for an Al-driven automation solution.",
  },
  {
    icon: FaLightbulb,
    title: "IDE Bootcamp Top 1% Innovator",
    description: "Secured a ₹5,00,000 prize at the Innovation, Design, and Entrepreneurship Bootcamp.",
  },
  {
    icon: FaCheckCircle,
    title: "GATE Qualified",
    description: "Qualified the prestigious national-level Graduate Aptitude Test in Engineering (GATE).",
  },
];

export const projectData: Project[] = [
  {
    id: 1,
    title: "Geo-Orchestrator",
    description: 'LLM Geospatial Automation.',
    detailedDescription: [
      "Engineered a reasoning engine using a fine-tuned Mistral-7B model and a RAG pipeline to translate natural language queries into executable Python (GeoPandas) GIS workflows. ",
      "Achieved 95% workflow generation accuracy on expert-defined tasks, automating complex, domain-specific analysis.",
    ],
    techStack: ["LLM", "Mistral-7B", "RAG", "Python", "GeoPandas"],
    link: "",
    github: "",
    videoLink: "",
    image: "/image1.png",
  },
  {
    id: 2,
    title: "Safai-Saathi",
    description: "AI-Powered Waste Economy Platform",
    detailedDescription: [
      "Built and deployed an IoT smart station using a Raspberry Pi and on-device TensorFlow Lite for 95% accurate waste classification and transparent NFC payments.",
      "Developed a scalable cloud backend (Node.js, PostgreSQL) providing verifiable ESG traceability data for B2B partners.",
    ],
    techStack: ["IoT", "TensorFlow Lite", "Raspberry Pi", "Node.js", "PostgreSQL"],
    link: "",
    github: "",
    videoLink: "https://www.youtube.com/watch?v=A7LjH6ZH9bc&feature=youtu.be",
    image: "/image3.png",
  },
  {
    id: 3,
    title: "Enterprise RAG",
    description: "Document Intelligence Platform",
    detailedDescription: [
      "Developed a serverless, scalable platform using Azure and RAG to automatically extract, classify, and summarize insights from unstructured business documents.",
    ],
    techStack: ["Azure", "RAG", "Serverless", "Document AI"],
    link: "",
    github: "",
    videoLink: "",
    image: "/image2.png",
  },
  {
    id: 4,
    title: "Smart AI Notes",
    description: "ML / Web Development",
    detailedDescription: [
      "Built a real-time collaborative note-taking application with Al-powered features using Next.js, providing an intuitive interface for seamless content creation.",
    ],
    techStack: ["Next.js", "Real-time Collaboration", "AI/ML", "Vercel"],
    link: "https://smart-ai-notes.vercel.app/",
    github: "https://github.com/OmkarJadhav2020/smart-ai-notes",
    videoLink: "",
    image: "/image4.png",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    company: "Parametric Technology Corporation (PTC)",
    role: "Software Engineer Intern",
    duration: "July 2025 – Present",
    location: "Pune, India",
    description: [
      "Developing and integrating backend **product features** for Windchill, a flagship Product Lifecycle Management (PLM) platform, using Java and Spring Boot. ",
      "Applied critical thinking and systems design principles to architect a new search-indexing microservice, targeting a 30% query latency reduction for large-scale enterprise datasets. ",
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "PLM"],
  },
  {
    company: "Accenture",
    role: "Associate Software Engineer Intern",
    duration: "May 2025 – July 2025 ",
    location: "Pune, India ",
    description: [
      "Engineered and deployed enterprise-grade Generative AI solutions, delivering key **product features** using RAG pipelines to improve data retrieval accuracy and reduce manual analysis time by 40%. ",
    ],
    technologies: ["Generative AI", "RAG Pipelines", "Data Retrieval", "Python"],
  },
  {
    company: "ChicChic",
    role: "Backend Engineer, R&D (Part-time)",
    duration: "June 2025 – August 2025 ",
    location: "Pune, India ",
    description: [
      "Built scalable backend systems using Node.js and Python to support new **product features**, optimizing API performance by 45% and supporting a 50% increase in user traffic.",
    ],
    technologies: ["Node.js", "Python", "API Development", "Scalability"],
  },
];