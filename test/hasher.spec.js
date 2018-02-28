const { murmurhash3_32_gc, murmurhash3_128_raw_gc } = require('../src/hasher.js');

describe('helpers', () => {
  describe('murmurhash3_32_gc', () => {
    it('should return a hash', () => {
      expect(murmurhash3_32_gc('Hello, World!', 100)).toBe(1305297264);
    });

    it('different seeds should return different hashes', () => {
      expect(murmurhash3_32_gc('Hello, World!', 1) !== murmurhash3_32_gc('Hello, World!', 10));
    });
  });

  describe('murmurhash3_128_raw_gc', () => {
    it('should return a hash', () => {
      expect(murmurhash3_128_raw_gc('Hello, World!', 100)).toEqual([1144378930, 1125695904, 3198765882, 690283472]);
    });

    it('can deal with huge strings', () => {
      expect(murmurhash3_128_raw_gc(Array(65537).join('a'), 0)).toEqual([2724439033, 136575893, 411989173, 1597363643]);
    });

    it('different seeds should return different hashes', () => {
      expect(murmurhash3_128_raw_gc('Hello, World!', 1) !== murmurhash3_128_raw_gc('Hello, World!', 10));
    });
  });
});
