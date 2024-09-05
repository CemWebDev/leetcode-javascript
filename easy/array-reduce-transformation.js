const reduce = (numbers, fn, init) => {
  numbers.forEach((element) => {
    init = fn(init, element);
  });
  return init;
};
