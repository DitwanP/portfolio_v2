import React from "react"
import { motion } from "framer-motion"
import { pageVariants, pageTransitions, textAnimateIn } from "../FramerVariants"

import { ProjectsList } from "../ProjectsList/ProjectsList.jsx"
import { projectsContent } from "./Projects.content.js"

import "../../scss/projects.scss"
import "../../scss/app.scss"
import "../../scss/utility.scss"

const Projects = () => {
  return (
    <div className="page-container">
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
            aria-label={projectsContent.accessibleLabel}
            variants={textAnimateIn}
            initial="start"
            animate="end"
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.6,
              delay: 0.6,
            }}
          >
            <h1 className="title">{projectsContent.title}</h1>
          </motion.div>

          <ProjectsList />
        </div>
      </motion.div>
    </div>
  )
}

export default Projects
