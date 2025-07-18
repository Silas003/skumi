import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Projects from './Projects'
import Footer from './Footer'

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-800 dark:from-black dark:via-neutral-900 dark:to-neutral-800 transition-colors duration-500">
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center py-16 md:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40 blur-2xl pointer-events-none select-none">
          <div className="w-[600px] h-[600px] bg-gradient-to-tr from-green-400/30 via-blue-500/20 to-purple-600/30 rounded-full mx-auto mt-[-200px] animate-pulse" />
        </div>
        <div className="flex items-center mb-4">
          <Image src="/2.svg" alt="Logo" width={32} height={32} className="drop-shadow-lg" />
          <h1 className="ml-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">Nck•03</h1>
        </div>
        <p className="text-neutral-300 text-lg md:text-xl font-medium max-w-xl mx-auto mt-2 animate-fade-in">
          Either you run the day or the day runs you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 animate-fade-in-up w-full max-w-md mx-auto">
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1-QoREEMwpg4-XBfZSb8GhkGmeRep4GYi/view?usp=sharing"
            target="_blank"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-green-400/30 shadow-lg hover:bg-green-400/20 hover:border-green-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label="Resume"
          >
            {/* Resume SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="h-6 w-6 mr-2 group-hover:stroke-green-400 transition-colors duration-200">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75v2.25A2.25 2.25 0 0018.75 8.25h2.25M16.5 3.75A2.25 2.25 0 0014.25 1.5h-4.5A2.25 2.25 0 007.5 3.75v16.5A2.25 2.25 0 009.75 22.5h4.5a2.25 2.25 0 002.25-2.25V3.75z" />
            </svg>
            <span className="text-white font-semibold text-base tracking-wide group-hover:text-green-200 transition-colors duration-200">Resume</span>
          </a>
          {/* Email Button */}
          <a
            href="mailto:silaskumi4@gmail.com"
            target="_blank"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-blue-400/30 shadow-lg hover:bg-blue-400/20 hover:border-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Email"
          >
            {/* Email SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="h-6 w-6 mr-2 group-hover:stroke-blue-400 transition-colors duration-200">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
            </svg>
            <span className="text-white font-semibold text-base tracking-wide group-hover:text-blue-200 transition-colors duration-200">Email</span>
          </a>
        </div>
      </header>

      {/* Main Greeting */}
      <section className="w-full flex flex-col items-center mt-2 mb-8 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-200 dark:text-white drop-shadow-lg text-base sm:text-lg">!Halo, Mundo</h2>
      </section>

      {/* About Section */}
      <section className="max-w-2xl mx-auto px-4 md:px-0 text-neutral-200/90 font-sans font-medium text-center mb-12 animate-fade-in-up text-base sm:text-lg break-words">
        <p>
          It is your friendly neighborhood software engineer. If I am not updating this website, I am probably offline playing
          <span className="inline-flex items-center bg-red-600/10 border border-red-600/20 rounded-md px-2 py-1 mx-2 mt-1">
            <Image src="/icons8-gamepad-96.png" alt="Gamepad" width={18} height={18} />
            <span className="text-red-500/70 font-semibold text-xs ml-1">RDD-2</span>
          </span>
          I love to explore the world of 3D most times for creativity and fun. Currently working on Backend and Cloud Engineering.
        </p>
      </section>

      {/* Socials Section */}
      <section className="max-w-2xl mx-auto mb-12 animate-fade-in-up">
        <div className="flex flex-wrap justify-center gap-3 gap-y-3 min-w-0">
          <a href="https://x.com/sylas_003" target="_blank" className="inline-flex items-center bg-white/10 border border-neutral-600/20 rounded-md px-3 py-2 hover:bg-blue-600/20 hover:border-blue-400 transition">
            {/* X (Twitter) SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="white" className="h-5 w-5" aria-hidden="true"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/silas-kumi" target="_blank" className="inline-flex items-center bg-white/10 border border-neutral-600/20 rounded-md px-3 py-2 hover:bg-blue-700/20 hover:border-blue-500 transition">
            {/* LinkedIn SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="h-5 w-5" aria-hidden="true"><path d="M29 0H3C1.3 0 0 1.3 0 3v26c0 1.7 1.3 3 3 3h26c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zM9.4 27H5.3V12h4.1v15zm-2-17.1c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm19.6 17.1h-4.1v-7.2c0-1.7-.6-2.8-2.1-2.8-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1.1V27h-4.1s.1-13.7 0-15h4.1v2.1c.5-.8 1.4-2 3.5-2 2.6 0 4.5 1.7 4.5 5.3V27z"/></svg>
          </a>
          <a href="https://github.com/Silas003" target="_blank" className="inline-flex items-center bg-white/10 border border-neutral-600/20 rounded-md px-3 py-2 hover:bg-neutral-800/20 hover:border-white transition">
            {/* GitHub SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-7 w-7" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex-1 px-4 md:px-0 max-w-6xl mx-auto w-full animate-fade-in-up">
        <Projects />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Index