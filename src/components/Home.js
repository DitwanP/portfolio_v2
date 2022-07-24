import React, { Component } from 'react'
import '../sass/home.scss'

export default class Home extends Component {
    render() { return (
        <div className="intro">
            <div className="name-and-title-container">
                <h1 className='name'>
                    Hi, I'm Ditwan.
                </h1>
                <h2 className='job-title'>
                    I'm a Software Developer.
                </h2>
            </div>
        </div>
    )}
}