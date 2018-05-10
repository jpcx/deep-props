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
 * Custom dataset for use as a <a href="#~Container">Container</a>. May be accessed via valid customizer functions.
 *
 * @typedef {*} deep-props~Custom
 * @example
 * (() => {
 *   class CustomDataStructure {
 *     constructor(array) {
 *       this.get = i => array[i]
 *       this.getValues = () => array
 *       this.push = x => array.push(x)
 *     }
 *   }
 *   return new CustomDataStructure([ 'foo', 'bar' ])
 * })()
 */

/**
 * Key used for accessing a child property within a container. When its value is <code>'__proto__'</code>, it is used as a stand-in for <code>Object.getPrototypeOf()</code>.
 *
 * @typedef {(string|deep-props~Container)} deep-props~Key
 */

/**
 * Container object used as a target for child property extraction.
 *
 * @typedef {(Object|Array|Map|WeakMap|Set|WeakSet|deep-props~Custom)} deep-props~Container
 */

/**
 * A non-primitive <a href="#~Container">Container</a> which represents the root of a given path.
 *
 * @typedef {deep-props~Container} deep-props~Host
 */

/**
 * Generator object which yields stepwise operation results.
 *
 * @typedef {Object} deep-props~ResultGenerator
 */

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
