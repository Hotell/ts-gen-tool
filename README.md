# Typescript definitions generator

This repo is just a playground for testing out [dts-gen](https://github.com/Microsoft/dts-gen/) and [dts-lint](https://github.com/Microsoft/dtslint) for initial setup and type definition creation of untyped npm packages.

### How to generate type def:

`yarn generate {name-of-npm-package}` so for instance `yarn generate lodash`

### Current state: 07/2017

dts-gen doesn't support generating libraries that are used in browser ( relying on window object for instance, like web-components related stuff - tested on skatejs )

- [see this issue](https://github.com/Microsoft/dts-gen/issues/72)

Tested libs:
- preact ( works -> UMD )
- yargs ( works -> CJS )
- skatejs ( doesn't work -> UMD, fails on `ReferenceError: customElements is not defined`  )
- jquery ( works -> UMD )
- lodash ( works -> IIFE )
