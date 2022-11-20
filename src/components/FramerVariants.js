export const pageVariants = {
  in: {
    y: 0,
  },
  notIn: {
    y: 1200,
  },
  outDown: {
    scale: 1,
    y: 1200,
  },
}

export const pageTransitions = {
  type: "linear",
  ease: "easeOut",
  duration: 0.5,
}

export const textAnimateIn = {
  start: {
    y: -100,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
  },
}

// Nav
export const navAnimateIn = {
  in: {
    opacity: 1,
    y: 0,
  },
  notIn: {
    y: -200,
  },
  outUp: {
    scale: 1,
    y: -200,
  },
}

// themes
export const themesAnimateIn = {
  in: {
    opacity: 1,
    y: 0,
  },
  notIn: {
    opacity: 0,
    y: 500,
  },
  outDown: {
    opacity: 0,
    y: 500,
  },
}

export const navContainerVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at ${window.innerWidth}px -10px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(1px at ${window.innerWidth}px -10px)`,
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

export const themesContainerVariants = {
  open: {
    y: 0,
    transition: {
      type: "linear",
    },
  },
  closed: {
    y: 600,
    transition: {
      delay: 0.5,
      type: "linear",
      damping: 10,
    },
  },
  outDown: {
    y: 600,
    transition: {
      type: "linear",
      damping: 10,
    },
  },
}

export const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.5 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const listItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const navTransitions = {
  ease: "easeInOut",
  duration: 0.5,
  delay: 1.8,
}

export const themesTransitions = {
  ease: "easeInOut",
  duration: 0.5,
  delay: 1.8,
}
