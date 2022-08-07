import React, { Component } from "react"
import "../sass/home.scss"

const Home = (props) => {
  const showNavList = props.showNavList

  return (
    !showNavList && (
      <div className="intro">
        <div className="title-container">
          <h1 className="name">
            DITWAN <br /> PRICE
          </h1>
        </div>
        <div className="subtitle-container">
          <h2 className="subtitle">Software Engineer.</h2>
        </div>
      </div>
    )
  )
}

export default Home
