import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Projects from './Projects'
import Footer from './Footer'

const Index = () => {

  return (
    <div className="bg-neutral-900 min-h-screen px-4 md:px-8 lg:px-16">
      {/* Header */}
      <header className="py-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="rounded-full w-5 h-5 flex items-center justify-center">
            <Image src="/2.svg" alt="Logo" width={20} height={20} />
          </div>
          <h3 className="font-bold text-white ml-1 text-3xl">Nck•03</h3>
        </div>
       <div>
       <span title="Email"
        className="inline-flex items-center bg-white/10 border border-neutral-600/20 rounded-md px-1 py-1 mx-1 hover:bg-transparent
        hover:border hover:border-neutral-500 cursor-pointer">
              <Image src="/icons8-file.svg" alt="Resume" width={15} height={15} />
              <a href="https://drive.google.com/file/d/1ViuccpA2y-VL6HDJHkpE0Xq2zAXiaQrm/view?usp=drive_link" target="_blank"
              className="text-white font-semibold text-xs ml-1">Resume</a>
        </span>
        <span title="Resume"
        className="inline-flex items-center bg-white/10 border border-neutral-600/20 rounded-md px-1 py-1 mx-1 hover:bg-transparent
        hover:border hover:border-neutral-500 cursor-pointer">
              <Image src="/icons8-mail-32.png" alt="Email" width={15} height={15} />
              <a href="mailto:silaskumi4@gmail.com" target="_blank" className="text-white font-semibold text-xs ml-1">Email</a>
        </span>
       </div>
      </header>

      {/* Main Content */}
      <main className="mt-12">
        {/* Greeting */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-200">!Halo, Mundo</h1>
          <p className="text-neutral-400/70 font-semibold text-sm mt-2">Either you run the day or the day runs you.</p>
        </section>

        {/* About */}
        <section className="text-neutral-200/80 font-sans max-w-2xl font-medium">
          <p className="break-words">
            It is your friendly neighborhood software engineer.
            If I am not updating this website or playing{' '}
            <span className="inline-flex items-center bg-red-600/10 border border-red-600/20 rounded-md px-1 py-1 mx-1">
              <Image src="/icons8-gamepad-96.png" alt="Gamepad" width={15} height={15} />
              <span className="text-red-500/60 font-semibold text-xs ml-1">RDD-2</span>
            </span>
            , I am probably away building something cool. Check them out on{' '}
            <a href="https://github.com/Silas003" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center bg-neutral-100/15 border border-neutral-600 p-0.5 rounded-md px-1 mx-1">
              <Image src="/icons8-github.svg" alt="GitHub" width={15} height={15} />
              <span className="ml-1 text-sm">github</span>.
            </a>
            I love to explore the world of 3D most times for creativity and fun
            . Currently working on Backend and Cloud Engineering.
            Trying out Networking engineering.{' '}
            <span className="text-green-600 bg-green-600/10 rounded-md border
             border-green-500/15 inline-block mt-2 text-sm">Watch this space for more update...</span>
          </p>
        </section>
      </main>

      {/* socials */}
      <section className="mt-8">
        <h3 className="text-neutral-300 font-semibold text-lg">Socials</h3>
        <div className="flex flex-row">
        <span title="Twitter"
        className="inline-flex items-center bg-white/10 border border-neutral-600/20 rounded-md px-1 py-1 mx-1 hover:bg-transparent
        hover:border hover:border-neutral-500 cursor-pointer">
              <Image src="/icons8-twitter.svg" alt="Resume" width={15} height={15} />
              <a href="https://x.com/sylas_003" className="text-white font-semibold text-xs ml-1" target="_blank"> X</a>
        </span>
        <span title="Linkedin"
        className="inline-flex items-center bg-white/10 border border-neutral-600/20 rounded-md px-1 py-1 mx-1 hover:bg-transparent
        hover:border hover:border-neutral-500 cursor-pointer">
              <Image src="/icons8-linkedin.svg" alt="Resume" width={15} height={15} />
              <a href="https://www.linkedin.com/in/silas-kumi" className="text-white font-semibold text-xs ml-1" target="_blank"> linkedIn</a>
        </span>
        <span title="Github"
        className="inline-flex items-center bg-white/10 border border-neutral-600/20 rounded-md px-1 py-1 mx-1 hover:bg-transparent
        hover:border hover:border-neutral-500 cursor-pointer">
              <Image src="/icons8-github.svg" alt="Resume" width={17} height={17} />
              <a href="https://github.com/Silas003" className="text-white font-semibold text-xs ml-1" target="_blank">github</a>
        </span>
        </div>
      </section>

      {/* Projects */}
      <Projects />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Index