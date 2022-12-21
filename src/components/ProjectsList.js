import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import { projectsInfo } from "../assets/ProjectsInfo"

import "../sass/projectsList.scss"

export const ProjectsList = () => {
  return (
    <div className="projects-list-container">
      <AnimatePresence>
        <motion.ul className="projects-list" key={"projects-list"}>
          {projectsInfo.map((project, index) => (
            <li key={index} className="project">
              <div className="project-image-container">
                <div className="project-image">
                  <img alt={`${project.title} project`} src={project.image} />
                </div>
              </div>
              <div className="project-details">
                <div className="title-container">
                  <h2 className="project-title">{project.title}</h2>
                  <motion.a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </motion.a>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="project-tools">
                  {project.tools.map((tool, index) => (
                    <li key={index}>
                      <h2 className="tool">{tool}</h2>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  )
}
