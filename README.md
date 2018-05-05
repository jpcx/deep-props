# deep-props

[![NPM](https://nodei.co/npm/deep-props.png)](https://nodei.co/npm/deep-props/)

__Migration notice: users of deep-props ≤ v0.0.8 must replace module calls with deep-props.extract. See the [deployment instructions](#deployment) below or install the [deep-props.extract](/libs/extract/README.md) standalone package. All other functionality is the same.__

Provides a collection of tools for performing operations on deeply nested object properties, prototypes, and object keys. Avoids stack limit violations by using task queues rather than recursion. Allows for custom execution settings including non-native dataset handling.

<a name="submodules"></a>
#### Submodules:
+ __[extract](/libs/extract/README.md)__

  [![NPM](https://nodei.co/npm/deep-props.extract.png?mini=true)](https://nodei.co/npm/deep-props.extract/)
  + Creates an array of deep paths and properties associated with an object. Non-recursively iterates through deep objects until an endpoint is reached. Optionally unpacks prototypes and non-enumerable property descriptors. Supports Objects, Arrays, Maps, and Sets automatically.
+ __[get](/libs/get/README.md)__

  [![NPM](https://nodei.co/npm/deep-props.get.png?mini=true)](https://nodei.co/npm/deep-props.get/)
  + Retrieves a nested property from a data source by iterating over a supplied path. Supports Objects, Arrays, Maps, Weakmaps, and JSON strings automatically. Supports the use of a custom extraction function to handle unsupported datasets.

## Getting Started

### Prerequisites

Node.JS version 8.7.0 or above.

### Installing

Installing all modules:

```console
npm install deep-props
```

Submodules may be installed individually. See [the module list](#submodules) above.

### Testing

The following command will test the package for errors. It prints a large selection of examples to the console; scroll through its output if you want to learn more about the utility.

```console
npm test --prefix /path/to/node_modules/deep-props
```

<a name="deployment"></a>
### Deployment

```js
const props = require('deep-props')
const extract = props.extract
const get = props.get
```

## Documentation

##### Module README files:
+ [extract](/libs/extract/README.md)
+ [get](/libs/get/README.md)

##### API Usage Documentation files:
+ [extract](/libs/extract/docs/API.md)
+ [get](/libs/get/docs/API.md)

##### Module-Specific Type Definitions and Functions:
+ [extract](/libs/extract/docs/global.md)
+ [get](/libs/get/docs/global.md)

##### Global Namespace Type Definitions:
+ [deep-props](/docs/global.md)

## Versioning

Versioned using [SemVer](http://semver.org/). For available versions, see the [tags on this repository](https://github.com/jpcx/deep-props/tags).

## Contribution

Please raise an issue if you find any. Suggestions are welcome!

## Author

+ **Justin Collier** - [jpcx](https://github.com/jpcx)

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details
