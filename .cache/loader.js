<<<<<<< HEAD
<<<<<<< HEAD
import pageFinderFactory from "./find-page"
import emitter from "./emitter"
import stripPrefix from "./strip-prefix"
=======
import "core-js/modules/es7.promise.finally"
>>>>>>> develop
=======
import "core-js/modules/es7.promise.finally"
>>>>>>> develop
import prefetchHelper from "./prefetch"
import emitter from "./emitter"
import { setMatchPaths, findMatchPath, cleanPath } from "./find-path"

const preferDefault = m => (m && m.default) || m

<<<<<<< HEAD
<<<<<<< HEAD
let devGetPageData
let inInitialRender = true
let hasFetched = Object.create(null)
let syncRequires = {}
let asyncRequires = {}
let jsonDataPaths = {}
let fetchHistory = []
let fetchingPageResourceMapPromise = null
let fetchedPageResourceMap = false
let apiRunner
const failedPaths = {}
const failedResources = {}
const MAX_HISTORY = 5

const jsonPromiseStore = {}

if (process.env.NODE_ENV !== `production`) {
  devGetPageData = require(`./socketIo`).getPageData
=======
=======
>>>>>>> develop
const stripSurroundingSlashes = s => {
  s = s[0] === `/` ? s.slice(1) : s
  s = s.endsWith(`/`) ? s.slice(0, -1) : s
  return s
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> develop
}

const createPageDataUrl = path => {
  const fixedPath = path === `/` ? `index` : stripSurroundingSlashes(path)
  return `${__PATH_PREFIX__}/page-data/${fixedPath}/page-data.json`
}

const doFetch = (url, method = `GET`) =>
  new Promise((resolve, reject) => {
    const req = new XMLHttpRequest()
    req.open(method, url, true)
    req.withCredentials = true
    req.onreadystatechange = () => {
      if (req.readyState == 4) {
        resolve(req)
      }
    }
    req.send(null)
  })

<<<<<<< HEAD
<<<<<<< HEAD
const fetchResource = resourceName => {
  // Find resource
  let resourceFunction
  if (resourceName.slice(0, 12) === `component---`) {
    resourceFunction = asyncRequires.components[resourceName]
  } else {
    if (resourceName in jsonPromiseStore) {
      resourceFunction = () => jsonPromiseStore[resourceName]
    } else {
      resourceFunction = () => {
        const fetchPromise = new Promise((resolve, reject) => {
          const url = createJsonURL(jsonDataPaths[resourceName])
          const req = new XMLHttpRequest()
          req.open(`GET`, url, true)
          req.withCredentials = true
          req.onreadystatechange = () => {
            if (req.readyState == 4) {
              if (req.status === 200) {
                resolve(JSON.parse(req.responseText))
              } else {
                reject()
              }
            }
          }
          req.send(null)
=======
=======
>>>>>>> develop
const loadPageDataJson = loadObj => {
  const { pagePath, retries = 0 } = loadObj
  const url = createPageDataUrl(pagePath)
  return doFetch(url).then(req => {
    const { status, responseText } = req

    // Handle 200
    if (status === 200) {
      try {
        const jsonPayload = JSON.parse(responseText)
        if (jsonPayload.webpackCompilationHash === undefined) {
          throw new Error(`not a valid pageData response`)
        }

        return Object.assign(loadObj, {
          status: `success`,
          payload: jsonPayload,
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> develop
        })
      } catch (err) {
        // continue regardless of error
      }
    }

<<<<<<< HEAD
<<<<<<< HEAD
  // Download the resource
  hasFetched[resourceName] = true
  return new Promise(resolve => {
    const fetchPromise = resourceFunction()
    let failed = false
    return fetchPromise
      .catch(() => {
        failed = true
      })
      .then(component => {
        fetchHistory.push({
          resource: resourceName,
          succeeded: !failed,
=======
=======
>>>>>>> develop
    // Handle 404
    if (status === 404 || status === 200) {
      // If the request was for a 404 page and it doesn't exist, we're done
      if (pagePath === `/404.html`) {
        return Object.assign(loadObj, {
          status: `failure`,
<<<<<<< HEAD
>>>>>>> develop
        })
      }

<<<<<<< HEAD
        if (!failedResources[resourceName]) {
          failedResources[resourceName] = failed
        }

        fetchHistory = fetchHistory.slice(-MAX_HISTORY)
=======
=======
        })
      }

>>>>>>> develop
      // Need some code here to cache the 404 request. In case
      // multiple loadPageDataJsons result in 404s
      return loadPageDataJson(
        Object.assign(loadObj, { pagePath: `/404.html`, notFound: true })
      )
    }
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> develop

    // handle 500 response (Unrecoverable)
    if (status === 500) {
      return Object.assign(loadObj, {
        status: `error`,
      })
    }

    // Handle everything else, including status === 0, and 503s. Should retry
    if (retries < 3) {
      return loadPageDataJson(Object.assign(loadObj, { retries: retries + 1 }))
    }

    // Retried 3 times already, result is a failure.
    return Object.assign(loadObj, {
      status: `error`,
    })
  })
}

<<<<<<< HEAD
<<<<<<< HEAD
const prefetchResource = resourceName => {
  if (resourceName.slice(0, 12) === `component---`) {
    createComponentUrls(resourceName).forEach(url => prefetchHelper(url))
  } else {
    const url = createJsonURL(jsonDataPaths[resourceName])
    prefetchHelper(url)
=======
=======
>>>>>>> develop
const doesConnectionSupportPrefetch = () => {
  if (
    `connection` in navigator &&
    typeof navigator.connection !== `undefined`
  ) {
    if ((navigator.connection.effectiveType || ``).includes(`2g`)) {
      return false
    }
    if (navigator.connection.saveData) {
      return false
    }
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> develop
  }
  return true
}

const toPageResources = (pageData, component = null) => {
  const page = {
    componentChunkName: pageData.componentChunkName,
    path: pageData.path,
    webpackCompilationHash: pageData.webpackCompilationHash,
    matchPath: pageData.matchPath,
  }

  return {
    component,
    json: pageData.result,
    page,
  }
}

export class BaseLoader {
  constructor(loadComponent, matchPaths) {
    // Map of pagePath -> Page. Where Page is an object with: {
    //   status: `success` || `error`,
    //   payload: PageResources, // undefined if `error`
    // }
    // PageResources is {
    //   component,
    //   json: pageData.result,
    //   page: {
    //     componentChunkName,
    //     path,
    //     webpackCompilationHash,
    //   }
    // }
    this.pageDb = new Map()
    this.inFlightDb = new Map()
    this.pageDataDb = new Map()
    this.prefetchTriggered = new Set()
    this.prefetchCompleted = new Set()
    this.loadComponent = loadComponent
    setMatchPaths(matchPaths)
  }

  setApiRunner(apiRunner) {
    this.apiRunner = apiRunner
    this.prefetchDisabled = apiRunner(`disableCorePrefetching`).some(a => a)
  }

<<<<<<< HEAD
<<<<<<< HEAD
const onPrefetchPathname = pathname => {
  if (!prefetchTriggered[pathname]) {
    apiRunner(`onPrefetchPathname`, { pathname: pathname })
    prefetchTriggered[pathname] = true
=======
=======
>>>>>>> develop
  loadPageDataJson(rawPath) {
    const pagePath = cleanPath(rawPath)
    if (this.pageDataDb.has(pagePath)) {
      return Promise.resolve(this.pageDataDb.get(pagePath))
    }

    return loadPageDataJson({ pagePath }).then(pageData => {
      this.pageDataDb.set(pagePath, pageData)

      return pageData
    })
<<<<<<< HEAD
>>>>>>> develop
  }

<<<<<<< HEAD
const onPostPrefetchPathname = pathname => {
  if (!prefetchCompleted[pathname]) {
    apiRunner(`onPostPrefetchPathname`, { pathname: pathname })
    prefetchCompleted[pathname] = true
=======
  findMatchPath(rawPath) {
    return findMatchPath(rawPath)
>>>>>>> develop
  }

<<<<<<< HEAD
// Note we're not actively using the path data atm. There
// could be future optimizations however around trying to ensure
// we load all resources for likely-to-be-visited paths.
// let pathArray = []
// let pathCount = {}

let findPage
let pathScriptsCache = {}
let prefetchTriggered = {}
let prefetchCompleted = {}
let disableCorePrefetching = false

const queue = {
  addPagesArray: newPages => {
    findPage = pageFinderFactory(newPages, __PATH_PREFIX__)
  },
  addDevRequires: devRequires => {
    syncRequires = devRequires
  },
  addProdRequires: prodRequires => {
    asyncRequires = prodRequires
  },
  addDataPaths: dataPaths => {
    jsonDataPaths = dataPaths
  },
  // Hovering on a link is a very strong indication the user is going to
  // click on it soon so let's start prefetching resources for this
  // pathname.
  hovering: rawPath => {
    const path = stripPrefix(rawPath, __PATH_PREFIX__)
    queue.getResourcesForPathname(path)
  },
  enqueue: rawPath => {
    const path = stripPrefix(rawPath, __PATH_PREFIX__)
    if (!apiRunner)
      console.error(`Run setApiRunnerForLoader() before enqueing paths`)
=======
=======
  }

  findMatchPath(rawPath) {
    return findMatchPath(rawPath)
  }

>>>>>>> develop
  // TODO check all uses of this and whether they use undefined for page resources not exist
  loadPage(rawPath) {
    const pagePath = cleanPath(rawPath)
    if (this.pageDb.has(pagePath)) {
      const page = this.pageDb.get(pagePath)
      return Promise.resolve(page.payload)
    }
    if (this.inFlightDb.has(pagePath)) {
      return this.inFlightDb.get(pagePath)
    }
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> develop

    const inFlight = this.loadPageDataJson(pagePath)
      .then(result => {
        if (result.notFound) {
          // if request was a 404, we should fallback to findMatchPath.
          let foundMatchPatch = findMatchPath(pagePath)
          if (foundMatchPatch && foundMatchPatch !== pagePath) {
            return this.loadPage(foundMatchPatch).then(pageResources => {
              this.pageDb.set(pagePath, this.pageDb.get(foundMatchPatch))

              return pageResources
            })
          }
        }
<<<<<<< HEAD

        if (result.status === `error`) {
          return {
            status: `error`,
          }
        }
        if (result.status === `failure`) {
          // throw an error so error trackers can pick this up
          throw new Error(
            `404 page could not be found. Checkout https://www.gatsbyjs.org/docs/add-404-page/`
          )
        }

<<<<<<< HEAD
    // Check if the page exists.
    let page = findPage(path)

    // In production, we lazy load page metadata. If that
    // hasn't been fetched yet, start fetching it now.
    if (
      process.env.NODE_ENV === `production` &&
      !page &&
      !fetchedPageResourceMap
    ) {
      // If page wasn't found check and we didn't fetch resources map for
      // all pages, wait for fetch to complete and try find page again
      return fetchPageResourceMap().then(() => queue.enqueue(rawPath))
    }
=======
=======

        if (result.status === `error`) {
          return {
            status: `error`,
          }
        }
        if (result.status === `failure`) {
          // throw an error so error trackers can pick this up
          throw new Error(
            `404 page could not be found. Checkout https://www.gatsbyjs.org/docs/add-404-page/`
          )
        }

>>>>>>> develop
        const pageData = result.payload
        const { componentChunkName } = pageData
        return this.loadComponent(componentChunkName).then(component => {
          const finalResult = { createdAt: new Date() }
          let pageResources
          if (!component) {
            finalResult.status = `error`
          } else {
            finalResult.status = `success`
            if (result.notFound === true) {
              finalResult.notFound = true
            }
            pageResources = toPageResources(pageData, component)
            finalResult.payload = pageResources
            emitter.emit(`onPostLoadPageResources`, {
              page: pageResources,
              pageResources,
            })
          }
          this.pageDb.set(pagePath, finalResult)
          // undefined if final result is an error
          return pageResources
        })
      })
      .finally(() => {
        this.inFlightDb.delete(pagePath)
      })
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> develop

    this.inFlightDb.set(pagePath, inFlight)
    return inFlight
  }

  // returns undefined if loading page ran into errors
  loadPageSync(rawPath) {
    const pagePath = cleanPath(rawPath)
    if (this.pageDb.has(pagePath)) {
      return this.pageDb.get(pagePath).payload
    }
    return undefined
  }

  shouldPrefetch(pagePath) {
    // Skip prefetching if we know user is on slow or constrained connection
    if (!doesConnectionSupportPrefetch()) {
      return false
    }

<<<<<<< HEAD
<<<<<<< HEAD
    // Prefetch resources.
    if (process.env.NODE_ENV === `production`) {
      prefetchResource(page.jsonName)
      prefetchResource(page.componentChunkName)
=======
    // Check if the page exists.
    if (this.pageDb.has(pagePath)) {
      return false
>>>>>>> develop
    }

    // Tell plugins the path has been successfully prefetched
    onPostPrefetchPathname(path)

=======
    // Check if the page exists.
    if (this.pageDb.has(pagePath)) {
      return false
    }

>>>>>>> develop
    return true
  }

  prefetch(pagePath) {
    if (!this.shouldPrefetch(pagePath)) {
      return false
    }

    // Tell plugins with custom prefetching logic that they should start
    // prefetching this path.
    if (!this.prefetchTriggered.has(pagePath)) {
      this.apiRunner(`onPrefetchPathname`, { pathname: pagePath })
      this.prefetchTriggered.add(pagePath)
    }

    // If a plugin has disabled core prefetching, stop now.
    if (this.prefetchDisabled) {
      return false
    }

    const realPath = cleanPath(pagePath)
    // Todo make doPrefetch logic cacheable
    // eslint-disable-next-line consistent-return
    this.doPrefetch(realPath).then(pageData => {
      if (!pageData) {
        const matchPath = findMatchPath(realPath)

        if (matchPath && matchPath !== realPath) {
          return this.prefetch(matchPath)
        }
      }

      if (!this.prefetchCompleted.has(pagePath)) {
        this.apiRunner(`onPostPrefetchPathname`, { pathname: pagePath })
        this.prefetchCompleted.add(pagePath)
      }
    })

    return true
  }

  doPrefetch(pagePath) {
    throw new Error(`doPrefetch not implemented`)
  }

  hovering(rawPath) {
    this.loadPage(rawPath)
  }

  getResourceURLsForPathname(rawPath) {
    const pagePath = cleanPath(rawPath)
    const page = this.pageDataDb.get(pagePath)
    if (page) {
      const pageResources = toPageResources(page.payload)

<<<<<<< HEAD
<<<<<<< HEAD
        // Add to the cache.
        pathScriptsCache[path] = pageResources
        devGetPageData(page.path).then(pageData => {
          emitter.emit(`onPostLoadPageResources`, {
            page,
            pageResources,
          })
          resolve(pageResources)
        })
      } else {
        Promise.all([
          getResourceModule(page.componentChunkName),
          getResourceModule(page.jsonName),
        ]).then(([component, json]) => {
          if (!(component && json)) {
            resolve(null)
            return
          }
=======
=======
>>>>>>> develop
      return [
        ...createComponentUrls(pageResources.page.componentChunkName),
        createPageDataUrl(pagePath),
      ]
    } else {
      return null
    }
  }
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> develop

  isPageNotFound(rawPath) {
    const pagePath = cleanPath(rawPath)
    const page = this.pageDb.get(pagePath)
    return page && page.notFound === true
  }
}
<<<<<<< HEAD

const createComponentUrls = componentChunkName =>
  window.___chunkMapping[componentChunkName].map(
    chunk => __PATH_PREFIX__ + chunk
  )

<<<<<<< HEAD
          if (doingInitialRender) {
            // We got all resources needed for first mount,
            // we can fetch resoures for all pages.
            fetchPageResourceMap()
          }
        })
      }

      // Tell plugins the path has been successfully prefetched
      onPostPrefetchPathname(path)
    }),
=======
export class ProdLoader extends BaseLoader {
  constructor(asyncRequires, matchPaths) {
    const loadComponent = chunkName =>
      asyncRequires.components[chunkName]().then(preferDefault)

=======

const createComponentUrls = componentChunkName =>
  window.___chunkMapping[componentChunkName].map(
    chunk => __PATH_PREFIX__ + chunk
  )

export class ProdLoader extends BaseLoader {
  constructor(asyncRequires, matchPaths) {
    const loadComponent = chunkName =>
      asyncRequires.components[chunkName]().then(preferDefault)

>>>>>>> develop
    super(loadComponent, matchPaths)
  }

  doPrefetch(pagePath) {
    const pageDataUrl = createPageDataUrl(pagePath)
    return prefetchHelper(pageDataUrl)
      .then(() =>
        // This was just prefetched, so will return a response from
        // the cache instead of making another request to the server
        this.loadPageDataJson(pagePath)
      )
      .then(result => {
        if (result.status !== `success`) {
          return Promise.resolve()
        }
        const pageData = result.payload
        const chunkName = pageData.componentChunkName
        const componentUrls = createComponentUrls(chunkName)
        return Promise.all(componentUrls.map(prefetchHelper)).then(
          () => pageData
        )
      })
  }
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> develop
}

let instance

export const setLoader = _loader => {
  instance = _loader
}

export const publicLoader = {
  // Deprecated methods. As far as we're aware, these are only used by
  // core gatsby and the offline plugin, however there's a very small
  // chance they're called by others.
  getResourcesForPathname: rawPath => {
    console.warn(
      `Warning: getResourcesForPathname is deprecated. Use loadPage instead`
    )
    return instance.i.loadPage(rawPath)
  },
  getResourcesForPathnameSync: rawPath => {
    console.warn(
      `Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead`
    )
    return instance.i.loadPageSync(rawPath)
  },
  enqueue: rawPath => instance.prefetch(rawPath),

  // Real methods
  getResourceURLsForPathname: rawPath =>
    instance.getResourceURLsForPathname(rawPath),
  loadPage: rawPath => instance.loadPage(rawPath),
  loadPageSync: rawPath => instance.loadPageSync(rawPath),
  prefetch: rawPath => instance.prefetch(rawPath),
  isPageNotFound: rawPath => instance.isPageNotFound(rawPath),
  hovering: rawPath => instance.hovering(rawPath),
}

export default publicLoader
