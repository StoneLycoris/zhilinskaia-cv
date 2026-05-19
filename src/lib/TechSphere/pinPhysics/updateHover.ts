import * as THREE from 'three'

import { SPRING } from '@/lib/TechSphere/pinPhysics/config'
import type { SkillPin } from '@/types/skillPin'

export function updateHover(pin: SkillPin) {
  const data = pin.userData

  const force = (data.targetHover - data.hover) * SPRING.stiffness

  data.velocity += force
  data.velocity *= SPRING.damping

  data.hover += data.velocity

  data.hover = THREE.MathUtils.clamp(data.hover, 0, 1)
}