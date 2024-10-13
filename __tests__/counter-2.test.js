const createCounter = require('../easy/counter-2');

describe('createCounter', () => {
  const testCases = [
    { startValue: 5, method: 'increment', expected: [6, 7, 8] },
    { startValue: 9, method: 'decrement', expected: [8, 7, 6] },
    { startValue: 5, method: 'increment', expected: [6, 7, 8], reset: 5 },
    { startValue: 5, method: 'decrement', expected: [4, 3, 2, 1], reset: 5 },
  ];

  testCases.forEach(({ startValue, method, expected, reset }) => {
    test(`should ${method} correctly multiple times starting from ${startValue}`, () => {
      const counter = createCounter(startValue);
      expected.forEach((value) => {
        expect(counter[method]()).toBe(value);
      });
    });

    if (reset !== undefined) {
      test(`should reset correctly after ${method} starting from ${startValue}`, () => {
        const counter = createCounter(startValue);
        expected.forEach((value) => {
          expect(counter[method]()).toBe(value);
        });
        expect(counter.reset()).toBe(reset);
      });
    }
  });
});
