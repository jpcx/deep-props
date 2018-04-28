# Index
### Functions

<dl>
<dt><a href="#isPrimitive">isPrimitive(x)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if x is a JS primitive.
Used to determine if a value should be unpacked.</p>
</dd>
<dt><a href="#getObjectPermissions">getObjectPermissions(target)</a> ⇒ <code><a href="#Permissions">Permissions</a></code></dt>
<dd><p>Gets the frozen, sealed, and extensible statuses of an object.</p>
</dd>
<dt><a href="#genPropsFromDescriptorEntries">genPropsFromDescriptorEntries(descriptorEntries, permissions, opt)</a> ⇒ <code><a href="#Prop">Array.&lt;Prop&gt;</a></code></dt>
<dd><p>Converts list of descriptors to prop Array.
Attaches information based on options.</p>
</dd>
<dt><a href="#genProtoProp">genProtoProp(target, permissions, opt)</a> ⇒ <code><a href="#Prop">Array.&lt;Prop&gt;</a></code></dt>
<dd><p>Generates a prop for a target object&#39;s prototype.</p>
</dd>
<dt><a href="#getOwnProps">getOwnProps(target, permissions, opt)</a> ⇒ <code><a href="#Prop">Array.&lt;Prop&gt;</a></code></dt>
<dd><p>Generates a list of non-inherited properties of a target object.</p>
</dd>
<dt><a href="#getMapProps">getMapProps(target, permissions, opt)</a> ⇒ <code><a href="#Prop">Array.&lt;Prop&gt;</a></code></dt>
<dd><p>Gets a list of properties within a target Map.</p>
</dd>
<dt><a href="#getSetProps">getSetProps(target, permissions, opt)</a> ⇒ <code><a href="#Prop">Array.&lt;Prop&gt;</a></code></dt>
<dd><p>Gets a list of properties within a target Set.
Uses insertion order as keys.</p>
</dd>
<dt><a href="#getSpecialProps">getSpecialProps(target, permissions, opt)</a> ⇒ <code><a href="#Prop">Array.&lt;Prop&gt;</a></code></dt>
<dd><p>Gets any special object properties.
If propsCustomizer is supplied, and returns a defined value from target, then getSpecialProps will return this value.</p>
</dd>
<dt><a href="#getProps">getProps(target, opt)</a> ⇒ <code><a href="#Prop">Array.&lt;Prop&gt;</a></code></dt>
<dd><p>Returns all inherited properties, own properties, special properties, and object permissions.</p>
</dd>
<dt><a href="#assignReferencePoints">assignReferencePoints(props, [host], [path])</a> ⇒ <code><a href="#PropAt">Array.&lt;PropAt&gt;</a></code></dt>
<dd><p>Assigns reference points to a list of properties.</p>
</dd>
<dt><a href="#search">search(host, opt)</a> ⇒ <code>undefined</code></dt>
<dd><p>Non-recursively searches through the host object by queueing its children.
Attaches information based on options.
Determines whether child should be unpacked by checking if it is a primitive.
Keeps track of all object references encountered to avoid circular looping.
Explores object keys via creation of a new Host.</p>
</dd>
<dt><a href="#mergeOptions">mergeOptions(opt)</a> ⇒ <code><a href="#Options">Options</a></code></dt>
<dd><p>Merges supplied options with defaults.</p>
</dd>
</dl>

### Typedefs

