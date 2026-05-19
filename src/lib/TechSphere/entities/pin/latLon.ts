import * as THREE from "three";

export function fibonacciSpherePoint(
  index: number,
  total: number
): THREE.Vector3 {
  const offset = 2 / total;
  const increment = Math.PI * (3 - Math.sqrt(5));

  const y = index * offset - 1 + offset / 2;
  const radius = Math.sqrt(1 - y * y);
  const theta = index * increment;

  const x = Math.cos(theta) * radius;
  const z = Math.sin(theta) * radius;

  return new THREE.Vector3(x, y, z).normalize();
}
