import { GameController } from '@phosphor-icons/react'
import Nav from './Nav'
import Skills from './Skills'
import Certifications from './Certifications'
import Projects from './Projects'
import Footer from './Footer'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full focus:bg-green-600 focus:text-white focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main-content" className="flex-1 flex flex-col">
        {/* HERO */}
        <header className="relative flex flex-col items-center justify-center min-h-[88vh] text-center overflow-hidden px-4">
          {/* Faded technical grid + ambient glow, tied to the brand accent only */}
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-dot-grid text-neutral-300/60 dark:text-neutral-800/50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_35%,transparent,#fafafa)] dark:bg-[radial-gradient(ellipse_65%_55%_at_50%_35%,transparent,#0a0a0a)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-green-500/5 blur-[120px] rounded-full dark:bg-green-500/8" />
          </div>

          <p className="animate-fade-in mb-8 font-mono text-xs text-green-600 tracking-[0.15em] dark:text-green-400">
            [ backend &amp; cloud engineer ]
          </p>

          <h1
            className="animate-fade-in-up text-4xl sm:text-5xl md:text-7xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-5 dark:text-white"
            style={{ animationDelay: '150ms' }}
          >
            Hi, I&apos;m{' '}
            <span className="text-green-600 dark:text-green-400">Silas</span>
            <span className="text-green-600 dark:text-green-400">.</span>
          </h1>

          <p
            className="animate-fade-in text-neutral-500 text-sm md:text-base max-w-sm mx-auto leading-relaxed dark:text-neutral-400"
            style={{ animationDelay: '300ms' }}
          >
            <span className="font-mono text-neutral-400 dark:text-neutral-600">!Halo, Mundo. Hello, World.</span>{' '}
            Either you run the day, or the day runs you.
          </p>
        </header>

        {/* ABOUT */}
        <section id="about" className="max-w-5xl mx-auto px-4 mb-14 md:mb-20 w-full">
          <Reveal>
            <SectionHeading>About</SectionHeading>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-2xl dark:text-neutral-400">
              I build the systems that run quietly underneath everything else: the queue that makes sure a
              job never gets lost, the pipeline that ships code without drama, the infrastructure that
              scales without anyone noticing it&apos;s there. Most of what I build starts small, a side
              project born from a real problem, before it earns the discipline to run in production. Off
              the keyboard, I&apos;m usually deep in{' '}
              <span className="inline-flex items-center gap-1 align-middle">
                <GameController size={13} weight="fill" className="text-red-500 dark:text-red-400" />
                <span className="text-red-600 font-semibold dark:text-red-400">GTA V Online</span>
              </span>
              {' '}or building something in 3D, just for the joy of making things.
            </p>
          </Reveal>
        </section>

        <Skills />

        <Certifications />

        <div className="flex-1 max-w-5xl mx-auto px-4 w-full">
          <Projects />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Index
