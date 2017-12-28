/* eslint-env mocha */
'use strict'
const cityhash = require('../')
const assert = require('power-assert')

describe('cityhash', function () {
  it('hash32', function () {
    assert(typeof cityhash.hash32('test32') === 'number')
  })

  it('hash64', function () {
    assert(typeof cityhash.hash64('test64') === 'number')
  })
})