<dl>
<dt><a href="#Search">Search</a> : <code>Object</code></dt>
<dd><p>Instance of search generator with loaded parameters. Used when execution of an entire search is not necessary. A <code>for .. of</code> loop on this object will iterate over every result from the search.</p>
</dd>
<dt><a href="#DescriptorEntries">DescriptorEntries</a> : <code>Array</code></dt>
<dd><p>An Array of Arrays with Key at index 0 and a property descriptors object at index 1.</p>
<p><li>Equivalent to the result of <code>Object.entries(Object.getOwnPropertyDescriptors(Target))</code></p>
<p><li> Only relevant property descriptors should be added.</p>
</dd>
<dt><a href="#Custom">Custom</a> : <code>*</code></dt>
<dd><p>Any kind of container that can be used as a target.
Only applicable if an adequate PropsCustomizer is supplied.</p>
</dd>
<dt><a href="#PropsCustomizer">PropsCustomizer</a> ⇒ <code><a href="#DescriptorEntries">DescriptorEntries</a></code></dt>
<dd><p>Function supplied in Options that handles Target objects and returns a descriptor matrix of any children within a Custom container. Returns undefined if not applicable.</p>
</dd>
<dt><a href="#Target">Target</a> : <code>Object</code> | <code>Array</code> | <code>Map</code> | <code>Set</code> | <code><a href="#Custom">Custom</a></code></dt>
<dd><p>Unpacking target for finding children.
Retrieved from the first value in the queue.
Used to supply the queue with more potential targets within Prop objects.</p>
</dd>
<dt><a href="#Permissions">Permissions</a> : <code>Object</code></dt>
<dd><p>The result of the Object permissions tests for a Target object.</p>
</dd>
<dt><a href="#Key">Key</a> : <code>*</code></dt>
<dd><p>Key used for accessing a child value from a Target object.</p>
</dd>
<dt><a href="#Path">Path</a> : <code><a href="#Key">Array.&lt;Key&gt;</a></code></dt>
<dd><p>Array of keys used to describe the children of a Host at each level above a given Prop.</p>
</dd>
<dt><a href="#Host">Host</a> : <code><a href="#Target">Target</a></code></dt>
<dd><p>A non-primitive container which represents the root of a given Path.</p>
</dd>
<dt><a href="#Ref">Ref</a> : <code>Object</code></dt>
<dd><p>Describes the location of a previously encountered target.</p>
</dd>
<dt><a href="#Prop">Prop</a> : <code>Object</code></dt>
<dd><p>Description of the properties found for a given value during the search,</p>
</dd>
<dt><a href="#PropAt">PropAt</a> : <code>Object</code></dt>
<dd><p>Description of a given level of the chain. Transformed Prop Object with location attched.</p>
</dd>
<dt><a href="#Options">Options</a> : <code>Object</code></dt>
<dd><p>Execution-wide settings supplied to the module.
Modifies types of data attached to results.
Modifies types of children to extract.</p>
</dd>
</dl>

# Global Functions

<a name="isPrimitive"></a>

## isPrimitive(x) ⇒ <code>boolean</code>
Determines if x is a JS primitive.
Used to determine if a value should be unpacked.

**Returns**: <code>boolean</code> - True if primitive, false if not.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>\*</code> | Test value. |

**Example**  
```js
// returns true

isPrimitive('foo')
```
**Example**  
```js
// returns false

isPrimitive({})
```
<a name="getObjectPermissions"></a>

## getObjectPermissions(target) ⇒ [<code>Permissions</code>](#Permissions)
Gets the frozen, sealed, and extensible statuses of an object.

