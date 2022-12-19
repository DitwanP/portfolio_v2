import React from "react"
import { motion } from "framer-motion"
import { pageVariants, pageTransitions, textAnimateIn } from "./FramerVariants"

import { ProjectsCarousel } from "./ProjectsCarousel"

import "../sass/projects.scss"
import "../sass/app.scss"

const Projects = () => {
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
            transition={{
              type: "linear",
              ease: "easeInOut",
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <h1 className="title">pRojects</h1>
          </motion.div>

          <ProjectsCarousel />
        </div>
      </motion.div>
    </div>
  )
}

export default Projects
