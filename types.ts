export enum MemberRole {
  LEADER = 'Lider del Grupo',
  RESEARCHER = 'Investigador',
  STUDENT = 'Estudiante',
  ALUMNI = 'Alumni',
  PRACTITIONER = 'Practicante'
}

export interface Member {
  name: string;
  role: string;
  description: string;
  category: MemberRole;
  image?: string;
}

export interface ResearchProject {
  title: string;
  description: string;
  link?: string;
}

export interface ResearchCategory {
  id: string;
  title: string;
  description?: string;
  projects: ResearchProject[];
}

export interface Publication {
  citation: string;
  link?: string;
  type: 'Paper' | 'Preprint' | 'Thesis' | 'Book';
}

export interface Supporter {
  name: string;
  subtext?: string;
}