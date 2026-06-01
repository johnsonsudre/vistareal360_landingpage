import { useState, useEffect } from 'react'

export function useCenterHighlight(listRefs) {
  const [highlighted, setHighlighted] = useState(listRefs.map(() => -1))

  useEffect(() => {
    const lists = listRefs.map(r => r.current).filter(Boolean)
    if (lists.length === 0) return

    let rafId = null

    const update = () => {
      const viewCenter = window.innerHeight / 2
      const next = lists.map(ul => {
        if (!ul) return -1
        const items = ul.querySelectorAll('li')
        let closestIdx = 0
        let closestDist = Infinity

        items.forEach((li, i) => {
          const rect = li.getBoundingClientRect()
          const liCenter = rect.top + rect.height / 2
          const dist = Math.abs(liCenter - viewCenter)
          if (dist + 20 < closestDist) {
            closestDist = dist
            closestIdx = i
          }
        })

        return closestIdx
      })

      setHighlighted(prev => {
        if (prev.length === next.length && prev.every((v, i) => v === next[i]))
          return prev
        return next
      })
      rafId = null
    }

    const onScroll = () => {
      if (rafId === null) rafId = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [listRefs])

  return highlighted
}
