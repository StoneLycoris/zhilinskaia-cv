import * as THREE from "three";
import type { Ref } from "vue";

import type { SkillPin } from "@/types/skillPin";

export function useInteraction(
  canvasRef: Ref<HTMLCanvasElement | null>,
  camera: THREE.Camera,
  pins: SkillPin[],
  onHover: (pin: SkillPin | null, x: number, y: number) => void,
  onRotate?: (x: number) => void
) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onMouseMove(e: MouseEvent) {
    const canvas = canvasRef.value;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();

    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    if (onRotate) {
      onRotate(mouse.x);
    }

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(pins, true);

    if (intersects.length > 0) {
      const pin = intersects[0].object.parent as SkillPin;

      onHover(pin, e.clientX, e.clientY);
    } else {
      onHover(null, 0, 0);
    }
  }

  return {
    onMouseMove,
  };
}
