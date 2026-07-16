import Image from 'next/image'
import Nav from './Nav'
import Skills from './Skills'
import Certifications from './Certifications'
import Projects from './Projects'
import Footer from './Footer'

const ResumeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
  </svg>
)

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 animate-bounce">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
)

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <Nav />

      {/* ── HERO ── */}
      <header className="relative flex flex-col items-center justify-center min-h-[88vh] text-center overflow-hidden px-4">
        {/* Ambient glow */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-green-500/5 blur-[120px] rounded-full dark:bg-green-500/8" />
        </div>

        {/* Status badge */}
        <div className="animate-fade-in mb-8">
          <span className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-4 py-2 rounded-full tracking-widest uppercase dark:bg-green-400/10 dark:border-green-400/20 dark:text-green-400">
            <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse inline-block dark:bg-green-400" />
            Backend &amp; Cloud Engineer
          </span>
        </div>

        {/* Name */}
        <h1
          className="animate-fade-in-up text-4xl sm:text-5xl md:text-7xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-4 dark:text-white"
          style={{ animationDelay: '150ms' }}
        >
          Hi, I&apos;m{' '}
          <span className="text-green-600 dark:text-green-400">Silas</span>
          <span className="text-green-600 dark:text-green-400">.</span>
        </h1>

        {/* Handle */}
        <p
          className="animate-fade-in font-mono text-neutral-400 text-base md:text-lg mb-5 dark:text-neutral-600"
          style={{ animationDelay: '300ms' }}
        >
          !Halo, Mundo
          <span className="mx-2 text-neutral-300 dark:text-neutral-700">—</span>
          <span className="text-green-600/60 dark:text-green-600/70">Hello, World</span>
        </p>

        {/* Tagline */}
        <p
          className="animate-fade-in text-neutral-500 text-sm md:text-base max-w-xs mx-auto mb-10 leading-relaxed"
          style={{ animationDelay: '450ms' }}
        >
          Either you run the day, or the day runs you.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:w-auto sm:max-w-none"
          style={{ animationDelay: '600ms' }}
        >
          <a
            href="https://drive.google.com/file/d/1-QoREEMwpg4-XBfZSb8GhkGmeRep4GYi/view?usp=sharing"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-green-600/20 dark:bg-green-400 dark:hover:bg-green-300 dark:text-black dark:shadow-green-400/15"
          >
            <ResumeIcon />
            Resume
          </a>
          <a
            href="mailto:silaskumi4@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 border border-neutral-300 hover:border-neutral-400 text-neutral-900 font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-800 dark:hover:border-neutral-700 dark:text-white"
          >
            <MailIcon />
            Email me
          </a>
        </div>

        {/* Scroll cue */}
        {/*<div*/}
        {/*  className="animate-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-400 dark:text-neutral-700"*/}
        {/*  style={{ animationDelay: '1200ms' }}*/}
        {/*>*/}
        {/*  <span className="text-xs tracking-widest uppercase">scroll</span>*/}
        {/*  <ChevronDown />*/}
        {/*</div>*/}
      </header>

      {/* ── ABOUT ── */}
      <section id="about" className="max-w-5xl mx-auto px-4 mb-16 w-full">
        <div className="flex items-center mb-6">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 animate-pulse dark:bg-green-400" />
          <h2 className="text-xl md:text-2xl font-extrabold text-neutral-900 tracking-tight dark:text-white">About</h2>
        </div>
        <p className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-2xl dark:text-neutral-400">
          I design and build backend systems and cloud infrastructure people can actually rely on —
          Java/Spring, Python/FastAPI, and AWS end to end, from ECS Fargate to serverless architectures
          with Lambda and CloudFormation. I care about getting the details right, whether that&apos;s a
          well-designed API or a CI/CD pipeline that just works. When I step away from the keyboard,
          I&apos;m usually deep in{' '}
          <span className="inline-flex items-center bg-red-50 border border-red-200 rounded-md px-2 py-0.5 mx-1 align-middle dark:bg-red-600/10 dark:border-red-600/20">
            <Image src="/icons8-gamepad-96.png" alt="Gamepad" width={15} height={15} />
            <span className="text-red-600 font-semibold text-xs ml-1 dark:text-red-400">GTA V Online</span>
          </span>
          {' '}or building something in 3D, just for the joy of making things.
        </p>
      </section>

      {/* ── STACK ── */}
      <Skills />

      {/* ── CERTIFICATIONS ── */}
      {/*<Certifications />*/}

      {/* ── SOCIALS ── */}
      <section className="max-w-5xl mx-auto px-4 mb-16 w-full">
        <div className="flex items-center mb-6">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 animate-pulse dark:bg-green-400" />
          <h2 className="text-xl md:text-2xl font-extrabold text-neutral-900 tracking-tight dark:text-white">Find me on</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* X / Twitter */}
          <a
            href="https://x.com/sylas_003"
            target="_blank"
            className="group flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-4 py-3.5 hover:border-neutral-900 hover:bg-neutral-900 transition-all duration-200 dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-white/20 dark:hover:bg-neutral-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="h-5 w-5 flex-shrink-0 text-neutral-800 group-hover:text-white transition-colors duration-200 dark:text-neutral-300" aria-hidden="true">
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
            </svg>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-neutral-900 group-hover:text-white transition-colors duration-200 dark:text-white">X / Twitter</p>
              <p className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-200 dark:text-neutral-500">@sylas_003</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-auto flex-shrink-0 text-neutral-300 group-hover:text-white transition-colors duration-200 dark:text-neutral-700">
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/silas-kumi"
            target="_blank"
            className="group flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-4 py-3.5 hover:border-blue-500 hover:bg-blue-600 transition-all duration-200 dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-blue-500/50 dark:hover:bg-blue-600/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="h-5 w-5 flex-shrink-0 text-blue-600 group-hover:text-white transition-colors duration-200 dark:text-blue-400" aria-hidden="true">
              <path d="M29 0H3C1.3 0 0 1.3 0 3v26c0 1.7 1.3 3 3 3h26c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zM9.4 27H5.3V12h4.1v15zm-2-17.1c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm19.6 17.1h-4.1v-7.2c0-1.7-.6-2.8-2.1-2.8-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1.1V27h-4.1s.1-13.7 0-15h4.1v2.1c.5-.8 1.4-2 3.5-2 2.6 0 4.5 1.7 4.5 5.3V27z" />
            </svg>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-neutral-900 group-hover:text-white transition-colors duration-200 dark:text-white dark:group-hover:text-blue-300">LinkedIn</p>
              <p className="text-xs text-neutral-400 group-hover:text-blue-100 transition-colors duration-200 dark:text-neutral-500 dark:group-hover:text-blue-400">/in/silas-kumi</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-auto flex-shrink-0 text-neutral-300 group-hover:text-white transition-colors duration-200 dark:text-neutral-700 dark:group-hover:text-blue-400">
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Silas003"
            target="_blank"
            className="group flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-4 py-3.5 hover:border-neutral-400 hover:bg-neutral-100 transition-all duration-200 dark:bg-neutral-900 dark:border-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0 text-neutral-800 group-hover:text-neutral-900 transition-colors duration-200 dark:text-neutral-300 dark:group-hover:text-white" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
            </svg>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-900 transition-colors duration-200 dark:text-white">GitHub</p>
              <p className="text-xs text-neutral-400 group-hover:text-neutral-600 transition-colors duration-200 dark:text-neutral-500 dark:group-hover:text-neutral-400">@Silas003</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-auto flex-shrink-0 text-neutral-300 group-hover:text-neutral-500 transition-colors duration-200 dark:text-neutral-700 dark:group-hover:text-neutral-400">
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <div className="flex-1 max-w-5xl mx-auto px-4 w-full">
        <Projects />
      </div>

      <Footer />
    </div>
  )
}

export default Index
