import { BrowserRouter as Router } from "react-router-dom"
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes.jsx"
import { useEffect, useState } from "react"

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
    const storedTheme = localStorage.getItem("theme")
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
    localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <div className="app" theme={currentTheme}>
      <Router>
        <AnimatedRoutes switchTheme={switchTheme} />
      </Router>
    </div>
  )
}

export default App
