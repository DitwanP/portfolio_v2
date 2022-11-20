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
  const [showThemesModal, setShowThemesModal] = useState(false)

  return (
    <div className={showNavList ? "nav-open" : "nav-close"}>
      <NavBar showNavList={showNavList} setShowNavList={setShowNavList} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/work-and-skills" element={<WorkAndSkills />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <ThemesModal
          switchTheme={props.switchTheme}
          showThemesModal={showThemesModal}
          setShowThemesModal={setShowThemesModal}
        />
      </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes
