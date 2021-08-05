const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'React Searchable Filter',
    description: 'Searchable React Filter component',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/kamesh/Documents/Projects/react-searchable-filter/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Searchable Filter',
        description: 'Searchable React Filter component',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/kamesh/Documents/Projects/react-searchable-filter',
          templates:
            '/Users/kamesh/Documents/Projects/react-searchable-filter/node_modules/docz-core/dist/templates',
          docz:
            '/Users/kamesh/Documents/Projects/react-searchable-filter/.docz',
          cache:
            '/Users/kamesh/Documents/Projects/react-searchable-filter/.docz/.cache',
          app:
            '/Users/kamesh/Documents/Projects/react-searchable-filter/.docz/app',
          appPackageJson:
            '/Users/kamesh/Documents/Projects/react-searchable-filter/package.json',
          appTsConfig:
            '/Users/kamesh/Documents/Projects/react-searchable-filter/tsconfig.json',
          gatsbyConfig:
            '/Users/kamesh/Documents/Projects/react-searchable-filter/gatsby-config.js',
          gatsbyBrowser:
            '/Users/kamesh/Documents/Projects/react-searchable-filter/gatsby-browser.js',
          gatsbyNode:
            '/Users/kamesh/Documents/Projects/react-searchable-filter/gatsby-node.js',
          gatsbySSR:
            '/Users/kamesh/Documents/Projects/react-searchable-filter/gatsby-ssr.js',
          importsJs:
            '/Users/kamesh/Documents/Projects/react-searchable-filter/.docz/app/imports.js',
          rootJs:
            '/Users/kamesh/Documents/Projects/react-searchable-filter/.docz/app/root.jsx',
          indexJs:
            '/Users/kamesh/Documents/Projects/react-searchable-filter/.docz/app/index.jsx',
          indexHtml:
            '/Users/kamesh/Documents/Projects/react-searchable-filter/.docz/app/index.html',
          db:
            '/Users/kamesh/Documents/Projects/react-searchable-filter/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
