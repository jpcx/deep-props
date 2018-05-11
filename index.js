/**
 * @author Justin Collier <jpcxme@gmail.com>
 * @license MIT
 * @see {@link http://github.com/jpcx/deep-props|GitHub}
 */

/**
 * Provides a collection of tools for performing operations on deeply nested object properties, prototypes, and object keys. Avoids stack limit violations by using task queues rather than recursion. Allows for custom execution settings including non-native dataset handling.
 *
 * @namespace deep-props
 */

'use strict'

/**
 * Provides an interface to the deep-props submodules.
 *
 * @typedef  {Object} deep-props~Submodules
 * @property {deep-props.extract} extract - Extract module.
 * @property {deep-props.get}     get     - Get module.
 */

/**
 * Exports the deep-props submodules.
 *
 * @module deep-props
 * @returns {deep-props~Submodules} Object containing submodules.
 * @example
 * // returns {
 * //   extract: [Function: extract],
 * //   get: [Function: get]
 * // }
 * const props = require('deep-props')
 *
 * const extract = props.extract
 * const get = props.get
 */
module.exports = {
  extract: require('./libs/extract'),
  get: require('./libs/get')
}
