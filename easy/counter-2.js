/**
 * Creates a counter object with methods to increment, decrement, and reset the counter.
 *
 * @param {number} init - The initial value of the counter.
 * @returns {object} - An object with three methods:
 *   - `increment()`: Increases the counter by 1 and returns the new value.
 *   - `reset()`: Resets the counter to the initial value and returns the new value.
 *   - `decrement()`: Decreases the counter by 1 and returns the new value.
 */

const createCounter = (init) => {
  let counter = init;
  return {
    increment: () => ++counter,
    reset: () => {
      counter = init;
      return counter;
    },
    decrement: () => --counter,
  };
};

module.exports = createCounter;