/**
 * Returns the number of arguments passed to the function.
 *
 * @param {...(null|boolean|number|string|Array|Object)} args - The arguments to count. Can be of any type including `null`, `boolean`, `number`, `string`, `Array`, or `Object`.
 * @return {number} - The number of arguments passed to the function.
 */

const argumentsLength = (...args) => {
  return args.length;
};
