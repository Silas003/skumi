import { useReveal } from '../hooks/useReveal'

// Thin wrapper: marks its child with data-reveal so globals.css can animate
// it in once useReveal's IntersectionObserver confirms it's on screen.
const Reveal = ({ as: Tag = 'div', delay = 0, className = '', children }) => {
  const { ref, revealed } = useReveal()

  return (
    <Tag
      ref={ref}
      data-reveal={revealed}
      style={{ transitionDelay: revealed ? `${delay}ms` : '0ms' }}
      className={className}
    >
      {children}
    </Tag>
  )
}

export default Reveal
