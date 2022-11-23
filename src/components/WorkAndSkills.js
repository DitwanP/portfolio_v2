import React from "react"
import { motion } from "framer-motion"

import { jobsInfo } from "../assets/WorkInfo"
import { skillsInfo } from "../assets/SkillsInfo"
import {
  pageVariants,
  pageTransitions,
  textAnimateIn,
  listVariants,
  listItemVariants,
} from "./FramerVariants"

import "../sass/work-and-skills.scss"
import "../sass/app.scss"

const WorkAndSkills = () => {
  return (
    <motion.div
      className="exp-page-container"
      variants={pageVariants}
      initial="notIn"
      animate="in"
      exit="outDown"
      transition={pageTransitions}
    >
      <section className="exp-content">
        <motion.div
          className="work-container"
          initial="start"
          animate="end"
          variants={textAnimateIn}
          transition={{ ease: "easeIn", duration: 0.5, delay: 0.4 }}
        >
          <motion.div className="title">
            <h1 className="plain-title">where i've worked</h1>
          </motion.div>
          <motion.div className="work">
            {jobsInfo.map((job, index) => (
              <div className="job" key={index}>
                <div className="position-and-company">
                  <div className="company">
                    <h1 className="label">Company:</h1>
                    <h3 className="info">{job.company}</h3>
                  </div>
                  <div className="position">
                    <h1 className="label">Position:</h1>
                    <h3 className="info">{job.position}</h3>
                  </div>
                </div>
                <div className="dates">
                  <div className="start_date">
                    <h1 className="label">Start-date:</h1>
                    <h3 className="info">{job.start_date}</h3>
                  </div>
                  <div className="end_date">
                    <h1 className="label">End-date:</h1>
                    <h3 className="info">{job.end_date}</h3>
                  </div>
                </div>
                <div className="details">
                  <motion.ul variants={listVariants}>
                    {job.bullets.map((detail, index) => (
                      <motion.li key={index} variants={listItemVariants}>
                        <h3 className="info">
                          <span>▹</span>
                          &nbsp;
                          {detail}
                        </h3>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="skills-container"
          variants={textAnimateIn}
          initial="start"
          animate="end"
          transition={{ ease: "easeIn", duration: 0.5, delay: 0.8 }}
        >
          <motion.div className="title">
            <h1 className="plain-title">skills</h1>
          </motion.div>
          <motion.div className="skills">
            <motion.ul variants={listVariants} className="skill-list">
              {skillsInfo.map((skill, index) => (
                <motion.li key={index} variants={listItemVariants}>
                  <h2 className="skill">{skill}</h2>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default WorkAndSkills
