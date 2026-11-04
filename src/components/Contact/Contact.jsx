import React from "react"
import { motion } from "framer-motion"

import PaperPlaneIcon from "../../assets/icons/paper-plane-regular.svg?react"

import { pageTransitions, useAnimationSettings } from "../FramerVariants"
import { contactContent } from "./Contact.content.js"

import "../../scss/contact.scss"
import "../../scss/app.scss"
import "../../scss/utility.scss"

const Contact = () => {
  const { pageVariants, textAnimateIn, transition, interaction } = useAnimationSettings()
  return (
    <motion.div className="page-container">
      <motion.div
        className="contact-content"
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        transition={transition(pageTransitions)}
      >
        <motion.div
          className="title"
          aria-label={contactContent.accessibleLabel}
          variants={textAnimateIn}
          initial="start"
          animate="end"
          transition={transition({
            type: "tween",
            ease: "easeInOut",
            duration: 0.6,
            delay: 0.2,
          })}
        >
          <h1 className="title">{contactContent.title}</h1>
        </motion.div>
        <motion.div className="contact-statement">
          <motion.p
            variants={textAnimateIn}
            initial="start"
            animate="end"
            transition={transition({
              type: "tween",
              ease: "easeInOut",
              duration: 0.6,
              delay: 0.6,
            })}
          >
            {contactContent.introduction}
          </motion.p>
          <motion.p
            variants={textAnimateIn}
            initial="start"
            animate="end"
            transition={transition({
              type: "tween",
              ease: "easeInOut",
              duration: 0.6,
              delay: 1,
            })}
          >
            {contactContent.invitation}
          </motion.p>
        </motion.div>
        <motion.div
          className="email-button"
          variants={textAnimateIn}
          initial="start"
          animate="end"
          transition={transition({
            type: "tween",
            ease: "easeInOut",
            duration: 0.6,
            delay: 1.4,
          })}
        >
          <motion.a
            whileHover={interaction({ scale: 1.1 })}
            href={contactContent.email.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PaperPlaneIcon
              className="icon"
              role="img"
              aria-label={contactContent.email.iconAlt}
            />
            <h3>{contactContent.email.label}</h3>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Contact
