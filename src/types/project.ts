export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
  year: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  years: string;
  focus: string[];
}