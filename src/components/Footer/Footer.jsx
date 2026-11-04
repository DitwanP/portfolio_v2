import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import GithubIcon from "../../assets/icons/github.svg?react"
import LinkedInIcon from "../../assets/icons/linkedin-in.svg?react"

import ThemesModal from "../ThemesModal/ThemesModal.jsx"
import { footerAnimateIn, footerTransitions } from "../FramerVariants"
import { socialLinks } from "../data/SocialLinks.js"
import { footerContent } from "./Footer.content.js"

import "../../scss/footer.scss"

const Footer = (props) => {
  const [showThemesModal, setShowThemesModal] = useState(false)
  const themeToggleRef = useRef(null)

  const toggleThemeList = () => {
    setShowThemesModal((open) => !open)
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
      <div
        className="footer-content"
        onKeyDown={(event) => {
          if (event.key === "Escape" && showThemesModal) {
            event.preventDefault()
            setShowThemesModal(false)
            themeToggleRef.current.focus()
          }
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setShowThemesModal(false)
          }
        }}
      >
        <div className="social-links">
          <motion.a
            className="link"
            href={socialLinks.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedInIcon
              className="icon"
              role="img"
              aria-label={socialLinks.linkedin.iconAlt}
            />
          </motion.a>
          <motion.a
            className="link"
            href={socialLinks.github.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubIcon
              className="icon"
              role="img"
              aria-label={socialLinks.github.iconAlt}
            />
          </motion.a>
        </div>
        <ThemesModal
          switchTheme={props.switchTheme}
          showThemesModal={showThemesModal}
          toggleRef={themeToggleRef}
        />
        <div className="toggle-button-container">
          <button
            className="toggle-button"
            type="button"
            ref={themeToggleRef}
            aria-expanded={showThemesModal}
            aria-controls="theme-options"
            onClick={toggleThemeList}
          >
            <motion.span
              className="theme-container-button-title"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              {footerContent.themeButton}
            </motion.span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer
