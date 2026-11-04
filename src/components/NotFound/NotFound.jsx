import { Link } from "react-router-dom"
import { notFoundContent } from "./NotFound.content.js"

import "../../scss/utility.scss"
import "../../scss/route-status.scss"

const NotFound = () => (
  <main className="page-container">
    <div className="route-status">
      <h1>{notFoundContent.title}</h1>
      <h3>{notFoundContent.description}</h3>
      <div className="route-status-actions">
        <Link to="/">{notFoundContent.home}</Link>
      </div>
    </div>
  </main>
)

export default NotFound
