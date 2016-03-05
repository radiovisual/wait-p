# wait-p [![Build Status](https://travis-ci.org/radiovisual/wait-p.svg?branch=master)](https://travis-ci.org/radiovisual/wait-p)

> Wait for a specified amount of time, then return a promise.


## Install

```
$ npm install --save wait-p
```


## Usage

```js
const wait = require('wait-p');

wait(100).then(() => {
    // 100 ms later ...
});
```


## API

### waitp(input)

#### input

Type: `number`

The amount of milliseconds you want to wait.

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
