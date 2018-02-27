function sortObject(obj) {
  if (!obj || Array.isArray(obj) || typeof obj !== 'object') return obj;

  var keys = Object.keys(obj).sort();

  var values = [];
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    values.push([k, sortObject(obj[k])]);
  }

  return values;
}

function stringifyObject(obj) {
  if (typeof obj === 'string') return obj;
  if (Buffer.isBuffer(obj)) return obj.toString();
  if (Array.isArray(obj)) obj = obj.map(sortObject);

  return JSON.stringify(sortObject(obj));
}

module.exports = { sortObject, stringifyObject };
