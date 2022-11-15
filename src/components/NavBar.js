import React, { useRef } from "react"
import { useDimensions } from "./hooks/use-dimensions"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import "../sass/navbar.scss"
import "../sass/app.scss"

import {
  navAnimateIn,
  navContainerVariants,
  listVariants,
  listItemVariants,
  navTransitions,
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
    <motion.div
      className="navbar-container"
      variants={navAnimateIn}
      initial="notIn"
      animate="in"
      exit="outUp"
      transition={navTransitions}
    >
      <div className="logo-container">
        <Link to="/">DP</Link>
      </div>
      <motion.div
        className="nav-list-container"
        variants={navContainerVariants}
      >
        <motion.ul variants={listVariants} className="nav-list">
          <motion.li
            variants={listItemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/work-and-skills">
              <span>01.</span>work/skills
            </Link>
          </motion.li>
          <motion.li
            variants={listItemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/projects">
              <span>02.</span>projects
            </Link>
          </motion.li>
          <motion.li
            variants={listItemVariants}
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
          <motion.ul variants={listVariants} className="nav-list-mobile">
            <motion.li
              variants={listItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/work-and-skills" onClick={toggleNav}>
                <span>01.</span>WORK/SKILLS
              </Link>
            </motion.li>
            <motion.li
              variants={listItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects" onClick={toggleNav}>
                <span>02.</span>PROJECTS
              </Link>
            </motion.li>
            <motion.li
              variants={listItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" onClick={toggleNav}>
                <span>03.</span>CONTACT
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
        <div className="toggle-button-container" onClick={toggleNav}>
          <button className="toggle-button">
            <span className="hamburger"></span>
          </button>
        </div>
      </motion.nav>
    </motion.div>
  )
}

export default NavBar
