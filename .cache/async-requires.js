// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-index-js": () => import("/Users/shitstorm/Documents/GitHub/devblog/src/templates/index.js" /* webpackChunkName: "component---src-templates-index-js" */),
  "component---src-templates-blog-post-js": () => import("/Users/shitstorm/Documents/GitHub/devblog/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/shitstorm/Documents/GitHub/devblog/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/shitstorm/Documents/GitHub/devblog/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

exports.data = () => import("/Users/shitstorm/Documents/GitHub/devblog/.cache/data.json")

