const cityhash = require('../');

describe('cityhash', () => {
  describe('32 bit hash', () => {
    it('creates a 32 bit hash', () => {
      expect(cityhash.hash32('test32')).toBe('69a1e563');
    });

    it('fails when passed empty string', () => {
      expect(() => { cityhash.hash32(''); }).toThrowError();
    });

    it('fails when passed a null', () => {
      expect(() => { cityhash.hash32(null); }).toThrowError();
    });
  });

  describe('64 bit hash', () => {
    it('creates hash when passed a string', () => {
      expect(cityhash.hash64('test64')).toBe('43f7033ff86e1400');
    });

    it('fails when passed empty string', () => {
      expect(() => { cityhash.hash64(''); }).toThrowError();
    });

    it('fails when passed a null', () => {
      expect(() => { cityhash.hash64(null); }).toThrowError();
    });
  });

  describe('128 bit hash', () => {
    it('creates hash when passed a string', () => {
      const expectedResult = '5727368513929872727368513929872';
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
