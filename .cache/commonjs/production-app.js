"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _apiRunnerBrowser = require("./api-runner-browser");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _router = require("@reach/router");

var _gatsbyReactRouterScroll = require("gatsby-react-router-scroll");

var _domready = _interopRequireDefault(require("@mikaelkristiansson/domready"));

var _navigation = require("./navigation");

var _emitter = _interopRequireDefault(require("./emitter"));

var _pageRenderer = _interopRequireDefault(require("./page-renderer"));

var _asyncRequires = _interopRequireDefault(require("./async-requires"));

var _loader = require("./loader");
<<<<<<< HEAD

var _loadDirectlyOr = _interopRequireDefault(require("./load-directly-or-404"));

var _ensureResources = _interopRequireDefault(require("./ensure-resources"));

<<<<<<< HEAD
window.___emitter = _emitter.default;
window.asyncRequires = _asyncRequires.default;
window.___emitter = _emitter.default;
window.___loader = _loader.default;

_loader.default.addPagesArray([window.page]);

_loader.default.addDataPaths({
  [window.page.jsonName]: window.dataPath
});
=======
var _stripPrefix = _interopRequireDefault(require("./strip-prefix"));
>>>>>>> develop
=======

var _ensureResources = _interopRequireDefault(require("./ensure-resources"));

var _stripPrefix = _interopRequireDefault(require("./strip-prefix"));
>>>>>>> develop

var _matchPaths = _interopRequireDefault(require("./match-paths.json"));

// Generated during bootstrap
const loader = new _loader.ProdLoader(_asyncRequires.default, _matchPaths.default);
(0, _loader.setLoader)(loader);
loader.setApiRunner(_apiRunnerBrowser.apiRunner);
window.asyncRequires = _asyncRequires.default;
window.___emitter = _emitter.default;
window.___loader = _loader.publicLoader;
window.___webpackCompilationHash = window.webpackCompilationHash;
(0, _navigation.init)();
(0, _apiRunnerBrowser.apiRunnerAsync)(`onClientEntry`).then(() => {
  // Let plugins register a service worker. The plugin just needs
  // to return true.
  if ((0, _apiRunnerBrowser.apiRunner)(`registerServiceWorker`).length > 0) {
    require(`./register-service-worker`);
  } // In gatsby v2 if Router is used in page using matchPaths
  // paths need to contain full path.
  // For example:
  //   - page have `/app/*` matchPath
  //   - inside template user needs to use `/app/xyz` as path
  // Resetting `basepath`/`baseuri` keeps current behaviour
  // to not introduce breaking change.
  // Remove this in v3


  const RouteHandler = props => _react.default.createElement(_router.BaseContext.Provider, {
    value: {
      baseuri: `/`,
      basepath: `/`
    }
  }, _react.default.createElement(_pageRenderer.default, props));

  class LocationHandler extends _react.default.Component {
    render() {
      const {
        location
      } = this.props;
      return _react.default.createElement(_ensureResources.default, {
        location: location
      }, ({
        pageResources,
        location
      }) => _react.default.createElement(_navigation.RouteUpdates, {
        location: location
      }, _react.default.createElement(_gatsbyReactRouterScroll.ScrollContext, {
        location: location,
        shouldUpdateScroll: _navigation.shouldUpdateScroll
      }, _react.default.createElement(_router.Router, {
        basepath: __BASE_PATH__,
        location: location,
        id: "gatsby-focus-wrapper"
      }, _react.default.createElement(RouteHandler, (0, _extends2.default)({
        path: encodeURI(pageResources.page.path === `/404.html` ? (0, _stripPrefix.default)(location.pathname, __BASE_PATH__) : pageResources.page.matchPath || pageResources.page.path)
      }, this.props, {
        location: location,
        pageResources: pageResources
      }, pageResources.json))))));
    }

  }

<<<<<<< HEAD
<<<<<<< HEAD
  const _window = window,
        page = _window.page,
        browserLoc = _window.location; // TODO: comment what this check does

  if (page && page.path !== `/404.html` && __PATH_PREFIX__ + page.path !== browserLoc.pathname && !page.path.match(/^\/offline-plugin-app-shell-fallback\/?$/) && (!page.matchPath || !(0, _utils.match)(__PATH_PREFIX__ + page.matchPath, browserLoc.pathname))) {
    (0, _router.navigate)(__PATH_PREFIX__ + page.path + browserLoc.search + browserLoc.hash, {
=======
=======
>>>>>>> develop
  const {
    pagePath,
    location: browserLoc
  } = window; // Explicitly call navigate if the canonical path (window.pagePath)
  // is different to the browser path (window.location.pathname). But
  // only if NONE of the following conditions hold:
  //
  // - The url matches a client side route (page.matchPath)
  // - it's a 404 page
  // - it's the offline plugin shell (/offline-plugin-app-shell-fallback/)

  if (pagePath && __BASE_PATH__ + pagePath !== browserLoc.pathname && !(loader.findMatchPath((0, _stripPrefix.default)(browserLoc.pathname, __BASE_PATH__)) || pagePath === `/404.html` || pagePath.match(/^\/404\/?$/) || pagePath.match(/^\/offline-plugin-app-shell-fallback\/?$/))) {
    (0, _router.navigate)(__BASE_PATH__ + pagePath + browserLoc.search + browserLoc.hash, {
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> develop
      replace: true
    });
  }

<<<<<<< HEAD
<<<<<<< HEAD
  _loader.default.getResourcesForPathname(browserLoc.pathname).then(resources => {
    if (!resources || resources.page.path === `/404.html`) {
      return (0, _loadDirectlyOr.default)(resources, browserLoc.pathname + browserLoc.search + browserLoc.hash, true);
    }

    return null;
  }).then(() => {
    const Root = () => (0, _react.createElement)(_router.Router, {
      basepath: __PATH_PREFIX__
    }, (0, _react.createElement)(RouteHandler, {
      path: `/*`
    }));
=======
=======
>>>>>>> develop
  loader.loadPage(browserLoc.pathname).then(page => {
    if (!page || page.status === `error`) {
      throw new Error(`page resources for ${browserLoc.pathname} not found. Not rendering React`);
    }

    const Root = () => _react.default.createElement(_router.Location, null, locationContext => _react.default.createElement(LocationHandler, locationContext));
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> develop

    const WrappedRoot = (0, _apiRunnerBrowser.apiRunner)(`wrapRootElement`, {
      element: _react.default.createElement(Root, null)
    }, _react.default.createElement(Root, null), ({
      result
    }) => {
      return {
        element: result
      };
    }).pop();

    let NewRoot = () => WrappedRoot;

    const renderer = (0, _apiRunnerBrowser.apiRunner)(`replaceHydrateFunction`, undefined, _reactDom.default.hydrate)[0];
    (0, _domready.default)(() => {
      renderer(_react.default.createElement(NewRoot, null), typeof window !== `undefined` ? document.getElementById(`___gatsby`) : void 0, () => {
        (0, _apiRunnerBrowser.apiRunner)(`onInitialClientRender`);
      });
    });
  });
});