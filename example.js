'use strict';

const onKeypress = require('./onkeypress');


process.stdout.write(`Test onKeypress Package\n`)

onKeypress( ()=>{
  process.stdout.write(`Closing\n`)
  process.exit(0)
})