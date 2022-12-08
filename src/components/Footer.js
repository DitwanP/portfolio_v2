import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"

import ThemesModal from "./ThemesModal.js"
import { footerAnimateIn, footerTransitions } from "./FramerVariants"

import "../sass/footer.scss"

const Footer = (props) => {
  const [showThemesModal, setShowThemesModal] = useState(false)

  return (
    <motion.div
      className="footer-container"
      variants={footerAnimateIn}
      initial="notIn"
      animate="in"
      exit="outDown"
      transition={footerTransitions}
    >
      <div className="social-links">
        <motion.a
          className="link"
          href="https://www.linkedin.com/in/ditwan/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </motion.a>
        <motion.a
          className="link"
          href="https://github.com/DitwanP"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faGithubAlt} />
        </motion.a>
      </div>
      <ThemesModal
        switchTheme={props.switchTheme}
        showThemesModal={showThemesModal}
        setShowThemesModal={setShowThemesModal}
      />
    </motion.div>
  )
}

export default Footer
