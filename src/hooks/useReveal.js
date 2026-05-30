import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.1, rootMargin = '0px 0px -40px 0px') {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        },
        { threshold, rootMargin }
      )
      observer.observe(el)
      return () => observer.disconnect()
    } else {
      el.classList.add('visible')
    }
  }, [threshold, rootMargin])

  return ref
}
