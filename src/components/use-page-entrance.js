import { useState } from "react"
import { useIsPresent, useReducedMotion } from "framer-motion"

export function usePageEntrance(animations) {
  const [pending, setPending] = useState(animations)
  const isPresent = useIsPresent()
  const reduceMotion = useReducedMotion()

  const complete = (animation) => {
    setPending((current) => current.includes(animation)
      ? current.filter((name) => name !== animation)
      : current)
  }

  return {
    pageClassName: `page-container${!isPresent || (!reduceMotion && pending.length > 0) ? " page-animating" : ""}`,
    complete,
  }
}
