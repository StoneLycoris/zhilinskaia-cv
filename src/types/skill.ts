export type SkillCategory =
  | "frontend"
  | "styling"
  | "testing"
  | "api"
  | "tooling"
  | "codeQuality"
  | "devOps";

export interface Skill {
  id: string;
  name: string;
  icon?: string;
  color?: string;
  category: SkillCategory;
}
