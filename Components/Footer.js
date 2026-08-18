import Image from 'next/image'
import { GithubLogo, LinkedinLogo, XLogo, ArrowUpRight } from '@phosphor-icons/react'

const socials = [
  { label: 'GitHub', handle: '@Silas003', href: 'https://github.com/Silas003', Icon: GithubLogo },
  { label: 'LinkedIn', handle: '/in/silas-kumi', href: 'https://www.linkedin.com/in/silas-kumi', Icon: LinkedinLogo },
  { label: 'X', handle: '@sylas_003', href: 'https://x.com/sylas_003', Icon: XLogo },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200/60 bg-white dark:border-neutral-800/60 dark:bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight mb-2 dark:text-white">
              Let&apos;s build something reliable.
            </h2>
            <p className="text-neutral-500 text-sm max-w-sm dark:text-neutral-500">
              Always up for a conversation about backend systems, cloud infra, or a problem worth solving.
            </p>
          </div>
          <a
            href="mailto:silaskumi4@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 active:scale-[0.98] shadow-md shadow-green-600/20 flex-shrink-0 dark:bg-green-400 dark:hover:bg-green-300 dark:text-black dark:shadow-green-400/15"
          >
            Email me
            <ArrowUpRight size={15} weight="bold" />
          </a>
        </div>

        {/* Icon dock: circular buttons that fill with the accent color on
            interaction, handle shown as a tooltip rather than printed text */}
        <div className="flex items-center gap-3 mb-10">
          {socials.map(({ label, handle, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${label}, ${handle}`}
              className="group relative flex items-center justify-center w-11 h-11 rounded-full text-neutral-500 hover:text-white hover:bg-green-600 transition-all duration-200 dark:text-neutral-400 dark:hover:text-black dark:hover:bg-green-400"
            >
              <Icon size={19} weight="fill" />
              <span
                role="presentation"
                className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-neutral-900 text-white text-[11px] font-medium px-2.5 py-1 opacity-0 scale-95 transition-all duration-150 group-hover:opacity-100 group-hover:scale-100 group-focus-visible:opacity-100 group-focus-visible:scale-100 dark:bg-white dark:text-black"
              >
                {handle}
              </span>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60">
          <div className="flex items-center gap-2">
            <Image src="/2.svg" alt="Logo" width={18} height={18} />
            <span className="font-bold text-neutral-900 text-sm tracking-tight dark:text-white">Nck&bull;03</span>
          </div>
          <p className="text-neutral-500 text-xs text-center dark:text-neutral-600">
            &copy; {year} Silas Kumi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
