import React, { useState } from "react"
import { motion } from "framer-motion"
import "../sass/home.scss"

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

const textAnimateIn = {
  start: {
    y: -100,
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

class Home extends React.Component {
  constructor() {
    super()
    this.state = { plainName: false }
    this.togglePlainName = this.togglePlainName.bind(this)
  }

  togglePlainName() {
    console.log("Plain name? ", this.state.plainName)
    this.setState((prevState) => ({
      plainName: !prevState.plainName,
    }))
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
            variants={textAnimateIn}
            transition={{ ease: "easeIn", duration: 0.5, delay: 1.4 }}
          >
            <h3>Hello, my name is</h3>
          </motion.div>
          <motion.div
            className="name"
            variants={textAnimateIn}
            initial="start"
            animate="end"
            transition={{ ease: "easeIn", duration: 0.5, delay: 1.8 }}
          >
            <div
              ref={this.firsNameText}
              className="firstName"
              aria-label="Ditwan"
            >
              <h1 className="name-chars">DitWAn</h1>
            </div>
            <div ref={this.nameText} className="lastName" aria-label="Price">
              <h1
                onMouseEnter={this.togglePlainName}
                className={
                  this.state.plainName ? "name-chars-hidden" : "name-chars"
                }
              >
                PRice<span>.</span>
              </h1>
              <h1
                onMouseLeave={this.togglePlainName}
                className={
                  this.state.plainName ? "name-chars" : "name-chars-hidden"
                }
              >
                price<span>.</span>
              </h1>
            </div>
          </motion.div>
          <motion.div
            className="about-me"
            variants={textAnimateIn}
            initial="start"
            animate="end"
            transition={{ ease: "easeIn", duration: 0.5, delay: 2.2 }}
          >
            <h3 aria-label="brief about me">
              I'm an early career Software Engineer with experience working
              productively in dynamic environments. I'm proficient in React,
              JavaScript and Python. I'm a detail-oriented, organized, and
              reliable team player focused on achieving project objectives with
              speed and effiency.
            </h3>
          </motion.div>
        </section>
      </motion.div>
    )
  }
}

export default Home
