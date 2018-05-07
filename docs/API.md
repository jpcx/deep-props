Module: get
===========

Retrieves a nested property from a data source by iterating over a supplied path. Supports Objects, Arrays, Maps, Weakmaps, and JSON strings automatically. Supports the use of a custom extraction function to handle unsupported datasets.

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `host` | [deep-props~Host](/docs/global.md#~Host) |  |  | Container to search within. |
| `path` | [deep-props.get~Path](/libs/get/docs/global.md#~Path) |  |  | Path to desired property. |
| `opt` | [deep-props.get~Options](/libs/get/docs/global.md#~Options) | \<optional> | {} | Execution settings. |

Source:

*   [libs/get/index.js](/libs/get/index.js), [line 241](/libs/get/index.js#L241)

##### Returns:

Endpoint of path - the result of the search. Target is undefined if not found. If `opt.gen === true`, returns a generator that yields each search step.

Type

[deep-props.get~Target](/libs/get/docs/global.md#~Target) | [deep-props~ResultGenerator](/docs/global.md#~ResultGenerator)

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

*   [extract](/libs/extract/docs/API.md)
*   [get](/libs/get/docs/API.md)

### Namespaces

*   [deep-props](/docs/global.md)
*   [extract](/libs/extract/docs/global.md)
*   [get](/libs/get/docs/global.md)