import React, { useState, Suspense } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import NavBar from "../NavBar/NavBar.jsx"
import Footer from "../Footer/Footer.jsx"
import RouteErrorBoundary from "../RouteErrorBoundary/RouteErrorBoundary.jsx"
import NotFound from "../NotFound/NotFound.jsx"
import { animatedRoutesContent } from "./AnimatedRoutes.content.js"

import "../../scss/navbar.scss"
import "../../scss/footer.scss"

const Home = React.lazy(() => import("../Home/Home.jsx"))
const WorkAndSkills = React.lazy(() => import("../WorkAndSkills/WorkAndSkills.jsx"))
const Projects = React.lazy(() => import("../Projects/Projects.jsx"))
const Contact = React.lazy(() => import("../Contact/Contact.jsx"))

function AnimatedRoutes(props) {
  const location = useLocation()
  const [showNavList, setShowNavList] = useState(false)

  return (
    <div className={showNavList ? "nav-open" : "nav-close"}>
      <NavBar showNavList={showNavList} setShowNavList={setShowNavList} />
      <AnimatePresence mode="wait">
        <RouteErrorBoundary key={location.pathname}>
          <Routes location={location}>
            <Route
              exact
              path="/"
              element={
                <Suspense fallback={<div>{animatedRoutesContent.loading}</div>}>
                  {" "}
                  <Home />
                </Suspense>
              }
            />
            <Route
              exact
              path="/work-and-skills"
              element={
                <Suspense fallback={<div>{animatedRoutesContent.loading}</div>}>
                  {" "}
                  <WorkAndSkills />
                </Suspense>
              }
            />
            <Route
              exact
              path="/projects"
              element={
                <Suspense fallback={<div>{animatedRoutesContent.loading}</div>}>
                  {" "}
                  <Projects />
                </Suspense>
              }
            />
            <Route
              exact
              path="/contact"
              element={
                <Suspense fallback={<div>{animatedRoutesContent.loading}</div>}>
                  {" "}
                  <Contact />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RouteErrorBoundary>
      </AnimatePresence>
      <Footer switchTheme={props.switchTheme} />
    </div>
  )
}

export default AnimatedRoutes
