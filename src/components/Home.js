import React, { useState } from "react"
import { motion } from "framer-motion"
import { pageVariants, pageTransitions, textAnimateIn } from "./FramerVariants"

import "../sass/home.scss"
import "../sass/app.scss"

const Home = () => {
  const [plainFirstName, togglePlainFirstName] = useState(false)
  const [plainLastName, togglePlainLastName] = useState(false)

  const toggleFirstName = () => {
    togglePlainFirstName(!plainFirstName)
  }

  const toggleLastName = () => {
    togglePlainLastName(!plainLastName)
  }

  return (
    <motion.div
      id="hero-container"
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
          <h2>Hello, my name is</h2>
        </motion.div>
        <motion.div
          className="name"
          variants={textAnimateIn}
          initial="start"
          animate="end"
          transition={{ ease: "easeIn", duration: 0.5, delay: 1 }}
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
          transition={{ ease: "easeIn", duration: 0.5, delay: 0.6 }}
        >
          <h3 aria-label="brief about me">
            I'm an early career software engineer with experience working
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
