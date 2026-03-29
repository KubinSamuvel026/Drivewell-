import React, { useRef, useEffect, useState } from 'react'
import Scene from './components/Scene'
import {
  Navbar,
  HeroSection,
  CoursesSection,
  StatsSection,
  ContactSection,
} from './components/Sections'

// Detect mobile
const isMobile = /Mobi|Android/i.test(navigator.userAgent)

// ─── Loading screen ───────────────────────────────────────────
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
        <span style={{ width: 8, height: 8, background: '#1a56db', borderRadius: '50%' }} />
        DriveWell
      </div>
      <div className="loading-spinner" />
      <p style={{ fontSize: '0.82rem', color: '#718096' }}>
        Loading your experience…
      </p>
    </div>
  )
}

// ─── Scroll progress ──────────────────────────────────────────
function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!barRef.current) return
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0
      barRef.current.style.width = pct + '%'
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      zIndex: 200,
      background: 'rgba(26,86,219,0.08)',
    }}>
      <div
        ref={barRef}
        style={{
          height: '100%',
          width: '0%',
          background: 'linear-gradient(90deg, #1a56db, #60a5fa)',
        }}
      />
    </div>
  )
}

// ─── Main App ─────────────────────────────────────────────────
export default function App() {
  const scrollProgress = useRef(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress.current = total > 0 ? window.scrollY / total : 0
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {/* Hide loading on mobile */}
      {!isMobile && <LoadingScreen visible={loading} />}

      {/* Hide 3D car on mobile */}
      {!isMobile && <Scene scrollProgress={scrollProgress} />}

      <ScrollProgress />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <CoursesSection />
        <StatsSection />
        <ContactSection />
      </main>
    </>
  )
}