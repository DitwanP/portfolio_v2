import React from "react"
import { motion } from "framer-motion"
import "../sass/home.scss"
import { pageVariants, pageTransitions, textAnimateIn } from "./FramerVariants"

class Home extends React.Component {
  constructor() {
    super()
    this.state = { plainFirstName: false, plainLastName: false }
    this.togglePlainFirstName = this.togglePlainFirstName.bind(this)
    this.togglePlainLastName = this.togglePlainLastName.bind(this)
  }

  togglePlainFirstName() {
    console.log("Plain first name? ", this.state.plainFirstName)
    this.setState((prevState) => ({
      ...prevState,
      plainFirstName: !prevState.plainFirstName,
    }))
  }

  togglePlainLastName() {
    console.log("Plain last name? ", this.state.plainLastName)
    this.setState((prevState) => ({
      ...prevState,
      plainLastName: !prevState.plainLastName,
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
            transition={{ ease: "easeIn", duration: 0.5, delay: 2.2 }}
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
            <motion.div
              ref={this.firsNameText}
              className="firstName"
              aria-label="Ditwan"
              whileHover={{ scale: 1.1 }}
            >
              <h1
                onMouseEnter={this.togglePlainFirstName}
                className={
                  this.state.plainFirstName ? "name-chars-hidden" : "name-chars"
                }
              >
                DitWAn
              </h1>
              <h1
                onMouseLeave={this.togglePlainFirstName}
                className={
                  this.state.plainFirstName ? "name-chars" : "name-chars-hidden"
                }
              >
                ditwan
              </h1>
            </motion.div>
            <motion.div
              ref={this.nameText}
              className="lastName"
              aria-label="Price"
              whileHover={{ scale: 1.1 }}
            >
              <h1
                onMouseEnter={this.togglePlainLastName}
                className={
                  this.state.plainLastName ? "name-chars-hidden" : "name-chars"
                }
              >
                PRice<span>.</span>
              </h1>
              <h1
                onMouseLeave={this.togglePlainLastName}
                className={
                  this.state.plainLastName ? "name-chars" : "name-chars-hidden"
                }
              >
                price<span>.</span>
              </h1>
            </motion.div>
          </motion.div>
          <motion.div
            className="about-me"
            variants={textAnimateIn}
            initial="start"
            animate="end"
            transition={{ ease: "easeIn", duration: 0.5, delay: 1.4 }}
          >
            <h3 aria-label="brief about me">
              I'm an early career Software Engineer with experience working
              productively in dynamic environments. I'm a detail-oriented,
              organized, and reliable team player focused on achieving project
              objectives with speed and effiency. I'm currently open to
              exploring new oportunities so feel free to reach out!
            </h3>
          </motion.div>
        </section>
      </motion.div>
    )
  }
}

export default Home
