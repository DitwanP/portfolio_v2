import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import "../sass/themes.scss"
import "../sass/app.scss"

import {
  themesContainerVariants,
  listVariants,
  listItemVariants,
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

  const toggleThemeList = () => {
    setShowThemesModal(!showThemesModal)
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div className={"theme-container"} key="themesModal">
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
                  <button
                    onClick={() => props.switchTheme(theme)}
                    tabIndex="-1"
                  >
                    <span>0{index + 1}.</span>
                    {theme}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <div className="toggle-button-container" onClick={toggleThemeList}>
            <button className="toggle-button" tabIndex="-1">
              <motion.span
                className="theme-container-button-title"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
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
