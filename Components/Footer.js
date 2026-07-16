import Image from 'next/image'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200/60 bg-white dark:border-neutral-800/60 dark:bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src="/2.svg" alt="Logo" width={20} height={20} />
          <span className="font-bold text-neutral-900 text-sm tracking-tight dark:text-white">Nck•03</span>
        </div>
        <p className="text-neutral-500 text-xs text-center dark:text-neutral-600">
          © {year} Silas Kumi. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Silas003"
            target="_blank"
            aria-label="GitHub"
            className="text-neutral-400 hover:text-neutral-900 transition-colors duration-200 dark:text-neutral-600 dark:hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/silas-kumi"
            target="_blank"
            aria-label="LinkedIn"
            className="text-neutral-400 hover:text-neutral-900 transition-colors duration-200 dark:text-neutral-600 dark:hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
              <path d="M29 0H3C1.3 0 0 1.3 0 3v26c0 1.7 1.3 3 3 3h26c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zM9.4 27H5.3V12h4.1v15zm-2-17.1c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm19.6 17.1h-4.1v-7.2c0-1.7-.6-2.8-2.1-2.8-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1.1V27h-4.1s.1-13.7 0-15h4.1v2.1c.5-.8 1.4-2 3.5-2 2.6 0 4.5 1.7 4.5 5.3V27z" />
            </svg>
          </a>
          <a
            href="https://x.com/sylas_003"
            target="_blank"
            aria-label="X / Twitter"
            className="text-neutral-400 hover:text-neutral-900 transition-colors duration-200 dark:text-neutral-600 dark:hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="w-4 h-4">
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
