import React, { useState } from "react"
import { motion } from "framer-motion"

import { jobsInfo } from "../assets/WorkInfo"
import { pageVariants, pageTransitions, textAnimateIn } from "./FramerVariants"

import "../sass/work-and-skills.scss"
import "../sass/app.scss"

const WorkAndSkills = () => {
  const [plainTitleWork, togglePlainTitleWork] = useState(false)
  const [plainTitleSkills, togglePlainTitleSkills] = useState(false)

  const togglePlainWorkTitle = () => {
    console.log("Plain title? ", plainTitleWork)
    togglePlainTitleWork(!plainTitleWork)
  }

  const togglePlainSkillsTitle = () => {
    console.log("Plain title? ", plainTitleSkills)
    togglePlainTitleSkills(!plainTitleSkills)
  }

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
          transition={{ ease: "easeIn", duration: 0.5, delay: 1.8 }}
        >
          <motion.div className="title" aria-label="experience">
            <h1
              onMouseEnter={togglePlainWorkTitle}
              className={plainTitleWork ? "plain-title-hidden" : "plain-title"}
            >
              WheRe i've WoRked
            </h1>
            <h1
              onMouseLeave={togglePlainWorkTitle}
              className={plainTitleWork ? "plain-title" : "plain-title-hidden"}
            >
              where i've worked
            </h1>
          </motion.div>
          <motion.div className="work">
            {jobsInfo.map((job) => (
              <div className="job">
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
                  <ul>
                    {job.bullets.map((bullet) => (
                      <li>
                        <h3 className="info">{bullet}</h3>
                      </li>
                    ))}
                  </ul>
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
          transition={{ ease: "easeIn", duration: 0.5, delay: 1.4 }}
        >
          <motion.div
            className="title"
            aria-label="experience"
            whileHover={{ scale: 1.1 }}
          >
            <h1
              onMouseEnter={togglePlainSkillsTitle}
              className={
                plainTitleSkills ? "plain-title-hidden" : "plain-title"
              }
            >
              skILLs
            </h1>
            <h1
              onMouseLeave={togglePlainSkillsTitle}
              className={
                plainTitleSkills ? "plain-title" : "plain-title-hidden"
              }
            >
              skills
            </h1>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default WorkAndSkills
