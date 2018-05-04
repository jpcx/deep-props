# [deep-props](/README.md).extract

[![NPM](https://nodei.co/npm/deep-props.extract.png)](https://nodei.co/npm/deep-props.extract/)

Creates an array of deep paths and properties associated with an object. Non-recursively iterates through deep objects until an endpoint is reached. Optionally unpacks prototypes and non-enumerable property descriptors. Supports Objects, Arrays, Maps, and Sets automatically.

Endpoints may be previously discovered object references, primitives, or objects whose children are inaccessible due to settings or otherwise.

Avoids recursion by using a task queue; very deep objects may be traversed without hitting the stack limit.

Any unsupported data structure may be accessed by supplying a customizer function. See [the global docs](/libs/extract/docs/global.md#~PropsCustomizer).

Circular references or otherwise duplicate references to objects will be signified using a 'ref' property, rather than a value. See the [return details](#~PropAt).

## Getting Started

The following installation, testing, and deployment instructions assume that deep-props.extract will be installed as a standalone module. For instructions on how to install and test all deep-props modules, please [refer to the main README](/README.md). Functionality of the module remains the same in both cases.

### Prerequisites

Node.JS version 8.7.0 or above.

### Installing

```bash
npm install deep-props.extract
```

### Testing

The following command will test the package for errors. It prints a large selection of examples to the console; scroll through its output if you want to learn more about the utility.

```bash
npm test --prefix /path/to/node_modules/deep-props.extract
```

### Deployment

```js
const extract = require('deep-props.extract')
```

### Usage

**Nested object extraction**
```js
const data = { foo: { bar: { baz: 'qux' } } }

// returns { path: [ 'foo', 'bar', 'baz' ], value: 'qux' }
extract(data)
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

extract(data)
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

extract(data)
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

extract(data, { stepwise: true, descriptors: true, permissions: true })
```

## Documentation

### Module: extract

Creates an array of deep paths and properties associated with an object. Non-recursively iterates through unpacked children until an endpoint is reached. Optionally traverses prototypes and non-enumerable properties. Endpoints may be previously discovered object references, primitives, or objects without children.

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `host` | [deep-props~Host](/docs/global.md#~Host) |  |  | Object to unpack. |
| `opt` | [deep-props.extract~Options](#~Options) | \<optional> | {} | Execution settings. |

Source:

*   [libs/extract/index.js](/libs/extract/index.js), [line 919](/libs/extract/index.js#L919)

##### Returns:

Array of paths and values or references. Returns Search generator if opt.gen is true.

Type

Array.<[deep-props.extract~PropAt](#~PropAt)> | [deep-props~ResultGenerator](/docs/global.md#~ResultGenerator)

<a name="~Options"></a>
#### Options

Execution-wide settings supplied to the module. Modifies types of data attached to results. Modifies types of children to extract.

##### Type:

*   Object

##### Properties:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `inherited` | boolean | \<optional> |  | Whether or not to search for inherited properties. Attaches these keys behind a '\_\_proto\_\_' key. |
| `own` | boolean | \<optional> | true | Whether or not to search for own properties. Defaults to true. |
| `nonEnumerable` | boolean | \<optional> |  | Whether or not to search for and return non-enumerable properties. |
| `permissions` | boolean | \<optional> |  | Whether or not to attach Permissions to results. |
| `descriptors` | boolean | \<optional> |  | Whether or not to attach property descriptors other than 'value' to results. |
| `stepwise` | boolean | \<optional> |  | Whether or not to yield a PropAt object at every step down the chain. |
| `includeRefValues` | boolean | \<optional> |  | Whether or not to attach a value to Props with Refs attached. |
| `gen` | boolean | \<optional> |  | Whether or not to return a generator instead of executing the entire search. |
| `full` | boolean | \<optional> |  | If true, replaces undefined Options with maximum search settings (All options except for propsCustomizer will be set to true). User supplied options supercede any changes here. |
| `propsCustomizer` | [deep-props.extract~PropsCustomizer](/libs/extract/docs/global.md#~PropsCustomizer) | \<optional> |  | Function used for custom extraction of PropEntries from a Target. |

<a name="~PropAt"></a>
#### PropAt

Description of a given level of the chain. Transformed Prop Object with location attched.

##### Type:

*   Object

##### Properties:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `host` | [deep-props~Host](/docs/global.md#~Host) | \<optional> | When a non-primitive key has been encountered, a separate chain will be created with that key. Items on that chain will be labeled with a 'host' property to specify which host the path applies to. PropAt Objects lacking a 'host' property imply that the path applies to the initially supplied Host. |
| `path` | Array.<[deep-props~Key](/docs/global.md#~Key)> |  | Describes the steps taken from the Host in order to reach the Prop's value. |
| `value` | * | \<optional> | Value described at the Prop's location (if any). In cases of a previously discovered reference (circular or otherwise), value will be replaced with a ref property (unless opt.showRefValues is true). |
| `writable` | boolean | \<optional> | 'Writable' property descriptor of the value. |
| `enumerable` | boolean | \<optional> | 'Enumerable' property descriptor of the value. |
| `configurable` | boolean | \<optional> | 'Configurable' property descriptor of the value. |
| `parentIsFrozen` | boolean | \<optional> | Frozen status of the parent object. |
| `parentIsSealed` | boolean | \<optional> | Sealed status of the parent object. |
| `parentIsExtensible` | boolean | \<optional> | Extensible status of the parent object. |
| `ref` | [deep-props.extract~Ref](/libs/extract/docs/global.md#~Ref) | \<optional> | If the value strictly equals a previously discovered Container, the path and Host (if applicable) of that Container will be provided. |

### See
* [API Docs](/libs/extract/docs/API.md)
* [Global Docs](/libs/extract/docs/global.md)

## Versioning

Versioned using [SemVer](http://semver.org/). For available versions, see the [tags on this repository](https://github.com/jpcx/deep-props/tags).

## Author

* **Justin Collier** - [jpcx](https://github.com/jpcx)

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details
