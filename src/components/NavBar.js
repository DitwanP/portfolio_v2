import React, { useState } from "react"
import "../sass/navbar.scss"

const NavBar = (props) => {
  const showNavList = props.showNavList
  const setShowNavList = props.setShowNavList

  const toggleNav = () => {
    setShowNavList(!showNavList)
  }

  return (
    <div className="navbar-container">
      <div className="logo-container">D</div>
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
    </div>
  )
}

export default NavBar
