import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import "../scss/themes.scss"
import "../scss/app.scss"

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
  const orderedThemes = themes.sort()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className=" theme-container"
        key="themesModal"
        variants={themesContainerVariants}
        animate={showThemesModal ? "open" : "closed"}
      >
        <motion.div className="theme-container-toggle">
          <motion.div className="theme-list-container">
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemesModal
