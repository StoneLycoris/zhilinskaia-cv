import * as THREE from "three";

export function createResizeSystem(params: {
  canvas: HTMLCanvasElement;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
}) {
  const { canvas, camera, renderer } = params;

  function resize() {
    const rect = canvas.getBoundingClientRect();

    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();

    renderer.setSize(rect.width, rect.height, false);
  }

  function start() {
    window.addEventListener("resize", resize);
    resize();
  }

  function stop() {
    window.removeEventListener("resize", resize);
  }

  return {
    start,
    stop,
    resize,
  };
}
