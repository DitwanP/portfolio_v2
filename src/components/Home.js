import React, { useState } from "react"
import { motion } from "framer-motion"

import { pageVariants, textAnimateIn } from "./FramerVariants"
import Resume from "../assets/Ditwan_Price_Resume.PDF"

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
    <motion.div id="home-container" className="home-container">
      <motion.div
        className="home-content"
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div
          className="greeting"
          initial="start"
          animate="end"
          variants={textAnimateIn}
          transition={{
            type: "linear",
            ease: "easeInOut",
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <h2>Hello, my name is</h2>
        </motion.div>
        <motion.div
          className="name"
          variants={textAnimateIn}
          initial="start"
          animate="end"
          transition={{
            type: "linear",
            ease: "easeInOut",
            duration: 0.6,
            delay: 0.6,
          }}
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
          transition={{
            type: "linear",
            ease: "easeInOut",
            duration: 0.6,
            delay: 1,
          }}
        >
          <h3 aria-label="brief about me">
            I'm an early career software engineer that enjoys creating things
            for the web. I find myself ejoying frontend work the most currently,
            but I'm a detail-oriented, organized, and reliable team player that
            can efficiently tackle whatever work comes my way.
          </h3>
        </motion.div>
        <motion.div
          className="resume-button"
          variants={textAnimateIn}
          initial="start"
          animate="end"
          transition={{
            type: "linear",
            ease: "easeInOut",
            duration: 0.6,
            delay: 1.4,
          }}
        >
          <motion.a href={Resume} target="_blank" rel="noopener noreferrer">
            <h3>Resume</h3>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Home
