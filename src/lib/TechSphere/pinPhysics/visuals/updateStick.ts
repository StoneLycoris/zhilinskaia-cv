import * as THREE from 'three'

import type { SkillPin } from '@/types/skillPin'

export function updateStick(pin: SkillPin) {
  const data = pin.userData

  const baseLength = 0.16
  const length = baseLength * data.visibility

  const stick = data.stick

  stick.scale.y = Math.max(0.001, length / baseLength)
  stick.position.y = length / 2

  const mat = stick.material as THREE.MeshStandardMaterial
  mat.transparent = true
  mat.opacity = data.visibility * 0.85
}