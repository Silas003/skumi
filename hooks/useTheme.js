import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    // Reads localStorage/matchMedia post-mount to avoid an SSR/client hydration mismatch.
    const stored = localStorage.getItem('theme')
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(stored)
    } else {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    if (theme === null) return
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return { theme, toggle }
}
