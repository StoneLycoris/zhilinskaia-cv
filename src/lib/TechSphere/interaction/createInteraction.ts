import * as THREE from "three";

import type { Skill } from "@/types/skill";
import type { SkillPin } from "@/types/skillPin";

export function createInteraction(opts: {
  canvas: HTMLCanvasElement;
  camera: THREE.Camera;
  pins: SkillPin[];
  onHover: (skill: Skill | null, x: number, y: number) => void;
}) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onMouseMove(e: MouseEvent) {
    const rect = opts.canvas.getBoundingClientRect();

    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, opts.camera);

    const intersects = raycaster.intersectObjects(opts.pins, true);

    opts.pins.forEach((pin) => {
      pin.userData.targetHover = 0;
    });

    if (intersects.length) {
      const pin = intersects[0].object.parent as SkillPin;

      pin.userData.targetHover = 1;

      opts.onHover(pin.userData.skill, e.clientX, e.clientY);
    } else {
      opts.onHover(null, 0, 0);
    }
  }

  return {
    onMouseMove,
  };
}
