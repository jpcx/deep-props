# deep-props

[![NPM](https://nodei.co/npm/deep-props.png)](https://nodei.co/npm/deep-props/)

__Migration notice: users of deep-props <= v0.0.8 must replace module calls with deep-props.extract. See the [deployment instructions](#deployment) below or install the [deep-props.extract](https://github.com/jpcx/deep-props.extract/blob/$$${alias///deep-props.extract_tag///}$$$/README.md) standalone package. All other functionality is the same.__

$$${file///package.json///split-gm///^  "description": "([\s\S]+?)",?\n///}$$$

<a name="submodules"></a>
#### Submodules:
+ __[extract](https://github.com/jpcx/deep-props.extract/blob/$$${alias///deep-props.extract_tag///}$$$/README.md)__

  [![NPM](https://nodei.co/npm/deep-props.extract.png?mini=true)](https://nodei.co/npm/deep-props.extract/)
  + $$${file///libs/extract/package.json///split-gm///^  "description": "([\s\S]+?)",?\n///}$$$
+ __[get](https://github.com/jpcx/deep-props.get/blob/$$${alias///deep-props.get_tag///}$$$/README.md)__

  [![NPM](https://nodei.co/npm/deep-props.get.png?mini=true)](https://nodei.co/npm/deep-props.get/)
  + $$${file///libs/get/package.json///split-gm///^  "description": "([\s\S]+?)",?\n///}$$$

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
+ [extract](https://github.com/jpcx/deep-props.extract/blob/$$${alias///deep-props.extract_tag///}$$$/README.md)
+ [get](https://github.com/jpcx/deep-props.get/blob/$$${alias///deep-props.get_tag///}$$$/README.md)

##### API Usage Documentation files:
+ [extract](https://github.com/jpcx/deep-props.extract/blob/$$${alias///deep-props.extract_tag///}$$$/docs/API.md)
+ [get](https://github.com/jpcx/deep-props.get/blob/$$${alias///deep-props.get_tag///}$$$/docs/API.md)

##### Module-Specific Type Definitions and Functions:
+ [extract](https://github.com/jpcx/deep-props.extract/blob/$$${alias///deep-props.extract_tag///}$$$/global.md)
+ [get](https://github.com/jpcx/deep-props.get/blob/$$${alias///deep-props.get_tag///}$$$/docs/global.md)

##### Global Namespace Type Definitions:
+ [deep-props](https://github.com/jpcx/deep-props/blob/$$${alias///deep-props_tag///}$$$/docs/global.md)

## Versioning

Versioned using [SemVer](http://semver.org/). For available versions, see the [Changelog](https://github.com/jpcx/deep-props/blob/$$${alias///deep-props_tag///}$$$/CHANGELOG.md).

## Contribution

Please raise an issue if you find any. Pull requests are welcome!

## Author

+ **Justin Collier** - [jpcx](https://github.com/jpcx)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/jpcx/deep-props/blob/$$${alias///deep-props_tag///}$$$/LICENSE) file for details
