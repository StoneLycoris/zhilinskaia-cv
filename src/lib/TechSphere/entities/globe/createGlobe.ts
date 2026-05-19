import * as THREE from "three";

export function createGlobe() {
  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0x434374),
    roughness: 0.85,
    metalness: 0.05,
    emissive: new THREE.Color(0x000000),
  });

  const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), material);

  mesh.userData.material = material;

  return mesh;
}

export function setGlobeTheme(globe: THREE.Mesh, theme: "dark" | "light") {
  const isLight = theme === "light";

  const material = globe.userData.material as THREE.MeshStandardMaterial;

  if (isLight) {
    material.color.set(0xe6e2ff);
    material.emissive.set(0x151026);
    material.emissiveIntensity = 0.1;
    material.roughness = 0.72;
    material.metalness = 0.03;
  } else {
    material.color.set(0x434374);
    material.emissive.set(0x050510);
    material.emissiveIntensity = 0.25;

    material.roughness = 0.85;
    material.metalness = 0.05;
  }

  material.needsUpdate = true;
}
