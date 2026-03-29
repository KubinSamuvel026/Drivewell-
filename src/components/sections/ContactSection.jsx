import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        padding: '120px 7vw 60px',
        position: 'relative',
        background: 'linear-gradient(160deg, #0f172a 0%, #1e3a5f 60%, #1d4ed8 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background dots */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(rgba(147,197,253,0.08) 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-block',
              background: 'rgba(147,197,253,0.15)',
              border: '1px solid rgba(147,197,253,0.3)',
              borderRadius: 50,
              padding: '6px 16px',
              marginBottom: 18,
              fontFamily: "'DM Sans'",
              fontSize: 13,
              fontWeight: 600,
              color: '#93c5fd',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Get In Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(28px, 3vw, 48px)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.15,
              letterSpacing: '-1px',
              marginBottom: 12,
            }}
          >
            Ready to Start Your<br />
            <span style={{ color: '#60a5fa' }}>Journey?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "'DM Sans'",
              fontSize: 16,
              color: '#94a3b8',
              maxWidth: 480,
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Book your first lesson today. No pressure, no commitment —
            just a friendly conversation about your driving goals.
          </motion.p>
        </div>

        {/* Grid: form + info */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 32,
          alignItems: 'start',
        }} className="contact-grid">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(20px)',
              border: '1.5px solid rgba(255,255,255,0.1)',
              borderRadius: 24,
              padding: '36px 32px',
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '40px 0' }}
              >
                <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontFamily: "'Sora'", color: 'white', fontSize: 24, marginBottom: 10 }}>
                  Booking Request Sent!
                </h3>
                <p style={{ fontFamily: "'DM Sans'", color: '#94a3b8', lineHeight: 1.7 }}>
                  We'll call you within 24 hours to confirm your lesson slot. Get ready to drive!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{
                  fontFamily: "'Sora'",
                  fontWeight: 700,
                  fontSize: 20,
                  color: 'white',
                  marginBottom: 24,
                }}>
                  Book a Lesson
                </h3>

                {[
                  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Arjun Patel' },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'arjun@email.com' },
                  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210' },
                ].map(field => (
                  <div key={field.name} style={{ marginBottom: 18 }}>
                    <label style={{
                      display: 'block',
                      fontFamily: "'DM Sans'",
                      fontSize: 13,
                      fontWeight: 600,
                      color: '#93c5fd',
                      marginBottom: 8,
                      letterSpacing: '0.02em',
                    }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255,255,255,0.07)',
                        border: '1.5px solid rgba(255,255,255,0.1)',
                        borderRadius: 12,
                        fontFamily: "'DM Sans'",
                        fontSize: 14,
                        color: 'white',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      className="contact-input"
                    />
                  </div>
                ))}

                <div style={{ marginBottom: 18 }}>
                  <label style={{
                    display: 'block',
                    fontFamily: "'DM Sans'",
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#93c5fd',
                    marginBottom: 8,
                  }}>
                    Course Type
                  </label>
                  <select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(15,23,42,0.8)',
                      border: '1.5px solid rgba(255,255,255,0.1)',
                      borderRadius: 12,
                      fontFamily: "'DM Sans'",
                      fontSize: 14,
                      color: form.course ? 'white' : '#64748b',
                      outline: 'none',
                    }}
                  >
                    <option value="">Select a course...</option>
                    <option value="beginner">Beginner Program</option>
                    <option value="advanced">Advanced Driving</option>
                    <option value="license">License Training</option>
                    <option value="night">Night Driving</option>
                  </select>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{
                    display: 'block',
                    fontFamily: "'DM Sans'",
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#93c5fd',
                    marginBottom: 8,
                  }}>
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any specific requirements or questions..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255,255,255,0.07)',
                      border: '1.5px solid rgba(255,255,255,0.1)',
                      borderRadius: 12,
                      fontFamily: "'DM Sans'",
                      fontSize: 14,
                      color: 'white',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
                    border: 'none',
                    borderRadius: 12,
                    fontFamily: "'DM Sans'",
                    fontWeight: 700,
                    fontSize: 15,
                    color: 'white',
                    cursor: 'pointer',
                    boxShadow: '0 6px 24px rgba(59,130,246,0.4)',
                    transition: 'all 0.25s ease',
                  }}
                  className="submit-btn"
                >
                  Book My Lesson →
                </button>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            {[
              {
                icon: '📞',
                title: 'Call Us',
                lines: ['+91 98765 43210', '+91 91234 56789'],
              },
              {
                icon: '📍',
                title: 'Visit Us',
                lines: ['42, Avinashi Road, Coimbatore', 'Tamil Nadu, India – 641014'],
              },
              {
                icon: '🕐',
                title: 'Working Hours',
                lines: ['Mon – Sat: 7:00 AM – 7:00 PM', 'Sunday: 8:00 AM – 4:00 PM'],
              },
              {
                icon: '✉️',
                title: 'Email',
                lines: ['hello@driveright.in', 'bookings@driveright.in'],
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                style={{
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: '18px 20px',
                }}
              >
                <div style={{
                  fontSize: 22,
                  width: 44, height: 44,
                  borderRadius: 12,
                  background: 'rgba(59,130,246,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{
                    fontFamily: "'DM Sans'",
                    fontWeight: 700,
                    fontSize: 13,
                    color: '#93c5fd',
                    marginBottom: 6,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}>
                    {item.title}
                  </div>
                  {item.lines.map(line => (
                    <div key={line} style={{
                      fontFamily: "'DM Sans'",
                      fontSize: 14,
                      color: '#e2e8f0',
                      lineHeight: 1.6,
                    }}>
                      {line}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer bottom */}
        <div style={{
          marginTop: 64,
          paddingTop: 28,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <div style={{
            fontFamily: "'DM Sans'",
            fontSize: 14,
            color: '#475569',
          }}>
            © 2025 DriveRight Academy. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(link => (
              <a key={link} href="#" style={{
                fontFamily: "'DM Sans'",
                fontSize: 13,
                color: '#475569',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }} className="footer-link">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-input:focus { border-color: rgba(59,130,246,0.6) !important; }
        .contact-input::placeholder { color: #475569; }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 32px rgba(59,130,246,0.55) !important; }
        .footer-link:hover { color: #93c5fd !important; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          #contact { padding: 80px 24px 40px !important; }
        }
      `}</style>
    </section>
  )
}
