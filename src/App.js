import { BrowserRouter as Router } from "react-router-dom"
import AnimatedRoutes from "./components/AnimatedRoutes.js"
import { useRef, useEffect, useState } from "react"

import "./sass/app.scss"

function App() {
  const ref = useRef(null)
  const [appElement, setAppElement] = useState(null)
  const defaultTheme = "future-funk"

  const switchTheme = (theme) => {
    console.log("in switch theme function")
    if (
      (appElement.hasAttribute("theme") &&
        appElement.getAttribute("theme") !== theme) ||
      !appElement.hasAttribute("theme")
    ) {
      appElement.setAttribute("theme", theme)
    } else {
      return
    }
  }

  useEffect(() => {
    setAppElement(ref.current)
  }, [])

  return (
    <div className="app" ref={ref} theme={defaultTheme}>
      <Router>
        <AnimatedRoutes switchTheme={switchTheme} />
      </Router>
    </div>
  )
}

export default App
