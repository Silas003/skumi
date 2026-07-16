import Link from 'next/link'
import { projects } from './utils'

const cardGradients = [
  'from-green-100 to-emerald-50 dark:from-green-900/50 dark:to-emerald-950/30',
  'from-blue-100 to-sky-50 dark:from-blue-900/50 dark:to-sky-950/30',
  'from-purple-100 to-violet-50 dark:from-purple-900/50 dark:to-violet-950/30',
  'from-orange-100 to-amber-50 dark:from-orange-900/50 dark:to-amber-950/30',
  'from-rose-100 to-pink-50 dark:from-rose-900/50 dark:to-pink-950/30',
]

const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
  </svg>
)

const Projects = () => {
  return (
    <section id="projects" className="mb-14 md:mb-20">
      <div className="flex items-center mb-8">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 animate-pulse dark:bg-green-400" />
        <h2 className="text-xl md:text-2xl font-extrabold text-neutral-900 tracking-tight dark:text-white">Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden flex flex-col hover:border-neutral-300 hover:shadow-md transition-all duration-300 dark:bg-neutral-900/60 dark:border-neutral-800/60 dark:hover:border-neutral-700 dark:hover:shadow-none dark:hover:bg-neutral-900/80"
          >
            {/* Card header */}
            <div
              className={`h-24 bg-gradient-to-br ${cardGradients[index % cardGradients.length]} border-b border-neutral-200/60 dark:border-neutral-800/40 flex items-end p-4`}
            >
              <span className="text-4xl font-black text-black/10 tracking-tighter select-none leading-none dark:text-white/10">
                {project.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
            {/* Card body */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-green-600 transition-colors duration-200 dark:text-white dark:group-hover:text-green-400">
                {project.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed flex-1 mb-5 line-clamp-3 dark:text-neutral-500">
                {project.description}
              </p>
              <Link
                href={project.url}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-green-600 hover:text-green-700 text-sm font-semibold transition-colors duration-200 mt-auto dark:text-green-400 dark:hover:text-green-300"
              >
                {project.link}
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
