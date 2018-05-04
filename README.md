# deep-props

[![NPM](https://nodei.co/npm/deep-props.png)](https://nodei.co/npm/deep-props/)

Provides a collection of tools for performing operations on deeply nested object properties, prototypes, and object keys. Avoids stack limit violations by using task queues rather than recursion. Allows for custom execution settings including non-native dataset handling.

More submodules coming soon!

<a name="submodules"></a>
#### Submodules:
<ul>
  <li><a href=/libs/extract/README.md><strong>extract</strong></a>

  <a href=https://nodei.co/npm/deep-props.extract/ alt='NPM'><img src="https://nodei.co/npm/deep-props.extract.png?mini=true"></a>
  <ul>
    <li>Creates an array of deep paths and properties associated with an object. Non-recursively iterates through deep objects until an endpoint is reached. Optionally unpacks prototypes and non-enumerable property descriptors. Supports Objects, Arrays, Maps, and Sets automatically.
  </ul>
</ul>

## Getting Started

### Prerequisites

Node.JS version 8.7.0 or above.

### Installing

Installing all modules:
```
npm install deep-props
```
Submodules may be installed individually. See <a href=#submodules>the module list</a> above.

### Testing

The following command will test the package for errors. It prints a large selection of examples to the console; scroll through its output if you want to learn more about the utility.

```
npm test --prefix /path/to/node_modules/deep-props
```

### Deployment

```js
const props = require('deep-props')
const extract = props.extract
```

## Documentation

##### Module README files:
* [extract](/libs/extract/README.md)

##### API Usage Documentation files:
* [extract](/libs/extract/docs/API.md)

##### Module-Specific Type Definitions and Functions:
* [extract](/libs/extract/docs/global.md)

##### Global Namespace Type Definitions:
* [deep-props](/docs/global.md)

## Versioning

Versioned using [SemVer](http://semver.org/). For available versions, see the [tags on this repository](https://github.com/jpcx/deep-props/tags).

## Contribution

Please raise an issue if you find any. Suggestions are welcome!

## Author

* **Justin Collier** - [jpcx](https://github.com/jpcx)

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details
