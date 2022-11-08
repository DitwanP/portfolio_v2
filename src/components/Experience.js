import React from "react"
import { motion } from "framer-motion"
import "../sass/experience.scss"
import { pageVariants, pageTransitions, textAnimateIn } from "./FramerVariants"

class Experience extends React.Component {
  constructor() {
    super()
    this.state = { plainTitle: false }
    this.togglePlainTitle = this.togglePlainTitle.bind(this)
  }

  togglePlainTitle() {
    console.log("Plain title? ", this.state.plainTitle)
    this.setState((prevState) => ({
      ...prevState,
      plainTitle: !prevState.plainTitle,
    }))
  }

  render() {
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
            className="title"
            initial="start"
            animate="end"
            variants={textAnimateIn}
            transition={{ ease: "easeIn", duration: 0.5, delay: 2.2 }}
          >
            <h1>Experience</h1>
          </motion.div>
          <motion.div
            className="work-exp"
            variants={textAnimateIn}
            initial="start"
            animate="end"
            transition={{ ease: "easeIn", duration: 0.5, delay: 1.8 }}
          >
            <h1>Work</h1>
          </motion.div>
          <motion.div
            className="skills"
            variants={textAnimateIn}
            initial="start"
            animate="end"
            transition={{ ease: "easeIn", duration: 0.5, delay: 1.4 }}
          >
            <h1>Skills</h1>
          </motion.div>
        </section>
      </motion.div>
    )
  }
}

export default Experience
