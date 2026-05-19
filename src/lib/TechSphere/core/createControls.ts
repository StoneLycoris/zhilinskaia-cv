import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export function createControls(
  camera: THREE.Camera,
  canvas: HTMLCanvasElement
) {
  const controls = new OrbitControls(camera, canvas);

  controls.enableDamping = true;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.6;

  return controls;
}
