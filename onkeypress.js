/*
        Copyright (c) 2020 Archivist-Nerd
*/
'use strict';
/*
    exit on keypress
*/
function onKeypress( callback=()=>{}, message='Press any key to exit' ){
  console.log( message )
  process.stdin.setRawMode(true)
  process.stdin.resume()
  process.stdin.on('data', ()=>{
    if (typeof callback === 'function') callback()
  })
}

module.exports = onKeypress;