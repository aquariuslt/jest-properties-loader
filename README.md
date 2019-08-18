# Jest Properties File Loader

[![NPM](https://img.shields.io/npm/v/jest-properties-loader.svg)](https://www.npmjs.com/package/jest-properties-loader)
[![Github Workflow Status](https://github.com/aquariuslt/jest-properties-loader/workflows/Node%20CI/badge.svg)](https://github.com/aquariuslt/jest-properties-loader)
[![codecov](https://codecov.io/gh/aquariuslt/jest-properties-loader/branch/master/graph/badge.svg)](https://codecov.io/gh/aquariuslt/jest-properties-loader)

> Provide a transform solution to load `.properties` file as json in jest test


## Usage


### Installation

```bash
yarn add -D jest-properties-loader
```

### Setup

add to you jest configuration `transform` field

```
"transform": {
  "^.+\\.properties?$": "jest-properties-loader"
}
```
