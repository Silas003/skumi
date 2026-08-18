import { Code, Stack as StackIcon, Cloud, Database } from '@phosphor-icons/react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const skillGroups = [
  {
    label: 'Languages',
    accent: 'text-amber-600 dark:text-amber-400',
    icon: Code,
    skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'Golang'],
  },
  {
    label: 'Frameworks',
    accent: 'text-green-600 dark:text-green-400',
    icon: StackIcon,
    skills: ['Spring', 'FastAPI', 'Django', 'Gin', 'Angular', 'React', 'Next'],
  },
  {
    label: 'Cloud & DevOps',
    accent: 'text-orange-600 dark:text-orange-400',
    icon: Cloud,
    skills: ['ECS Fargate', 'Lambda', 'API Gateway', 'CloudFormation', 'DynamoDB', 'S3', 'GitHub Actions', 'Docker', 'AWS SAM', 'CodePipeline'],
  },
  {
    label: 'Databases',
    accent: 'text-purple-600 dark:text-purple-400',
    icon: Database,
    skills: ['PostgreSQL / RDS', 'DynamoDB', 'Redis / ElastiCache'],
  },
]

const Skills = () => {
  return (
    <section id="stack" className="max-w-5xl mx-auto px-4 mb-14 md:mb-20">
      <Reveal>
        <SectionHeading>Stack</SectionHeading>
      </Reveal>
      <div className="space-y-5">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 60} className="flex flex-col sm:flex-row sm:items-start gap-2.5 sm:gap-6">
            <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest flex-shrink-0 sm:w-32 sm:pt-1.5 ${group.accent}`}>
              <group.icon size={14} weight="bold" />
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-full dark:text-neutral-400 dark:bg-neutral-900"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Skills
