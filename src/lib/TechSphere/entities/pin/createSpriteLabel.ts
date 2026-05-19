import * as THREE from "three";

import { loadIcon } from "@/lib/TechSphere/utils/iconLoader";
import type { Skill } from "@/types/skill";

export function createSpriteLabel(skill: Skill): THREE.Sprite {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;

  const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

  const width = 460;
  const height = 120;

  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;

  context.scale(devicePixelRatio, devicePixelRatio);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;

  drawBase(context, skill, width, height);

  if (skill.icon) {
    loadIcon(skill.icon)
      .then((img) => {
        drawIcon(context, img, height);
        texture.needsUpdate = true;
      })
      .catch(() => {});
  }

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: true,
    depthWrite: false,
    opacity: 0.95,
  });

  const sprite = new THREE.Sprite(material);

  sprite.scale.set(0.48, 0.14, 1);

  return sprite;
}

function drawBase(
  context: CanvasRenderingContext2D,
  skill: Skill,
  width: number,
  height: number
) {
  const radius = 20;

  context.fillStyle = "rgba(18, 20, 28, 0.59)";
  roundRect(context, 0, 0, width, height, radius);
  context.fill();

  context.strokeStyle = "rgba(255,255,255,0.07)";
  context.lineWidth = 1;
  roundRect(context, 0.5, 0.5, width - 1, height - 1, radius);
  context.stroke();

  context.fillStyle = "rgba(255,255,255,0.94)";
  context.font = "600 40px system-ui";
  context.textAlign = "left";
  context.textBaseline = "middle";

  context.fillText(skill.name, 110, height / 2);
}

function drawIcon(
  context: CanvasRenderingContext2D,
  img: HTMLImageElement,
  height: number
) {
  const size = 64;

  const x = 28;
  const y = height / 2 - size / 2;

  context.globalAlpha = 0.95;

  context.drawImage(img, x, y, size, size);

  context.globalAlpha = 1;
}

function roundRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius,
    y + height
  );
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}
