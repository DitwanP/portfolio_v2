import React from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

import { pageVariants, pageTransitions, textAnimateIn } from "./FramerVariants"

import "../sass/contact.scss"
import "../sass/app.scss"

const Contact = () => {
  return (
    <motion.div className="contact-page-container">
      <motion.div
        className="contact-content"
        variants={pageVariants}
        initial="notIn"
        animate="in"
        exit="outDown"
        transition={pageTransitions}
      >
        <motion.div
          className="title"
          aria-label="Contact"
          whileHover={{ scale: 1.1 }}
          variants={textAnimateIn}
          initial="start"
          animate="end"
          transition={{
            type: "linear",
            ease: "easeInOut",
            duration: 0.6,
            delay: 1.2,
          }}
        >
          <h1 className="title">Get in toucH</h1>
        </motion.div>
        <motion.div className="contact-statement">
          <motion.p
            variants={textAnimateIn}
            initial="start"
            animate="end"
            transition={{
              type: "linear",
              ease: "easeInOut",
              duration: 0.6,
              delay: 1.5,
            }}
          >
            I'm currently working with some amazing people, but I also believe
            it's time for me to look for new challenges. In my current role,
            I've demonstrated my ability to meet timelines and objectives in a
            fast-paced and dynamic environment. I'm confident I can do the same
            wherever I end up.
          </motion.p>
          <motion.p
            variants={textAnimateIn}
            initial="start"
            animate="end"
            transition={{
              type: "linear",
              ease: "easeInOut",
              duration: 0.6,
              delay: 1.8,
            }}
          >
            I'm open to exploring new oportunities so if you think I would be a
            good fit for a role, don't hesitate to reach out!
          </motion.p>
        </motion.div>
        <motion.div
          className="email-button"
          variants={textAnimateIn}
          initial="start"
          animate="end"
          transition={{
            type: "linear",
            ease: "easeInOut",
            duration: 0.6,
            delay: 2.1,
          }}
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:price.ditwan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            <h3>Reach Out</h3>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Contact
