import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"

import { projectsInfo } from "../assets/ProjectsInfo"
import { carouselVariants } from "./FramerVariants"

import "../sass/projectCarousel.scss"

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export const ProjectsCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const projectIndex = wrap(0, projectsInfo.length, page)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <div className="project-carousel-container">
      <div className="prev" onClick={() => paginate(-1)}>
        {"<"}
      </div>
      <AnimatePresence initial={false} custom={direction} mode={"popLayout"}>
        <motion.div
          className="project"
          key={page}
          custom={direction}
          variants={carouselVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          <div className="project-image-container">
            <LazyLoadImage
              className="project-image"
              alt={`${projectsInfo[projectIndex].title} project`}
              src={projectsInfo[projectIndex].image}
            />
          </div>
          <div className="project-details">
            <div className="title-container">
              <h2 className="project-title">
                {projectsInfo[projectIndex].title}
              </h2>
              <motion.a
                className="project-link"
                href={projectsInfo[projectIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faGithubAlt} />
              </motion.a>
            </div>
            <p className="project-description">
              {projectsInfo[projectIndex].description}
            </p>
            <ul className="project-tools">
              {projectsInfo[projectIndex].tools.map((tool, index) => (
                <li key={index}>
                  <h2 className="tool">{tool}</h2>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="projects-list-mobile">
        {projectsInfo.map((project, index) => (
          <div className="project-mobile" key={index}>
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
                  <FontAwesomeIcon icon={faGithubAlt} />
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
          </div>
        ))}
      </div>

      <div className="next" onClick={() => paginate(1)}>
        {">"}
      </div>
    </div>
  )
}
