var assert = require('assert');
var ternary = require('../');
describe('fn-ternary', function () {
  it('fn.length should be 3', function () {
    var fn = function (a, b, c, d) {};
    assert(ternary(fn).length == 3);
  });
  it('should be called with exactly three arguments', function () {
    var fn = function (a, b, c) {
      return arguments.length;
    }
    assert(ternary(fn)() == 3);
  });
  it('third argument should be undefined', function () {
    var fn = function (a, b, c, d) {
      return typeof d;
    }
    assert(ternary(fn)(1,2,3,4) === 'undefined');
  });
});
