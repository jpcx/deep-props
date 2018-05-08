Module: get
===========

Retrieves a nested property from a data source by iterating over a supplied path. Supports Objects, Arrays, Maps, Weakmaps, and JSON strings automatically. Supports the use of a custom extraction function to handle unsupported datasets.

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `host` | [deep-props~Host](https://github.com/jpcx/deep-props/blob/0.1.0/docs/global.md#~Host) |  |  | Container to search within. |
| `path` | [deep-props.get~Path](https://github.com/jpcx/deep-props.get/blob/0.1.0/docs/global.md#~Path) |  |  | Path to desired property. |
| `opt` | [deep-props.get~Options](https://github.com/jpcx/deep-props.get/blob/0.1.0/docs/global.md#~Options) | \<optional> | {} | Execution settings. |

Source:

*   [deep-props.get/index.js](https://github.com/jpcx/deep-props.get/blob/0.1.0/index.js), [line 241](https://github.com/jpcx/deep-props.get/blob/0.1.0/index.js#L241)

##### Returns:

Endpoint of path - the result of the search. Target is undefined if not found. If `opt.gen === true`, returns a generator that yields each search step.

Type

[deep-props.get~Target](https://github.com/jpcx/deep-props.get/blob/0.1.0/docs/global.md#~Target) | [deep-props~ResultGenerator](https://github.com/jpcx/deep-props/blob/0.1.0/docs/global.md#~ResultGenerator)

##### Examples

```js
// Nested object and array extraction

const nest = { foo: { bar: { baz: ['qux'] } } }

// returns 'qux'
get(nest, 'foo.bar.baz[0]') // or 'foo.bar.baz.0', or ['foo', 'bar', 'baz', 0]
```

```js
// Nested WeakMap extraction

const foo = { key: 1 }
const bar = { key: 2 }
const nest = new WeakMap().set(foo, new WeakMap().set(bar, 'baz'))

// returns 'baz'
get(nest, [foo, bar])
```

```js
// Usage of a custom extraction function

// Creation of a sample custom data structure which uses a 'retrieve' method for data access.
class NonNativeDataStructure {
  constructor(arr) {
    const values = [...arr]
    this.retrieve = i => values[i]
  }
}

// Addition of another data structure that, although native, requires custom extraction instructions
const testAB = new ArrayBuffer(16)
new Int16Array(testAB)[0] = 2

const nest = new NonNativeDataStructure[{ foo: { bar: testAB } }]

// returns undefined
get(nest, '0.foo.bar[0]')

// returns 2
get(nest, '0.foo.bar[0]', {
  getCustomizer: (target, key) => {
    if (target instanceof NonNativeDataStructure) {
      return target.retrieve(next)
    }
    if (target instanceof ArrayBuffer && target.byteLength === 16) {
      return new Int16Array(target)[key]
    }
  }
})
```

```js
// Stepwise extraction via the 'gen' option

const nest = { foo: { bar: 'baz' } }

// returns generator
const query = get(nest, 'foo.bar', { gen: true })

for (let step of query) {
  // iterates twice:
  // 1: step === { bar: 'baz' }
  // 2: step === 'baz'
}
```

<hr>

## [Home](/README.md)

### Modules

*   [extract](https://github.com/jpcx/deep-props.extract/blob/0.1.0/docs/API.md)
*   [get](https://github.com/jpcx/deep-props.get/blob/0.1.0/docs/API.md)

### Namespaces

*   [deep-props](https://github.com/jpcx/deep-props/blob/0.1.0/docs/global.md)
*   [extract](https://github.com/jpcx/deep-props.extract/blob/0.1.0/docs/global.md)
*   [get](https://github.com/jpcx/deep-props.get/blob/0.1.0/docs/global.md)