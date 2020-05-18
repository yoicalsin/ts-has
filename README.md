# ts-has

ts-has is [has](https://github.com/tarruda/has) for typescript

<a href="https://github.com/yoicalsin/ts-has"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/ts-has" target="_blank">
<img src="https://img.shields.io/npm/v/ts-has" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/ts-has" target="_blank">
<img src="https://img.shields.io/npm/l/ts-has" alt="Package License" /></a>
<a href="https://www.npmjs.com/ts-has" target="_blank">
<img src="https://img.shields.io/npm/dm/ts-has" alt="NPM Downloads" /></a>
<a href="https://github.com/yoicalsin/ts-has" target="_blank">
<img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
<a href="https://github.com/yoicalsin/ts-has"><img src="https://img.shields.io/badge/Github%20Page-ts.has-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yoicalsin"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yoicalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yoicalsin.svg?style=social&label=Follow"></a>

> Object.prototype.hasOwnProperty.call shortcut

## 🎉 Installation

```bash
# Using npm
npm install --save ts-has

# Using yarn
yarn add --save ts-has
```

## 🎹 Usage

```js
import has from 'has';

has({}, 'hasOwnProperty'); // false
has(Object.prototype, 'hasOwnProperty'); // true
```
