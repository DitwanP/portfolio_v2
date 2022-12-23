import React from "react"
import { motion } from "framer-motion"

import { jobsInfo } from "./data/WorkInfo"
import { skillsInfo } from "./data/SkillsInfo"
import {
  pageVariants,
  textAnimateIn,
  listVariants,
  listItemVariants,
} from "./FramerVariants"

import "../sass/work-and-skills.scss"
import "../sass/app.scss"

const WorkAndSkills = () => {
  return (
    <div className="exp-page-container">
      <motion.div
        className="exp-content"
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div className="work-container">
          <motion.div
            className="title"
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
            <h1 className="title">WHeRe i'Ve WoRked</h1>
          </motion.div>
          <div className="work">
            {jobsInfo.map((job, index) => (
              <motion.div
                className="job"
                key={index}
                initial="start"
                animate="end"
                variants={textAnimateIn}
                transition={{
                  type: "linear",
                  ease: "easeInOut",
                  duration: 0.6,
                  delay: 0.6,
                }}
              >
                <div className="position-and-company">
                  <div className="company">
                    <h2 className="label">Company:</h2>
                    <h3 className="info">{job.company}</h3>
                  </div>
                  <div className="position">
                    <h2 className="label">Position:</h2>
                    <h3 className="info">{job.position}</h3>
                  </div>
                </div>
                <div className="dates">
                  <div className="start_date">
                    <h2 className="label">Start-date:</h2>
                    <h3 className="info">{job.start_date}</h3>
                  </div>
                  <div className="end_date">
                    <h2 className="label">End-date:</h2>
                    <h3 className="info">{job.end_date}</h3>
                  </div>
                </div>
                <div className="details">
                  <motion.ul
                    initial="start"
                    animate="end"
                    variants={textAnimateIn}
                    transition={{
                      type: "linear",
                      ease: "easeInOut",
                      duration: 0.6,
                      delay: 1,
                    }}
                  >
                    {job.bullets.map((detail, index) => (
                      <motion.li key={index}>
                        <h3 className="info">
                          <span>▹</span>
                          &nbsp;
                          {detail}
                        </h3>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div className="skills-container">
          <motion.div
            className="title"
            initial="start"
            animate="end"
            variants={textAnimateIn}
            transition={{
              type: "linear",
              ease: "easeInOut",
              duration: 0.6,
              delay: 1.4,
            }}
          >
            <h1 className="title">sKills</h1>
          </motion.div>
          <motion.div
            className="skills"
            initial="start"
            animate="end"
            variants={textAnimateIn}
            transition={{
              type: "linear",
              ease: "easeInOut",
              duration: 0.6,
              delay: 1.8,
            }}
          >
            <motion.ul variants={listVariants} className="skill-list">
              {skillsInfo.map((skill, index) => (
                <motion.li key={index} variants={listItemVariants}>
                  <h2 className="skill">{skill}</h2>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default WorkAndSkills
