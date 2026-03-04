import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from '../ThemeContext'

/* ── Iridescent rainbow hues ── */
const BUBBLE_HUES = [300, 260, 200, 170, 330, 50, 120, 280, 220, 350]

/* ── Cursor-only bubbles: small bubbles spawn where you move ── */
function CursorBubbles({ isDark }) {
  const COUNT = 15  // max alive at once
  const groupRef = useRef()
  const { viewport } = useThree()
  const mouse = useRef({ x: 0, y: 0, px: 0, py: 0 })
  const pool = useRef(
    Array.from({ length: COUNT }, () => ({
      alive: false, x: 0, y: 0, z: 0, vx: 0, vy: 0,
      born: 0, life: 0, size: 0, hue: 0,
    }))
  )
  const idx = useRef(0)
  const lastSpawn = useRef(0)
  const spawnBurst = useRef(0) // spawn 3 at a time

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = ((e.clientX / window.innerWidth) * 2 - 1) * (viewport.width / 2)
      mouse.current.y = (-(e.clientY / window.innerHeight) * 2 + 1) * (viewport.height / 2)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [viewport])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const dt = Math.min(state.clock.getDelta(), 0.05)
    const m = mouse.current

    const dx = m.x - m.px
    const dy = m.y - m.py
    const speed = Math.sqrt(dx * dx + dy * dy)

    // Spawn a burst of 3 small bubbles every ~250ms while cursor moves
    if (t - lastSpawn.current > 0.25 && speed > 0.015) {
      for (let b = 0; b < 3; b++) {
        const p = pool.current[idx.current % COUNT]
        p.alive = true
        p.x = m.x + (Math.random() - 0.5) * 0.6
        p.y = m.y + (Math.random() - 0.5) * 0.6
        p.z = -1 + (Math.random() - 0.5) * 0.5
        p.vx = (Math.random() - 0.5) * 0.25
        p.vy = 0.3 + Math.random() * 0.4  // gentle float up
        p.born = t + b * 0.04              // tiny stagger
        p.life = 2.0 + Math.random() * 1.5
        p.size = 0.06 + Math.random() * 0.14  // small: 0.06–0.20
        p.hue = BUBBLE_HUES[Math.floor(Math.random() * BUBBLE_HUES.length)]
        idx.current++
      }
      lastSpawn.current = t
    }
    m.px = m.x
    m.py = m.y

    if (!groupRef.current) return
    const children = groupRef.current.children

    for (let i = 0; i < COUNT; i++) {
      const p = pool.current[i]
      const grp = children[i]
      if (!grp) continue

      if (!p.alive) { grp.visible = false; continue }
      const age = t - p.born
      if (age < 0) { grp.visible = false; continue } // not born yet (stagger)
      if (age > p.life) { p.alive = false; grp.visible = false; continue }

      grp.visible = true
      const frac = age / p.life

      // Gentle wobble while floating up
      p.x += p.vx * dt * 0.4
      p.y += p.vy * dt
      p.vx *= 0.985

      const wobbleX = Math.sin(t * 2.5 + i * 1.7) * 0.02
      const x = p.x + wobbleX
      const y = p.y

      // Grow quickly, float, then shrink & pop
      const growPhase = Math.min(frac / 0.1, 1)
      const shrinkPhase = frac > 0.8 ? (1 - frac) / 0.2 : 1
      const s = p.size * growPhase * shrinkPhase

      const alpha = (1 - frac * frac) * shrinkPhase

      // Iridescent color that gently shifts
      const liveHue = (p.hue + age * 12) % 360
      const bColor = new THREE.Color(`hsl(${liveHue}, ${isDark ? 55 : 50}%, ${isDark ? 65 : 75}%)`)
      const eColor = new THREE.Color(`hsl(${(liveHue + 35) % 360}, ${isDark ? 50 : 45}%, ${isDark ? 60 : 70}%)`)

      const sphere = grp.children[0]
      const ring = grp.children[1]
      const hl = grp.children[2]

      if (sphere) {
        sphere.position.set(x, y, p.z)
        sphere.scale.setScalar(s)
        sphere.material.color.copy(bColor)
        sphere.material.opacity = (isDark ? 0.14 : 0.18) * alpha
      }
      if (ring) {
        ring.position.set(x, y, p.z)
        ring.scale.setScalar(s)
        ring.rotation.y = t + i
        ring.material.color.copy(eColor)
        ring.material.opacity = (isDark ? 0.20 : 0.26) * alpha
      }
      if (hl) {
        hl.position.set(x + s * 0.2, y + s * 0.2, p.z + s * 0.4)
        hl.scale.setScalar(s * 0.25)
        hl.material.opacity = (isDark ? 0.24 : 0.32) * alpha
      }
    }
  })

  return (
    <group ref={groupRef}>
      {Array.from({ length: COUNT }).map((_, i) => {
        const h = BUBBLE_HUES[i % BUBBLE_HUES.length]
        const color = `hsl(${h}, ${isDark ? 55 : 50}%, ${isDark ? 65 : 75}%)`
        return (
          <group key={i} visible={false}>
            <mesh>
              <sphereGeometry args={[1, 16, 16]} />
              <meshBasicMaterial
                color={color} transparent opacity={0}
                blending={THREE.NormalBlending} depthWrite={false} side={THREE.BackSide}
              />
            </mesh>
            <mesh>
              <ringGeometry args={[0.85, 1, 24]} />
              <meshBasicMaterial
                color={color} transparent opacity={0}
                blending={THREE.NormalBlending} depthWrite={false} side={THREE.DoubleSide}
              />
            </mesh>
            <mesh>
              <circleGeometry args={[1, 10]} />
              <meshBasicMaterial
                color={'#ffffff'} transparent opacity={0}
                blending={THREE.AdditiveBlending} depthWrite={false}
              />
            </mesh>
          </group>
        )
      })}
    </group>
  )
}

function Scene() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  return <CursorBubbles isDark={isDark} />
}

export default function ParticleBackground() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]} gl={{ antialias: false, alpha: true }}>
        <Scene />
      </Canvas>
    </div>
  )
}
