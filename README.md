# Jest Properties File Loader

[![npm](https://img.shields.io/npm/v/jest-properties-loader.svg)](https://www.npmjs.com/package/jest-properties-loader)
[![Coverage Status](https://coveralls.io/repos/github/aquariuslt/jest-properties-loader/badge.svg?branch=master)](https://coveralls.io/github/aquariuslt/jest-properties-loader?branch=master)


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
