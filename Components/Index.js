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
        <header className="relative flex flex-col items-center justify-center text-center overflow-hidden px-4 pt-20 pb-16 md:pt-24 md:pb-20">
          {/* Faded technical grid + ambient glow, tied to the brand accent only */}
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-dot-grid text-neutral-300/60 dark:text-neutral-800/50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_35%,transparent,#fafafa)] dark:bg-[radial-gradient(ellipse_65%_55%_at_50%_35%,transparent,#0a0a0a)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-green-500/5 blur-[120px] rounded-full dark:bg-green-500/8" />
          </div>

          <p className="animate-fade-in mb-8 font-mono text-xs text-green-600 tracking-[0.15em] dark:text-green-400">
            [ full-stack engineer ]
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
              Full-stack engineer who&apos;s drawn to the bigger picture, architecture, scalability, how
              all the pieces fit together, as much as the code itself. I like systems that are built to
              last, not just to work today. Outside of engineering, I&apos;m usually deep into a game,
              shaping something in 3D, or talking tech and intentionality with my church&apos;s piano.
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
