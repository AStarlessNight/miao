"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var astarlessnight = function () {
  /* 一些通用函数 */
  //把字符串转判断函数
  function property(predicate) {
    return function (obj) {
      return obj[predicate];
    };
  } //把对象转判断函数


  function matches(predicate) {
    return function (obj) {
      for (var i in predicate) {
        if (obj[i] !== predicate[i]) {
          return false;
        }
      }

      return true;
    };
  } //把数组转判断函数


  function matchesProperty(predicate) {
    return matches(fromPairs(chunk(predicate, 2)));
  } //把可能的输入转判断函数


  function iteratee(predicate) {
    if (typeof predicate === "string") {
      predicate = property(predicate);
    } else if (Array.isArray(predicate)) {
      predicate = matchesProperty(predicate);
    } else if (_typeof(predicate) === "object") {
      predicate = matches(predicate);
    }

    return predicate;
  }

  function filter(ary, predicate) {
    predicate = iteratee(predicate);
    return ary.filter(predicate);
  }

  function chunk(array) {
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var result = new Array(Math.ceil(array.length / size));
    var count = array.length / size | 0;
    var idx = 0;
    var start = 0;

    for (var i = 1; i <= count; i++) {
      result[idx++] = array.slice(start, start + size);
      start = start + size;
    }

    if (start != array.length) {
      result[idx++] = array.slice(start);
    }

    return result;
  }

  function keyBy(ary, by) {
    var f = by;

    if (typeof by === "string") {
      f = function f(it) {
        return it[by];
      };
    }

    return ary.reduce(function (result, item) {
      var key = f(item);
      result[key] = item;
      return result;
    }, {});
  }

  function groupBy(ary, by) {
    var f = by;

    if (typeof by === "string") {
      f = function f(it) {
        return it[by];
      };
    }

    return ary.reduce(function (result, item) {
      var key = f(item);

      if (!(key in result)) {
        result[key] = [];
      }

      result[key].push(item);
      return result;
    }, {});
  } //不太好的写法

  /*     function flattenDeep(ary) {
      return ary.reduce((prev, item, idx, ary) => {
          if (Array.isArray(item)) {
              while (item.some(x => Array.isArray(x))) {
                  item = flatten(item)
              }
              prev.push(...item)
          } else {
              prev.push(item)
          }
          return prev
      }, [])
  } */

  /*     function flattenDepth(ary, depth = 1) {
      if (depth <= 0) {
          return [...ary]
      }
      return ary.reduce((prev, item, idx, ary) => {
          if (Array.isArray(item)) {
              let temp = depth
              while (--temp) {
                  item = flatten(item)
              }
              prev.push(...item)
          } else {
              prev.push(item)
          }
          return prev
      }, [])
  } */

  /* 
      function flatten(ary) {
          return ary.reduce(((prev, item, idx, ary) => ((Array.isArray(item) ? prev.push(...item) : prev.push(item)), prev)), [])
      } */


  function flattenDeep(ary) {
    return ary.reduce(function (prev, item) {
      if (Array.isArray(item)) {
        prev.push.apply(prev, _toConsumableArray(flattenDeep(item)));
      } else {
        prev.push(item);
      }

      return prev;
    }, []);
  }

  function flattenDepth(ary) {
    var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    if (depth <= 0) {
      return _toConsumableArray(ary);
    }

    return ary.reduce(function (prev, item) {
      if (Array.isArray(item)) {
        prev.push.apply(prev, _toConsumableArray(flattenDepth(item, depth - 1)));
      } else {
        prev.push(item);
      }

      return prev;
    }, []);
  }

  function flatten(ary) {
    var _ref;

    return (_ref = []).concat.apply(_ref, _toConsumableArray(ary));
  } //concat写法效率过低

  /*     function flattenDeep(ary) {
          return ary.reduce((prev, item) => {
              if (Array.isArray(item)) {
                  prev = prev.concat(flattenDeep(item))
              } else {
                  prev.push(item)
              }
              return prev
          },[])
      }
      function flattenDepth(ary, depth = 1) {
          if (depth <= 0) {
              return ary
          }
          return ary.reduce((prev, item) => {
              if(Array.isArray(item)) {
                  prev = prev.concat(flattenDepth(item, depth - 1))
              } else {
                  prev.push(item)
              }
              return prev
          },[])
      } */


  function before(n, func) {
    var result;
    return function () {
      if (n > 1) {
        result = func.apply(void 0, arguments);
        n--;
      }

      return result;
    };
  }

  function after(n, func) {
    var i = 1;
    return function () {
      if (i < n) {
        i++;
        return;
      }

      return func.apply(void 0, arguments);
    };
  } //利用before实现


  function once(func) {
    return before(2, func);
  }
  /*       function once(func) {
            let n = 1
            let result 
            return function (...args) {
              if(n == 1) {
                  result = funce(...args)
                  n = 0
              }
              return result
            }
        } */


  function ary(func) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : func.length;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return func.apply(void 0, _toConsumableArray(args.slice(0, n)));
    };
  }

  function unary(func) {
    return function (arg) {
      return func(arg);
    };
  }

  function negate(predicate) {
    return function () {
      return !predicate.apply(void 0, arguments);
    };
  }

  function spread(func) {
    return function (ary) {
      return func.apply(null, ary);
    };
  }

  function bind(func, thisArg) {
    for (var _len2 = arguments.length, fixedArgs = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      fixedArgs[_key2 - 2] = arguments[_key2];
    }

    return function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var count = 0;
      var copy = fixedArgs.slice();
      copy.forEach(function (item, idx, ary) {
        if (item === null) {
          ary[idx] = args[count++];
        }
      });

      while (count < args.length) {
        copy.push(args[count++]);
      }

      return func.apply(thisArg, copy);
    };
  }

  function fromPairs(ary) {
    return ary.reduce(function (prev, item, idx, ary) {
      prev[item[0]] = item[1];
      return prev;
    }, {});
  }

  function filter(ary, predicate) {
    var temp = predicate;

    if (typeof predicate === "string") {
      predicate = function predicate(item) {
        return item[temp];
      };
    } else if (Array.isArray(predicate)) {
      predicate = function predicate(item) {
        return item[temp[0]] == temp[1];
      };
    } else if (_typeof(predicate) === "object") {
      predicate = function predicate(item) {
        for (var i in temp) {
          if (temp[i] !== item[i]) {
            return false;
          }
        }

        return true;
      };
    }

    return ary.filter(predicate);
  }

  return {
    chunk: chunk,
    keyBy: keyBy,
    groupBy: groupBy,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    before: before,
    after: after,
    once: once,
    ary: ary,
    unary: unary,
    negate: negate,
    spread: spread,
    bind: bind,
    filter: filter,
    fromPairs: fromPairs,
    property: property,
    matches: matches,
    matchesProperty: matchesProperty
  };
}();