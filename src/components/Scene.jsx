import React, { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { Model } from './Car'

// ─── Lerp helper with shortest-path angle normalization ──────────────────────
function lerpAngle(current, target, t) {
  let diff = target - current
  // Wrap diff to [-π, π] for shortest path
  while (diff > Math.PI) diff -= Math.PI * 2
  while (diff < -Math.PI) diff += Math.PI * 2
  return current + diff * t
}

// ─── Per-section animation targets ───────────────────────────────────────────
//
// Rotation notes (outer group Y rotation of the Tata Safari model):
//   0         → camera looks from +Z → typically sees a side of the car
//   Math.PI/2 → camera rotated 90° → front or rear
//   Math.PI   → opposite side
//   -Math.PI/2 → the other front/rear
//
// ADJUST these values if your car shows the wrong face for each section.
// The car's inner group has rotation [-π/2, 0, 0] which swaps Y↔Z axes,
// so the exterior Y rotation produces: 0=side, π/2=front, π=other-side, 3π/2=back.
//
const SECTIONS = [
  {
    // ── Section 1: Hero — big, side view, car on right ──────────────────────
    rotY: 0,                  // Side view (right panel facing camera)
    posX: 1.8,                // Right side of screen
    posY: 0,
    scale: 1.15,
    label: 'hero',
  },
  {
    // ── Section 2: Courses — smaller, front view, car on left ───────────────
    rotY: Math.PI / 2,        // Front view  ← adjust if needed
    posX: -2.5,               // Left side
    posY: 0,
    scale: 0.82,
    label: 'courses',
  },
  {
    // ── Section 3: Stats — side view again, car on right ────────────────────
    rotY: Math.PI,            // Other side view
    posX: 1.6,                // Right side
    posY: 0,
    scale: 0.82,
    label: 'stats',
  },
  {
    // ── Section 4: Contact — back view, car on left ──────────────────────────
    rotY: (3 * Math.PI) / 2,  // Back view   ← adjust if needed
    posX: -2,               // Left side
    posY: 0,
    scale: 0.82,
    label: 'contact',
  },
]

// ─── Animated car wrapper ─────────────────────────────────────────────────────
function AnimatedCar({ scrollProgress }) {
  const groupRef = useRef()
  const { viewport } = useThree()

  // Smooth internal state (avoid re-renders by using refs)
  const cur = useRef({
    posX: SECTIONS[0].posX,
    posY: SECTIONS[0].posY,
    rotY: SECTIONS[0].rotY,
    scale: SECTIONS[0].scale,
    floatPhase: 0,
  })

  useFrame((state, delta) => {
    if (!groupRef.current) return

    const t = scrollProgress.current          // 0 → 1
    const sectionF = t * (SECTIONS.length - 1)
    const sectionIdx = Math.min(Math.floor(sectionF), SECTIONS.length - 2)
    const frac = sectionF - sectionIdx       // 0→1 within this section pair

    const a = SECTIONS[sectionIdx]
    const b = SECTIONS[sectionIdx + 1]

    // Lerp speed: 4–6 is responsive but smooth
    const SPEED = 4.5
    const lf = 1 - Math.pow(1 - Math.min(SPEED * delta, 1), 1) // exponential lerp factor

    // Target values (interpolate between the two surrounding sections)
    const tX     = a.posX + (b.posX - a.posX) * frac
    const tY     = a.posY + (b.posY - a.posY) * frac
    const tRotY  = a.rotY + (b.rotY - a.rotY) * frac
    const tScale = a.scale + (b.scale - a.scale) * frac

    // Apply smooth lerp
    cur.current.posX  = THREE.MathUtils.lerp(cur.current.posX,  tX,     lf * 0.9)
    cur.current.posY  = THREE.MathUtils.lerp(cur.current.posY,  tY,     lf * 0.9)
    cur.current.rotY  = lerpAngle(cur.current.rotY, tRotY, lf * 0.85)
    cur.current.scale = THREE.MathUtils.lerp(cur.current.scale, tScale, lf * 0.9)

    // Floating bob — only active in hero section (scroll < 0.1)
    const heroWeight = Math.max(0, 1 - t * 10)   // fades out quickly
    const floatY = Math.sin(state.clock.elapsedTime * 0.9) * 0.04 * heroWeight

    // Responsive X scale: viewport width factor
    const vwScale = Math.min(viewport.width / 16, 1)

    groupRef.current.position.x = cur.current.posX * vwScale
    groupRef.current.position.y = cur.current.posY + floatY
    groupRef.current.rotation.y = cur.current.rotY
    groupRef.current.scale.setScalar(cur.current.scale * vwScale)
  })

  return (
    <group ref={groupRef}>
      {/*
        Position compensation:
        The model's geometry is offset from its pivot:
          - Y: inner group at 110.451 × 0.01 = 1.10 units above origin
          - Z: after the -π/2 X-rotation the car body extends into +Z
        We shift the model group to center the car in the viewport.
        Adjust these if the car appears off-center.
      */}
      <group position={[0, -1.1, 0]}>
        <Model />
      </group>
    </group>
  )
}

// ─── Shadow plane ─────────────────────────────────────────────────────────────
function ShadowPlane({ scrollProgress }) {
  const meshRef = useRef()
  useFrame(() => {
    if (!meshRef.current) return
    // Fade shadow out in lower sections
    const t = scrollProgress.current
    meshRef.current.material.opacity = THREE.MathUtils.lerp(
      meshRef.current.material.opacity,
      0.18 - t * 0.08,
      0.08
    )
  })
  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <shadowMaterial transparent opacity={0.18} />
    </mesh>
  )
}

