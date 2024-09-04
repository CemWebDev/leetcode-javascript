const reduce = (nums, fn, init) => {
  nums.forEach((element) => {
    init = fn(init, element);
  });
  return init;
};
