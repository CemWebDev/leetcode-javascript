/**
 * Creates a counter function that starts from a given number and increments with each call.
 *
 * @param {number} n - The initial value of the counter.
 * @returns {function} - A function that returns the current counter value and then increments it.
 */

const createCounter = (n) => {
  let counter = n;
  return () => counter++;
};

module.exports = createCounter;