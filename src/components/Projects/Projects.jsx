import React from "react"
import { motion } from "framer-motion"
import { pageTransitions, useAnimationSettings } from "../FramerVariants"
import { usePageEntrance } from "../use-page-entrance"

import { ProjectsList } from "../ProjectsList/ProjectsList.jsx"
import { projectsContent } from "./Projects.content.js"

import "../../scss/projects.scss"
import "../../scss/app.scss"
import "../../scss/utility.scss"

const Projects = () => {
  const { pageClassName, complete } = usePageEntrance(["page", "title", "list"])
  const { pageVariants, textAnimateIn, transition } = useAnimationSettings()
  return (
    <div className={pageClassName}>
      <motion.div
        className="projects-content"
        onAnimationComplete={() => complete("page")}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={transition(pageTransitions)}
      >
        <div className="projects-container">
          <motion.div
            className="title"
            onAnimationComplete={() => complete("title")}
            aria-label={projectsContent.accessibleLabel}
            variants={textAnimateIn}
            initial="start"
            animate="end"
            transition={transition({
              type: "tween",
              ease: "easeInOut",
              duration: 0.6,
              delay: 0.6,
            })}
          >
            <h1 className="title">{projectsContent.title}</h1>
          </motion.div>

          <ProjectsList onAnimationComplete={() => complete("list")} />
        </div>
      </motion.div>
    </div>
  )
}

export default Projects
