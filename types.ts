export enum Language {
  ES = 'es',
  EN = 'en'
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export enum MemberRole {
  LEADER = 'Lider del Grupo',
  RESEARCHER = 'Investigador',
  STUDENT = 'Estudiante',
  ALUMNI = 'Alumni',
  PRACTITIONER = 'Practicante'
}

export interface Translation {
  [Language.ES]: string;
  [Language.EN]: string;
}

export interface Member {
  name: string;
  role: string | Translation;
  description: string | Translation;
  category: MemberRole;
  image?: string;
}

export interface ResearchProject {
  title: string | Translation;
  description: string | Translation;
  link?: string;
}

export interface ResearchCategory {
  id: string;
  title: string | Translation;
  description?: string | Translation;
  projects: ResearchProject[];
}

export interface Publication {
  citation: string;
  link?: string;
  type: 'Paper' | 'Preprint' | 'Thesis' | 'Book';
}

export interface Supporter {
  name: string | Translation;
  subtext?: string | Translation;
}
