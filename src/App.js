import { useState } from "react"
import OldHome from "./components/OldHome.js"
// import ProjectList from "./components/ProjectList.js"
import NavBar from "./components/NavBar.js"
import "./sass/navbar.scss"
import "./sass/app.scss"

function App() {
  const [showNavList, setShowNavList] = useState(false)

  return (
    <div className={showNavList && "nav-open"}>
      <div className="sections">
        <NavBar showNavList={showNavList} setShowNavList={setShowNavList} />
        <OldHome showNavList={showNavList} />
        {/* <ProjectList showNavList={showNavList} /> */}
      </div>
    </div>
  )
}

export default App
