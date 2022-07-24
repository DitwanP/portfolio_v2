import React, { Component } from 'react'
import '../sass/project.scss'

const Project = (props) => {
    return (
        <div className="project">
            <div class="title-and-description-container">
                <h1 className="title">
                    {props.title}
                </h1>
                <h2 className="description">
                    {props.description}
                </h2>
            </div>
        </div>
    )
}

export default Project