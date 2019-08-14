import React from "react"
import loader from "./loader"
import shallowCompare from "shallow-compare"
import { getRedirectUrl } from "./load-directly-or-404"

class EnsureResources extends React.Component {
  constructor(props) {
    super()
    const { location, pageResources } = props
    this.state = {
      location: { ...location },
      pageResources: pageResources || loader.loadPageSync(location.pathname),
    }
  }

  static getDerivedStateFromProps({ location }, prevState) {
    if (prevState.location.href !== location.href) {
      const pageResources = loader.loadPageSync(location.pathname)
      return {
        pageResources,
        location: { ...location },
      }
    }

    return null
  }

  loadResources(rawPath) {
    loader.loadPage(rawPath).then(pageResources => {
      if (pageResources && pageResources.status !== `error`) {
        this.setState({
          location: { ...window.location },
          pageResources,
        })
      } else {
        window.history.replaceState({}, ``, location.href)
        window.location = rawPath
      }
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Always return false if we're missing resources.
    if (!nextState.pageResources) {
      this.loadResources(nextProps.location.pathname)
      return false
    }

    // Check if the component or json have changed.
    if (this.state.pageResources !== nextState.pageResources) {
      return true
    }
    if (
      this.state.pageResources.component !== nextState.pageResources.component
    ) {
      return true
    }

    if (this.state.pageResources.json !== nextState.pageResources.json) {
      return true
    }
    // Check if location has changed on a page using internal routing
    // via matchPath configuration.
    if (
      this.state.location.key !== nextState.location.key &&
      nextState.pageResources.page &&
      (nextState.pageResources.page.matchPath ||
        nextState.pageResources.page.path)
    ) {
      return true
    }
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
<<<<<<< HEAD
    if (
      process.env.NODE_ENV === `production` &&
      !(this.state.pageResources && this.state.pageResources.json)
    ) {
      // This should only occur if there's no custom 404 page
      const url = getRedirectUrl(this.state.location.href)
      if (url) {
        window.location.replace(url)
      }

      return null
    }

=======
>>>>>>> develop
    return this.props.children(this.state)
  }
}

export default EnsureResources
