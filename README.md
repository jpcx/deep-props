# deep-props

[![NPM](https://nodei.co/npm/deep-props.png)](https://nodei.co/npm/deep-props/)

__Migration notice: users of deep-props <= v0.0.8 must replace module calls with deep-props.extract. See the [deployment instructions](#deployment) below or install the [deep-props.extract](https://github.com/jpcx/deep-props.extract/blob/0.1.4/README.md) standalone package. All other functionality is the same.__

Provides a collection of tools for performing operations on deeply nested object properties, prototypes, and object keys. Avoids stack limit violations by using task queues rather than recursion. Allows for custom execution settings including non-native dataset handling.

<a name="submodules"></a>
#### Submodules:
  + __[extract](https://github.com/jpcx/deep-props.extract/blob/0.1.4/README.md)__

    [![NPM](https://nodei.co/npm/deep-props.extract.png?mini=true)](https://nodei.co/npm/deep-props.extract/)
    + Creates an array of deep paths and properties associated with an object. Non-recursively iterates through deep objects until an endpoint is reached. Optionally unpacks prototypes and non-enumerable property descriptors. Supports Objects, Arrays, Maps, and Sets automatically.
  + __[get](https://github.com/jpcx/deep-props.get/blob/0.1.3/README.md)__

    [![NPM](https://nodei.co/npm/deep-props.get.png?mini=true)](https://nodei.co/npm/deep-props.get/)
    + Retrieves a nested property from a data source by iterating over a supplied path. Supports Objects, Arrays, Maps, Sets, WeakMaps, and JSON strings automatically. Supports the use of a custom extraction function to handle unsupported datasets.

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

Please see the associated README files for general usage information.

API docs contain module parameters and return information. Links to type definitions are provided as well in order to explain in detail the types of expected inputs and outputs.

Global docs contain all type definitions and functions used internally.

##### README Files:
  + [extract](https://github.com/jpcx/deep-props.extract/blob/0.1.4/README.md)
  + [get](https://github.com/jpcx/deep-props.get/blob/0.1.3/README.md)

##### API Docs:
  + [deep-props](https://github.com/jpcx/deep-props/blob/0.2.5/docs/API.md)
  + [extract](https://github.com/jpcx/deep-props.extract/blob/0.1.4/docs/API.md)
  + [get](https://github.com/jpcx/deep-props.get/blob/0.1.3/docs/API.md)

##### Changelogs:
  + [deep-props](https://github.com/jpcx/deep-props/blob/0.2.5/CHANGELOG.md)
  + [extract](https://github.com/jpcx/deep-props.extract/blob/0.1.4/CHANGELOG.md)
  + [get](https://github.com/jpcx/deep-props.get/blob/0.1.3/CHANGELOG.md)

##### Type Definitions and Global Functions:
  + [deep-props](https://github.com/jpcx/deep-props/blob/0.2.5/docs/global.md)
  + [extract](https://github.com/jpcx/deep-props.extract/blob/0.1.4/global.md)
  + [get](https://github.com/jpcx/deep-props.get/blob/0.1.3/docs/global.md)

## Versioning

Versioned using [SemVer](http://semver.org/). For available versions, see the [Changelog](https://github.com/jpcx/deep-props/blob/0.2.5/CHANGELOG.md).

## Contribution

Please raise an issue if you find any. Pull requests are welcome!

## Author

  + **Justin Collier** - [jpcx](https://github.com/jpcx)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/jpcx/deep-props/blob/0.2.5/LICENSE) file for details
