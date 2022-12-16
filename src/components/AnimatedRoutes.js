import React, { useState, Suspense } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import NavBar from "./NavBar.js"
import Footer from "./Footer.js"

import "../sass/navbar.scss"
import "../sass/footer.scss"

const Home = React.lazy(() => import("./Home.js"))
const WorkAndSkills = React.lazy(() => import("./WorkAndSkills.js"))
const Projects = React.lazy(() => import("./Projects.js"))
const Contact = React.lazy(() => import("./Contact.js"))

function AnimatedRoutes(props) {
  const location = useLocation()
  const [showNavList, setShowNavList] = useState(false)

  return (
    <div className={showNavList ? "nav-open" : "nav-close"}>
      <NavBar showNavList={showNavList} setShowNavList={setShowNavList} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {" "}
                <Home />
              </Suspense>
            }
          />
          <Route
            exact
            path="/work-and-skills"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {" "}
                <WorkAndSkills />
              </Suspense>
            }
          />
          <Route
            exact
            path="/projects"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {" "}
                <Projects />
              </Suspense>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {" "}
                <Contact />
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer switchTheme={props.switchTheme} />
    </div>
  )
}

export default AnimatedRoutes
