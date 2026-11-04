import { BrowserRouter as Router } from "react-router-dom"
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes.jsx"
import { useEffect, useState } from "react"
import { MotionConfig } from "framer-motion"

import { themes, themeBackgroundColors } from "./config/themes.js"

import "./scss/app.scss"

function App() {
  useEffect(() => {
    const updateViewportHeight = () => {
      const viewHeight = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${viewHeight}px`)
    }

    updateViewportHeight()
    window.addEventListener("resize", updateViewportHeight)

    return () => {
      window.removeEventListener("resize", updateViewportHeight)
    }
  }, [])

  const [currentTheme, setCurrentTheme] = useState(() => {
    let storedTheme = null
    try {
      storedTheme = localStorage.getItem("theme")
    } catch (error) {
      console.warn("Unable to read the saved theme; using an in-memory theme.", error)
    }
    return themes.includes(storedTheme)
      ? storedTheme
      : themes[Math.floor(Math.random() * themes.length)]
  })

  const switchTheme = (theme) => {
    setCurrentTheme(theme)
  }

  useEffect(() => {
    document.body.setAttribute("theme", currentTheme)
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", themeBackgroundColors[currentTheme])
    try {
      localStorage.setItem("theme", currentTheme)
    } catch (error) {
      console.warn("Unable to save the theme; changes will remain in memory.", error)
    }
  }, [currentTheme])

  return (
    <div className="app" theme={currentTheme}>
      <MotionConfig reducedMotion="user">
        <Router>
          <AnimatedRoutes switchTheme={switchTheme} />
        </Router>
      </MotionConfig>
    </div>
  )
}

export default App
