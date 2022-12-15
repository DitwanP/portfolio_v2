import { BrowserRouter as Router } from "react-router-dom"
import AnimatedRoutes from "./components/AnimatedRoutes.js"
import { useRef, useEffect, useState } from "react"

import { themes } from "./components/ThemesModal.js"

import "./sass/app.scss"

function App() {
  const viewHeight = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${viewHeight}px`)

  window.addEventListener("resize", () => {
    const viewHeight = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${viewHeight}px`)
  })

  const defaultTheme = themes.includes(localStorage.getItem("theme"))
    ? localStorage.getItem("theme")
    : themes[Math.floor(Math.random() * themes.length)]

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
      document.body.setAttribute("theme", currentTheme)
      setCurrentTheme(theme)
    } else {
      return
    }
  }

  useEffect(() => {
    setAppElement(ref.current)
    document.body.setAttribute("theme", currentTheme)
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
