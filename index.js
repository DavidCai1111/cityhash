'use strict'
const cityhash = require('bindings')('cityhash')

function hash32 (data) {
  return cityhash.hash32(stringifyObject(data)).toString(16)
}

function hash64 (data) {
  return cityhash.hash64(stringifyObject(data)).toString(16)
}

function stringifyObject (obj) {
  if (typeof obj === 'string') return obj
  if (Buffer.isBuffer(obj)) return obj.toString()
  if (Array.isArray(obj)) obj = obj.map(sortObject)

  return JSON.stringify(sortObject(obj))
}

function sortObject (obj) {
  if (!obj || Array.isArray(obj) || typeof o !== 'object') return obj

  const keys = Object.keys(obj)
  keys.sort()

  const values = []
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i]
    values.push([k, sortObject(obj[k])])
  }

  return values
}

module.exports = { hash32, hash64 }
