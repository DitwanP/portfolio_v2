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
    <motion.div
      className="projects-page-container"
      variants={pageVariants}
      initial="notIn"
      animate="in"
      exit="outDown"
      transition={pageTransitions}
    >
      <section className="projects-content">
        <motion.div
          className="projects-container"
          variants={textAnimateIn}
          initial="start"
          animate="end"
          transition={{ ease: "easeIn", duration: 0.5, delay: 1.4 }}
        >
          <motion.div
            className="title"
            aria-label="Projects"
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
        </motion.div>
      </section>
    </motion.div>
  )
}

export default Projects