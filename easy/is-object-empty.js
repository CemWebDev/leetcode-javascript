const isEmpty = (obj) => {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  } else if (Object.prototype.toString.call(obj) === "[Object Object]") {
    return Object.keys(obj).length === 0;
  }
  return false;
};
