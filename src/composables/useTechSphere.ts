import * as THREE from "three";
import type { Ref } from "vue";
import { onMounted, onUnmounted, watch } from "vue";

import { useTheme } from "@/composables/useTheme";
import { skills } from "@/data/skills";
import { createCamera } from "@/lib/TechSphere/core/createCamera";
import { createControls } from "@/lib/TechSphere/core/createControls";
import {
  createLights,
  type SceneLights,
  setLightsTheme,
} from "@/lib/TechSphere/core/createLights";
import { createRenderer } from "@/lib/TechSphere/core/createRenderer";
import { createResizeSystem } from "@/lib/TechSphere/core/createResizeSystem";
import { createScene } from "@/lib/TechSphere/core/createScene";
import { createEngine } from "@/lib/TechSphere/engine/createEngine";
import {
  createGlobe,
  setGlobeTheme,
} from "@/lib/TechSphere/entities/globe/createGlobe";
import { createPins } from "@/lib/TechSphere/entities/pin/createPins";
import { createInteraction } from "@/lib/TechSphere/interaction/createInteraction";
import { useTechSphereStore } from "@/store/techSphere.store";
import type { SkillPin } from "@/types/skillPin";

type TechSphereContext = {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: ReturnType<typeof createControls>;

  engine: ReturnType<typeof createEngine>;
  interaction: ReturnType<typeof createInteraction>;
  resizeSystem: ReturnType<typeof createResizeSystem>;

  pins: SkillPin[];
  globe: THREE.Mesh;
  lights: SceneLights;
};

const { theme } = useTheme();

export function useTechSphere(canvasRef: Ref<HTMLCanvasElement | null>) {
  const store = useTechSphereStore();

  let context: TechSphereContext | null = null;

  function init() {
    const canvas = canvasRef.value;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();

    const scene = createScene();
    const camera = createCamera(rect.width / rect.height);
    const renderer = createRenderer(canvas);

    renderer.setSize(rect.width, rect.height, false);

    const controls = createControls(camera, canvas);

    const lights = createLights(scene);
    setLightsTheme(lights, theme.value);

    const globe = createGlobe();
    scene.add(globe);
    setGlobeTheme(globe, theme.value);

    watch(theme, (t) => {
      setGlobeTheme(globe, t);
      setLightsTheme(lights, t);
    });

    const pins = createPins(globe, skills);

    const engine = createEngine({
      scene,
      camera,
      renderer,
      controls,
      pins,
    });

    const interaction = createInteraction({
      canvas,
      camera,
      pins,
      onHover: (skill, x, y) => {
        store.setHoveredSkill(skill, x, y);
      },
    });

    const resizeSystem = createResizeSystem({
      canvas,
      camera,
      renderer,
    });

    resizeSystem.start();

    engine.start();

    context = {
      scene,
      camera,
      renderer,
      controls,
      engine,
      interaction,
      resizeSystem,
      pins,
      globe,
      lights,
    };

    window.addEventListener("mousemove", interaction.onMouseMove);
  }

  onMounted(() => {
    requestAnimationFrame(init);
  });

  onUnmounted(() => {
    if (!context) return;

    context.engine.stop();
    context.resizeSystem.stop();

    window.removeEventListener("mousemove", context.interaction.onMouseMove);

    context.renderer.dispose();

    context = null;
  });
}
