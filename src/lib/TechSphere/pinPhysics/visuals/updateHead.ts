import * as THREE from 'three'

import type { SkillPin } from '@/types/skillPin'

export function updateHead(pin: SkillPin) {
  const data = pin.userData

  const baseLength = 0.16
  const length = baseLength * data.visibility

  const head = data.head

  head.position.y = length

  const scale =
    (1 + data.hover * 0.4) *
    THREE.MathUtils.lerp(0.4, 1, data.visibility)

  head.scale.setScalar(Math.max(0.001, scale))

  const mat = head.material as THREE.MeshStandardMaterial
  mat.transparent = true
  mat.opacity = data.visibility
}