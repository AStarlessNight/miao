var astarlessnight = function () {
    /* 一些通用函数 */
    //把字符串转判断函数
    function property(predicate) {
        return obj => obj[predicate]
    }
    //把对象转判断函数
    function matches(predicate) {
        return obj => {
            for (let i in predicate) {
                if (obj[i] !== predicate[i]) {
                    return false
                }
            }
            return true
        }
    }
    //把数组转判断函数
    function matchesProperty(predicate) {
        return matches(fromPairs(chunk(predicate, 2)))
    }

    //把可能的输入转判断函数
    function iteratee(predicate) {
        if (typeof predicate === "string") {
            predicate = property(predicate)
        } else if (Array.isArray(predicate)) {
            predicate = matchesProperty(predicate)
        } else if (typeof predicate === "object") {
            predicate = matches(predicate)
        }
        return predicate
    }


    function filter(ary, predicate) {
        predicate = iteratee(predicate)
        return ary.filter(predicate)
    }

    function chunk(array, size = 1) {
        let result = new Array(Math.ceil(array.length / size))
        let count = (array.length / size) | 0
        let idx = 0
        let start = 0

        for (let i = 1; i <= count; i++) {
            result[idx++] = array.slice(start, start + size)
            start = start + size
        }
        if (start != array.length) {
            result[idx++] = array.slice(start)
        }
        return result
    }

    function keyBy(ary, by) {
        let f = by
        if (typeof by === "string") {
            f = it => it[by]
        }

        return ary.reduce((result, item) => {
            let key = f(item)
            result[key] = item
            return result
        }, {})
    }

    function groupBy(ary, by) {
        let f = by
        if (typeof by === "string") {
            f = it => it[by]
        }
        return ary.reduce((result, item) => {
            let key = f(item)
            if (!(key in result)) {
                result[key] = []
            }
            result[key].push(item)
            return result
        }, {})
    }

    //不太好的写法
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
        return ary.reduce((prev, item) => {
            if (Array.isArray(item)) {
                prev.push(...flattenDeep(item))
            } else {
                prev.push(item)
            }
            return prev
        }, [])
    }
    function flattenDepth(ary, depth = 1) {
        if (depth <= 0) {
            return [...ary]
        }
        return ary.reduce((prev, item) => {
            if (Array.isArray(item)) {
                prev.push(...flattenDepth(item, depth - 1))
            } else {
                prev.push(item)
            }
            return prev
        }, [])
    }

    function flatten(ary) {
        return [].concat(...ary)
    }
    //concat写法效率过低
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
        let result
        return function (...args) {
            if (n > 1) {
                result = func(...args)
                n--
            }
            return result
        }
    }

    function after(n, func) {
        let i = 1
        return function (...args) {
            if (i < n) {
                i++
                return
            }
            return func(...args)
        }
    }

    //利用before实现
    function once(func) {
        return before(2, func)
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

    function ary(func, n = func.length) {
        return function (...args) {
            return func(...args.slice(0, n))
        }
    }

    function unary(func) {
        return function (arg) {
            return func(arg)
        }
    }

    function negate(predicate) {
        return function (...args) {
            return !predicate(...args)
        }
    }

    function spread(func) {
        return function (ary) {
            return func.apply(null, ary)
        }
    }

    function bind(func, thisArg, ...fixedArgs) {
        return function (...args) {
            let count = 0
            let copy = fixedArgs.slice()
            copy.forEach((item, idx, ary) => {
                if (item === null) {
                    ary[idx] = args[count++]
                }
            })
            while (count < args.length) {
                copy.push(args[count++])
            }
            return func.apply(thisArg, copy)
        }
    }

    function fromPairs(ary) {
        return ary.reduce((prev, item, idx, ary) => {
            prev[item[0]] = item[1]
            return prev
        }, {})
    }

    function filter(ary, predicate) {
        let temp = predicate
        if (typeof predicate === "string") {
            predicate = item => item[temp]
        } else if (Array.isArray(predicate)) {
            predicate = item => item[temp[0]] == temp[1]
        } else if (typeof predicate === "object") {
            predicate = item => {
                for (let i in temp) {
                    if (temp[i] !== item[i]) {
                        return false
                    }
                }
                return true
            }
        }
        return ary.filter(predicate)
    }

    function curry(func, arity = func.length) {
        if (arity == 0) {
          return func()
        }
        return function(...args) {
          let temp = arity
          let i = 0
          while(temp != 0) {
            if (args[i++] != null) {
              temp--
            }
            if (i == args.length) {
              break
            }
          }
          return curry(bind(func,null,...args), temp)
        }
      }


      function forOwn(obj, action) {
        for (let key in obj) {
            if(Object.prototype.hasOwnProperty.call(obj, key)) {
                action(obj[key], key, obj)
            }
        }
        return obj
    }
    

    return {
        chunk,
        keyBy,
        groupBy,
        flatten,
        flattenDeep,
        flattenDepth,
        before,
        after,
        once,
        ary,
        unary,
        negate,
        spread,
        bind,
        filter,
        fromPairs,
        property,
        matches,
        matchesProperty,
        curry,
        forOwn,
    }
}()

