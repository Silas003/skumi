import React from 'react'
import { projects } from './utils'
import Link from 'next/link'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className="mt-8">
     <div className="flex flow-row flex-1">
      <span className="text-green-600 text-4xl text-center">•</span>
      <span className="text-xl text-white/90 font-bold">Projects</span>

     </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-neutral-100/10 p-5 rounded-xl flex flex-col">
            <h2 className="text-white font-bold text-lg mb-2">{project.title}</h2>
            <p className="text-neutral-400/60 flex-grow mb-4 text-sm">
              {project.description}
            </p>
            <Link 
              href={project.url} 
              className=" text-white/85 text-sm underline"
            >
              {project.link}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects