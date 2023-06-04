const assertEquals = require('./assert-equals')

describe('assertEquals', () => {
  // String tests
  describe('when expected and actual are the same string', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals('abc', 'abc')).not.toThrow()
    })
  })

  describe('when expected and actual are different strings', () => {
    it('throws an error', () => {
      expect(() => assertEquals('abcdef', 'abc'))
      .toThrow('Expected "abcdef" but found "abc"');
    });
  });

  // Number tests
  describe('when expected and actual are the same number', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(123, 123)).not.toThrow()
    })
  });

  describe('when expected and actual are different numbers', () => {
    it('throws an error', () => {
      expect(() => assertEquals(123, 456))
      .toThrow('Expected 123 but found 456');
    });
  });

  describe('when expected and actual are NaN', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(NaN, NaN)).not.toThrow()
    })
  });

  describe('when expected is NaN and actual is not NaN', () => {
    it('throws an error', () => {
      expect(() => assertEquals(NaN, 456))
      .toThrow('Expected NaN but found 456');
    });
  });

  // Array tests
  describe('when expected and actual are the same array', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals([1, 2, 3], [1, 2, 3])).not.toThrow()
    })
  });

  describe('when expected and actual are the same array containing strings', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(['abc', 'def'], ['abc', 'def'])).not.toThrow()
    });
  });

  describe('when expected and actual are different arrays containing strings', () => {
    it('throws an error', () => {
      expect(() => assertEquals(['abc', 'def'], ['abc', 'xyz']))
      .toThrow('Expected "def" but found "xyz" at index 1');
    });
  });

  describe('when expected and actual are different arrays with more than 1 element not matching', () => {
    it('throws an error', () => {
      expect(() => assertEquals(['abc', 'def', 'lmn'], ['abc', 'xyz', 'ghi']))
      .toThrow('Expected "def" but found "xyz" at index 1, Expected "lmn" but found "ghi" at index 2');
    });
  });

  describe('when expected and actual are different arrays', () => {
    it('throws an error', () => {
      expect(() => assertEquals([1, 2, 3], [1, 2, 4]))
      .toThrow('Expected 3 but found 4 at index 2');
    });
  });

  describe('when expected and actual are arrays of different lengths', () => {
    it('throws an error', () => {
      expect(() => assertEquals([1, 2, 3], [1, 2]))
      .toThrow('Expected array length 3 but found 2');
    });
  });

  describe('when expected and actual are arrays of different types', () => {
    it('throws an error', () => {
      expect(() => assertEquals([1, 2, 3], '123'))
      .toThrow('Expected type object but found type string');
    });
  });

  // Boolean tests
  describe('when expected and actual are the same boolean', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals(true, true)).not.toThrow()
    })
  });

  describe('when expected and actual are different booleans', () => {
    it('throws an error', () => {
      expect(() => assertEquals(true, false))
      .toThrow('Expected true but found false');
    });
  });

  describe('when expected and actual are different types', () => {
    it('throws an error', () => {
      expect(() => assertEquals(true, 1))
      .toThrow('Expected type boolean but found type number');
    });
  });
})