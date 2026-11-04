import React, { useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

import "../../scss/themes.scss"
import "../../scss/app.scss"
import { themesModalContent } from "./ThemesModal.content.js"

import {
  themesContainerVariants,
  listVariants,
  listItemVariants,
} from "../FramerVariants"

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
  const panelRef = useRef(null)

  const navigateThemes = (event) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
      return
    }

    const buttons = Array.from(event.currentTarget.querySelectorAll("button"))
    const currentIndex = buttons.indexOf(document.activeElement)
    if (currentIndex === -1) {
      return
    }

    event.preventDefault()
    const direction = event.key === "ArrowDown" ? 1 : -1
    const nextIndex = (currentIndex + direction + buttons.length) % buttons.length
    buttons[nextIndex].focus()
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className=" theme-container"
        id="theme-options"
        ref={panelRef}
        aria-hidden={!showThemesModal}
        inert={showThemesModal ? undefined : ""}
        key="themesModal"
        variants={themesContainerVariants}
        animate={showThemesModal ? "open" : "closed"}
        onAnimationComplete={(definition) => {
          if (
            definition === "open" &&
            document.activeElement === props.toggleRef.current
          ) {
            panelRef.current.querySelector("button").focus()
          }
        }}
      >
        <motion.div className="theme-container-toggle">
          <motion.div className="theme-list-container">
            <motion.ul
              variants={listVariants}
              className="theme-list"
              onKeyDown={navigateThemes}
            >
              {orderedThemes.map((theme, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => props.switchTheme(theme)}
                    type="button"
                    tabIndex={showThemesModal ? 0 : -1}
                  >
                    <span>0{index + 1}.</span>
                    {themesModalContent.labels[theme]}
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
