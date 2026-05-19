import { defineStore } from "pinia";

import type { Skill } from "@/types/skill";

export const useTechSphereStore = defineStore("techSphere", {
  state: () => ({
    hoveredSkill: null as Skill | null,
    tooltipPosition: { x: 0, y: 0 },
  }),

  actions: {
    setHoveredSkill(skill: Skill | null, x?: number, y?: number) {
      this.hoveredSkill = skill;

      if (skill && x !== undefined && y !== undefined) {
        this.tooltipPosition = { x, y };
      }
    },
  },
});
