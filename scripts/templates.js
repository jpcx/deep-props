/**
 * @author Justin Collier <jpcxme@gmail.com>
 * @license MIT
 * @see {@link http://github.com/jpcx/deep-props|GitHub}
 */

'use strict'

/**
 * Searches file structure of build/templates folder and returns paths and template strings.
 *
 * @private
 * @param   {Object} fs           - I/O module.
 * @param   {string} templatesLoc - Local folder location of templates.
 * @returns {Object} Mapping of paths and template strings.
 */
const loadTemplates = (fs, templatesLoc) => {
  const mappings = {}
  /**
   * Recursively searches directories and populates mappings object.
   *
   * @private
   * @param {string} path - Current path.
   */
  const recurse = path => {
    fs.readdirSync(
      path
    ).forEach(child => {
      const childPath = path + '/' + child
      if (fs.statSync(process.cwd() + '/' + childPath).isDirectory()) {
        recurse(childPath)
      } else {
        mappings[childPath.slice(templatesLoc.length + 1)] = fs.readFileSync(
          process.cwd() + '/' + childPath, 'utf8'
        )
      }
    })
  }
  recurse(templatesLoc)
  return mappings
}

/**
 * Replaces alias markers with alias values.
 *
 * @private
 * @param   {string} string  - Search string.
 * @param   {Object} aliases - Mappings of alias names and values.
 * @returns {Object} Formatted string.
 */
const replaceAliases = (string, aliases) => string.split(
  /\$\$\${alias\/\/\/(.*)\/\/\/}\$\$\$/g
).reduce(
  (newString, chunk, i) => {
    if (i % 2 === 0) {
      return newString + chunk
    } else {
      return newString + aliases[chunk]
    }
  },
  ''
)

/**
 * Replaces match markers with retrieved content.
 *
 * @private
 * @param   {Object} fs     - I/O module.
 * @param   {string} string - Search string.
 * @returns {string} Formatted string.
 */
const replaceMatches = (fs, string) => string.split(
  /\$\$\${file\/\/\/(.*)\/\/\/split-([gimuy]*)\/\/\/(.*)\/\/\/}\$\$\$/g
).reduce(
  (opData, chunk, i) => {
    if (i % 4 === 0) {
      opData.newString += chunk
      return opData
    } else if ((i - 1) % 4 === 0) {
      opData.path = chunk
      return opData
    } else if ((i - 2) % 4 === 0) {
      opData.flags = chunk
      return opData
    } else if ((i - 3) % 4 === 0) {
      opData.newString += fs.readFileSync(
        process.cwd() + '/' + opData.path,
        'utf8'
      ).split(
        RegExp(chunk, opData.flags)
      )[1]
      return { ...{ newString: opData.newString } }
    }
  },
  { newString: '' }
).newString

/**
 * Replaces marked sections within strings based on the type of marker.
 *
 * @private
 * @param   {Object} fs       - I/O module.
 * @param   {Object} mappings - Mappings of file locations and template strings.
 * @param   {Object} aliases  - Mappings of alias names and values.
 * @returns {Object} Formatted templates.
 */
const replaceMarkers = (fs, mappings, aliases) => Object.entries(
  mappings
).reduce(
  (newMaps, entry) => {
    let formatted = entry[1]
    formatted = replaceAliases(formatted, aliases)
    formatted = replaceMatches(fs, formatted)
    newMaps[entry[0]] = formatted
    return newMaps
  },
  {}
)

/**
 * Writes template files based on templates locations and aliases.
 *
 * @private
 * @param {string} templatesLoc - Local folder location of templates.
 * @param {Object} aliases      - Mappings of alias names and values.
 */
const buildFromTemplates = (templatesLoc, aliases) => {
  const fs = require('fs')
  Object.entries(
    replaceMarkers(
      fs,
      loadTemplates(fs, templatesLoc),
      aliases
    )
  ).forEach(
    entry => {
      fs.writeFileSync(process.cwd() + '/' + entry[0], entry[1])
    }
  )
}

buildFromTemplates(
  'scripts/templates',
  {
    'deep-props_tag': '0.2.0',
    'deep-props.extract_tag': '0.1.1',
    'deep-props.get_tag': '0.1.0'
  }
)
