'use strict'
const cityhash = require('bindings')('cityhash')

function hash32 (data) {
  if (typeof data !== 'string') throw new Error(`${data} should be string`)

  return cityhash.hash32(data)
}

module.exports = { hash32 }
