import React, { useState } from "react"
import { motion } from "framer-motion"
import { pageVariants, pageTransitions, textAnimateIn } from "./FramerVariants"

import "../sass/projects.scss"
import "../sass/app.scss"

const Projects = () => {
  const [plainTitleProjects, togglePlainTitleProjects] = useState(false)

  const togglePlainProjectsTitle = () => {
    togglePlainTitleProjects(!plainTitleProjects)
  }

  return (
    <div className="projects-page-container">
      <motion.div
        className="projects-content"
        variants={pageVariants}
        initial="notIn"
        animate="in"
        exit="outDown"
        transition={pageTransitions}
      >
        <div className="projects-container">
          <motion.div
            className="title"
            aria-label="Projects"
            variants={textAnimateIn}
            initial="start"
            animate="end"
            transition={{ ease: "easeIn", duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <h1
              onMouseEnter={togglePlainProjectsTitle}
              className={
                plainTitleProjects ? "plain-title-hidden" : "plain-title"
              }
            >
              pRojects
            </h1>
            <h1
              onMouseLeave={togglePlainProjectsTitle}
              className={
                plainTitleProjects ? "plain-title" : "plain-title-hidden"
              }
            >
              projects
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Projects
