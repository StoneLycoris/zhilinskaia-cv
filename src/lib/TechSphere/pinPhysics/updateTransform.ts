import * as THREE from 'three'

import { DEPTH, FLOAT } from '@/lib/TechSphere/pinPhysics/config'
import type { SkillPin } from '@/types/skillPin'

const tempVec = new THREE.Vector3()

export function updateTransform(pin: SkillPin, time: number) {
  const data = pin.userData
  const visibility = data.visibility

  const depthFactor = Math.pow(visibility, DEPTH.power)

  const surfaceOffset = THREE.MathUtils.lerp(
    DEPTH.inner,
    DEPTH.surface,
    depthFactor
  )

  const hoverOffset = data.hover * 0.14

  const float =
    Math.sin(time * FLOAT.speed + data.phase) *
    FLOAT.amplitude *
    visibility

  tempVec.copy(data.normal)
  tempVec.multiplyScalar(1 + surfaceOffset + hoverOffset)
  tempVec.addScaledVector(data.normal, float)

  pin.position.copy(tempVec)
}