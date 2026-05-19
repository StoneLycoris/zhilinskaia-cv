import * as THREE from "three";

import type { Skill } from "@/types/skill";

export type SkillSprite = THREE.Sprite & {
  userData: {
    skill: Skill;
  };
};
