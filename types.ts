
export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  duration?: string;
  description: string;
  employmentType: 'Remote' | 'On-site' | 'Hybrid';
}

export interface Project {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  stars: number;
  forks: number;
}

export interface EducationItem {
  degree: string;
  university: string;
  details: string[];
  date: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  id: string;
}

export interface ProfileData {
  name: string;
  title: string;
  availability: string[];
  about: string;
  skills: string[];
  experience: ExperienceItem[];
  projects: Project[];
  education: EducationItem[];
  certifications: Certification[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
}