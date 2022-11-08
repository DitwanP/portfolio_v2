import React, { useState } from "react"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { pageVariants, pageTransitions, textAnimateIn } from "./FramerVariants"
import "../sass/home.scss"

const Home = () => {
  const location = useLocation()
  const [plainFirstName, togglePlainFirstName] = useState(false)
  const [plainLastName, togglePlainLastName] = useState(false)

  const toggleFirstName = () => {
    console.log("Plain first name? ", this.state.plainFirstName)
    togglePlainFirstName((prevState) => ({
      ...prevState,
      plainFirstName: !prevState.plainFirstName,
    }))
  }

  const toggleLastName = () => {
    console.log("Plain last name? ", this.state.plainLastName)
    togglePlainLastName((prevState) => ({
      ...prevState,
      plainLastName: !prevState.plainLastName,
    }))
  }

  return (
    <motion.div
      key={location.pathname}
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
          transition={{ ease: "easeIn", duration: 0.5, delay: 1.8 }}
        >
          <h3>Hello, my name is</h3>
        </motion.div>
        <motion.div
          className="name"
          variants={textAnimateIn}
          initial="start"
          animate="end"
          transition={{ ease: "easeIn", duration: 0.5, delay: 1.4 }}
        >
          <motion.div
            className="firstName"
            aria-label="Ditwan"
            whileHover={{ scale: 1.1 }}
          >
            <h1
              onMouseEnter={toggleFirstName}
              className={plainFirstName ? "name-chars-hidden" : "name-chars"}
            >
              DitWAn
            </h1>
            <h1
              onMouseLeave={toggleFirstName}
              className={plainFirstName ? "name-chars" : "name-chars-hidden"}
            >
              ditwan
            </h1>
          </motion.div>
          <motion.div
            className="lastName"
            aria-label="Price"
            whileHover={{ scale: 1.1 }}
          >
            <h1
              onMouseEnter={toggleLastName}
              className={plainLastName ? "name-chars-hidden" : "name-chars"}
            >
              PRice<span>.</span>
            </h1>
            <h1
              onMouseLeave={toggleLastName}
              className={plainLastName ? "name-chars" : "name-chars-hidden"}
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
          transition={{ ease: "easeIn", duration: 0.5, delay: 1 }}
        >
          <h3 aria-label="brief about me">
            I'm an early career Software Engineer with experience working
            productively in dynamic environments. I'm a detail-oriented,
            organized, and reliable team player focused on achieving project
            objectives with speed and effiency. I'm currently open to exploring
            new oportunities so feel free to reach out!
          </h3>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default Home
