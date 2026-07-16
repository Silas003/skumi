const certs = [
  {
    abbr: 'CCP',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    status: 'certified',
  },
  {
    abbr: 'KCNA',
    name: 'Kubernetes & Cloud Native Associate',
    issuer: 'Cloud Native Computing Foundation',
    status: 'certified',
  },
  {
    abbr: 'SAA',
    name: 'AWS Solutions Architect — Associate',
    issuer: 'Amazon Web Services',
    status: 'in-progress',
  },
]

const Certifications = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 mb-12 md:mb-16 w-full">
      <div className="flex items-center mb-8">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 animate-pulse dark:bg-green-400" />
        <h2 className="text-xl md:text-2xl font-extrabold text-neutral-900 tracking-tight dark:text-white">
          Certifications
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        {certs.map((cert) => (
          <div
            key={cert.abbr}
            className={`flex items-center gap-4 bg-white rounded-xl px-4 py-3.5 border dark:bg-neutral-900 ${
              cert.status === 'certified'
                ? 'border-neutral-200 dark:border-neutral-800'
                : 'border-amber-200/70 dark:border-amber-400/20'
            }`}
          >
            {/* Abbreviation tile */}
            <div
              className={`flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center text-xs font-black tracking-tight ${
                cert.status === 'certified'
                  ? 'bg-green-50 text-green-700 dark:bg-green-400/10 dark:text-green-400'
                  : 'bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-400'
              }`}
            >
              {cert.abbr}
            </div>

            {/* Name + issuer + status — stacks on mobile, row on desktop */}
            <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-neutral-900 leading-snug dark:text-white">{cert.name}</p>
                <p className="text-xs text-neutral-400 mt-0.5 dark:text-neutral-500">{cert.issuer}</p>
              </div>

              {/* Status badge */}
              <div
                className={`self-start sm:self-auto flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${
                  cert.status === 'certified'
                    ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-400/10 dark:text-green-400 dark:border-green-400/20'
                    : 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-400/10 dark:text-amber-400 dark:border-amber-400/20'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    cert.status === 'certified'
                      ? 'bg-green-500 dark:bg-green-400'
                      : 'bg-amber-500 animate-pulse dark:bg-amber-400'
                  }`}
                />
                {cert.status === 'certified' ? 'Certified' : 'In Progress'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
