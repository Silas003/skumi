import { useEffect, useRef, useState } from 'react'

// Fires once when the element enters the viewport, then disconnects.
// IntersectionObserver only — never a scroll listener — so it costs nothing
// on the main thread while the user scrolls.
export function useReveal(options) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return { ref, revealed }
}
