var stringifyObject = require('./helpers.js').stringifyObject;
var hasher = require('./hasher.js');

function hash32(data) {
  if (!data) {
    throw new Error();
  }
  return hasher.murmurhash3_32_gc(data, 0).toString();
}

function hash128(data) {
  if (!data) {
    throw new Error();
  }
  var hash = hasher.murmurhash3_128_raw_gc(data, 0);
  return hash.reduce((a, b)=> String(a)+String(b));
}

module.exports = { hash32, hash128 };
