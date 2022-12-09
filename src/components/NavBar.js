import React, { useRef } from "react"
import { useDimensions } from "./hooks/use-dimensions"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons"

import "../sass/navbar.scss"
import "../sass/app.scss"

import {
  navContentVariants,
  navContainerVariants,
  navListVariants,
  navListItemVariants,
  navContentTransitions,
} from "./FramerVariants"

const NavBar = (props) => {
  const showNavList = props.showNavList
  const setShowNavList = props.setShowNavList
  const containerRef = useRef("nav")
  const { height } = useDimensions(containerRef)

  const toggleNav = () => {
    setShowNavList(!showNavList)
  }

  return (
    <motion.div className="navbar-container">
      <motion.div
        className="navbar-content"
        variants={navContentVariants}
        initial="notIn"
        animate="in"
        exit="outUp"
        transition={navContentTransitions}
      >
        <div className="logo-container">
          <Link to="/">DP</Link>
        </div>
        <motion.div
          className="nav-list-container"
          variants={navContainerVariants}
        >
          <motion.ul variants={navListVariants} className="nav-list">
            <motion.li
              variants={navListItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/work-and-skills">
                <span>01.</span>work/skills
              </Link>
            </motion.li>
            <motion.li
              variants={navListItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects">
                <span>02.</span>projects
              </Link>
            </motion.li>
            <motion.li
              variants={navListItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">
                <span>03.</span>contact
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.nav
          className="nav-toggle-container"
          animate={showNavList ? "open" : "closed"}
          custom={height}
          initial={false}
          ref={containerRef}
        >
          <motion.div
            className="nav-list-container-mobile"
            variants={navContainerVariants}
          >
            <motion.ul variants={navListVariants} className="nav-list-mobile">
              <motion.li
                variants={navListItemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/" onClick={toggleNav}>
                  <span>01.</span>home
                </Link>
              </motion.li>
              <motion.li
                variants={navListItemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/work-and-skills" onClick={toggleNav}>
                  <span>02.</span>work/skill
                </Link>
              </motion.li>
              <motion.li
                variants={navListItemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/projects" onClick={toggleNav}>
                  <span>03.</span>projects
                </Link>
              </motion.li>
              <motion.li
                variants={navListItemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" onClick={toggleNav}>
                  <span>04.</span>contact
                </Link>
              </motion.li>
            </motion.ul>
            <div className="social-links">
              <motion.a
                className="link"
                href="https://github.com/DitwanP"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faGithubAlt} />
                <h2>github</h2>
              </motion.a>
              <motion.a
                className="link"
                href="https://www.linkedin.com/in/ditwan/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
                <h2>linkedin</h2>
              </motion.a>
            </div>
          </motion.div>
          <div className="toggle-button-container" onClick={toggleNav}>
            <button className="toggle-button">
              <span className="hamburger"></span>
            </button>
          </div>
        </motion.nav>
      </motion.div>
    </motion.div>
  )
}

export default NavBar
