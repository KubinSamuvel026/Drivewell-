import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const COURSES = [
  {
    icon: '🌱',
    title: 'Beginner Program',
    desc: 'Zero experience? No problem. Learn from scratch with patient, certified instructors in a comfortable environment.',
    duration: '4 Weeks',
    sessions: '12 Sessions',
    color: '#eff6ff',
    accent: '#3b82f6',
    border: '#bfdbfe',
  },
  {
    icon: '⚡',
    title: 'Advanced Driving',
    desc: 'Master highway driving, parking, and defensive techniques. Take your skills to the next level.',
    duration: '2 Weeks',
    sessions: '8 Sessions',
    color: '#f0fdf4',
    accent: '#16a34a',
    border: '#bbf7d0',
  },
  {
    icon: '🪪',
    title: 'License Training',
    desc: 'Exam-focused preparation including mock tests, documentation guidance, and RTO formalities.',
    duration: '3 Weeks',
    sessions: '10 Sessions',
    color: '#fffbeb',
    accent: '#d97706',
    border: '#fde68a',
  },
  {
    icon: '🌙',
    title: 'Night Driving',
    desc: 'Conquer night-time road anxiety. Learn to handle low visibility, glare, and night-specific hazards.',
    duration: '1 Week',
    sessions: '4 Sessions',
    color: '#f5f3ff',
    accent: '#7c3aed',
    border: '#ddd6fe',
  },
]

function CourseCard({ course, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      style={{
        background: course.color,
        border: `1.5px solid ${course.border}`,
        borderRadius: 20,
        padding: '28px 26px',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top glow */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 3,
        background: `linear-gradient(90deg, ${course.accent}60, ${course.accent})`,
        borderRadius: '20px 20px 0 0',
      }} />

      <div style={{
        fontSize: 36,
        marginBottom: 16,
        display: 'inline-block',
      }}>
        {course.icon}
      </div>

      <h3 style={{
        fontFamily: "'Sora', sans-serif",
        fontSize: 18,
        fontWeight: 700,
        color: '#0f172a',
        marginBottom: 10,
        letterSpacing: '-0.3px',
      }}>
        {course.title}
      </h3>

      <p style={{
        fontFamily: "'DM Sans'",
        fontSize: 14,
        lineHeight: 1.65,
        color: '#475569',
        marginBottom: 20,
      }}>
        {course.desc}
      </p>

      <div style={{ display: 'flex', gap: 10 }}>
        <span style={{
          fontFamily: "'DM Sans'",
          fontSize: 12,
          fontWeight: 600,
          color: course.accent,
          background: `${course.accent}18`,
          border: `1px solid ${course.border}`,
          borderRadius: 50,
          padding: '4px 12px',
        }}>
          {course.duration}
        </span>
        <span style={{
          fontFamily: "'DM Sans'",
          fontSize: 12,
          fontWeight: 600,
          color: course.accent,
          background: `${course.accent}18`,
          border: `1px solid ${course.border}`,
          borderRadius: 50,
          padding: '4px 12px',
        }}>
          {course.sessions}
        </span>
      </div>

      <motion.div
        whileHover={{ x: 4 }}
        style={{
          marginTop: 20,
          fontFamily: "'DM Sans'",
          fontSize: 14,
          fontWeight: 600,
          color: course.accent,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        Enroll Now →
      </motion.div>
    </motion.div>
  )
}

export default function CoursesSection() {
  const ref = useRef()
  const inView = useInView(ref, { once: false, margin: '-20%' })

  return (
    <section
      id="courses"
      ref={ref}
      style={{
        minHeight: '100vh',
        padding: '120px 7vw',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, #f0f6ff 0%, #ffffff 50%, #f8faff 100%)',
        zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        {/* Section header */}
        <div style={{ marginBottom: 60, maxWidth: 520 }}>
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
            What We Offer
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
              marginBottom: 14,
            }}
          >
            Courses Designed for<br />
            <span style={{ color: '#3b82f6' }}>Every Driver</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "'DM Sans'",
              fontSize: 16,
              color: '#64748b',
              lineHeight: 1.7,
            }}
          >
            From absolute beginners to experienced drivers seeking advanced skills,
            we have a course that fits your goals and schedule.
          </motion.p>
        </div>

        {/* Course cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 20,
        }}>
          {COURSES.map((course, i) => (
            <CourseCard key={course.title} course={course} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: 48,
            textAlign: 'center',
          }}
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
              padding: '14px 36px',
              borderRadius: 50,
              boxShadow: '0 6px 24px rgba(59,130,246,0.35)',
              display: 'inline-block',
              transition: 'all 0.25s ease',
            }}
            className="cta-btn"
          >
            Book a Free Trial Lesson
          </a>
        </motion.div>
      </div>

      <style>{`
        .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(59,130,246,0.5) !important; }
      `}</style>
    </section>
  )
}
