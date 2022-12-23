import React from "react"
import { motion } from "framer-motion"

import { ReactComponent as PaperPlaneIcon } from "../assets/icons/paper-plane-regular.svg"

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
            delay: 0.2,
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
              delay: 0.6,
            }}
          >
            I'm working with some amazing people, but I'm also open to taking on
            new challenges. In my current role, I've demonstrated my ability to
            meet timelines and objectives in a fast-paced and dynamic
            environment. I'm confident I can do the same wherever I end up.
          </motion.p>
          <motion.p
            variants={textAnimateIn}
            initial="start"
            animate="end"
            transition={{
              type: "linear",
              ease: "easeInOut",
              duration: 0.6,
              delay: 1,
            }}
          >
            I'm open to exploring new opportunities, so if you think I would be
            a good fit for a role, don't hesitate to reach out!
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
            delay: 1.4,
          }}
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:price.ditwan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PaperPlaneIcon />
            <h3>Reach Out</h3>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Contact
