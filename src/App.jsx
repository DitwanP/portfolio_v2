import { BrowserRouter as Router } from "react-router-dom"
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes.jsx"
import { useEffect, useState } from "react"

import { themes } from "./components/ThemesModal/ThemesModal.jsx"

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
    const themeBackgroundColors = {
      dracula: "#282a36",
      ryujin: "#081426",
      grape: "#221223",
      "future-funk": "#2e1a47",
      "froyo-dark": "#1b180f",
    }

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
