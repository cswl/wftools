const isEmpty = obj =>
  [Object, Array].includes((obj || {}).constructor) &&
  !Object.entries(obj || {}).length;

const withOut = (obj, keys) => {
  const result = {};
  Object.entries(obj).forEach(([key, val]) => {
    if (!keys.includes(key)) {
      result[key] = val;
    }
  });
  return result;
};

const filterEntries = (source, predicate) => {
  return Object.entries(source)
    .filter(predicate)
    .reduce((obj, [key]) => {
      return {
        ...obj,
        [key]: source[key],
      };
    }, {});
};

const countKeys = obj => {
  return Object.keys(obj).length + 1;
};

export { isEmpty, withOut, filterEntries, countKeys };
