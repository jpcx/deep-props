# [deep-props](/docs/global.md).get

Source:

*   [libs/get/index.js](/libs/get/index.js), [line 9](/libs/get/index.js#L9)

### Methods

<a name=".getFromKey"></a>
#### (static) getFromKey(target, key, opt) → \{[deep-props.get~Target](/libs/get/docs/global.md#~Target)}

Gets a value from a Target behind a Key. Checks getCustomizer first, if it is provided.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [deep-props.get~Target](/libs/get/docs/global.md#~Target) | Target object. |
| `key` | [deep-props~Key](/docs/global.md#~Key) | Access key. |
| `opt` | [deep-props.get~Options](/libs/get/docs/global.md#~Options) | Execution settings. |

Source:

*   [libs/get/index.js](/libs/get/index.js), [line 173](/libs/get/index.js#L173)

##### Returns:

New target, final value, or undefined.

Type

[deep-props.get~Target](/libs/get/docs/global.md#~Target)

##### Example

```js
// all return 'bar'
getFromKey({foo: 'bar'}, 'foo', {})
getFromKey(new Map([['foo', 'bar']]), 'foo', {})
getFromKey(new Set(['foo', 'bar']), 'bar', {})
```

<a name=".getFromMap"></a>
#### (static) getFromMap(target, key) → \{[deep-props.get~Target](/libs/get/docs/global.md#~Target)}

Gets a key from a map, if it exists. Looks for key as key first; if not found, looks for insertion order as key.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [deep-props.get~Target](/libs/get/docs/global.md#~Target) | Target of Key search. |
| `key` | [deep-props~Key](/docs/global.md#~Key) | Key to find in target. |

Source:

*   [libs/get/index.js](/libs/get/index.js), [line 136](/libs/get/index.js#L136)

##### Returns:

New target from key or undefined if not found.

Type

[deep-props.get~Target](/libs/get/docs/global.md#~Target)

##### Example

```js
// all return 'bar'
getFromMap(new Map([[ 'foo', 'bar' ]]), 'foo')
getFromMap(new Map([[ 'foo', 'bar' ]]), '0')
getFromMap(new Map([[ 'foo', 'bar' ]]), 0)
```

<a name=".getFromSet"></a>
#### (static) getFromSet(target, key) → \{[deep-props.get~Target](/libs/get/docs/global.md#~Target)}

Checks to see if a Set has a key. If so, returns the key. If not found, looks for insertion order as key.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [deep-props.get~Target](/libs/get/docs/global.md#~Target) | Target of Key search. |
| `key` | [deep-props~Key](/docs/global.md#~Key) | Key to find in target. |

Source:

*   [libs/get/index.js](/libs/get/index.js), [line 154](/libs/get/index.js#L154)

##### Returns:

New target from key or undefined if not found.

Type

[deep-props.get~Target](/libs/get/docs/global.md#~Target)

##### Example

```js
// all return 'foo'
getFromSet(new Set([ 'foo', 'bar' ]), 'foo')
getFromSet(new Set([ 'foo', 'bar' ]), '0')
getFromSet(new Set([ 'foo', 'bar' ]), 0)
```

<a name=".getFromString"></a>
#### (static) getFromString(target, key) → \{[deep-props.get~Target](/libs/get/docs/global.md#~Target)}

Checks for String objects and properties attached to them. If not, checks for JSON and returns property from the extracted JSON object. If not JSON, returns the character at that index.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [deep-props.get~Target](/libs/get/docs/global.md#~Target) | Target of Key search. |
| `key` | [deep-props~Key](/docs/global.md#~Key) | Key to find in target. |

Source:

*   [libs/get/index.js](/libs/get/index.js), [line 111](/libs/get/index.js#L111)

##### Returns:

New target from key or undefined if not found.

Type

[deep-props.get~Target](/libs/get/docs/global.md#~Target)

##### Examples

```js
// returns 'bar'
getFromString(JSON.stringify({ foo: 'bar' }), 'foo')
```

```js
// returns 'c'
getFromString('abc', '2')
```

```js
// returns 'bar'
let strObj = new String('abc')
strObj.foo = 'bar'
getFromString(strObj, 'foo')
```

```js
// returns 'c'
let strObj = new String('abc')
strObj.foo = 'bar'
getFromString(strObj, '2')
```

<a name=".search"></a>
#### (generator, static) search(host, path, opt) → \{[deep-props.get~Target](/libs/get/docs/global.md#~Target)}

Iterates along the supplied path and shifts a reference point along the way.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `host` | [deep-props~Host](/docs/global.md#~Host) | Base container dataset to search within. |
| `path` | [deep-props.get~Path](/libs/get/docs/global.md#~Path) | Path to desired property. |
| `opt` | [deep-props.get~Options](/libs/get/docs/global.md#~Options) | Execution settings. |

Source:

*   [libs/get/index.js](/libs/get/index.js), [line 220](/libs/get/index.js#L220)

##### Returns:

Returns undefined if search has finished executing or if the desired value has not been found.

Type

undefined

##### Yields:

Data retrieved at each level of execution; value of Target before reassignment.

Type

[deep-props.get~Target](/libs/get/docs/global.md#~Target)

##### Example

```js
const nest = { foo: { bar: 'baz' } }

// returns generator
const query = search(nest, [ 'foo', 'bar' ], {})

// yields { value: { bar: 'baz' }, done: false }
query.next()

// yields { value: 'baz', done: true }
query.next()

// returns { value: undefined, done: true }
query.next()
```

### Type Definitions

<a name="~GetCustomizer"></a>
#### GetCustomizer(target, key) → \{[deep-props.get~Target](/libs/get/docs/global.md#~Target)}

Function used for custom handling of entry into next level of the dataset. + Allows for extraction from container objects that are not directly supported. + Returns new value of Target based on key. + Returns undefined if Target is not compatible with the filter.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [deep-props.get~Target](/libs/get/docs/global.md#~Target) | Current data being analyzed |
| `key` | [deep-props~Key](/docs/global.md#~Key) | Next key along the path |

Source:

*   [libs/get/index.js](/libs/get/index.js), [line 28](/libs/get/index.js#L28)

##### Returns:

Value to pass along to the search function as the next Target. If undefined, will fall back on using standard extraction methods to find the next Target.

Type

[deep-props.get~Target](/libs/get/docs/global.md#~Target)

##### Example

```js
(target, key) => {
  if (target instanceof ArrayBuffer && target.byteLength === 16) {
    return new Int16Array(target)[key]
  }
}
```

<a name="~Options"></a>
#### Options

Settings for customizing behaviour.

##### Type:

*   Object

##### Properties:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `gen` | Boolean | \<optional> | If true, module returns a generator that yields each search step and returns the final value. |
| `getCustomizer` | [deep-props.get~GetCustomizer](/libs/get/docs/global.md#~GetCustomizer) | \<optional> | Allows for custom extraction. |
| `match` | RegExp | \<optional> | Regular expression used for custom key extraction from supplied path string. If supplied, it is used as the only argument for `path.match()`, which should return an array of key names. |

Source:

*   [libs/get/index.js](/libs/get/index.js), [line 46](/libs/get/index.js#L46)

##### Example

```js
{
  gen: true,
  getCustomizer: (target, key) => {
    if (target instanceof ArrayBuffer && target.byteLength === 16) {
      return new Int16Array(target)[key]
    }
  },
  match: /[^/]+/g
}
```

<a name="~Path"></a>
#### Path

Instructions that specify which keys should be accessed at each level of the dataset.

*   A nested array `'arr'` with property `arr[0][0] === 'foo'` should be represented as `[0, 0]` or `'[0][0]'`, (or `'0.0'`, etc.) in order to retrieve `'foo'`.
*   A nested object `'nest'` with property `nest.foo.bar === 'baz'` should be represented as either `['foo', 'bar']` or `'foo.bar'` (or `'foo[bar]'`, etc.) in order to retrieve `'baz'`.
*   String paths will be converted to an array of keys based on matches of the following regex: `/[^.[\\]]+/g`.
    *   In other words, anything between periods or brackets will be interpreted as keys.
    *   Paths containing any keys that are references (such as WeakMap keys) must be passed as an array, such as `['foo', 'bar', weakMapKey]`
    *   Paths containing any keys with periods or brackets must also be passed as an array, such as `['foo.bar', 'baz[qux]']` (unless a custom match regex is supplied).

##### Type:

*   Array.<[deep-props~Key](/docs/global.md#~Key)> | string

Source:

*   [libs/get/index.js](/libs/get/index.js), [line 65](/libs/get/index.js#L65)

##### Examples

```js
[ 'foo', 'bar', 'baz' ]
```

```js
'foo.bar.baz'
```

```js
'foo[0][0]'
```

<a name="~Target"></a>
#### Target

Current reference to a given level of the path; parent to the next key along the path.

*   For the host `{ foo: { bar: 'baz' } }` and a path `['foo', 'bar']`, the Target value will change during the search as follows:
    *   `{ bar: 'baz' }`
    *   `'baz'`
*   Unless Target is a primitive type, or has been extracted from within a primitive type (such as a JSON string), Target will be a reference to the host object.
    *   In this case, if any of its nested parents are mutable, modifications of a mutable object returned or yielded by get will result in changes to the host object.

##### Type:

*   [deep-props~Container](/docs/global.md#~Container) | string | undefined

Source:

*   [libs/get/index.js](/libs/get/index.js), [line 11](/libs/get/index.js#L11)

<hr>

## [Home](/README.md)

### Modules

*   [extract](/libs/extract/docs/API.md)
*   [get](/libs/get/docs/API.md)

### Namespaces

*   [deep-props](/docs/global.md)
*   [extract](/libs/extract/docs/global.md)
*   [get](/libs/get/docs/global.md)