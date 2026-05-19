import * as THREE from 'three'

import { updateHead } from '@/lib/TechSphere/pinPhysics/visuals/updateHead'
import { updateLabel } from '@/lib/TechSphere/pinPhysics/visuals/updateLabel'
import { updateStick } from '@/lib/TechSphere/pinPhysics/visuals/updateStick'
import type { SkillPin } from '@/types/skillPin'

export function updateVisuals(
  pin: SkillPin,
  camera: THREE.Camera
) {
  updateStick(pin)
  updateHead(pin)
  updateLabel(pin, camera)
}