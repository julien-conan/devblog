// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-index-js": preferDefault(require("/Users/shitstorm/Documents/GitHub/devblog/src/templates/index.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/shitstorm/Documents/GitHub/devblog/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/shitstorm/Documents/GitHub/devblog/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/shitstorm/Documents/GitHub/devblog/src/pages/404.js"))
}

