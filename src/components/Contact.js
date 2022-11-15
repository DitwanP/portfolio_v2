import React, { useState } from "react"
import { motion } from "framer-motion"
import { pageVariants, pageTransitions, textAnimateIn } from "./FramerVariants"

import "../sass/contact.scss"
import "../sass/app.scss"

const Contact = () => {
  const [plainTitleContact, toggleplainTitleContact] = useState(false)

  const togglePlainContactTitle = () => {
    toggleplainTitleContact(!plainTitleContact)
  }

  return (
    <motion.div
      className="contact-page-container"
      variants={pageVariants}
      initial="notIn"
      animate="in"
      exit="outDown"
      transition={pageTransitions}
    >
      <section className="contact-content">
        <motion.div
          className="contact-container"
          variants={textAnimateIn}
          initial="start"
          animate="end"
          transition={{ ease: "easeIn", duration: 0.5, delay: 1.4 }}
        >
          <motion.div
            className="title"
            aria-label="Contact"
            whileHover={{ scale: 1.1 }}
          >
            <h1
              onMouseEnter={togglePlainContactTitle}
              className={
                plainTitleContact ? "plain-title-hidden" : "plain-title"
              }
            >
              ContAct
            </h1>
            <h1
              onMouseLeave={togglePlainContactTitle}
              className={
                plainTitleContact ? "plain-title" : "plain-title-hidden"
              }
            >
              contact
            </h1>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default Contact
