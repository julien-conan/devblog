const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-index-js": hot(preferDefault(require("/mnt/c/Users/jcon/Documents/DEV/devblog/src/templates/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/mnt/c/Users/jcon/Documents/DEV/devblog/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/mnt/c/Users/jcon/Documents/DEV/devblog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/mnt/c/Users/jcon/Documents/DEV/devblog/src/pages/404.js")))
}

