import React, { useRef } from "react"
import { useDimensions } from "../hooks/use-dimensions"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

import GithubIcon from "../../assets/icons/github.svg?react"
import LinkedInIcon from "../../assets/icons/linkedin-in.svg?react"
import { navBarContent } from "./NavBar.content.js"
import { socialLinks } from "../data/SocialLinks.js"

import "../../scss/navbar.scss"
import "../../scss/app.scss"

import {
  navContentVariants,
  navContainerVariants,
  navListVariants,
  navListItemVariants,
  navContentTransitions,
} from "../FramerVariants"

const NavBar = (props) => {
  const showNavList = props.showNavList
  const setShowNavList = props.setShowNavList
  const containerRef = useRef("nav")
  const { height } = useDimensions(containerRef)
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
              <motion.li
                variants={navListItemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key="home"
              >
                <Link to="/">
                  <span>{navBarContent.home.number}</span>
                  {navBarContent.home.label}
                </Link>
              </motion.li>
              <motion.li
                variants={navListItemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key="work and skills"
              >
                <Link to="/work-and-skills">
                  <span>{navBarContent.workAndSkills.number}</span>
                  {navBarContent.workAndSkills.label}
                </Link>
              </motion.li>
              <motion.li
                variants={navListItemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key="projects"
              >
                <Link to="/projects">
                  <span>{navBarContent.projects.number}</span>
                  {navBarContent.projects.label}
                </Link>
              </motion.li>
              <motion.li
                variants={navListItemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key="contact"
              >
                <Link to="/contact">
                  <span>{navBarContent.contact.number}</span>
                  {navBarContent.contact.label}
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
                <motion.li
                  variants={navListItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key="home"
                >
                  <Link to="/" onClick={closeNav}>
                    <span>{navBarContent.home.number}</span>
                    {navBarContent.home.label}
                  </Link>
                </motion.li>
                <motion.li
                  variants={navListItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key="work and skills"
                >
                  <Link to="/work-and-skills" onClick={closeNav}>
                    <span>{navBarContent.workAndSkills.number}</span>
                    {navBarContent.workAndSkills.mobileLabel}
                  </Link>
                </motion.li>
                <motion.li
                  variants={navListItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key="projects"
                >
                  <Link to="/projects" onClick={closeNav}>
                    <span>{navBarContent.projects.number}</span>
                    {navBarContent.projects.label}
                  </Link>
                </motion.li>
                <motion.li
                  variants={navListItemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key="contact"
                >
                  <Link to="/contact" onClick={closeNav}>
                    <span>{navBarContent.contact.number}</span>
                    {navBarContent.contact.label}
                  </Link>
                </motion.li>
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
