// PAGE
export const pageTransitions = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3,
}

export const pageVariants = {
  initial: { y: "100%", opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: pageTransitions,
  },
  exit: {
    y: "50%",
    opacity: 0,
    transition: pageTransitions,
  },
}

// TEXT
export const textAnimateIn = {
  start: {
    y: "50%",
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
    y: -200,
  },
}

export const navContentTransitions = {
  type: "tween",
  ease: "easeInOut",
  duration: 1,
}

export const navContainerVariants = {
  open: {
    x: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
    },
  },
  closed: {
    x: 1500,
    transition: {
      type: "tween",
      ease: "easeInOut",
    },
  },
}

export const navListVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.5 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const navListItemVariants = {
  in: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  notIn: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
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
  hidden: { y: 500, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
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
  hidden: {
    y: 500,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: "tween", ease: "easeInOut", delay: 1 },
    },
  },
}

// THEMES
export const themesContainerVariants = {
  open: {
    y: 0,
    transition: {
      type: "tween",
    },
    visibility: "visible",
  },
  closed: {
    y: 700,
    transition: {
      delay: 0.7,
      type: "tween",
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
    y: 500,
  },
  outDown: {
    opacity: 0,
    y: 500,
  },
}

export const footerTransitions = {
  ease: "easeInOut",
  duration: 0.5,
  delay: 2,
}
