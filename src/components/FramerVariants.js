export const pageVariants = {
  in: {
    scale: [0.95, 0.95, 0.95, 0.95, 1],
    x: ["100vw", "100vw", "100vw", "0vw", "0vw"],
  },
  notIn: {
    scale: 0.95,
    x: "100vw",
  },
  outDown: {
    scale: [1, 0.95, 0.95, 0.95, 0.95],
    y: [0, 0, 0, 0, 2000],
  },
}

export const pageTransitions = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.75,
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
  rotate: {
    scale: 1.1,
    rotateX: 180,
  },
}
