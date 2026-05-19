import * as THREE from "three";

import { createSpriteLabel } from "@/lib/TechSphere/entities/pin/createSpriteLabel";
import { fibonacciSpherePoint } from "@/lib/TechSphere/entities/pin/latLon";
import type { Skill } from "@/types/skill";
import type { SkillPin } from "@/types/skillPin";

export function createPins(globe: THREE.Mesh, skills: Skill[]) {
  const pins: SkillPin[] = [];

  const up = new THREE.Vector3(0, 1, 0);

  skills.forEach((skill, index) => {
    const normal = fibonacciSpherePoint(index, skills.length);

    const pin = new THREE.Group() as SkillPin;

    pin.userData = {
      skill,
      normal,

      hover: 0,
      targetHover: 0,
      velocity: 0,
      phase: Math.random() * Math.PI * 2,

      visibility: 0,
      labelOpacity: 0,

      stick: null as any,
      head: null as any,
      label: null as any,
    };

    pin.quaternion.setFromUnitVectors(up, normal);

    const stick = new THREE.Mesh(
      new THREE.CylinderGeometry(0.01, 0.004, 0.14, 12),
      new THREE.MeshStandardMaterial({
        color: 0x9aa4b2,
        roughness: 0.85,
        transparent: true,
        opacity: 1,
      })
    );

    stick.position.set(0, 0.07, 0);

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.026, 24, 24),
      new THREE.MeshStandardMaterial({
        color: 0xd1d5db,
        roughness: 0.6,
        transparent: true,
        opacity: 1,
      })
    );

    head.position.set(0, 0.14, 0);

    const label = createSpriteLabel(skill);
    label.position.set(0, 0.22, 0);

    pin.add(stick);
    pin.add(head);
    pin.add(label);

    pin.userData.stick = stick;
    pin.userData.head = head;
    pin.userData.label = label;

    globe.add(pin);
    pins.push(pin);
  });

  return pins;
}
