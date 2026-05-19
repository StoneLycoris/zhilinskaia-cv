import * as THREE from "three";

import { updateHover } from "@/lib/TechSphere/pinPhysics/updateHover";
import { updateTransform } from "@/lib/TechSphere/pinPhysics/updateTransform";
import { updateVisibility } from "@/lib/TechSphere/pinPhysics/updateVisibility";
import { updateVisuals } from "@/lib/TechSphere/pinPhysics/visuals/updateVisuals";
import type { SkillPin } from "@/types/skillPin";

export function updatePinPhysics(
  pin: SkillPin,
  camera: THREE.Camera,
  time: number
) {
  updateHover(pin);
  updateVisibility(pin, camera);
  updateTransform(pin, time);
  updateVisuals(pin, camera);
}
