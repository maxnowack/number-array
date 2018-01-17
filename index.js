'use strict';

function defaultCompare(a, b) {
  return a < b;
}

module.exports = function (endValue, offset, step, compare) {
  const arr = [];
  const comp = compare || defaultCompare;
  for (let i = 0; comp(arr.length, endValue); i += (step || 1)) {
    arr.push(i + (offset || 0));
  }
  return arr;
};
