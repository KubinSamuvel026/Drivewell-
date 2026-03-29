import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 7vw 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '55vw', height: '55vw',
        background: 'radial-gradient(circle, rgba(147,197,253,0.22) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '-10%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          position: 'absolute',
          top: '18%',
          left: '7vw',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(147,197,253,0.5)',
          borderRadius: 50,
          padding: '8px 16px',
          boxShadow: '0 4px 20px rgba(59,130,246,0.1)',
        }}
      >
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
        <span style={{ fontFamily: "'DM Sans'", fontSize: 13, fontWeight: 500, color: '#334155' }}>
          Trusted by 8,000+ Students
        </span>
      </motion.div>

      {/* Content */}
      <div style={{
        maxWidth: '50%',
        position: 'relative',
        zIndex: 2,
      }} className="hero-content">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #dbeafe, #eff6ff)',
            border: '1px solid #bfdbfe',
            borderRadius: 50,
            padding: '6px 16px',
            marginBottom: 24,
            fontFamily: "'DM Sans'",
            fontSize: 13,
            fontWeight: 600,
            color: '#1d4ed8',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          🚗 &nbsp;Certified Driving Academy
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(36px, 4.5vw, 64px)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: '#0f172a',
            marginBottom: 24,
            letterSpacing: '-1.5px',
          }}
        >
          Learn Driving<br />
          <span style={{
            background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            with Confidence
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          style={{
            fontFamily: "'DM Sans'",
            fontSize: 'clamp(15px, 1.15vw, 18px)',
            fontWeight: 400,
            lineHeight: 1.75,
            color: '#475569',
            maxWidth: 440,
            marginBottom: 40,
          }}
        >
          Professional driving lessons tailored for beginners and experienced
          drivers alike. Get your license faster with expert instructors and
          modern training vehicles.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
        >
          <a
            href="#contact"
            style={{
              fontFamily: "'DM Sans'",
              fontWeight: 700,
              fontSize: 15,
              color: 'white',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
              padding: '14px 30px',
              borderRadius: 50,
              boxShadow: '0 6px 24px rgba(59,130,246,0.4)',
              transition: 'all 0.25s ease',
              display: 'inline-block',
            }}
            className="btn-primary"
          >
            Start Learning →
          </a>
          <a
            href="#courses"
            style={{
              fontFamily: "'DM Sans'",
              fontWeight: 600,
              fontSize: 15,
              color: '#1d4ed8',
              textDecoration: 'none',
              background: 'rgba(219,234,254,0.6)',
              border: '1.5px solid #bfdbfe',
              padding: '13px 28px',
              borderRadius: 50,
              transition: 'all 0.25s ease',
              display: 'inline-block',
            }}
            className="btn-secondary"
          >
            View Courses
          </a>
        </motion.div>

        {/* Mini stats row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          style={{
            display: 'flex',
            gap: 32,
            marginTop: 52,
            paddingTop: 32,
            borderTop: '1px solid #e2e8f0',
          }}
        >
          {[
            { num: '15+', label: 'Years Experience' },
            { num: '98%', label: 'Pass Rate' },
            { num: '8K+', label: 'Students Trained' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: "'Sora'", fontWeight: 700,
                fontSize: 26, color: '#1d4ed8', lineHeight: 1,
              }}>{num}</div>
              <div style={{
                fontFamily: "'DM Sans'", fontSize: 13,
                color: '#64748b', marginTop: 4, fontWeight: 500,
              }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ fontFamily: "'DM Sans'", fontSize: 12, color: '#94a3b8', fontWeight: 500 }}>
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          style={{
            width: 28, height: 44,
            border: '2px solid #bfdbfe',
            borderRadius: 14,
            display: 'flex', justifyContent: 'center', paddingTop: 8,
          }}
        >
          <div style={{
            width: 4, height: 8,
            borderRadius: 2,
            background: '#3b82f6',
          }} />
        </motion.div>
      </motion.div>

      <style>{`
        .hero-content { max-width: 50%; }
        .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(59,130,246,0.5) !important; }
        .btn-secondary:hover { background: rgba(219,234,254,1) !important; transform: translateY(-2px); }
        @media (max-width: 768px) {
          .hero-content { max-width: 100% !important; }
          #hero { padding: 100px 24px 80px !important; }
        }
      `}</style>
    </section>
  )
}
