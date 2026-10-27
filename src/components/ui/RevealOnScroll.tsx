import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
}

const RevealOnScroll = ({ children, className = '' }: RevealOnScrollProps) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const classes = ['reveal-on-scroll', isVisible && 'is-visible', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={elementRef} className={classes}>
      {children}
    </div>
  )
}

export default RevealOnScroll
