/**
 * @author Justin Collier <jpcxme@gmail.com>
 * @license MIT
 * @see {@link http://github.com/jpcx/deep-props|GitHub}
 */

'use strict'

/**
 * Gets HTML from local JSDoc files.
 *
 * @private
 * @param   {Object} fs       - I/O module.
 * @param   {string} jsdocLoc - Local folder location of JSDoc HTML.
 * @param   {Object} mappings - Maps local HTML locations to desired MD locations.
 * @returns {Object} Object with destinations as keys and values as HTML.
 */
const getHTML = (fs, jsdocLoc, mappings) => Object.keys(
  mappings
).reduce(
  (HTML, key) => {
    HTML[mappings[key]] = fs.readFileSync(
      process.cwd() + jsdocLoc + key,
      'utf8'
    )
    return HTML
  },
  {}
)

/**
 * Iterates through array split by '```' and alternatively tags with 'js' for JavaScript flavored syntax highlighting.
 *
 * @private
 * @param {string} string - Search string.
 * @returns {string} Formatted string.
 */
const tagCodeBlocksAsJS = string => string.split(
  /(```)/g
).reduce(
  (opData, chunk) => {
    if (chunk === '```') {
      if (opData.replaceTogg) {
        chunk = '```js'
        opData.replaceTogg = false
      } else {
        opData.replaceTogg = true
      }
    }
    opData.formatted += chunk
    return opData
  },
  { formatted: '', replaceTogg: true }
).formatted

/**
 * Escapes brackets used to signify return values.
 *
 * @private
 * @param   {string} string - Search string.
 * @returns {string} Formatted string.
 */
