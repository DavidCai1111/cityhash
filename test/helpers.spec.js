const { stringifyObject } = require('../helpers.js');

describe('helpers', () => {
  describe('stringifyObject', () => {
    it('should return a string when given a string', () => {
      expect(typeof stringifyObject('Hello, World!')).toBe('string');
    });

    it('should return a string when given a buffer object', () => {
      const testObj = Buffer.from('Hello, World!');
      const result = stringifyObject(testObj);
      expect(typeof result).toBe('string');
    });

    it('should a string when given an array', () => {
      const testObj = { b: 2, a: 0 };
      const result = stringifyObject(testObj);
      expect(typeof result).toBe('string');
      expect(result).toBe('[["a",0],["b",2]]');
    });

    it('should a sort and return string when given an object', () => {
      const testObj = [{ b: 2, a: 0 }];
      const result = stringifyObject(testObj);
      expect(typeof result).toBe('string');
      expect(result).toBe('[[["a",0],["b",2]]]');
    });
  });
});
