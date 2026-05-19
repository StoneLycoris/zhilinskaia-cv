import * as THREE from 'three'

import { updatePinPhysics } from '@/lib/TechSphere/pinPhysics/updatePinPhysics'
import type { SkillPin } from '@/types/skillPin'

export function createEngine(opts: {
  scene: THREE.Scene
  camera: THREE.Camera
  renderer: THREE.WebGLRenderer
  controls: any
  pins: SkillPin[]
}) {
  let raf = 0

  function start() {
    const loop = () => {
      raf = requestAnimationFrame(loop)

      const time = performance.now() * 0.001

      opts.controls.update()

      opts.pins.forEach((pin) => {
        updatePinPhysics(pin, opts.camera, time)
      })

      opts.renderer.render(opts.scene, opts.camera)
    }

    loop()
  }

  function stop() {
    cancelAnimationFrame(raf)
  }

  return {
    start,
    stop,
  }
}