// ─── Loading fallback ─────────────────────────────────────────────────────────
function LoadingBox() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.8
  })
  return (
    <mesh ref={ref} position={[1.8, 0, 0]}>
      <boxGeometry args={[1.5, 0.8, 3]} />
      <meshStandardMaterial color="#93b4d9" wireframe />
    </mesh>
  )
}

// ─── Main Scene inside Canvas ─────────────────────────────────────────────────
function SceneContent({ scrollProgress }) {
  return (
    <>
      {/* Fixed camera */}
      <PerspectiveCamera
        makeDefault
        position={[0, 1.2, 7]}
        fov={42}
        near={0.1}
        far={100}
      />

      {/* Lighting: soft studio HDRI */}
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={30}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-bias={-0.001}
      />
      <directionalLight position={[-4, 4, -3]} intensity={0.4} color="#b8d4f0" />
      <pointLight position={[0, 5, 3]} intensity={0.3} color="#ddeeff" />

      {/* HDRI environment — "city" preset for reflections, "rembrandt" for dramatic lighting */}
      <Environment preset="city" />

      {/* Contact shadow for soft ground shadow */}
      <ContactShadows
        position={[0, -1.1, 0]}
        opacity={0.3}
        scale={12}
        blur={2.5}
        far={4}
        resolution={256}
        color="#1a3a6b"
      />

      {/* Car */}
      <Suspense fallback={<LoadingBox />}>
        <AnimatedCar scrollProgress={scrollProgress} />
      </Suspense>

      {/* Transparent shadow receiver */}
      <ShadowPlane scrollProgress={scrollProgress} />
    </>
  )
}

// ─── Canvas wrapper (exported) ────────────────────────────────────────────────
export default function Scene({ scrollProgress }) {
  return (
    <div id="three-canvas-container" aria-hidden="true">
      <Canvas
  frameloop="always"
  shadows={false}
  dpr={[1, 1.1]}
  gl={{
    antialias: false,
    alpha: true,
    powerPreference: 'high-performance',
  }}
  style={{ background: 'transparent' }}
>
  <SceneContent scrollProgress={scrollProgress} />
</Canvas>
    </div>
  )
}
