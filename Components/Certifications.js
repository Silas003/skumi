import { SealCheck, HourglassMedium } from '@phosphor-icons/react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const certs = [
  {
    abbr: 'CCP',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    status: 'certified',
  },
  {
    abbr: 'KCNA',
    name: 'Kubernetes and Cloud Native Associate',
    issuer: 'Cloud Native Computing Foundation',
    status: 'certified',
  },
  {
    abbr: 'SAA',
    name: 'AWS Solutions Architect, Associate',
    issuer: 'Amazon Web Services',
    status: 'in-progress',
  },
]

const Certifications = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 mb-14 md:mb-20 w-full">
      <Reveal>
        <SectionHeading>Certifications</SectionHeading>
      </Reveal>

      {/* No cards, no dividers: three plain entries side by side, spacing
          alone does the separating. */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-8">
        {certs.map((cert, i) => (
          <Reveal key={cert.abbr} delay={i * 80}>
            <p className="font-mono text-xs text-neutral-400 mb-2 dark:text-neutral-600">{cert.abbr}</p>
            <p className="text-sm font-bold text-neutral-900 leading-snug mb-1.5 dark:text-white">
              {cert.name}
            </p>
            <p className="text-xs text-neutral-400 mb-3 dark:text-neutral-600">{cert.issuer}</p>
            <div className="flex items-center gap-1.5 text-xs font-medium">
              {cert.status === 'certified' ? (
                <>
                  <SealCheck size={14} weight="fill" className="text-green-500 dark:text-green-400" />
                  <span className="text-neutral-500 dark:text-neutral-400">Certified</span>
                </>
              ) : (
                <>
                  <HourglassMedium size={14} weight="bold" className="text-amber-500 dark:text-amber-400" />
                  <span className="text-neutral-500 dark:text-neutral-400">In progress</span>
                </>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Certifications
