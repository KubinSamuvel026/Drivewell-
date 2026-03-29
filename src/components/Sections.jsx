import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

function AnimWhen({ children, variants = fadeUp, custom = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={custom}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export function Navbar() {
  const navRef = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return
      if (window.scrollY > 40) {
        navRef.current.classList.add('nav-scrolled')
      } else {
        navRef.current.classList.remove('nav-scrolled')
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        .nav-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 22px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.4s ease;
        }
        .nav-scrolled {
          padding: 14px 48px;
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(26, 90, 219, 0.08);
          box-shadow: 0 4px 24px rgba(26, 86, 219, 0.06);
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #1a3a6b;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nav-logo-dot {
          width: 8px; height: 8px;
          background: #1a56db;
          border-radius: 50%;
          display: inline-block;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }
        .nav-links a {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: #4a5568;
          text-decoration: none;
          transition: color 0.2s ease;
          letter-spacing: 0.01em;
        }
        .nav-links a:hover { color: #1a56db; }
        .nav-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
          background: linear-gradient(135deg, #1a56db 0%, #1446c0 100%);
          padding: 10px 22px;
          border-radius: 100px;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(26, 86, 219, 0.25);
        }
        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(26, 86, 219, 0.35);
        }
        @media (max-width: 768px) {
          .nav-bar { padding: 16px 20px; }
          .nav-scrolled { padding: 12px 20px; }
          .nav-links { display: none; }
        }
      `}</style>
      <nav className="nav-bar" ref={navRef}>
        <div className="nav-logo">
          <span className="nav-logo-dot" />
          DriveWell
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Enroll Now</a>
      </nav>
    </>
  )
}

// ─── Section 1: Hero ──────────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse at 15% 60%, rgba(59,130,246,0.09) 0%, transparent 55%),' +
          'radial-gradient(ellipse at 85% 25%, rgba(99,179,237,0.07) 0%, transparent 50%),' +
          'linear-gradient(165deg, #eef6ff 0%, #f5f9ff 45%, #e8f0ff 100%)',
      }}
    >
      {/* Decorative grid lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(26,86,219,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,86,219,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Left content — takes ~50% width, car sits on right via 3D canvas */}
      <div style={{
        position: 'relative', zIndex: 5,
        maxWidth: '1200px', margin: '0 auto', padding: '0 48px',
        width: '100%',
      }}>
        <div style={{ maxWidth: '520px', paddingTop: '80px' }}>

          <AnimWhen custom={0}>
            <div className="section-tag" style={{ marginBottom: '24px' }}>
              <span style={{ width: 6, height: 6, background: '#1a56db', borderRadius: '50%', display: 'inline-block' }} />
              India's Premier Driving Academy
            </div>
          </AnimWhen>

          <AnimWhen custom={1} variants={fadeUp}>
            <h1 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              color: '#0f2040',
              letterSpacing: '-0.02em',
              marginBottom: '20px',
            }}>
              Learn Driving<br />
              <em style={{ color: '#1a56db', fontStyle: 'normal' }}>with Confidence</em>
            </h1>
          </AnimWhen>

          <AnimWhen custom={2} variants={fadeUp}>
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: '#4a5568',
              marginBottom: '36px',
              maxWidth: '440px',
              fontWeight: 300,
            }}>
              Expert-led training, modern vehicles, and a proven curriculum 
              designed to make you a safe, confident driver — for life.
            </p>
          </AnimWhen>

          <AnimWhen custom={3} variants={fadeUp}>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#courses" className="btn-primary" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 30px', borderRadius: '100px',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 600, fontSize: '0.95rem',
                color: 'white', textDecoration: 'none',
                letterSpacing: '0.01em',
              }}>
                Enroll Now
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#about" style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 500, fontSize: '0.95rem',
                color: '#1a56db', textDecoration: 'none',
                padding: '14px 4px',
              }}>
                View our stats
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="#1a56db" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </AnimWhen>

          {/* Trust badges */}
          <AnimWhen custom={4} variants={fadeUp}>
            <div style={{
              display: 'flex', gap: '28px', marginTop: '52px',
              borderTop: '1px solid rgba(26,86,219,0.08)', paddingTop: '28px',
              flexWrap: 'wrap',
            }}>
              {[
                { num: '10K+', label: 'Students Trained' },
                { num: '95%', label: 'Pass Rate' },
                { num: '10+', label: 'Years of Excellence' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.6rem', fontWeight: 700, color: '#0f2040', lineHeight: 1 }}>
                    {num}
                  </div>
                  <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.78rem', color: '#718096', marginTop: '4px', fontWeight: 500 }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </AnimWhen>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        zIndex: 5, opacity: 0.5,
      }}>
        <span style={{ fontFamily: '"DM Sans"', fontSize: '0.7rem', letterSpacing: '0.12em', color: '#718096', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, #718096, transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  )
}

// ─── Section 2: Courses ───────────────────────────────────────────────────────
export function CoursesSection() {
  const courses = [
    {
      icon: '🚘',
      title: 'Beginner Course',
      desc: 'Start from scratch with our structured 15-day beginner program. Learn traffic rules, vehicle controls, and basic manoeuvres.',
      tag: 'Most Popular',
      price: '₹4,999',
      days: '15 Days',
    },
    {
      icon: '🏁',
      title: 'Advanced Driving',
      desc: 'Master highway driving, night driving, reverse parking, and defensive techniques with our advanced certification.',
      tag: 'Recommended',
      price: '₹7,499',
      days: '25 Days',
    },
    {
      icon: '📋',
      title: 'License Assistance',
      desc: "End-to-end support for your RTO learner’s licence — from forms and mock tests to the final road test.",
      tag: 'Fast Track',
      price: '₹1,999',
      days: '3 Days',
    },
  ]

  return (
    <section
      id="courses"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse at 75% 40%, rgba(59,130,246,0.06) 0%, transparent 55%),' +
          'linear-gradient(160deg, #f0f6ff 0%, #fafcff 50%, #e8f2ff 100%)',
        padding: '100px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>

        {/* Right side content — car will be on the left via 3D canvas */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ maxWidth: '560px', width: '100%' }}>

            <AnimWhen variants={fadeRight} custom={0}>
              <div className="section-tag" style={{ marginBottom: '20px' }}>
                <span style={{ width: 6, height: 6, background: '#1a56db', borderRadius: '50%', display: 'inline-block' }} />
                Our Programmes
              </div>
            </AnimWhen>

            <AnimWhen variants={fadeRight} custom={1}>
              <h2 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#0f2040',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '12px',
              }}>
                Courses Built for<br />Every Driver
              </h2>
            </AnimWhen>

            <AnimWhen variants={fadeRight} custom={2}>
              <p style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '1rem',
                color: '#718096',
                lineHeight: 1.65,
                marginBottom: '36px',
                fontWeight: 300,
              }}>
                Whether you're picking up the keys for the first time or sharpening your skills, 
                we have a programme that fits your pace and goals.
              </p>
            </AnimWhen>

            {/* Course cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {courses.map((c, i) => (
                <AnimWhen key={c.title} variants={fadeRight} custom={i + 3}>
                  <div
                    className="glass-card"
                    style={{
                      borderRadius: '16px',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '18px',
                      cursor: 'pointer',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-3px)'
                      e.currentTarget.style.boxShadow = '0 16px 40px rgba(26,86,219,0.13)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = ''
                    }}
                  >
                    <div style={{
                      width: '46px', height: '46px', flexShrink: 0,
                      background: 'linear-gradient(135deg, #e8f0ff 0%, #d4e6ff 100%)',
                      borderRadius: '12px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.3rem',
                    }}>
                      {c.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                        <span style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.97rem', fontWeight: 600, color: '#0f2040',
                        }}>{c.title}</span>
                        <span style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.68rem', fontWeight: 600,
                          background: 'rgba(26,86,219,0.08)',
                          color: '#1a56db',
                          padding: '2px 8px', borderRadius: '100px',
                          letterSpacing: '0.04em',
                        }}>{c.tag}</span>
                      </div>
                      <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', color: '#718096', lineHeight: 1.55, margin: 0, fontWeight: 300 }}>
                        {c.desc}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.05rem', fontWeight: 700, color: '#1a56db' }}>
                        {c.price}
                      </div>
                      <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.72rem', color: '#a0aec0', marginTop: '2px' }}>
                        {c.days}
                      </div>
                    </div>
                  </div>
                </AnimWhen>
              ))}
            </div>

            <AnimWhen variants={fadeRight} custom={6}>
              <div style={{ marginTop: '28px' }}>
                <a href="#contact" className="btn-primary" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '13px 28px', borderRadius: '100px',
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 600, fontSize: '0.9rem',
                  color: 'white', textDecoration: 'none',
                }}>
                  Start Learning Today →
                </a>
              </div>
            </AnimWhen>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section 3: Stats / About ─────────────────────────────────────────────────
export function StatsSection() {
  const stats = [
    {
      num: '10,000+',
      label: 'Students Trained',
      desc: 'Across Coimbatore and surrounding districts since 2014.',
      icon: '👥',
    },
    {
      num: '95%',
      label: 'First-Attempt Pass Rate',
      desc: 'Our students consistently outperform the national average.',
      icon: '✅',
    },
    {
      num: '10+',
      label: 'Years of Excellence',
      desc: 'A decade of trusted driving education in Tamil Nadu.',
      icon: '🏆',
    },
    {
      num: 'Well-maintained',
      label: 'Modern Fleet',
      desc: 'Dual-control vehicles serviced every 5,000 km for safety.',
      icon: '🚗',
    },
  ]

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 55%),' +
          'linear-gradient(175deg, #e8f2ff 0%, #f5f9ff 40%, #eef6ff 100%)',
        padding: '100px 0',
      }}
    >
      {/* Decorative blob */}
      <div style={{
        position: 'absolute', top: '10%', left: '-8%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(26,86,219,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
        {/* Left-side content — car will be on right via 3D canvas */}
        <div style={{ maxWidth: '540px' }}>

          <AnimWhen custom={0}>
            <div className="section-tag" style={{ marginBottom: '20px' }}>
              <span style={{ width: 6, height: 6, background: '#1a56db', borderRadius: '50%', display: 'inline-block' }} />
              Why Choose Us
            </div>
          </AnimWhen>

          <AnimWhen custom={1}>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#0f2040',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}>
              Trusted by Thousands<br />of Safe Drivers
            </h2>
          </AnimWhen>

          <AnimWhen custom={2}>
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1rem',
              color: '#718096',
              lineHeight: 1.65,
              marginBottom: '40px',
              fontWeight: 300,
            }}>
              Our results speak for themselves. DriveWell Academy has built its reputation on 
              patience, precision, and a genuine commitment to road safety.
            </p>
          </AnimWhen>

          {/* Stats grid - glassmorphism */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {stats.map((s, i) => (
              <AnimWhen key={s.label} custom={i + 3}>
                <div
                  className="glass-card"
                  style={{
                    borderRadius: '18px',
                    padding: '22px 20px',
                    cursor: 'default',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.015)'
                    e.currentTarget.style.boxShadow = '0 20px 48px rgba(26,86,219,0.15)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  {/* Subtle top gradient line */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                    background: 'linear-gradient(90deg, #1a56db, #60a5fa)',
                    borderRadius: '18px 18px 0 0',
                  }} />
                  <div style={{ fontSize: '1.6rem', marginBottom: '10px' }}>{s.icon}</div>
                  <div style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                    fontWeight: 700,
                    color: '#0f2040',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}>
                    {s.num}
                  </div>
                  <div style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#1a56db',
                    marginBottom: '8px',
                    letterSpacing: '0.01em',
                  }}>
                    {s.label}
                  </div>
                  <p style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.76rem',
                    color: '#a0aec0',
                    lineHeight: 1.5,
                    margin: 0,
                    fontWeight: 300,
                  }}>
                    {s.desc}
                  </p>
                </div>
              </AnimWhen>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section 4: Contact / Footer ──────────────────────────────────────────────
export function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse at 80% 60%, rgba(59,130,246,0.07) 0%, transparent 55%),' +
          'linear-gradient(165deg, #e4eeff 0%, #f2f8ff 45%, #e8f2ff 100%)',
        padding: '100px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ maxWidth: '500px', width: '100%' }}>

            <AnimWhen variants={fadeRight} custom={0}>
              <div className="section-tag" style={{ marginBottom: '20px' }}>
                <span style={{ width: 6, height: 6, background: '#1a56db', borderRadius: '50%', display: 'inline-block' }} />
                Get in Touch
              </div>
            </AnimWhen>

            <AnimWhen variants={fadeRight} custom={1}>
              <h2 style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#0f2040',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '12px',
              }}>
                Ready to Hit<br />the Road?
              </h2>
            </AnimWhen>

            <AnimWhen variants={fadeRight} custom={2}>
              <p style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '1rem',
                color: '#718096',
                lineHeight: 1.65,
                marginBottom: '32px',
                fontWeight: 300,
              }}>
                Reach out to us today and take the first step toward your driving licence. 
                Our team is available 7 days a week.
              </p>
            </AnimWhen>

            {/* Contact info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {[
                {
                  icon: '📍',
                  title: 'Address',
                  value: '12, Avinashi Road, Peelamedu\nCoimbatore, Tamil Nadu 641004',
                },
                {
                  icon: '📞',
                  title: 'Phone',
                  value: '+91 98765 43210\n+91 94321 12345',
                },
                {
                  icon: '⏰',
                  title: 'Hours',
                  value: 'Monday – Saturday: 7 AM – 7 PM\nSunday: 8 AM – 1 PM',
                },
              ].map((item, i) => (
                <AnimWhen key={item.title} variants={fadeRight} custom={i + 3}>
                  <div
                    className="glass-card"
                    style={{
                      borderRadius: '14px',
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = ''}
                  >
                    <div style={{
                      width: '40px', height: '40px', flexShrink: 0,
                      background: 'linear-gradient(135deg, #e8f0ff, #d0e4ff)',
                      borderRadius: '10px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem',
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: '"DM Sans"', fontSize: '0.75rem', fontWeight: 600, color: '#1a56db', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                        {item.title}
                      </div>
                      {item.value.split('\n').map((line, li) => (
                        <div key={li} style={{ fontFamily: '"DM Sans"', fontSize: '0.88rem', color: '#4a5568', lineHeight: 1.5, fontWeight: 400 }}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimWhen>
              ))}
            </div>

            <AnimWhen variants={fadeRight} custom={6}>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="tel:+919876543210" className="btn-primary" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 28px', borderRadius: '100px',
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 600, fontSize: '0.9rem',
                  color: 'white', textDecoration: 'none',
                }}>
                  📞 Call Us Now
                </a>
                <a href="https://wa.me/919876543210" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 28px', borderRadius: '100px',
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 600, fontSize: '0.9rem',
                  color: '#1a56db', textDecoration: 'none',
                  border: '1.5px solid rgba(26,86,219,0.25)',
                  background: 'rgba(26,86,219,0.04)',
                  transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(26,86,219,0.09)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(26,86,219,0.04)'}
                >
                  💬 WhatsApp
                </a>
              </div>
            </AnimWhen>
          </div>
        </div>

        {/* Footer bar */}
        <AnimWhen custom={7}>
          <div style={{
            marginTop: '72px',
            paddingTop: '28px',
            borderTop: '1px solid rgba(26,86,219,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}>
            <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', fontWeight: 700, color: '#1a3a6b' }}>
              <span style={{ width: 6, height: 6, background: '#1a56db', borderRadius: '50%', display: 'inline-block', marginRight: '8px' }} />
              DriveWell Academy
            </div>
            <div style={{ fontFamily: '"DM Sans"', fontSize: '0.78rem', color: '#a0aec0' }}>
              © {new Date().getFullYear()} DriveWell Academy. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              {['Privacy', 'Terms', 'Sitemap'].map(link => (
                <a key={link} href="#" style={{ fontFamily: '"DM Sans"', fontSize: '0.78rem', color: '#718096', textDecoration: 'none' }}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        </AnimWhen>
      </div>
    </section>
  )
}
