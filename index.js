const cityhash = require('bindings')('cityhash');
const { stringifyObject } = require('./helpers.js');

function hash32(data) {
  if (!data) {
    throw new Error();
  }
  return cityhash.hash32(stringifyObject(data)).toString(16);
}

function hash64(data) {
  if (!data) {
    throw new Error();
  }
  return cityhash.hash64(stringifyObject(data)).toString(16);
}

function hash128(data) {
  if (!data) {
    throw new Error();
  }
  let result = cityhash.hash128(stringifyObject(data)).toString(16);
  result = result.substring(0, result.length - 1);
  return result;
}

module.exports = { hash32, hash64, hash128 };
