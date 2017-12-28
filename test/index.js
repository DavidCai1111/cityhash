/* eslint-env mocha */
'use strict'
const cityhash = require('bindings')('cityhash')
const assert = require('power-assert')

describe('cityhash', function () {
  it('hash32', function () {
    assert(typeof cityhash.hash32('test') === 'number')
  })
})
