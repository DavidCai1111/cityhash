/* eslint-env mocha */
'use strict'
const cityhash = require('../')
const assert = require('power-assert')

describe('cityhash', function () {
  it('hash32', function () {
    assert(cityhash.hash32('test32') === '69a1e563')
    assert(cityhash.hash32(Buffer.from('test32')) === '69a1e563')
  })

  it('hash64', function () {
    assert(cityhash.hash64('test64') === 'f86e14ad')
    assert(cityhash.hash64(Buffer.from('test64')) === 'f86e14ad')
  })
})
