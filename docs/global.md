Namespace: deep-props
=====================

deep-props
----------

Provides a collection of tools for performing operations on deeply nested object properties, prototypes, and object keys. Avoids stack limit violations by using task queues rather than recursion. Allows for custom execution settings including non-native dataset handling.

Source:

*   [index.js](/index.js), [line 7](/index.js#L7)

### Namespaces

[extract](/libs/extract/docs/global.md)

### Type Definitions

#### Container

Container object used as a target for child property extraction.

##### Type:

*   Object | Array | Map | WeakMap | Set | WeakSet | [deep-props~Custom](/docs/global.md#Custom)

Source:

*   [index.js](/index.js), [line 38](/index.js#L38)

#### Custom

Custom dataset for use as a [Container](#~Container). May be accessed via valid customizer functions.

##### Type:

*   \*

Source:

*   [index.js](/index.js), [line 15](/index.js#L15)

##### Example

```js
(() => {
  class CustomDataStructure {
    constructor(array) {
      this.get = i => array[i]
      this.getValues = () => array
      this.push = x => array.push(x)
    }
  }
  return new CustomDataStructure([ 'foo', 'bar' ])
})()
```
#### Host

A non-primitive [Container](#~Container) which represents the root of a given path.

##### Type:

*   [deep-props~Container](/docs/global.md#Container)

Source:

*   [index.js](/index.js), [line 44](/index.js#L44)

#### Key

Key used for accessing a child property within a container. When its value is `'__proto__'`, it is used as a stand-in for `Object.getPrototypeOf()`.

##### Type:

*   string | [deep-props~Container](/docs/global.md#Container)

Source:

*   [index.js](/index.js), [line 32](/index.js#L32)

#### ResultGenerator

Generator object which yields stepwise operation results.

##### Type:

*   Object

Source:

*   [index.js](/index.js), [line 50](/index.js#L50)

<hr>
[Home](/README.md)
------------------

### Modules

*   [extract](/libs/module-extract/docs/global.md)

### Namespaces

*   [deep-props](/docs/global.md)
*   [extract](/libs/extract/docs/global.md)