import React from "react"
import "../sass/navbar.scss"
import { motion } from "framer-motion"

const pageVariants = {
  in: {
    scale: [0.95, 0.95, 0.95, 0.98, 1],
    y: ["-100vh", "-50vh", "-25vh", "0vh", "0vh"],
  },
  notIn: {
    y: "-100vh",
  },
  outUp: {
    scale: [1, 0.95, 0.95, 0.95, 0.95],
    y: [100, 100, 100, 100, -2000],
  },
}

const pageTransitions = {
  type: "spring",
  ease: "linear",
  stiffness: 20,
  duration: 1.75,
  delay: 0.75,
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
      variants={pageVariants}
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
