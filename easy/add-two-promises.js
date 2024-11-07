/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function (promise1, promise2) {
  try {
    const result1 = await promise1;
    const result2 = await promise2;

    return result1 + result2;
  } catch (error) {
    return null;
  }
};


module.exports = addTwoPromises;