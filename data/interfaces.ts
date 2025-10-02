export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string[];
  techStack: string[];
  link: string;
  github: string;
  videoLink: string;
  image: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface AchievementItem {
  icon: React.ElementType;
  title: string;
  description: string;
}