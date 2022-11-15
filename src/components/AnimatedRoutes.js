import React, { useState } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Home from "./Home.js"
import WorkAndSkills from "./WorkAndSkills.js"
import Projects from "./Projects.js"
import Contact from "./Contact.js"
import NavBar from "./NavBar.js"
import ThemesModal from "./ThemesModal.js"

import "../sass/navbar.scss"
import "../sass/themes.scss"

function AnimatedRoutes(props) {
  const location = useLocation()
  const [showNavList, setShowNavList] = useState(false)
  const [showThemesModal, setShowThemesModal] = useState(true)

  return (
    <div className={showNavList ? "nav-open" : "nav-close"}>
      <AnimatePresence mode="wait">
        <NavBar showNavList={showNavList} setShowNavList={setShowNavList} />
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/work-and-skills" element={<WorkAndSkills />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <ThemesModal
        switchTheme={props.switchTheme}
        showThemesModal={showThemesModal}
        setShowThemesModal={setShowThemesModal}
      />
    </div>
  )
}

export default AnimatedRoutes
