/**
 * Filters an array based on a provided function and returns a new array with elements that pass the test.
 * 
 * @param {Array} arr - The array of elements to be filtered.
 * @param {function} fn - The function to test each element. It takes two arguments: the current element and its index. Should return a boolean indicating whether the element should be included in the new array.
 * @returns {Array} - A new array containing only the elements that passed the test.
 */

const filter = (arr, fn) => {
  let filteredArr = [];
  arr.forEach((element, index) => {
    if (fn(element, index)) {
      filteredArr.push(element);
    }
  });
  return filteredArr;
};

module.exports = filter;