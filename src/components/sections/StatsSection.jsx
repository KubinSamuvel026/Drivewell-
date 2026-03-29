import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function useCountUp(target, inView, duration = 1800) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start = performance.now()

    const animate = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, target, duration])

  return count
}

const STATS = [
  { value: 15, suffix: '+', label: 'Years of Experience', icon: '🏆', desc: 'Established in 2009, we have shaped confident drivers across the region.' },
  { value: 8000, suffix: '+', label: 'Students Trained', icon: '👥', desc: 'Over eight thousand lives changed with the confidence to drive safely.' },
  { value: 98, suffix: '%', label: 'Pass Rate', icon: '✅', desc: 'Industry-leading pass rates backed by structured curriculum and practice.' },
  { value: 12, suffix: '', label: 'Training Vehicles', icon: '🚗', desc: 'Modern, well-maintained fleet with dual-control safety systems.' },
]

function StatCard({ stat, index }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true })
  const count = useCountUp(stat.value, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      style={{
        background: 'white',
        borderRadius: 20,
        padding: '28px 24px',
        boxShadow: '0 4px 24px rgba(59,130,246,0.07)',
        border: '1.5px solid #e8f0fe',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 80, height: 80,
        background: 'radial-gradient(circle at 70% 30%, rgba(59,130,246,0.06), transparent 70%)',
        borderRadius: '0 20px 0 0',
      }} />

      <div style={{ fontSize: 30, marginBottom: 14 }}>{stat.icon}</div>

      <div style={{
        fontFamily: "'Sora', sans-serif",
        fontWeight: 800,
        fontSize: 42,
        color: '#1d4ed8',
        lineHeight: 1,
        letterSpacing: '-1px',
        marginBottom: 4,
      }}>
        {count.toLocaleString()}{stat.suffix}
      </div>

      <div style={{
        fontFamily: "'DM Sans'",
        fontWeight: 700,
        fontSize: 15,
        color: '#0f172a',
        marginBottom: 10,
      }}>
        {stat.label}
      </div>

      <p style={{
        fontFamily: "'DM Sans'",
        fontSize: 13,
        lineHeight: 1.6,
        color: '#64748b',
      }}>
        {stat.desc}
      </p>
    </motion.div>
  )
}

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Beginner Program Graduate',
    text: 'I was terrified of driving. DriveRight\'s instructors were so patient and encouraging. Passed my test first try!',
    avatar: '👩',
  },
  {
    name: 'Arun Kumar',
    role: 'Advanced Program',
    text: 'The night driving course was a game-changer. I now feel completely confident on the roads at any hour.',
    avatar: '👨',
  },
  {
    name: 'Meera Nair',
    role: 'License Training',
    text: 'Professional, structured, and incredibly thorough. The RTO guidance made the whole process stress-free.',
    avatar: '👩',
  },
]

export default function StatsSection() {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        padding: '120px 7vw',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #f8faff 0%, #eff6ff 40%, #f0f9ff 100%)',
      }}
    >
      {/* Decorative grid pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(rgba(59,130,246,0.06) 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
        zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #dbeafe, #eff6ff)',
              border: '1px solid #bfdbfe',
              borderRadius: 50,
              padding: '6px 16px',
              marginBottom: 18,
              fontFamily: "'DM Sans'",
              fontSize: 13,
              fontWeight: 600,
              color: '#1d4ed8',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            By the Numbers
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(28px, 3vw, 46px)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.15,
              letterSpacing: '-1px',
            }}
          >
            Why Thousands Choose<br />
            <span style={{ color: '#3b82f6' }}>DriveRight</span>
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
          gap: 20,
          marginBottom: 72,
        }}>
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 20 }}
        >
          <h3 style={{
            fontFamily: "'Sora'",
            fontSize: 22,
            fontWeight: 700,
            color: '#0f172a',
            marginBottom: 28,
            textAlign: 'center',
          }}>
            What Our Students Say
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 18,
          }}>
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: 16,
                  padding: '22px',
                  boxShadow: '0 2px 16px rgba(59,130,246,0.06)',
                  border: '1.5px solid #e8f0fe',
                }}
              >
                <div style={{
                  fontFamily: "'DM Sans'",
                  fontSize: 14,
                  color: '#475569',
                  lineHeight: 1.7,
                  marginBottom: 16,
                  fontStyle: 'italic',
                }}>
                  "{t.text}"
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20,
                  }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans'", fontWeight: 700, fontSize: 14, color: '#0f172a' }}>
                      {t.name}
                    </div>
                    <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: '#94a3b8' }}>
                      {t.role}
                    </div>
                  </div>
                  <div style={{ marginLeft: 'auto', color: '#fbbf24', fontSize: 13 }}>
                    ★★★★★
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
