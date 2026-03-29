import React, { useRef, useEffect, useState } from 'react'
import Scene from './components/Scene'
import {
  Navbar,
  HeroSection,
  CoursesSection,
  StatsSection,
  ContactSection,
} from './components/Sections'

// ─── Loading screen ───────────────────────────────────────────────────────────
function LoadingScreen({ visible }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'linear-gradient(165deg, #eef6ff 0%, #f5f9ff 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'all' : 'none',
        transition: 'opacity 0.6s ease',
      }}
    >
      <div style={{
        fontFamily: '"Playfair Display", serif',
        fontSize: '1.6rem',
        fontWeight: 700,
        color: '#0f2040',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>
        <span style={{ width: 8, height: 8, background: '#1a56db', borderRadius: '50%', display: 'inline-block' }} />
        DriveWell
      </div>
      <div className="loading-spinner" />
      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', color: '#718096', fontWeight: 300 }}>
        Loading your experience…
      </p>
    </div>
  )
}

// ─── Scroll progress indicator ────────────────────────────────────────────────
function ScrollProgress({ scrollRef }) {
  const barRef = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      if (!barRef.current) return
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0
      barRef.current.style.width = pct + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      height: '3px', zIndex: 200,
      background: 'rgba(26,86,219,0.08)',
    }}>
      <div
        ref={barRef}
        style={{
          height: '100%',
          width: '0%',
          background: 'linear-gradient(90deg, #1a56db, #60a5fa)',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  // scrollProgress is a ref (not state) to avoid re-renders in the 3D scene
  const scrollProgress = useRef(0)
  const [loading, setLoading] = useState(true)

  // Track scroll progress (normalized 0 → 1)
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress.current = total > 0 ? window.scrollY / total : 0
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Hide loading screen after a brief delay (enough for Suspense + fonts)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <LoadingScreen visible={loading} />

      {/* Fixed 3D Canvas overlay — pointer-events disabled so HTML is still scrollable */}
      <Scene scrollProgress={scrollProgress} />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Fixed navigation */}
      <Navbar />

      {/* Scrollable page content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <CoursesSection />
        <StatsSection />
        <ContactSection />
      </main>
    </>
  )
}
