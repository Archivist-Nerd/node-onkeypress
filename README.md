# node-onkeypress
Archivist's onkeypress Package

[![npm version](https://img.shields.io/npm/v/@archivistnerd/onkeypress.svg](https://www.npmjs.com/package/@archivistnerd/onkeypress)

> Calls a callback function after key has been pressed (terminal)

## Installation

```sh
npm install --save @archivistnerd/onkeypress
```

## Usage

```js
'use strict';

const onKeypress = require('@archivistnerd/onkeypress');

process.stdout.write(`Test: onKeypress (Package)\n`)

onKeypress( ()=>{
  process.stdout.write(`Closing\n`)
  process.exit(0)
})
```

## Note

You can change the message as well by providing it as a second argument.

```js
'use strict';

const onKeypress = require('@archivistnerd/onkeypress');

process.stdout.write(`Test: onKeypress (Package)\n`)

onKeypress( ()=>{
  process.stdout.write(`Closing\n`)
  process.exit(0)
}, 'I will close after you press a key...')
```


## License

MIT
