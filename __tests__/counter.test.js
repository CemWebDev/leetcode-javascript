const createCounter = require('../easy/counter');

describe('createCounter', () => {
  const testCases = [
    { startValue: 5, expected: [5, 6, 7] },
    { startValue: 16, expected: [16, 17, 18] },
    { startValue: 0, expected: [0, 1, 2] },
  ];
  testCases.forEach(({ startValue, expected }) => {
    test(`should start from ${startValue} and increment correctly`, () => {
      const counter = createCounter(startValue);
      expected.forEach((value) => {
        expect(counter()).toBe(value);
      });
    });
  });
});
