import React, { Component } from "react"
import { motion } from "framer-motion"
import "../sass/oldHome.scss"

const pageVariants = {
  in: {
    scale: [0.95, 0.95, 0.95, 0.95, 1],
    x: ["100vw", "100vw", "100vw", "0vw", "0vw"],
  },
  notIn: {
    scale: 0.95,
    x: "100vw",
  },
  outDown: {
    scale: [1, 0.95, 0.95, 0.95, 0.95],
    y: [0, 0, 0, 0, 2000],
  },
}

const pageTransitions = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.75,
}

const container = {
  start: {
    y: 40,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
  },
  rotate: {
    scale: 1.1,
    rotateX: 180,
  },
}

export default class OldHome extends Component {
  constructor(props) {
    super(props)
    this.nameText = React.createRef()
    this.firsNameText = React.createRef()
    this.professionText = React.createRef()
  }

  componentDidMount() {
    const firstNameChars = this.firsNameText.current.childNodes
    const nameElements = this.nameText.current.childNodes
    const professionElements = this.professionText.current.childNodes

    for (let i = 0; i <= firstNameChars.length - 1; i++) {
      firstNameChars[i].addEventListener("animationend", () => {
        firstNameChars[i].classList.remove("animated")
      })

      firstNameChars[i].addEventListener("mouseover", () => {
        firstNameChars[i].classList.add("animated")
      })
    }

    for (let i = 0; i <= nameElements.length - 1; i++) {
      nameElements[i].addEventListener("animationend", () => {
        nameElements[i].classList.remove("animated")
      })

      nameElements[i].addEventListener("mouseover", () => {
        nameElements[i].classList.add("animated")
      })
    }

    for (let x = 0; x <= professionElements.length - 1; x++) {
      professionElements[x].addEventListener("animationend", () => {
        professionElements[x].classList.remove("animated")
      })

      professionElements[x].addEventListener("mouseover", () => {
        professionElements[x].classList.add("animated")
      })
    }
  }

  render() {
    return (
      <motion.div
        className="hero-container"
        variants={pageVariants}
        initial="notIn"
        animate="in"
        exit="outDown"
        transition={pageTransitions}
      >
        <section className="hero-content">
          <motion.div
            className="greeting"
            initial="start"
            animate="end"
            variants={container}
            transition={{ ease: "easeIn", duration: 0.25, delay: 1 }}
          >
            <h3>Hi, I'm</h3>
          </motion.div>
          <motion.div
            className="name"
            variants={container}
            initial="start"
            animate="end"
            transition={{ ease: "easeIn", duration: 0.25, delay: 1.1 }}
          >
            <div
              ref={this.firsNameText}
              className="firstName"
              aria-label="Ditwan"
            >
              <p className="name-chars">D</p>
              <p className="name-chars">I</p>
              <p className="name-chars">T</p>
              <p className="name-chars">W</p>
              <p className="name-chars">A</p>
              <p className="name-chars">N</p>
            </div>
            <div ref={this.nameText} className="lastName" aria-label="Price">
              <p className="name-chars">P</p>
              <p className="name-chars">R</p>
              <p className="name-chars">I</p>
              <p className="name-chars">C</p>
              <p className="name-chars">E</p>
              <p className="name-chars">.</p>
            </div>
          </motion.div>
          <motion.div
            className="profession"
            style={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.25, delay: 1.2 }}
          >
            <h1 ref={this.professionText} aria-label="Ditwan Price">
              <span className="name-chars">I</span>
              <span className="name-chars">'</span>
              <span className="name-chars">m</span>
              &nbsp;
              <span className="name-chars">a</span>
              &nbsp;
              <span className="name-chars">D</span>
              <span className="name-chars">e</span>
              <span className="name-chars">v</span>
              <span className="name-chars">e</span>
              <span className="name-chars">l</span>
              <span className="name-chars">o</span>
              <span className="name-chars">p</span>
              <span className="name-chars">e</span>
              <span className="name-chars">r</span>
              <span className="name-chars">.</span>
              {/* &nbsp;
                            <span className="name-chars">E</span>
                            <span className="name-chars">n</span>
                            <span className="name-chars">g</span>
                            <span className="name-chars">i</span>
                            <span className="name-chars">n</span>
                            <span className="name-chars">e</span>
                            <span className="name-chars">e</span>
                            <span className="name-chars">r</span>
                            <span className="name-chars">.</span> */}
            </h1>
          </motion.div>
          <motion.div
            className="about-me"
            style={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.25, delay: 1.3 }}
          >
            <h1 aria-label="brief about me">
              I'm a CS new grad that has developed a genuine passion for coding.
              I am eager and open to learning many different technologies, and
              currently in search of opportunities that will allow me to
              continue developing and honing my skills while contributing what I
              already know.
            </h1>
          </motion.div>
        </section>
      </motion.div>
    )
  }
}
