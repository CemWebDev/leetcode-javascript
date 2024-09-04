const filter = (arr, fn) => {
    let filteredArr = [];
    arr.forEach((element, index) => {
      if (fn(element, index)) {
        filteredArr.push(element);
      }
    });
    return filteredArr;
  };
  