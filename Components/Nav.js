import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Sun, Moon, List, X, FileText, EnvelopeSimple } from '@phosphor-icons/react'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { id: 'about', href: '#about', label: 'About' },
  { id: 'stack', href: '#stack', label: 'Stack' },
  { id: 'projects', href: '#projects', label: 'Projects' },
]

const sectionIds = links.map((link) => link.id)

const Nav = () => {
  const { theme, toggle } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  const closeMenu = () => setMenuOpen(false)

  // Escape closes the mobile menu from anywhere, not just a tap outside it.
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/90 backdrop-blur-md dark:border-neutral-800/60 dark:bg-[#0a0a0a]/80">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Image src="/2.svg" alt="Logo" width={22} height={22} />
          <span className="font-bold text-neutral-900 text-sm tracking-tight group-hover:text-green-600 transition-colors duration-200 dark:text-white dark:group-hover:text-green-400">
            Nck&bull;03
          </span>
        </a>

        {/* Desktop links + actions */}
        <div className="hidden sm:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-200 ${
                active === link.id
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}

          <span className="w-px h-4 bg-neutral-200 mx-2 dark:bg-neutral-800" />

          {/* Resume stays a plain link, matching the weight of the section
              links; Email me is the one filled action in the bar. */}
          <a
            href="https://drive.google.com/file/d/1-QoREEMwpg4-XBfZSb8GhkGmeRep4GYi/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-neutral-100 transition-all duration-200 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/5"
          >
            <FileText size={14} weight="bold" />
            Resume
          </a>
          <a
            href="mailto:silaskumi4@gmail.com"
            className="ml-1 inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 active:scale-[0.98] dark:bg-green-400 dark:hover:bg-green-300 dark:text-black"
          >
            <EnvelopeSimple size={13} weight="bold" />
            Email me
          </a>

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            suppressHydrationWarning
            className="ml-2 p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/5"
          >
            {theme === 'dark' ? <Sun size={17} weight="bold" /> : <Moon size={17} weight="bold" />}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex sm:hidden items-center gap-1">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            suppressHydrationWarning
            className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/5"
          >
            {theme === 'dark' ? <Sun size={17} weight="bold" /> : <Moon size={17} weight="bold" />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/5"
          >
            {menuOpen ? <X size={19} weight="bold" /> : <List size={19} weight="bold" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          {/* Transparent tap-away target: closes the menu without dimming the page */}
          <div className="sm:hidden fixed inset-0" onClick={closeMenu} aria-hidden="true" />

          <div className="animate-fade-in-up sm:hidden absolute top-full left-0 right-0 border-t border-neutral-200/60 bg-white/95 backdrop-blur-md shadow-lg dark:border-neutral-800/60 dark:bg-[#0a0a0a]/95">
            <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`text-sm font-medium px-3 py-2.5 rounded-lg transition-all duration-200 ${
                    active === link.id
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-neutral-200/60 dark:border-neutral-800/60">
                <a
                  href="https://drive.google.com/file/d/1-QoREEMwpg4-XBfZSb8GhkGmeRep4GYi/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 border border-neutral-300 text-neutral-700 text-sm font-semibold px-3 py-2 rounded-full dark:border-neutral-700 dark:text-neutral-300"
                >
                  <FileText size={14} weight="bold" />
                  Resume
                </a>
                <a
                  href="mailto:silaskumi4@gmail.com"
                  onClick={closeMenu}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-green-600 text-white text-sm font-semibold px-3 py-2 rounded-full dark:bg-green-400 dark:text-black"
                >
                  <EnvelopeSimple size={14} weight="bold" />
                  Email me
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Nav
