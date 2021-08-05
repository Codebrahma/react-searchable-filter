const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/kamesh/Documents/Projects/react-searchable-filter/.docz/.cache/dev-404-page.js"))),
  "component---example-readme-md": hot(preferDefault(require("/Users/kamesh/Documents/Projects/react-searchable-filter/example/README.md"))),
  "component---readme-md": hot(preferDefault(require("/Users/kamesh/Documents/Projects/react-searchable-filter/README.md"))),
  "component---src-demo-mdx": hot(preferDefault(require("/Users/kamesh/Documents/Projects/react-searchable-filter/src/demo.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/kamesh/Documents/Projects/react-searchable-filter/.docz/src/pages/404.js")))
}

