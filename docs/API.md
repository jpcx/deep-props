# Module

<a name="module_deepProps"></a>

## deepProps ⇒ [<code>Array.&lt;PropAt&gt;</code>](https://github.com/jpcx/deep-props/blob/master/docs/global.md#PropAt) \| [<code>Search</code>](#Search)
Creates an array of deep paths and properties associated with an object. Non-recursively iterates through unpacked children until an endpoint is reached. Optionally traverses prototypes and non-enumerable properties. Endpoints may be previously discovered object references, primitives, or objects without children.

**Returns**: [<code>Array.&lt;PropAt&gt;</code>](https://github.com/jpcx/deep-props/blob/master/docs/global.md#PropAt) \| [<code>Search</code>](https://github.com/jpcx/deep-props/blob/master/docs/global.md#Search) - Array of paths and values or references. Returns Search generator if opt.gen is true.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| host | [<code>Host</code>](https://github.com/jpcx/deep-props/blob/master/docs/global.md#Host) |  | Object to unpack. |
| [opt] | [<code>Options</code>](https://github.com/jpcx/deep-props/blob/master/docs/global.md#Options) | <code>{}</code> | Execution settings. |

###Examples

**Simple nested object**  
```js
const data = {
  foo: {
    bar: {
      baz: {
        beh: 'qux'
      }
    }
  }
}

// returns [{ path: [ 'foo', 'bar', 'baz', 'beh' ], val: 'qux' }]

deepProps(data)
```
**Multi-nested object**  
```js
const data = {
  foo: {
    beh: {
      lorem: 'ex'
    }
  },
  bar: {
    qux: {
      ipsum: 'igne'
    }
  },
  baz: {
    quz: {
      dolor: 'vita'
    }
  }
}

// returns [
//   { path: [ 'foo', 'beh', 'lorem' ], val: 'ex'   },
//   { path: [ 'bar', 'qux', 'ipsum' ], val: 'igne' },
//   { path: [ 'baz', 'quz', 'dolor' ], val: 'vita' }
// ]

deepProps(data)
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
