import Home from './components/Home.js';
import ProjectList from './components/ProjectList.js';
import NavBar from './components/NavBar.js';
import './sass/app.scss'
import { useState } from 'react'

function App() {
  const [showNavList, setShowNavList] = useState(false)

  return (
    <div className="App">
      <NavBar showNavList={showNavList} setShowNavList={setShowNavList} />
      <Home showNavList={showNavList} />
      <ProjectList showNavList={showNavList} />
    </div>
  );
}

export default App;
