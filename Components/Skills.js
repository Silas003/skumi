const skillGroups = [
  {
    label: 'Languages',
    accent: 'text-amber-600 dark:text-amber-400',
    skills: ['Java', 'Python','TypeScript','JavaScript','Golang'],
  },
  {
    label: 'Frameworks',
    accent: 'text-green-600 dark:text-green-400',
    skills: ['Spring MVC', 'FastAPI','Django','Gin','Angular','React','Next'],
  },
  {
    label: 'AWS',
    accent: 'text-orange-600 dark:text-orange-400',
    skills: ['Lambda', 'ECS Fargate', 'API Gateway', 'DynamoDB', 'CloudFormation', 'EventBridge', 'S3',],
  },
  {
    label: 'DevOps',
    accent: 'text-sky-600 dark:text-sky-400',
    skills: ['GitHub Actions', 'Docker', 'ECR', 'CodePipeline', 'CodeDeploy', 'AWS SAM'],
  },
  {
    label: 'Databases',
    accent: 'text-purple-600 dark:text-purple-400',
    skills: ['PostgreSQL / RDS', 'DynamoDB', 'Redis / ElastiCache'],
  },
]

const Skills = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 mb-12 md:mb-16">
      <div className="flex items-center mb-8">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 animate-pulse dark:bg-green-400" />
        <h2 className="text-xl md:text-2xl font-extrabold text-neutral-900 tracking-tight dark:text-white">Stack</h2>
      </div>
      <div className="space-y-4">
        {skillGroups.map((group) => (
          <div key={group.label} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
            <span className={`text-xs font-bold uppercase tracking-widest flex-shrink-0 sm:w-20 sm:pt-1.5 ${group.accent}`}>
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium text-neutral-700 bg-neutral-100 border border-neutral-200 px-3 py-1.5 rounded-lg dark:text-neutral-400 dark:bg-neutral-900 dark:border-neutral-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
