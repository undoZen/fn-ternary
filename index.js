module.exports = function (fn) {
  return function (a, b, c) {
    return fn.call(this, a, b, c);
  }
};
