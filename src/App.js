import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Home from "./components/Home.js"
import WorkAndSkills from "./components/WorkAndSkills.js"
import Projects from "./components/Projects.js"
import NavBar from "./components/NavBar.js"

import "./sass/navbar.scss"
import "./sass/app.scss"

function App() {
  const [showNavList, setShowNavList] = useState(false)
  return (
    <AnimatePresence mode="wait">
      <Router>
        <div className={showNavList ? "nav-open" : "nav-close"}>
          <div className="components">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/work-and-skills"
                element={<WorkAndSkills />}
              />
              <Route exact path="/projects" element={<Projects />} />
            </Routes>
            <div className="nav">
              <NavBar
                showNavList={showNavList}
                setShowNavList={setShowNavList}
              />
            </div>
          </div>
        </div>
      </Router>
    </AnimatePresence>
  )
}

export default App
