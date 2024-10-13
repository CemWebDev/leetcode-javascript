/**
 * Creates a function that, when called, returns the string "Hello World".
 *
 * @returns {function} - A function that returns the string "Hello World".
 */

const createHelloWorld = () => {
  return () => "Hello World";
};

module.exports = createHelloWorld;