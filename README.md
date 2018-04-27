# deep-props

[![NPM](https://nodei.co/npm/deep-props.png)](https://nodei.co/npm/deep-props/)

Creates an array of deep paths and properties associated with an object. Non-recursively iterates through deep objects until an endpoint is reached. Optionally unpacks prototypes and non-enumerable property descriptors. Supports Objects, Arrays, Maps, and Sets automatically.

Endpoints may be previously discovered object references, primitives, or objects whose children are inaccessible due to settings or otherwise.

Avoids recursion by using a task queue; very deep objects may be traversed without hitting the stack limit.

Any unsupported data structure may be accessed by supplying a customizer function. See [the global docs](https://github.com/jpcx/deep-props/blob/master/docs/global.md#PropsCustomizer).

Circular references or otherwise duplicate references to objects will be signified using a 'ref' property, rather than a value. See the [return details](#PropAt).

## Getting Started

### Prerequisites

Node.JS version 8.7.0 or above.

### Installing

```
npm install deep-props
```

### Testing

The following command will test the package for errors. It prints a large selection of examples to the console; scroll through its output if you want to learn more about the utility.

```
npm test --prefix /path/to/node_modules/deep-props
```

### Deployment

```js
const props = require('deep-props')
```

### Usage

**Nested object extraction**
```js
const data = { foo: { bar: { baz: 'qux' } } }

// returns { path: [ 'foo', 'bar', 'baz' ], value: 'qux' }
props(data)
```

**Unrooting of Object Keys**
```js
const data = new Map().set(
  { foo: 'bar' }, new Map().set(
    { baz: 'beh' }, new Map().set(
      { qux: 'quz' }, new Map().set(
        { quux: 'quuz' }, 'thud'
      )
    )
  )
)

// returns:
// [
//   {
//     path: [ { foo: 'bar' }, { baz: 'beh' }, { qux: 'quz' }, { quux: 'quuz' } ],
//     value: 'thud'
//   },
//   { host: { quux: 'quuz' }, path: ['quux'], value: 'quuz' },
//   { host: { qux: 'quz' }, path: ['qux'], value: 'quz' },
//   { host: { baz: 'beh' }, path: ['baz'], value: 'beh' },
//   { host: { foo: 'bar' }, path: ['foo'], value: 'bar' }
// ]

props(data)
```

**Extraction from complicated nests**
```js
const data = {
  foo: [
    new Map().set(
      'bar', new Set([
        {
          baz: {
            qux: {
              quz: [
                'quux',
                'quuz'
              ]
            }
          }
        },
        {
          lorem: {
            ipsum: 'dolor'
          }
        }
      ])
    )
  ]
}

// returns:
// [
//   {
//     path: [ 'foo', '0', 'bar', '0', 'baz', 'qux', 'quz', '0' ],
//     value: 'quux' },
//   { path: [ 'foo', '0', 'bar', '0', 'baz', 'qux', 'quz', '1' ],
//     value: 'quuz' },
//   { path: [ 'foo', '0', 'bar', '1', 'lorem', 'ipsum' ],
//     value: 'dolor'
//   }
// ]

props(data)
```

**Verbose Options**
```js
const data = { foo: { bar: 'baz' } }
Object.freeze(data.foo)

// returns:
// [
//   {
//     path: ['foo'],
//     value: { bar: 'baz' },
//     writable: true,
//     enumerable: true,
//     configurable: true,
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   },
//   {
//     path: [ 'foo', 'bar' ],
//     value: 'baz',
//     writable: false,
//     enumerable: true,
//     configurable: false,
//     parentIsFrozen: true,
//     parentIsSealed: true,
//     parentIsExtensible: false
//   }
// ]

props(data, { stepwise: true, descriptors: true, permissions: true })
```

## Documentation

### deepProps ⇒ [<code>Array.&lt;PropAt&gt;</code>](#PropAt) \| [<code>Search</code>](https://github.com/jpcx/deep-props/blob/master/docs/global.md#Search)

**Returns**: [<code>Array.&lt;PropAt&gt;</code>](#PropAt) \| [<code>Search</code>](https://github.com/jpcx/deep-props/blob/master/docs/global.md#Search) - Array of paths and values or references. Returns Search generator if opt.gen is true.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| host | [<code>Host</code>](https://github.com/jpcx/deep-props/blob/master/docs/global.md#Host) |  | Object to unpack. |
| [opt] | [<code>Options</code>](#Options) | <code>{}</code> | Execution settings. |

<a name="Options"></a>

### Options : <code>Object</code>
*See: [<code>Options</code>](https://github.com/jpcx/deep-props/blob/master/docs/global.md#Options)*

Execution-wide settings supplied to the module.
Modifies types of data attached to results.
Modifies types of children to extract.

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [inherited] | <code>boolean</code> |  | Whether or not to search for inherited properties. Attaches these keys behind a '\_\_proto__' key. |
| [own] | <code>boolean</code> | <code>true</code> | Whether or not to search for own properties. Defaults to true. |
| [nonEnumerable] | <code>boolean</code> |  | Whether or not to search for and return non-enumerable properties. |
| [permissions] | <code>boolean</code> |  | Whether or not to attach Permissions to results. |
| [descriptors] | <code>boolean</code> |  | Whether or not to attach property descriptors other than 'value' to results. |
| [stepwise] | <code>boolean</code> |  | Whether or not to yield a PropAt object at every step down the chain. |
| [includeRefValues] | <code>boolean</code> |  | Whether or not to attach a value to Props with Refs attached. |
| [gen] | <code>boolean</code> |  | Whether or not to return a generator instead of executing the entire search. |
| [full] | <code>boolean</code> |  | If true, replaces undefined Options with maximum search settings (All options except for propsCustomizer will be set to true). User supplied options supercede any changes here. |
| [propsCustomizer] | [<code>PropsCustomizer</code>](https://github.com/jpcx/deep-props/blob/master/docs/global.md#PropsCustomizer) |  | Function used for custom extraction of PropEntries from a Target. |

<a name="PropAt"></a>

### PropAt : <code>Object</code>
*See: [<code>PropAt</code>](https://github.com/jpcx/deep-props/blob/master/docs/global.md#PropAt)*

Description of a given level of the chain. Transformed Prop Object with location attched.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [host] | [<code>Host</code>](https://github.com/jpcx/deep-props/blob/master/docs/global.md#Host) | When a non-primitive key has been encountered, a separate chain will be created with that key. Items on that chain will be labeled with a 'host' property to specify which host the path applies to. PropAt Objects lacking a 'host' property imply that the path applies to the initially supplied Host. |
| path | [<code>Path</code>](https://github.com/jpcx/deep-props/blob/master/docs/global.md#Path) | Describes the steps taken from the Host in order to reach the Prop's value. |
| [value] | <code>\*</code> | Value described at the Prop's location (if any). In cases of a previously discovered reference (circular or otherwise), value will be replaced with a ref property (unless opt.showRefValues is true). |
| [writable] | <code>boolean</code> | 'Writable' property descriptor of the value. |
| [enumerable] | <code>boolean</code> | 'Enumerable' property descriptor of the value. |
| [configurable] | <code>boolean</code> | 'Configurable' property descriptor of the value. |
| [parentIsFrozen] | <code>boolean</code> | Frozen status of the parent object. |
| [parentIsSealed] | <code>boolean</code> | Sealed status of the parent object. |
| [parentIsExtensible] | <code>boolean</code> | Extensible status of the parent object. |
| [ref] | [<code>Ref</code>](https://github.com/jpcx/deep-props/blob/master/docs/global.md#Ref) | If the value strictly equals a previously discovered Target, the Host and Path of that Target will be provided. |

### See
* [API Docs](https://github.com/jpcx/deep-props/blob/master/docs/API.md)
* [Global Docs](https://github.com/jpcx/deep-props/blob/master/docs/global.md)

## Versioning

Versioned using [SemVer](http://semver.org/). For available versions, see the [tags on this repository](https://github.com/jpcx/deep-props/tags).

## Author

* **Justin Collier** - [jpcx](https://github.com/jpcx)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/jpcx/deep-props/blob/master/LICENSE) file for details
