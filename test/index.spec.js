const cityhash = require('../');

describe('cityhash', () => {
  describe('32 bit hash', () => {
    it('creates a 32 bit hash', () => {
      expect(cityhash.hash32('test32')).toBe('145582540');
    });

    it('fails when passed empty string', () => {
      expect(() => { cityhash.hash32(''); }).toThrowError();
    });

    it('fails when passed a null', () => {
      expect(() => { cityhash.hash32(null); }).toThrowError();
    });
  });
  describe('128 bit hash', () => {
    it('creates hash when passed a string', () => {
      const expectedResult = '222681182421976717642197671764219767176';
      const actualResult = cityhash.hash128('test128');
      expect(actualResult).toBe(expectedResult);
    });

    it('fails when passed empty string', () => {
      expect(() => { cityhash.hash128(''); }).toThrowError();
    });

    it('fails when passed a null', () => {
      expect(() => { cityhash.hash128(null); }).toThrowError();
    });
  });
});
