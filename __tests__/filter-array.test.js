const filter = require('../easy/filter-array');

describe('filter', () => {
  const testCases = [
    { arr: [1, 2, 3, 4, 5], expected: [4, 5], fn: (element) => element > 3 },
    { arr: [1, 2, 3, 4, 5], expected: [], fn: (element) => element > 5 },
    { arr: [1, 2, 3], expected: [1, 3], fn: (_, index) => index % 2 === 0 },
  ];

  testCases.forEach(({ arr, expected, fn }) => {
    test('should filter array based on the provided function', () => {
      const result = filter(arr, fn);
      expect(result).toEqual(expected);
    });
  });
});
