import React, { useState } from "react"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { pageVariants, pageTransitions, textAnimateIn } from "./FramerVariants"
import "../sass/work-and-skills.scss"

const WorkAndSkills = () => {
  const location = useLocation()
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
      key={location.pathname}
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
          <motion.div
            className="title"
            aria-label="experience"
            whileHover={{ scale: 1.1 }}
          >
            <h1
              onMouseEnter={togglePlainWorkTitle}
              className={plainTitleWork ? "plain-title-hidden" : "plain-title"}
            >
              WORK
            </h1>
            <h1
              onMouseLeave={togglePlainWorkTitle}
              className={plainTitleWork ? "plain-title" : "plain-title-hidden"}
            >
              work
            </h1>
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
              SKILLS
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
