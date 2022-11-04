import React, { useRef } from "react"
import { useDimensions } from "./hooks/use-dimensions"
import "../sass/navbar.scss"
import { motion } from "framer-motion"

const navAnimateIn = {
  in: {
    opacity: [0, 0.5, 1],
    y: [-100, -50, 0],
  },
  notIn: {
    y: -100,
  },
  outUp: {
    scale: [1, 0.95, 0.95, 0.95, 0.95],
    y: [100, 100, 100, 100, -2000],
  },
}

const navContainerVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(1px at 327px 45px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const listItemVariants = {
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

const pageTransitions = {
  ease: "easeIn",
  duration: 0.5,
  delay: 1,
}

const NavBar = (props) => {
  const showNavList = props.showNavList
  const setShowNavList = props.setShowNavList
  const containerRef = useRef("nav")
  const { height } = useDimensions(containerRef)

  const toggleNav = () => {
    console.log("Show nav list? ", showNavList)
    setShowNavList(!showNavList)
  }

  return (
    <motion.div
      className="navbar-container"
      variants={navAnimateIn}
      initial="notIn"
      animate="in"
      exit="outUp"
      transition={pageTransitions}
    >
      <div className="logo-container">DP</div>
      <motion.nav
        className="nav-list-and-toggle-container"
        animate={showNavList ? "open" : "closed"}
        custom={height}
        initial={false}
        ref={containerRef}
      >
        <motion.div
          className="nav-list-container"
          variants={navContainerVariants}
        >
          <motion.ul variants={listVariants} className="nav-list">
            <motion.li
              variants={listItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ABOUT
            </motion.li>
            <motion.li
              variants={listItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              WORK
            </motion.li>
            <motion.li
              variants={listItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              SKILLS
            </motion.li>
          </motion.ul>
        </motion.div>
        <div className="nav-toggle-container" onClick={toggleNav}>
          <button className="nav-toggle">
            <span className="hamburger"></span>
          </button>
        </div>
      </motion.nav>
    </motion.div>
  )
}

export default NavBar
