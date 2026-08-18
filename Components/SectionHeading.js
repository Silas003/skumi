// Shared section title: bold word + a short accent tick underneath.
// Replaces the repeated "pulsing dot + heading" combo that showed up
// identically in every section, one signature mark instead of five copies
// of the same decoration.
const SectionHeading = ({ children }) => (
  <div className="mb-8 md:mb-10">
    <h2 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight dark:text-white">
      {children}
    </h2>
    <span className="block w-8 h-0.5 bg-green-500 mt-3 dark:bg-green-400" />
  </div>
)

export default SectionHeading
