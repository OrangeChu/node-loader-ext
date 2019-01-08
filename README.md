# Node ext Loader

Package for loading native files in Node and Electron applications.

## Installation

Add the package to the development dependencies:

```bash
# using npm:
$ npm install node-loader-ext --save-dev

# using yarn:
$ yarn add --dev node-loader-ext
```

## Usage

Update rules entry in the Webpack configuration file:

```js
module: {
  rules: [
    {
      test: /\.node$/,
      loader: "node-loader-ext"
    }
  ];
}
```