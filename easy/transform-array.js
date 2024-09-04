const map = (arr, fn) => {
  let transformedArray = [];
  arr.forEach((item, index) => {
    transformedArray.push(fn(item, index));
  });
  return transformedArray;
};
