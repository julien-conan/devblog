const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
<<<<<<< HEAD
<<<<<<< HEAD
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/Users/shitstorm/Documents/GitHub/devblog/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-index-js": preferDefault(require("/Users/shitstorm/Documents/GitHub/devblog/src/templates/index.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/shitstorm/Documents/GitHub/devblog/src/templates/blog-post.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/shitstorm/Documents/GitHub/devblog/src/pages/404.js"))
=======
=======
>>>>>>> develop
  "component---src-templates-index-js": hot(preferDefault(require("/mnt/c/Users/jcon/Documents/DEV/devblog/src/templates/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/mnt/c/Users/jcon/Documents/DEV/devblog/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/mnt/c/Users/jcon/Documents/DEV/devblog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/mnt/c/Users/jcon/Documents/DEV/devblog/src/pages/404.js")))
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> develop
}

