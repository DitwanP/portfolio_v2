import React, { useRef } from "react"
import { motion } from "framer-motion"

import "../sass/themes.scss"
import "../sass/app.scss"

import {
  navAnimateIn,
  navContainerVariants,
  listVariants,
  listItemVariants,
  navTransitions,
} from "./FramerVariants"

const ThemesModal = (props) => {
  const showThemesModal = props.showThemesModal
  const setShowThemesModal = props.setShowThemesModal
  const containerRef = useRef("nav")

  const toggleNav = () => {
    setShowThemesModal(!showThemesModal)
  }

  return (
    <motion.div
      className="theme-container"
      variants={navAnimateIn}
      initial="notIn"
      animate="in"
      exit="outUp"
      transition={navTransitions}
    >
      <motion.nav
        className="theme-container-toggle"
        animate={showThemesModal ? "open" : "closed"}
        initial={false}
        ref={containerRef}
      >
        <motion.div
          className="theme-list-container"
          variants={navContainerVariants}
        >
          <motion.ul variants={listVariants} className="theme-list">
            <motion.li
              variants={listItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button onClick={() => props.switchTheme("dracula")}>
                <span>01.</span>Dracula
              </button>
            </motion.li>
            <motion.li
              variants={listItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button onClick={() => props.switchTheme("future-funk")}>
                <span>02.</span>Future Funk
              </button>
            </motion.li>
            <motion.li
              variants={listItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button onClick={() => props.switchTheme("tbd")}>
                <span>03.</span>TBD
              </button>
            </motion.li>
          </motion.ul>
        </motion.div>
        <div className="toggle-button-container" onClick={toggleNav}>
          <button className="toggle-button">
            <span className="hamburger"></span>
          </button>
        </div>
      </motion.nav>
    </motion.div>
  )
}

export default ThemesModal
