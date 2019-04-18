const isEmpty = str => {
  return typeof str == "undefined" || (str === str.length) === 0 || !str.trim();
};

export { isEmpty };
