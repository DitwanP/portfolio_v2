import { useState } from "react"
import Home from "./components/Home.js"
// import ProjectList from "./components/ProjectList.js"
import NavBar from "./components/NavBar.js"
import "./sass/navbar.scss"
import "./sass/app.scss"

function App() {
  const [showNavList, setShowNavList] = useState(false)

  return (
    <div className={showNavList ? "nav-open" : "nav-close"}>
      <div className="nav">
        <NavBar showNavList={showNavList} setShowNavList={setShowNavList} />
      </div>
      <div className="components">
        <Home />
        {/* <ProjectList showNavList={showNavList} /> */}
      </div>
    </div>
  )
}

export default App