const fixReturnBrackets = string => string.replace(
  /→ {/g,
  '→ \\{'
)

/**
 * Fixes 'optional' attribute in parameter / property tables.
 *
 * @private
 * @param   {string} string - Search string.
 * @returns {string} Formatted string.
 */
const fixOptionalTags = string => string.replace(
  /<optional>/g,
  '\\<optional>'
)

/**
 * Fixes incorrectly split table breaks.
 *
 * @private
 * @param   {string} string - Search string.
 * @returns {string} Formatted string.
 */
const fixTableLineBreaks = string => string.replace(
  / \n^ \|/gm,
  '|'
)

/**
 * Escapes asterix bullets.
 *
 * @private
 * @param   {string} string - Search string.
 * @returns {string} Formatted string.
 */
const fixAsterixBullets = string => string.replace(
  /\* {3}\*/g,
  '*   \\*'
)

/**
 * Removes unnecessary namespace title and formats next title as main title.
 *
 * @private
 * @param   {string} string - Search string.
 * @returns {string} Formatted string.
 */
const removeTopNamespace = string => string.replace(
  /^Namespace: [\w\d\-._~:/?#[\]@!$&'()*\\+,;=`.]*\n=*\n\n([\w\d\-._~:/?#[\]@!$&'()*\\+,;=`.]*)\n-*\n$/gm,
  '$1\n=================='
)

/**
 * Adds horizontal line before Home link footer.
 *
 * @private
 * @param   {string} string - Search string.
 * @returns {string} Formatted string.
 */
const addsHomeFooterHorizontal = string => string.replace(
  /^\[Home\]\(index\.html\)\n-*\n/gm,
  '<hr>\n## [Home](/README.md)'
)

/**
 * Replaces source code urls with links to local code location and replaces #line links to GitHub-flavored #L links.
 *
 * @private
 * @param   {string} string - Search string.
 * @returns {string} Formatted string.
 */
const formatSourceCodeURLs = string => string.split(
  /([\w\d]*\.js\.html#line)/g
).reduce(
  (formatted, block, i) => {
    if (i === 0) {
      return block
    } else if ((i + 1) % 2 === 0) {
      return (
        formatted +
        '/' +
        block.replace(
          /_/g,
          '/'
        ).replace(
          /line/g,
          'L'
        ).replace(
          /\.js\.html/g,
          '.js'
        )
      )
    } else if (i % 2 === 0) {
      return formatted + block
    } else {
      return formatted
    }
  },
  ''
).split(
  /([\w\d]*\.js\.html)/g
).reduce(
  (formatted, block, i) => {
    if (i === 0) {
      return block
    } else if ((i + 1) % 2 === 0) {
      return (
        formatted +
        '/' +
        block.replace(
          /_/g,
          '/'
        ).replace(
          /\.js\.html/g,
          '.js'
        )
      )
    } else if (i % 2 === 0) {
      return formatted + block
    } else {
      return formatted
    }
  },
  ''
)

/**
 * Replaces links to module HTML pages.
 *
 * @private
 * @param   {string} string - Search string.
 * @param   {Object} mappings - Maps local HTML locations to desired MD.
 * @returns {string} Formatted string.
 */
const replaceModuleLinks = (string, mappings) => Object.entries(
  mappings
).reduce(
  (newString, entry) => newString.replace(
    RegExp(
      entry[0].split(
        '.'
      ).join(
        '\\.'
      ),
      'g'
    ),
    entry[1]
  ),
  string
)

/**
 * Applies any post-processing filters to markdown.
 *
 * @private
 * @param   {Object} markdown - Object with paths as keys and markdown strings as values.
 * @param   {string} jsdocLoc - Local folder location of JSDoc HTML.
 * @param   {Object} mappings - Maps local HTML locations to desired MD locations.
 * @returns {Object} Processed markdown Object.
 */
const postProcess = (markdown, jsdocLoc, mappings) => Object.keys(
  markdown
).reduce(
  (proc, key) => {
    proc[key] = tagCodeBlocksAsJS(proc[key])
    proc[key] = fixReturnBrackets(proc[key])
    proc[key] = fixOptionalTags(proc[key])
    proc[key] = fixTableLineBreaks(proc[key])
    proc[key] = fixAsterixBullets(proc[key])
    proc[key] = removeTopNamespace(proc[key])
    proc[key] = addsHomeFooterHorizontal(proc[key])
    proc[key] = formatSourceCodeURLs(proc[key])
    proc[key] = replaceModuleLinks(proc[key], jsdocLoc, mappings)
    proc[key] = proc[key].trim()
    return proc
  },
  markdown
)

/**
 * Converts HTML to markdown with turndown.
 *
 * @private
 * @param   {Object} HTML - Object with destinations as keys and values as HTML.
 * @returns {Object} Object with paths as keys and markdown strings as values.
 */
const convertHTML = HTML => {
  const Turndown = require('turndown')
  const gfm = require('turndown-plugin-gfm').gfm
  const turndown = new Turndown({
    codeBlockStyle: 'fenced'
  })
  turndown.use(gfm)
  turndown.remove('footer')
  turndown.remove('script')
  turndown.remove('title')
  turndown.addRule('preserveLinks', {
    filter: 'h4',
    replacement: (content, node) => {
      const ID = node.getAttribute('id')
      if (ID !== undefined) {
        return `<a name="${ID}"></a>\n#### ${content}`
      } else {
        return `#### ${content}`
      }
    }
  })
  const markdown = {}
  for (let key of Object.keys(HTML)) {
    markdown[key] = turndown.turndown(HTML[key])
  }
  return markdown
}

/**
 * Builds the markdown documentation from the JSDoc output using the turndown module.
 * Valid as of JSDoc v3.5.5, turndown v4.0.2, and turndown-plugin-gfm v1.0.1.
 *
 * @private
 * @param {string} jsdocLoc - Local folder location of JSDoc HTML.
 * @param {Object} mappings - Maps local HTML locations to desired MD locations.
 * @see {@link https://www.npmjs.com/package/turndown-plugin-gfm}
 */
const writeMarkdown = (jsdocLoc, mappings) => {
  const fs = require('fs')
  const HTML = getHTML(fs, jsdocLoc, mappings)
  const markdown = postProcess(convertHTML(HTML), mappings)
  for (let key of Object.keys(markdown)) {
    fs.writeFileSync(
      process.cwd() + key,
      markdown[key],
      'utf8'
    )
  }
}

writeMarkdown(
  '/build/jsdoc/',
  {
    'deep-props.html': '/docs/global.md',
    'module-extract.html': '/libs/extract/docs/API.md',
    'deep-props.extract.html': '/libs/extract/docs/global.md'
  }
)
