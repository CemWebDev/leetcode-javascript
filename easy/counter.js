const createCounter = (n) => {
  let counter = n;
  return () => counter++;
};
