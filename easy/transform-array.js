/**
 * Applies a transformation function to each element in an array and returns a new array with the transformed elements.
 *
 * @param {Array} arr - The array of elements to be transformed.
 * @param {function} fn - The function to apply to each element in the array. It takes two arguments: the current element and its index.
 * @returns {Array} - A new array containing the results of applying `fn` to each element in `arr`.
 */

const map = (arr, fn) => {
  let transformedArray = [];
  arr.forEach((item, index) => {
    transformedArray.push(fn(item, index));
  });
  return transformedArray;
};
