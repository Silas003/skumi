import React from 'react'
import { projects } from './utils'
import Link from 'next/link'

const Projects = () => {
  return (
    <section className="mt-16 mb-12">
      {/* Section Header */}
      <div className="flex items-center mb-6">
        <span className="text-green-500 text-3xl mr-2 animate-pulse">•</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-lg">Projects</h2>
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-w-0">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 dark:bg-neutral-900/70 border border-neutral-700/40 rounded-2xl p-6 flex flex-col shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer min-w-0"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-200 break-words">{project.title}</h3>
            <p className="text-neutral-300 flex-grow mb-4 text-sm break-words">{project.description}</p>
            <Link
              href={project.url}
              className="inline-block mt-auto text-green-400 font-semibold text-sm underline underline-offset-2 hover:text-green-300 transition-colors duration-200 break-words"
              target="_blank"
            >
              {project.link}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects