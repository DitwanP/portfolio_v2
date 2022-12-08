import { BrowserRouter as Router } from "react-router-dom"
import AnimatedRoutes from "./components/AnimatedRoutes.js"
import { useRef, useEffect, useState } from "react"

import { themes } from "./components/ThemesModal.js"

import "./sass/app.scss"

function App() {
  const defaultTheme = themes.includes(localStorage.getItem("theme"))
    ? localStorage.getItem("theme")
    : "grape"

  const ref = useRef(null)
  const [appElement, setAppElement] = useState(null)
  const [currentTheme, setCurrentTheme] = useState(defaultTheme)

  const switchTheme = (theme) => {
    if (
      (appElement.hasAttribute("theme") &&
        appElement.getAttribute("theme") !== theme) ||
      !appElement.hasAttribute("theme")
    ) {
      appElement.setAttribute("theme", theme)
      setCurrentTheme(theme)
    } else {
      return
    }
  }

  useEffect(() => {
    setAppElement(ref.current)
    localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <div className="app" ref={ref} theme={currentTheme}>
      <Router>
        <AnimatedRoutes switchTheme={switchTheme} />
      </Router>
    </div>
  )
}

export default App
