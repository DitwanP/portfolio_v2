import React, { useState } from 'react'
import '../sass/navbar.scss'
import bg from '../assets/images/bg-small.jpeg'

const NavBar = (props) => {
    const showNavList = props.showNavList
    const setShowNavList = props.setShowNavList

    return (
        <div className="navbar-container">
            <div className="logo-container">
                D
            </div>
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
                <div className="nav-toggle-container">
                    <button className="nav-toggle-button" onClick={() => setShowNavList(!showNavList)}>X</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar