import React, { useState } from "react"
import { motion } from "framer-motion"

import { ReactComponent as GithubIcon } from "../assets/icons/github.svg"
import { ReactComponent as LinkedInIcon } from "../assets/icons/linkedin-in.svg"

import ThemesModal from "./ThemesModal.js"
import { footerAnimateIn, footerTransitions } from "./FramerVariants"

import "../scss/footer.scss"

const Footer = (props) => {
  const [showThemesModal, setShowThemesModal] = useState(false)

  const toggleThemeList = () => {
    setShowThemesModal(!showThemesModal)
  }

  return (
    <motion.div
      className="footer-container"
      variants={footerAnimateIn}
      initial="notIn"
      animate="in"
      exit="outDown"
      transition={footerTransitions}
    >
      <div className="footer-content">
        <div className="social-links">
          <motion.a
            className="link"
            href="https://www.linkedin.com/in/ditwan/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            className="link"
            href="https://github.com/DitwanP"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon />
          </motion.a>
        </div>
        <ThemesModal
          switchTheme={props.switchTheme}
          showThemesModal={showThemesModal}
          setShowThemesModal={setShowThemesModal}
        />
        <div className="toggle-button-container">
          <button
            className="toggle-button"
            tabIndex="-1"
            onClick={toggleThemeList}
          >
            <motion.span
              className="theme-container-button-title"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              theme
            </motion.span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer
