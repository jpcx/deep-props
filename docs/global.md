# deep-props

Provides a collection of tools for performing operations on deeply nested object properties, prototypes, and object keys. Avoids stack limit violations by using task queues rather than recursion. Allows for custom execution settings including non-native dataset handling.

Source:

*   [deep-props/index.js](https://github.com/jpcx/deep-props/blob/develop/index.js), [line 7](https://github.com/jpcx/deep-props/blob/develop/index.js#L7)

### Namespaces

[extract](https://github.com/jpcx/deep-props.extract/blob/develop/docs/global.md)

[get](https://github.com/jpcx/deep-props.get/blob/develop/docs/global.md)

### Type Definitions

<a name="~Container"></a>
#### Container

Container object used as a target for child property extraction.

##### Type:

*   Object | Array | Map | WeakMap | Set | WeakSet | [deep-props~Custom](https://github.com/jpcx/deep-props/blob/develop/docs/global.md#~Custom)

Source:

*   [deep-props/index.js](https://github.com/jpcx/deep-props/blob/develop/index.js), [line 38](https://github.com/jpcx/deep-props/blob/develop/index.js#L38)

<a name="~Custom"></a>
#### Custom

Custom dataset for use as a [Container](#~Container). May be accessed via valid customizer functions.

##### Type:

*   \*

Source:

*   [deep-props/index.js](https://github.com/jpcx/deep-props/blob/develop/index.js), [line 15](https://github.com/jpcx/deep-props/blob/develop/index.js#L15)

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

<a name="~Host"></a>
#### Host

A non-primitive [Container](#~Container) which represents the root of a given path.

##### Type:

*   [deep-props~Container](https://github.com/jpcx/deep-props/blob/develop/docs/global.md#~Container)

Source:

*   [deep-props/index.js](https://github.com/jpcx/deep-props/blob/develop/index.js), [line 44](https://github.com/jpcx/deep-props/blob/develop/index.js#L44)

<a name="~Key"></a>
#### Key

Key used for accessing a child property within a container. When its value is `'__proto__'`, it is used as a stand-in for `Object.getPrototypeOf()`.

##### Type:

*   string | [deep-props~Container](https://github.com/jpcx/deep-props/blob/develop/docs/global.md#~Container)

Source:

*   [deep-props/index.js](https://github.com/jpcx/deep-props/blob/develop/index.js), [line 32](https://github.com/jpcx/deep-props/blob/develop/index.js#L32)

<a name="~ResultGenerator"></a>
#### ResultGenerator

Generator object which yields stepwise operation results.

##### Type:

*   Object

Source:

*   [deep-props/index.js](https://github.com/jpcx/deep-props/blob/develop/index.js), [line 50](https://github.com/jpcx/deep-props/blob/develop/index.js#L50)

<hr>

## [Home](https://github.com/jpcx/deep-props/blob/develop/README.md)

### Modules

*   [extract](https://github.com/jpcx/deep-props.extract/blob/develop/docs/API.md)
*   [get](https://github.com/jpcx/deep-props.get/blob/develop/docs/API.md)

### Namespaces

*   [deep-props](https://github.com/jpcx/deep-props/blob/develop/docs/global.md)
*   [extract](https://github.com/jpcx/deep-props.extract/blob/develop/docs/global.md)
*   [get](https://github.com/jpcx/deep-props.get/blob/develop/docs/global.md)