import * as THREE from "three";

export function createCamera(aspect: number) {
  const camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
  camera.position.set(0, 0, 4);
  return camera;
}
