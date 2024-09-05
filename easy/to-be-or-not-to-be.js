/**
 * Creates an object with methods for testing value equality.
 *
 * @param {*} val - The value to be tested.
 * @returns {object} - An object with two methods:
 *   - `toBe(expected)`: Checks if `val` is strictly equal to `expected`. Throws an error if they are not equal.
 *   - `notToBe(expected)`: Checks if `val` is not strictly equal to `expected`. Throws an error if they are equal.
 */

const expect = (val) => {
  return {
    toBe: (expected) => {
      if (val === expected) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (expected) => {
      if (val !== expected) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};
