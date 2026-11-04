import React, { useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

import GithubIcon from "../../assets/icons/github.svg?react"
import LinkedInIcon from "../../assets/icons/linkedin-in.svg?react"
import { navBarContent } from "./NavBar.content.js"
import { socialLinks } from "../data/SocialLinks.js"
import { navigation } from "../../config/navigation.js"

import "../../scss/navbar.scss"
import "../../scss/app.scss"

import {
  navContentVariants,
  navContainerVariants,
  navListVariants,
  navListItemVariants,
  navContentTransitions,
} from "../FramerVariants"

const NavigationItems = ({ onNavigate }) =>
  navigation.map(({ id, path }) => (
    <motion.li
      key={id}
      variants={navListItemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={path} onClick={onNavigate}>
        <span>{navBarContent[id].number}</span>
        {navBarContent[id].label}
      </Link>
    </motion.li>
  ))

const NavBar = (props) => {
  const showNavList = props.showNavList
  const setShowNavList = props.setShowNavList
  const toggleRef = useRef(null)
  const panelRef = useRef(null)

  const toggleNav = () => {
    setShowNavList((open) => !open)
  }

  const closeNav = () => {
    setShowNavList(false)
    toggleRef.current.focus()
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div className="navbar-container" key="navContainer">
        <motion.div
          className="navbar-content"
          variants={navContentVariants}
          initial="notIn"
          animate="in"
          exit="outUp"
          transition={navContentTransitions}
        >
          <div className="logo-container">
            <Link to="/">{navBarContent.logo}</Link>
          </div>
          <motion.div
            className="nav-list-container"
            variants={navContainerVariants}
          >
            <motion.ul variants={navListVariants} className="nav-list">
              <NavigationItems />
            </motion.ul>
          </motion.div>
          <motion.nav
            className="nav-toggle-container"
            animate={showNavList ? "open" : "closed"}
            initial={false}
            onKeyDown={(event) => {
              if (event.key === "Escape" && showNavList) {
                event.preventDefault()
                closeNav()
              }
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setShowNavList(false)
              }
            }}
          >
            <motion.div
              className="nav-list-container-mobile"
              id="mobile-navigation"
              ref={panelRef}
              aria-hidden={!showNavList}
              inert={showNavList ? undefined : ""}
              variants={navContainerVariants}
              onAnimationComplete={(definition) => {
                if (
                  definition === "open" &&
                  document.activeElement === toggleRef.current
                ) {
                  panelRef.current.querySelector("a").focus()
                }
              }}
            >
              <motion.ul variants={navListVariants} className="nav-list-mobile">
                <NavigationItems onNavigate={closeNav} />
              </motion.ul>
              <div className="social-links">
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
                  <h2>{socialLinks.github.label}</h2>
                </motion.a>
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
                  <h2>{socialLinks.linkedin.label}</h2>
                </motion.a>
              </div>
            </motion.div>
            <div className="toggle-button-container">
              <button
                className="toggle-button"
                aria-label={navBarContent.toggleLabel}
                type="button"
                ref={toggleRef}
                onClick={toggleNav}
                aria-expanded={showNavList}
                aria-controls="mobile-navigation"
              >
                <div className="hamburger"></div>
              </button>
            </div>
          </motion.nav>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default NavBar
