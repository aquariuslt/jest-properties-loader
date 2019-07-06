# Jest Properties File Loader




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