**Returns**: [<code>Permissions</code>](#Permissions) - Result of the three Object permissions tests.  

| Param | Type | Description |
| --- | --- | --- |
| target | [<code>Target</code>](#Target) | Target object. |

**Example**  
```js
// returns { parentIsFrozen: false, parentIsSealed: false, parentIsExtensible: true }

getObjectPermissions({})
```
<a name="genPropsFromDescriptorEntries"></a>

## genPropsFromDescriptorEntries(descriptorEntries, permissions, opt) ⇒ [<code>Array.&lt;Prop&gt;</code>](#Prop)
Converts list of descriptors to prop Array.
Attaches information based on options.

**Returns**: [<code>Array.&lt;Prop&gt;</code>](#Prop) - Converted 1D Array of properties.  

| Param | Type | Description |
| --- | --- | --- |
| descriptorEntries | [<code>DescriptorEntries</code>](#DescriptorEntries) | Matrix of keys and descriptors. |
| permissions | [<code>Permissions</code>](#Permissions) | Permissions list. |
| opt | [<code>Options</code>](#Options) | Execution settings. |

**Example**  
```js
// returns [
//   {
//     key: 'foo',
//     value: 'bar',
//     writable: true,
//     enumerable: true,
//     configurable: true,
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   }
// ]

genPropsFromDescriptorEntries(
  [
    [
      'foo',
      {
        value: 'bar',
        writable: true,
        enumerable: true,
        configurable: true
      }
    ]
  ],
  { parentIsFrozen: false, parentIsSealed: false, parentIsExtensible: true },
  { descriptors: true, permissions: true }
)
```
<a name="genProtoProp"></a>

## genProtoProp(target, permissions, opt) ⇒ [<code>Array.&lt;Prop&gt;</code>](#Prop)
Generates a prop for a Target object's prototype. Will attach Target object's permission statuses using the same 'parentIs' language, even though it is not technically a child.

**Returns**: [<code>Array.&lt;Prop&gt;</code>](#Prop) - Array with single entry of '\_\_proto__' key and value.  

| Param | Type | Description |
| --- | --- | --- |
| target | [<code>Target</code>](#Target) | Target object. |
| permissions | [<code>Permissions</code>](#Permissions) | Object permission statuses. |
| opt | [<code>Options</code>](#Options) | Execution settings. |

**Example**  
```js
// returns [
//   {
//     key: '__proto__',
//     value: {},
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   }
// ]

genProtoProp(
  {},
  { parentIsFrozen: false, parentIsSealed: false, parentIsExtensible: true },
  { descriptors: true, permissions: true }
)
```
<a name="getOwnProps"></a>

## getOwnProps(target, permissions, opt) ⇒ [<code>Array.&lt;Prop&gt;</code>](#Prop)
Generates a list of non-inherited properties of a target object.

**Returns**: [<code>Array.&lt;Prop&gt;</code>](#Prop) - Array of associated properties.  

| Param | Type | Description |
| --- | --- | --- |
| target | [<code>Target</code>](#Target) | Target object. |
| permissions | [<code>Permissions</code>](#Permissions) | Object permission statuses. |
| opt | [<code>Options</code>](#Options) | Execution settings. |

**Example**  
```js
// returns [
//   {
//     key: 'foo',
//     value: 'bar',
//     writable: true,
//     enumerable: true,
//     configurable: true,
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   },
//   {
//     key: 'baz',
//     value: 'beh',
//     writable: true,
//     enumerable: true,
//     configurable: true,
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   }
// ]

getOwnProps(
  { foo: 'bar', baz: 'beh' },
  { parentIsFrozen: false, parentIsSealed: false, parentIsExtensible: true },
  { descriptors: true, permissions: true }
)
```
<a name="getMapProps"></a>

## getMapProps(target, permissions, opt) ⇒ [<code>Array.&lt;Prop&gt;</code>](#Prop)
Gets a list of properties within a target Map.

**Returns**: [<code>Array.&lt;Prop&gt;</code>](#Prop) - Array of associated properties.  

| Param | Type | Description |
| --- | --- | --- |
| target | [<code>Target</code>](#Target) | Target object. |
| permissions | [<code>Permissions</code>](#Permissions) | Object permission statuses. |
| opt | [<code>Options</code>](#Options) | Execution settings. |

**Example**  
```js
// returns [
//   {
//     key: 'foo',
//     value: 'bar',
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   },
//   {
//     key: { baz: 'beh' },
//     value: { qux: 'quz' },
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   }
// ]

getMapProps(
  new Map([
    [ 'foo', 'bar' ],
    [ { baz: 'beh' }, { qux: 'quz' } ]
  ]),
  { parentIsFrozen: false, parentIsSealed: false, parentIsExtensible: true },
  { descriptors: true, permissions: true }
)
```
<a name="getSetProps"></a>

## getSetProps(target, permissions, opt) ⇒ [<code>Array.&lt;Prop&gt;</code>](#Prop)
Gets a list of properties within a target Set.
Uses insertion order as keys.

**Returns**: [<code>Array.&lt;Prop&gt;</code>](#Prop) - Array of associated properties.  

| Param | Type | Description |
| --- | --- | --- |
| target | [<code>Target</code>](#Target) | Target object. |
| permissions | [<code>Permissions</code>](#Permissions) | Object permission statuses. |
| opt | [<code>Options</code>](#Options) | Execution settings. |

**Example**  
```js
// returns [
//   {
//     key: '0',
//     value: 1,
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   },
//   {
//     key: '1',
//     value: 2,
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   }
// ]

getSetProps(
  new Set([ 1, 2 ]),
  { parentIsFrozen: false, parentIsSealed: false, parentIsExtensible: true },
  { descriptors: true, permissions: true }
)
```
<a name="getSpecialProps"></a>

## getSpecialProps(target, permissions, opt) ⇒ [<code>Array.&lt;Prop&gt;</code>](#Prop)
Gets any special object properties.
If propsCustomizer is supplied, and returns a defined value from target, then getSpecialProps will return this value.

**Returns**: [<code>Array.&lt;Prop&gt;</code>](#Prop) - Array of associated properties.  

| Param | Type | Description |
| --- | --- | --- |
| target | [<code>Target</code>](#Target) | Target object. |
| permissions | [<code>Permissions</code>](#Permissions) | Object permission statuses. |
| opt | [<code>Options</code>](#Options) | Options. |

**Example**  
```js
const map = new Map(
  [
    [ 'foo', 'bar' ]
  ]
)

// returns [
//   {
//     key: 'foo',
//     value: 'bar',
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   }
// ]

getSpecialProps(
  map,
  { parentIsFrozen: false, parentIsSealed: false, parentIsExtensible: true },
  { descriptors: true, permissions: true }
)
```
**Example**  
```js
const s = new Set(
  [ 'baz', 'beh' ]
)

// returns [
//   {
//     key: '0',
//     value: 'baz',
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   },
//   {
//     key: '1',
//     value: 'beh',
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   }
// ]

getSpecialProps(
  s,
  { parentIsFrozen: false, parentIsSealed: false, parentIsExtensible: true },
  { descriptors: true, permissions: true }
)
```
**Example**  
```js
class NonNativeDataStructure {
  constructor(arr) {
    const values = arr
    this.get = i => values[i]
    this.getValues = () => values
    this.push = x => values.push(x)
  }
}

const custom = new NonNativeDataStructure([ 'qux', 'quz' ])

const propsCustomizer = target => {
  if (target instanceof NonNativeDataStructure) {
    return (
      Object.entries(
        Object.getOwnPropertyDescriptors(
          target.getValues()
        )
      ).filter(
        entry => entry[1].enumerable !== false
      )
    )
  }
}

// returns [
//   {
//     key: '0',
//     value: 'qux',
//     writable: true,
//     enumerable: true,
//     configurable: true,
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   },
//   {
//     key: '1',
//     value: 'quz',
//     writable: true,
//     enumerable: true,
//     configurable: true,
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   }
// ]

getSpecialProps(
  custom,
  { parentIsFrozen: false, parentIsSealed: false, parentIsExtensible: true },
  { descriptors: true, permissions: true, propsCustomizer }
)
```
<a name="getProps"></a>

## getProps(target, opt) ⇒ [<code>Array.&lt;Prop&gt;</code>](#Prop)
Returns all inherited properties, own properties, special properties, and object permissions.

**Returns**: [<code>Array.&lt;Prop&gt;</code>](#Prop) - Array of associated properties.  

| Param | Type | Description |
| --- | --- | --- |
| target | [<code>Target</code>](#Target) | Target object. |
| opt | [<code>Options</code>](#Options) | Execution settings. |

**Example**  
```js
const map = new Map(
  [
    [ 'foo', 'bar' ]
  ]
)

// returns [
//   {
//     key: '__proto__',
//     value: Map {},
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   },
//   {
//     key: 'foo',
//     value: 'bar',
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   }
// ]

getProps(map, { inherited: true, descriptors: true, permissions: true })
```
<a name="assignReferencePoints"></a>

## assignReferencePoints(props, [host], [path]) ⇒ [<code>Array.&lt;PropAt&gt;</code>](#PropAt)
Assigns reference points to a list of properties.

**Returns**: [<code>Array.&lt;PropAt&gt;</code>](#PropAt) - Array of location-tagged Props.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| props | [<code>Array.&lt;Prop&gt;</code>](#Prop) |  | Prop array. |
| [host] | [<code>Host</code>](#Host) |  | Host object. |
| [path] | [<code>Path</code>](#Path) | <code>[]</code> | Path to current proplist. |

**Example**  
```js
let props = [
  {
    key: 'foo',
    value: 'bar',
    parentIsFrozen: false,
    parentIsSealed: false,
    parentIsExtensible: true
  },
  {
    key: { baz: 'beh' },
    value: { qux: 'quz' },
    parentIsFrozen: false,
    parentIsSealed: false,
    parentIsExtensible: true
  }
]

// returns [
//   {
//     path: ['foo'],
//     value: 'bar',
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   },
//   {
//     path: [{ foo: 'bar' }],
//     value: { qux: 'quz' },
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   }
// ]

assignReferencePoints(props)
```
**Example**  
```js
props = [
  {
    key: 'qux',
    value: 'quz',
    parentIsFrozen: false,
    parentIsSealed: false,
    parentIsExtensible: true
  }
]

// returns [
//   {
//     host: { foo: 'bar' },
//     path: ['qux'],
//     value: 'quz',
//     parentIsFrozen: false,
//     parentIsSealed: false,
//     parentIsExtensible: true
//   }
// ]

assignReferencePoints(props, { foo: 'bar' })
```
<a name="search"></a>

## <span style="color:gray">(generator)</span> search(host, opt) ⇒ [<code>PropAt</code>](#PropAt)
Non-recursively searches through the host object by queueing its children.
Attaches information based on options.
Determines whether child should be unpacked by checking if it is a primitive.
Keeps track of all object references encountered to avoid circular looping.
Explores object keys via creation of a new Host.

**Yields**: [<code>PropAt</code>](#PropAt) - Current Prop with attached location. 
**Returns**: <code>undefined</code> - Undefined if done.  

| Param | Type | Description |
| --- | --- | --- |
| host | [<code>Host</code>](#Host) | Host container supplied to module. |
| opt | [<code>Options</code>](#Options) | Execution settings. |

**Example**  
```js
// Searching through an Object

const data = {
  foo: {
    bar: {
      baz: {
        beh: 'qux'
      }
    }
  }
}

const query = search(data, { own: true })
for (let step of query) {
  // iterates once:
  // 1: step === { path: [ 'foo', 'bar', 'baz', 'beh' ], value: 'qux' }
}
```
**Example**  
```js
// Searching through an multi-nested Object

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

const query = search(data, { own: true })
for (let step of query) {
  // iterates 3 times:
  // 1: step === { path: [ 'foo', 'beh', 'lorem' ], value: 'ex'   }
  // 2: step === { path: [ 'bar', 'qux', 'ipsum' ], value: 'igne' }
  // 3: step === { path: [ 'baz', 'quz', 'dolor' ], value: 'vita' }
}
```
<a name="mergeOptions"></a>

## mergeOptions(opt) ⇒ [<code>Options</code>](#Options)
Merges supplied options with defaults.

**Returns**: [<code>Options</code>](#Options) - Execution settings.  

| Param | Type | Description |
| --- | --- | --- |
| opt | [<code>Options</code>](#Options) | Options passed to the module. |

**Example**  
```js
// returns { own: true }

mergeOptions({})
```
**Example**  
```js
// returns { own: false, inherited: true }

mergeOptions({ own: false, inherited: true })
```
**Example**  
```js
// returns {
//   inherited: true,
//   own: true,
//   nonEnumerable: true,
//   permissions: true,
//   descriptors: true,
//   stepwise: true,
//   includeRefValues: true,
//   full: true
// }

mergeOptions({ full: true })
```
**Example**  
```js
// returns {
//   inherited: true,
//   own: true,
//   nonEnumerable: true,
//   permissions: true,
//   descriptors: false,
//   stepwise: true,
//   includeRefValues: true,
//   full: true
// }

mergeOptions({ full: true, descriptors: false })
```

# Global Typedefs

<a name="Search"></a>

## Search : <code>Object</code>
Instance of [search](#search) generator with loaded parameters. Used when execution of an entire search is not necessary. A <code>for .. of</code> loop on this object will iterate over every result from the search.

<a name="DescriptorEntries"></a>

## DescriptorEntries : <code>Array</code>
An Array of Arrays with Key at index 0 and a property descriptors object at index 1.
<ul><li>Equivalent to the result of <code>Object.entries(Object.getOwnPropertyDescriptors(Target))</code>
<li> Only relevant property descriptors should be added.</ul>

**Example**  
```js
[
  [
    'foo',
    {
      value: 'bar',
      writable: true,
      enumerable: true,
      configurable: true
    }
  ]
]
```
<a name="Custom"></a>

## Custom : <code>\*</code>
Any kind of container that can be used as a target.
Only applicable if an adequate PropsCustomizer is supplied.

**Example**  
```js
// This is a kind of container that would require a PropsCustomizer function.
(() => {
  class NonNativeDataStructure {
    constructor(arr) {
      const values = arr
      this.get = i => values[i]
      this.getValues = () => values
      this.push = x => values.push(x)
    }
  }
  return new NonNativeDataStructure([ 'foo', 'bar' ])
})()
```
<a name="PropsCustomizer"></a>

## PropsCustomizer ⇒ [<code>DescriptorEntries</code>](#DescriptorEntries)
Function supplied in Options that handles Target objects and returns a descriptor matrix of any children within a Custom container. Returns undefined if not applicable.

**Returns**: [<code>DescriptorEntries</code>](#DescriptorEntries) - Array of arrays of keys and property descriptor objects.  

| Param | Type | Description |
| --- | --- | --- |
| target | [<code>Target</code>](#Target) | Container to analyze for additional children. |

**Example**  
```js
target => {
  if (target instanceof ArrayBuffer && target.byteLength === 16) {
    // Mapping the output of Object.entries to a DescriptorEntries array.
    return Object.entries(
      new Int8Array(target)
    ).map(entry => (
      [
        entry[0], { value: entry[1] }
      ]
    ))
  }
}
```
<a name="Target"></a>

## Target : <code>Object</code> \| <code>Array</code> \| <code>Map</code> \| <code>Set</code> \| [<code>Custom</code>](#Custom)
Unpacking target for finding children.
Retrieved from the first value in the queue.
Used to supply the queue with more potential targets within Prop objects.

<a name="Permissions"></a>

## Permissions : <code>Object</code>
The result of the Object permissions tests for a Target object.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| parentIsFrozen | <code>boolean</code> | Result of Object.isFrozen(Target) |
| parentIsSealed | <code>boolean</code> | Result of Object.isSealed(Target) |
| parentIsExtensible | <code>boolean</code> | Result of Object.isExtensible(Target) |

<a name="Key"></a>

## Key : <code>\*</code>
Key used for accessing a child value from a Target object.

<a name="Path"></a>

## Path : [<code>Array.&lt;Key&gt;</code>](#Key)
Array of keys used to describe the children of a Host at each level above a given Prop.

<a name="Host"></a>

## Host : [<code>Target</code>](#Target)
A non-primitive container which represents the root of a given Path.

<a name="Ref"></a>

## Ref : <code>Object</code>
Describes the location of a previously encountered target.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [host] | [<code>Host</code>](#Host) | If Host is different than the supplied Host, it will be specified. |
| path | [<code>Path</code>](#Path) | Path of previously encountered target. |

**Example**  
```js
{ path: [ 'foo', 'bar' ] }
```
**Example**  
```js
{ host: { foo: 'bar' }, path: [ 'baz', 'beh' ] }
```
<a name="Prop"></a>

## Prop : <code>Object</code>
Description of the properties found for a given value during the search,

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| key | [<code>Path</code>](#Path) | Key used on the parent (Target) object to retrieve the value. |
| [value] | <code>\*</code> | Value described at the Prop's location (if any). In cases of a previously discovered reference (circular or otherwise), value will be replaced with a ref property (unless opt.showRefValues is true). |
| [writable] | <code>boolean</code> | 'Writable' property descriptor of the value. |
| [enumerable] | <code>boolean</code> | 'Enumerable' property descriptor of the value. |
| [configurable] | <code>boolean</code> | 'Configurable' property descriptor of the value. |
| [parentIsFrozen] | <code>boolean</code> | Frozen status of the parent object. |
| [parentIsSealed] | <code>boolean</code> | Sealed status of the parent object. |
| [parentIsExtensible] | <code>boolean</code> | Extensible status of the parent object. |

**Example**  
```js
{
  key: 'foo',
  value: 'bar',
  writable: true,
  enumerable: true,
  configurable: true,
  parentIsFrozen: false,
  parentIsSealed: false,
  parentIsExtensible: true
}
```
<a name="PropAt"></a>

## PropAt : <code>Object</code>
Description of a given level of the chain. Transformed Prop Object with location attched.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [host] | [<code>Host</code>](#Host) | When a non-primitive key has been encountered, a separate chain will be created with that key. Items on that chain will be labeled with a 'host' property to specify which Host the path applies to. PropAt Objects lacking a 'host' property imply that the path applies to the initially supplied Host. |
| path | [<code>Path</code>](#Path) | Describes the steps taken from the Host in order to reach the Prop's value. |
| [value] | <code>\*</code> | Value described at the Prop's location (if any). In cases of a previously discovered reference (circular or otherwise), value will be replaced with a ref property (unless opt.showRefValues is true). |
| [writable] | <code>boolean</code> | 'Writable' property descriptor of the value. |
| [enumerable] | <code>boolean</code> | 'Enumerable' property descriptor of the value. |
| [configurable] | <code>boolean</code> | 'Configurable' property descriptor of the value. |
| [parentIsFrozen] | <code>boolean</code> | Frozen status of the parent object. |
| [parentIsSealed] | <code>boolean</code> | Sealed status of the parent object. |
| [parentIsExtensible] | <code>boolean</code> | Extensible status of the parent object. |
| [ref] | [<code>Ref</code>](#Ref) | If the value strictly equals a previously discovered Target, the Host and Path of that Target will be provided. |

**Example**  
```js
{
  path: [ 'foo', 'bar', 'baz', 'beh' ],
  value: 'qux',
  writable: true,
  enumerable: true,
  configurable: true,
  parentIsFrozen: false,
  parentIsSealed: false,
  parentIsExtensible: true
}
```
<a name="Options"></a>

## Options : <code>Object</code>
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
| [full] | <code>boolean</code> |  | If true, replaces undefined options with maximum search settings (all options except for propsCustomizer will be set to true). User supplied options supercede any changes here. |
| [propsCustomizer] | [<code>PropsCustomizer</code>](#PropsCustomizer) |  | Function used for custom extraction of PropEntries from a Target. |

**Example**  
```js
{
  inherited: true,
  own: true,
  nonEnumerable: true,
  permissions: true,
  descriptors: true,
  stepwise: true,
  includeRefValues: true,
  gen: true,
  full: true,
  propsCustomizer: target => {
    if (target instanceof ArrayBuffer && target.byteLength === 16) {
      return Object.entries(
        new Int8Array(target)
      ).map(entry => (
        [
          entry[0], { value: entry[1] }
        ]
      ))
    }
  }
}
```