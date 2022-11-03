import React from "react"
import "../sass/navbar.scss"
import { motion } from "framer-motion"

const navAnimateIn = {
  in: {
    opacity: [0, 0.5, 1],
    y: [-100, -50, 0],
  },
  notIn: {
    y: -100,
  },
  outUp: {
    scale: [1, 0.95, 0.95, 0.95, 0.95],
    y: [100, 100, 100, 100, -2000],
  },
}

const pageTransitions = {
  ease: "easeIn",
  duration: 0.5,
  delay: 1,
}

const NavBar = (props) => {
  const showNavList = props.showNavList
  const setShowNavList = props.setShowNavList

  const toggleNav = () => {
    setShowNavList(!showNavList)
    console.log(showNavList)
  }

  return (
    <motion.div
      className="navbar-container"
      variants={navAnimateIn}
      initial="notIn"
      animate="in"
      exit="outUp"
      transition={pageTransitions}
    >
      <div className="logo-container">DP</div>
      <div className="nav-list-and-toggle-container">
        {showNavList && (
          <div className="nav-list-container">
            <ul className="nav-list">
              <li> ABOUT </li>
              <li> WORK </li>
              <li> SKILLS </li>
            </ul>
          </div>
        )}
        <div className="nav-toggle-container" onClick={toggleNav}>
          <button className="nav-toggle">
            <span className="hamburger"></span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default NavBar
