import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import "../sass/themes.scss"
import "../sass/app.scss"

import {
  themesAnimateIn,
  themesContainerVariants,
  listVariants,
  listItemVariants,
  themesTransitions,
} from "./FramerVariants"

export const themes = [
  "froyo-dark",
  "future-funk",
  "ryujin",
  "grape",
  "dracula",
]

const ThemesModal = (props) => {
  const showThemesModal = props.showThemesModal
  const setShowThemesModal = props.setShowThemesModal

  const orderedThemes = themes.sort()

  const toggleNav = () => {
    console.log(!showThemesModal)
    setShowThemesModal(!showThemesModal)
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={"theme-container"}
        key="themesModal"
        variants={themesAnimateIn}
        initial="notIn"
        animate="in"
        exit="outDown"
        transition={themesTransitions}
      >
        <motion.div className="theme-container-toggle">
          <motion.div
            className="theme-list-container"
            variants={themesContainerVariants}
            animate={showThemesModal ? "open" : "closed"}
            exit="outDown"
          >
            <motion.ul variants={listVariants} className="theme-list">
              {orderedThemes.map((theme, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button onClick={() => props.switchTheme(theme)}>
                    <span>0{index + 1}.</span>
                    {theme}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <div className="toggle-button-container" onClick={toggleNav}>
            <button className="toggle-button">
              <motion.span
                className="theme-container-button-title"
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                theme
              </motion.span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemesModal
