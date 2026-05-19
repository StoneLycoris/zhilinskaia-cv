import * as THREE from "three";

import { VISIBILITY } from "@/lib/TechSphere/pinPhysics/config";
import type { SkillPin } from "@/types/skillPin";

const tempDir = new THREE.Vector3();

export function updateVisibility(pin: SkillPin, camera: THREE.Camera) {
  const data = pin.userData;

  camera.getWorldDirection(tempDir);

  const dot = data.normal.dot(tempDir.negate());

  const target = THREE.MathUtils.smoothstep(
    dot,
    VISIBILITY.inStart,
    VISIBILITY.inEnd
  );

  if (data.visibility === undefined) {
    data.visibility = target;
  }

  data.visibility += (target - data.visibility) * VISIBILITY.lerp;
}
