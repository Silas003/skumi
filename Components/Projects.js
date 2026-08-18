import Link from 'next/link'
import { ArrowUpRight } from '@phosphor-icons/react'
import { projects } from './utils'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const Projects = () => {
  return (
    <section id="projects" className="mb-16 md:mb-24">
      <Reveal>
        <SectionHeading>Projects</SectionHeading>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 4) * 60}>
            <Link
              href={project.url}
              target="_blank"
              className="group block pt-6 pb-7 border-t border-neutral-200 dark:border-neutral-800"
            >
              <div className="flex items-baseline gap-3 mb-2.5">
                <span className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-green-600 transition-colors duration-200 dark:text-white dark:group-hover:text-green-400">
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={14}
                  weight="bold"
                  className="text-neutral-300 transition-all duration-200 group-hover:text-green-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-neutral-700 dark:group-hover:text-green-400"
                />
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2 mb-3 pl-[27px] dark:text-neutral-500">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 pl-[27px]">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects
