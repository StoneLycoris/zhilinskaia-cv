import * as THREE from "three";

import { LABEL } from "@/lib/TechSphere/pinPhysics/config";
import type { SkillPin } from "@/types/skillPin";

export function updateLabel(pin: SkillPin, camera: THREE.Camera) {
  const data = pin.userData;
  const label = data.label;

  label.quaternion.copy(camera.quaternion);

  const targetOpacity = data.visibility * (0.55 + data.hover * 0.45);

  data.labelOpacity += (targetOpacity - data.labelOpacity) * LABEL.lerp;

  const mat = label.material as THREE.SpriteMaterial;
  mat.opacity = data.labelOpacity;

  const scale = 1 + data.hover * 0.18;

  label.scale.set(0.42 * scale, 0.12 * scale, 1);
}
