import { useEffect, useRef } from 'react'

export function useParallax({ speed = 0.3, maxOffset = 300 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const el = ref.current
    if (!el) return

    let rafId = null

    const update = () => {
      const offset = Math.min(window.scrollY * speed, maxOffset)
      el.style.backgroundPosition = `center calc(50% + ${offset}px)`
      rafId = null
    }

    const onScroll = () => {
      if (rafId === null) rafId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [speed, maxOffset])

  return ref
}
