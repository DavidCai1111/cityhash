/* eslint-env mocha */
'use strict'
const cityhash = require('../')
const assert = require('power-assert')

describe('cityhash', function () {
  it('creates a 32 bit hash', function () {
    assert(cityhash.hash32('test32') === '69a1e563')
    assert(cityhash.hash32(Buffer.from('test32')) === '69a1e563')
  })

  it('creates a 64 bit hash', function () {
    assert(cityhash.hash64('test64') === '43f7033ff86e1400')
    assert(cityhash.hash64(Buffer.from('test64')) === '43f7033ff86e1400')
  })

  it('creates a 128 bit hash', function () {
    console.log(cityhash.hash128('test128'))
  })
})
