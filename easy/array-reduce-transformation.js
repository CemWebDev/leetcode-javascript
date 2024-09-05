/**
 * Reduces an array of numbers to a single value using a provided function and initial value.
 *
 * @param {number[]} numbers - The array of numbers to reduce.
 * @param {function} fn - The function to apply to each element and the accumulator. It takes two arguments: the accumulator and the current element.
 * @param {number} init - The initial value of the accumulator.
 * @returns {number} - The final reduced value after applying the function to all elements.
 */

const reduce = (numbers, fn, init) => {
  numbers.forEach((element) => {
    init = fn(init, element);
  });
  return init;
};
