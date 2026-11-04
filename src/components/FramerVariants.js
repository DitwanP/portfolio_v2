import { useReducedMotion } from "framer-motion"

const instantTransition = {
  duration: 0,
  delay: 0,
  delayChildren: 0,
  staggerChildren: 0,
}

// PAGE
const entranceEase = [0.25, 0.1, 0.25, 1]

export const pageTransitions = {
  type: "tween",
  ease: entranceEase,
  duration: 0.55,
}

export const pageVariants = {
  initial: { y: 20, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: pageTransitions,
  },
  exit: {
    y: 12,
    opacity: 0,
    transition: { ...pageTransitions, duration: 0.35 },
  },
}

// TEXT
export const textTransitions = {
  type: "tween",
  ease: entranceEase,
  duration: 0.6,
}

export const textAnimateIn = {
  start: {
    y: 10,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
  },
}

// NAV
export const navContentVariants = {
  in: {
    opacity: 1,
    y: 0,
  },
  notIn: {
    y: -20,
  },
}

export const navContentTransitions = {
  ...textTransitions,
}

export const navContainerVariants = {
  open: {
    x: 0,
    transition: {
      type: "tween",
      ease: entranceEase,
      duration: 0.5,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.4,
    },
  },
}

export const navListVariants = {
  open: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
}

const itemVisible = { y: 0, opacity: 1, transition: textTransitions }
const itemHidden = { y: 10, opacity: 0, transition: { ...textTransitions, duration: 0.3 } }

export const navListItemVariants = {
  in: itemVisible,
  notIn: itemHidden,
  open: itemVisible,
  closed: itemHidden,
}

export const listVariants = {
  open: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
  hidden: { y: 12, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
}

export const listItemVariants = {
  open: itemVisible,
  closed: itemHidden,
  hidden: itemHidden,
  show: itemVisible,
}

// THEMES
export const themesListVariants = {
  open: { transition: { staggerChildren: 0.025 } },
  closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
}

export const themesListItemVariants = {
  open: { ...itemVisible, transition: { ...textTransitions, duration: 0.2 } },
  closed: { ...itemHidden, transition: { ...textTransitions, duration: 0.15 } },
}

export const themesContainerVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: entranceEase,
      duration: 0.25,
    },
    visibility: "visible",
  },
  closed: {
    y: 16,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.35,
    },
    transitionEnd: {
      visibility: "hidden",
    },
  },
}

// FOOTER
export const footerAnimateIn = {
  in: {
    opacity: 1,
    y: 0,
  },
  notIn: {
    opacity: 0,
    y: 16,
  },
  outDown: {
    opacity: 0,
    y: 16,
  },
}

export const footerTransitions = {
  ...textTransitions,
  delay: 0.25,
}

const animationVariants = {
  pageVariants,
  textAnimateIn,
  navContentVariants,
  navContainerVariants,
  navListVariants,
  navListItemVariants,
  listVariants,
  listItemVariants,
  themesContainerVariants,
  themesListVariants,
  themesListItemVariants,
  footerAnimateIn,
}

const reducedVariants = Object.fromEntries(
  Object.entries(animationVariants).map(([name, variants]) => [
    name,
    Object.fromEntries(
      Object.entries(variants).map(([state, target]) => [
        state,
        { ...target, transition: instantTransition },
      ]),
    ),
  ]),
)

export function useAnimationSettings() {
  const reduceMotion = useReducedMotion()
  return {
    ...(reduceMotion ? reducedVariants : animationVariants),
    transition: (settings) => reduceMotion ? instantTransition : settings,
    interaction: (settings) => reduceMotion ? undefined : settings,
  }
}
