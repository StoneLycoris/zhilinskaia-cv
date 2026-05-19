import * as THREE from "three";

export type SceneLights = {
  ambient: THREE.AmbientLight;
  directional: THREE.DirectionalLight;
  backLight: THREE.DirectionalLight;
};

export function createLights(scene: THREE.Scene): SceneLights {
  const ambient = new THREE.AmbientLight(0xe6e0ff, 0.85);
  scene.add(ambient);

  const directional = new THREE.DirectionalLight(0xffffff, 0.75);
  directional.position.set(3, 4, 2);
  scene.add(directional);

  const backLight = new THREE.DirectionalLight(0xcab8ff, 0.35);
  backLight.position.set(-3, -2, -3);
  scene.add(backLight);

  return { ambient, directional, backLight };
}

export function setLightsTheme(lights: SceneLights, theme: "dark" | "light") {
  const isLight = theme === "light";

  if (isLight) {
    lights.ambient.color.set(0xe9e6ff);
    lights.ambient.intensity = 0.85;

    lights.directional.color.set(0xfefeff);
    lights.directional.intensity = 0.75;

    if (lights.backLight) {
      lights.backLight.color.set(0xded9ff);
      lights.backLight.intensity = 0.45;
    }
  } else {
    lights.ambient.color.set(0xaab3c5);
    lights.ambient.intensity = 0.45;

    lights.directional.color.set(0xffffff);
    lights.directional.intensity = 1.0;
  }
}
