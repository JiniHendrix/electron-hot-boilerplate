
// Can be used as a mocha compiler
// mocha --compilers electron-hot/compiler.js
// This will not instrument the files and hot reload will be disabled
require('./jsxTransform').install({doNotInstrument: true});