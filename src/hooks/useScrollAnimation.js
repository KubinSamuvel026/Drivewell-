import { useState, useEffect, useRef } from 'react'

/**
 * Tracks scroll progress across sections and returns
 * normalized [0..1] values per section + global progress.
 */
export function useScrollAnimation(sectionCount = 4) {
  const [scrollData, setScrollData] = useState({
    progress: 0,        // 0..1 across entire page
    section: 0,         // current section index 0-based
    sectionProgress: 0, // 0..1 within current section
  })

  const rafId = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = Math.min(Math.max(scrollTop / totalHeight, 0), 1)

        const sectionHeight = totalHeight / (sectionCount - 1)
        const rawSection = scrollTop / sectionHeight
        const section = Math.min(Math.floor(rawSection), sectionCount - 1)
        const sectionProgress = rawSection - Math.floor(rawSection)

        setScrollData({ progress, section, sectionProgress })
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [sectionCount])

  return scrollData
}

/**
 * Simple linear interpolation helper.
 */
export function lerp(a, b, t) {
  return a + (b - a) * t
}
