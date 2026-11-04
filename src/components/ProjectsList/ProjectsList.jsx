import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import GithubIcon from "../../assets/icons/github.svg?react"
import LinkIcon from "../../assets/icons/link.svg?react"

import { listVariants } from "../FramerVariants"
import { projectsInfo } from "../data/ProjectsInfo"
import { socialLinks } from "../data/SocialLinks.js"
import { projectsListContent } from "./ProjectsList.content.js"

import "../../scss/projectsList.scss"

export const ProjectsList = () => {
  return (
    <div className="projects-list-container">
      <motion.ul
        className="projects-list"
        key={"projects-list"}
        variants={listVariants}
        initial="hidden"
        animate="show"
        transition={{
          staggerChildren: 1,
          type: "tween",
          ease: "easeInOut",
          delay: 1.2,
          duration: 0.6,
        }}
      >
        <AnimatePresence>
          {projectsInfo.map((project, index) => (
            <motion.li key={index} className="project">
              <div className="project-image-container">
                <div className="project-image">
                  <img
                    alt={`${project.title} ${projectsListContent.projectImageAltSuffix}`}
                    src={project.image}
                  />
                </div>
              </div>
              <div className="project-details">
                <div className="title-container">
                  <h2 className="project-title">{project.title}</h2>

                  <div className="project-links">
                    {project.liveLink && (
                      <motion.a
                        className="project-link"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <LinkIcon
                          className="icon"
                          role="img"
                          aria-label={projectsListContent.liveLinkIconAlt}
                        />
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        className="project-link"
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <GithubIcon
                          className="icon"
                          role="img"
                          aria-label={socialLinks.github.iconAlt}
                        />
                      </motion.a>
                    )}
                  </div>
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
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  )
}
