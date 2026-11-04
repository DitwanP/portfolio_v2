import { Component } from "react"
import { Link } from "react-router-dom"
import { routeErrorContent } from "./RouteErrorBoundary.content.js"

import "../../scss/utility.scss"
import "../../scss/route-status.scss"

class RouteErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error("Route failed to render:", error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="page-container">
          <div className="route-status" role="alert">
            <h1>{routeErrorContent.title}</h1>
            <h3>{routeErrorContent.description}</h3>
            <div className="route-status-actions">
              <button type="button" onClick={() => window.location.reload()}>
                {routeErrorContent.reload}
              </button>
              <Link to="/">{routeErrorContent.home}</Link>
            </div>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}

export default RouteErrorBoundary
