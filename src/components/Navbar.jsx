import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home',    href: '#hero' },
  { label: 'Courses', href: '#courses' },
  { label: 'About',   href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 24px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled
          ? 'rgba(255,255,255,0.92)'
          : 'rgba(255,255,255,0.0)',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 1px 32px rgba(59,130,246,0.08)' : 'none',
        transition: 'background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease',
        borderBottom: scrolled ? '1px solid rgba(219,234,254,0.6)' : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 17h18M5 17l2-6h10l2 6M9 17V11M15 17V11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="7" cy="17" r="2" fill="white"/>
              <circle cx="17" cy="17" r="2" fill="white"/>
            </svg>
          </div>
          <span style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: scrolled ? '#0f172a' : '#0f172a',
            letterSpacing: '-0.5px',
          }}>
            Drive<span style={{ color: '#3b82f6' }}>Right</span>
          </span>
        </div>
      </a>

      {/* Desktop nav links */}
      <ul style={{
        display: 'flex', gap: 36, listStyle: 'none',
        margin: 0, padding: 0,
      }} className="desktop-nav">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: 15,
                color: '#1e293b',
                textDecoration: 'none',
                position: 'relative',
                padding: '4px 0',
              }}
              className="nav-link"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          fontSize: 14,
          color: 'white',
          textDecoration: 'none',
          background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
          padding: '10px 22px',
          borderRadius: 50,
          boxShadow: '0 4px 14px rgba(59,130,246,0.35)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          whiteSpace: 'nowrap',
        }}
        className="nav-cta"
      >
        Book Now
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 8,
        }}
        className="hamburger"
      >
        <div style={{ width: 22, height: 2, background: '#1e293b', marginBottom: 5, borderRadius: 2 }} />
        <div style={{ width: 22, height: 2, background: '#1e293b', marginBottom: 5, borderRadius: 2 }} />
        <div style={{ width: 22, height: 2, background: '#1e293b', borderRadius: 2 }} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            right: 0,
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(20px)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            borderBottom: '1px solid #e2e8f0',
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: 16,
                color: '#1e293b',
                textDecoration: 'none',
              }}
            >
              {label}
            </a>
          ))}
        </motion.div>
      )}

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #3b82f6;
          border-radius: 1px;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(59,130,246,0.45) !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
