import React from "react"
import { projectsInfo } from "../assets/ProjectsInfo"
import Project from "./Project"
import "../sass/home.scss"

const ProjectList = (props) => {
  const showNavList = props.showNavList
  return (
    !showNavList && (
      <div className="project-list">
        {projectsInfo.map((project) => (
          <Project
            title={project.title}
            description={project.description}
            tools={project.tools}
          />
        ))}
      </div>
    )
  )
}

export default ProjectList
