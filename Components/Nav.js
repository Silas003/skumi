import Image from 'next/image'
import { useTheme } from '../hooks/useTheme'

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
)

const Nav = () => {
  const { theme, toggle } = useTheme()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/90 backdrop-blur-md dark:border-neutral-800/60 dark:bg-[#0a0a0a]/80">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Image src="/2.svg" alt="Logo" width={22} height={22} />
          <span className="font-bold text-neutral-900 text-sm tracking-tight group-hover:text-green-600 transition-colors duration-200 dark:text-white dark:group-hover:text-green-400">
            Nck•03
          </span>
        </a>
        <div className="flex items-center gap-1">
          <a
            href="#about"
            className="text-neutral-600 hover:text-neutral-900 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-neutral-100 transition-all duration-200 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/5"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-neutral-600 hover:text-neutral-900 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-neutral-100 transition-all duration-200 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/5"
          >
            Projects
          </a>
          <a
            href="mailto:silaskumi4@gmail.com"
            className="ml-2 inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 hover:bg-green-100 hover:border-green-300 text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 dark:bg-green-400/10 dark:border-green-400/20 dark:text-green-400 dark:hover:bg-green-400/15 dark:hover:border-green-400/40"
          >
            Contact
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            suppressHydrationWarning
            className="ml-2 p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/5"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
