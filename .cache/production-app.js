import { apiRunner, apiRunnerAsync } from "./api-runner-browser"
import React from "react"
import ReactDOM from "react-dom"
import { Router, navigate, Location, BaseContext } from "@reach/router"
import { ScrollContext } from "gatsby-react-router-scroll"
import domReady from "@mikaelkristiansson/domready"
import {
  shouldUpdateScroll,
  init as navigationInit,
  RouteUpdates,
} from "./navigation"
import emitter from "./emitter"
window.___emitter = emitter
import PageRenderer from "./page-renderer"
import asyncRequires from "./async-requires"
<<<<<<< HEAD
<<<<<<< HEAD
import loader, { setApiRunnerForLoader } from "./loader"
import loadDirectlyOr404 from "./load-directly-or-404"
=======
import { setLoader, ProdLoader, publicLoader } from "./loader"
>>>>>>> develop
=======
import { setLoader, ProdLoader, publicLoader } from "./loader"
>>>>>>> develop
import EnsureResources from "./ensure-resources"
import stripPrefix from "./strip-prefix"

// Generated during bootstrap
import matchPaths from "./match-paths.json"

const loader = new ProdLoader(asyncRequires, matchPaths)
setLoader(loader)
loader.setApiRunner(apiRunner)

window.asyncRequires = asyncRequires
window.___emitter = emitter
window.___loader = publicLoader
window.___webpackCompilationHash = window.webpackCompilationHash

navigationInit()

apiRunnerAsync(`onClientEntry`).then(() => {
  // Let plugins register a service worker. The plugin just needs
  // to return true.
  if (apiRunner(`registerServiceWorker`).length > 0) {
    require(`./register-service-worker`)
  }

  // In gatsby v2 if Router is used in page using matchPaths
  // paths need to contain full path.
  // For example:
  //   - page have `/app/*` matchPath
  //   - inside template user needs to use `/app/xyz` as path
  // Resetting `basepath`/`baseuri` keeps current behaviour
  // to not introduce breaking change.
  // Remove this in v3
  const RouteHandler = props => (
    <BaseContext.Provider
      value={{
        baseuri: `/`,
        basepath: `/`,
      }}
    >
      <PageRenderer {...props} />
    </BaseContext.Provider>
  )

  class LocationHandler extends React.Component {
    render() {
      const { location } = this.props
      return (
        <EnsureResources location={location}>
          {({ pageResources, location }) => (
            <RouteUpdates location={location}>
              <ScrollContext
                location={location}
                shouldUpdateScroll={shouldUpdateScroll}
              >
                <Router
                  basepath={__BASE_PATH__}
                  location={location}
                  id="gatsby-focus-wrapper"
                >
                  <RouteHandler
                    path={encodeURI(
                      pageResources.page.path === `/404.html`
                        ? stripPrefix(location.pathname, __BASE_PATH__)
                        : pageResources.page.matchPath ||
                            pageResources.page.path
                    )}
                    {...this.props}
                    location={location}
                    pageResources={pageResources}
                    {...pageResources.json}
                  />
                </Router>
              </ScrollContext>
            </RouteUpdates>
          )}
        </EnsureResources>
      )
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
  const { page, location: browserLoc } = window
  // TODO: comment what this check does
  if (
    page &&
    page.path !== `/404.html` &&
    __PATH_PREFIX__ + page.path !== browserLoc.pathname &&
    !page.path.match(/^\/offline-plugin-app-shell-fallback\/?$/) &&
    (!page.matchPath ||
      !match(__PATH_PREFIX__ + page.matchPath, browserLoc.pathname))
  ) {
    navigate(
      __PATH_PREFIX__ + page.path + browserLoc.search + browserLoc.hash,
      { replace: true }
=======
  const { pagePath, location: browserLoc } = window

  // Explicitly call navigate if the canonical path (window.pagePath)
  // is different to the browser path (window.location.pathname). But
  // only if NONE of the following conditions hold:
  //
  // - The url matches a client side route (page.matchPath)
  // - it's a 404 page
  // - it's the offline plugin shell (/offline-plugin-app-shell-fallback/)
  if (
=======
  const { pagePath, location: browserLoc } = window

  // Explicitly call navigate if the canonical path (window.pagePath)
  // is different to the browser path (window.location.pathname). But
  // only if NONE of the following conditions hold:
  //
  // - The url matches a client side route (page.matchPath)
  // - it's a 404 page
  // - it's the offline plugin shell (/offline-plugin-app-shell-fallback/)
  if (
>>>>>>> develop
    pagePath &&
    __BASE_PATH__ + pagePath !== browserLoc.pathname &&
    !(
      loader.findMatchPath(stripPrefix(browserLoc.pathname, __BASE_PATH__)) ||
      pagePath === `/404.html` ||
      pagePath.match(/^\/404\/?$/) ||
      pagePath.match(/^\/offline-plugin-app-shell-fallback\/?$/)
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> develop
    )
  ) {
    navigate(__BASE_PATH__ + pagePath + browserLoc.search + browserLoc.hash, {
      replace: true,
    })
  }

<<<<<<< HEAD
<<<<<<< HEAD
  loader
    .getResourcesForPathname(browserLoc.pathname)
    .then(resources => {
      if (!resources || resources.page.path === `/404.html`) {
        return loadDirectlyOr404(
          resources,
          browserLoc.pathname + browserLoc.search + browserLoc.hash,
          true
        )
=======
=======
>>>>>>> develop
  loader.loadPage(browserLoc.pathname).then(page => {
    if (!page || page.status === `error`) {
      throw new Error(
        `page resources for ${
          browserLoc.pathname
        } not found. Not rendering React`
      )
    }
    const Root = () => (
      <Location>
        {locationContext => <LocationHandler {...locationContext} />}
      </Location>
    )

    const WrappedRoot = apiRunner(
      `wrapRootElement`,
      { element: <Root /> },
      <Root />,
      ({ result }) => {
        return { element: result }
>>>>>>> develop
      }

      return null
    })
    .then(() => {
      const Root = () =>
        createElement(
          Router,
          {
            basepath: __PATH_PREFIX__,
          },
          createElement(RouteHandler, { path: `/*` })
        )

      const WrappedRoot = apiRunner(
        `wrapRootElement`,
        { element: <Root /> },
        <Root />,
        ({ result }) => {
          return { element: result }
        }
      ).pop()

      let NewRoot = () => WrappedRoot

      const renderer = apiRunner(
        `replaceHydrateFunction`,
        undefined,
        ReactDOM.hydrate
      )[0]

      domReady(() => {
        renderer(
          <NewRoot />,
          typeof window !== `undefined`
            ? document.getElementById(`___gatsby`)
            : void 0,
          () => {
            apiRunner(`onInitialClientRender`)
          }
        )
      })
    })
})
