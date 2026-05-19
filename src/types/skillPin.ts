import * as THREE from "three";

import type { Skill } from "@/types/skill";

export type SkillPin = THREE.Group & {
  userData: {
    skill: Skill;
    normal: THREE.Vector3;

    hover: number;
    targetHover: number;
    velocity: number;
    phase: number;

    visibility: number;
    labelOpacity: number;

    stick: THREE.Mesh;
    head: THREE.Mesh;
    label: THREE.Sprite;
  };
};
