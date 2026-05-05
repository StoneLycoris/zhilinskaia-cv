  export interface ExperienceProject {
    name: string
    stack: string[]
    libraries?: string[]
    testing?: string[]
    achievements: string[]
  }

  export interface ExperienceItem {
    id: string
    company: string
    location: string
    role: string
    period: string
    summary: string
    projects: ExperienceProject[]
  }