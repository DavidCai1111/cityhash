function sortObject(obj) {
  if (!obj || Array.isArray(obj) || typeof obj !== 'object') return obj;

  const keys = Object.keys(obj).sort();

  const values = [];
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
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
