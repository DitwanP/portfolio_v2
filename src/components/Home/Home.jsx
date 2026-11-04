import React, { useState } from "react"
import { motion } from "framer-motion"

import PdfIcon from "../../assets/icons/file-pdf-solid.svg?react"

import { textTransitions, useAnimationSettings } from "../FramerVariants"
import { usePageEntrance } from "../use-page-entrance"
import { homeContent } from "./Home.content.js"
import Resume from "../../assets/Ditwan_Price_Resume.pdf"

import "../../scss/home.scss"
import "../../scss/app.scss"
import "../../scss/utility.scss"

const Home = () => {
  const { pageClassName, complete } = usePageEntrance(["page", "greeting", "name", "about", "resume"])
  const { pageVariants, textAnimateIn, transition, interaction } = useAnimationSettings()
  const [plainFirstName, setPlainFirstName] = useState(true)
  const [plainLastName, setPlainLastName] = useState(true)

  return (
    <motion.div id="home-container" className={pageClassName}>
      <motion.div
        className="home-content"
        onAnimationComplete={() => complete("page")}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div
          className="greeting"
          onAnimationComplete={() => complete("greeting")}
          initial="start"
          animate="end"
          variants={textAnimateIn}
          transition={transition({
            ...textTransitions,
            delay: 0.05,
          })}
        >
          <h2>{homeContent.greeting}</h2>
        </motion.div>
        <motion.div
          className="name"
          onAnimationComplete={() => complete("name")}
          variants={textAnimateIn}
          initial="start"
          animate="end"
          transition={transition({
            ...textTransitions,
            delay: 0.1,
          })}
        >
          <motion.div
            className="firstName"
            aria-label={homeContent.firstName.accessibleLabel}
            whileHover={interaction({ scale: 1.1 })}
            onMouseEnter={() => setPlainFirstName(false)}
            onMouseLeave={() => setPlainFirstName(true)}
          >
            <h1
              className={plainFirstName ? "name-chars-hidden" : "name-chars"}
            >
              {homeContent.firstName.display}
            </h1>
            <h1
              className={plainFirstName ? "name-chars" : "name-chars-hidden"}
            >
              {homeContent.firstName.alternate}
            </h1>
          </motion.div>
          <motion.div
            className="lastName"
            aria-label={homeContent.lastName.accessibleLabel}
            whileHover={interaction({ scale: 1.1 })}
            onMouseEnter={() => setPlainLastName(false)}
            onMouseLeave={() => setPlainLastName(true)}
          >
            <h1
              className={plainLastName ? "name-chars-hidden" : "name-chars"}
            >
              {homeContent.lastName.display}
              <span>{homeContent.lastName.punctuation}</span>
            </h1>
            <h1
              className={plainLastName ? "name-chars" : "name-chars-hidden"}
            >
              {homeContent.lastName.alternate}
              <span>{homeContent.lastName.punctuation}</span>
            </h1>
          </motion.div>
        </motion.div>
        <motion.div
          className="about-me"
          onAnimationComplete={() => complete("about")}
          variants={textAnimateIn}
          initial="start"
          animate="end"
          transition={transition({
            ...textTransitions,
            delay: 0.15,
          })}
        >
          <h3 aria-label={homeContent.introduction.accessibleLabel}>
            {homeContent.introduction.text}
          </h3>
        </motion.div>
        <motion.div
          className="resume-button"
          onAnimationComplete={() => complete("resume")}
          variants={textAnimateIn}
          initial="start"
          animate="end"
          transition={transition({
            ...textTransitions,
            delay: 0.2,
          })}
        >
          <motion.a href={Resume} target="_blank" rel="noopener noreferrer">
            <PdfIcon
              className="icon"
              role="img"
              aria-label={homeContent.resume.iconAlt}
            />
            <h3>{homeContent.resume.label}</h3>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Home
