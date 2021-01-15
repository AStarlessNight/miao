"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// /**
//  * @param {character[][]} board
//  * @return {void} Do not return anything, modify board in-place instead.
//  */
// var solveSudoku = function (board) {
//   var isComplete = false;
//   dfs(0, 0);
//   function dfs(x, y) {
//     if (isComplete) {
//       return;
//     }
//     var candidates = findCandidate(x, y);
//     if (x === 8 && y == 8) {
//       if (board[8][8] === '.') {
//         board[8][8] = candidates[0];
//       }
//       isComplete = true;
//       return;
//     }
//     if (board[x][y] !== '.') {
//       if (y === 8) {
//         dfs(x + 1, 0);
//         return;
//       } else {
//         dfs(x, y + 1);
//         return;
//       }
//     }
//     for (var i = 0; i < candidates.length; i++) {
//       board[x][y] = candidates[i];
//       if (y === 8) {
//         dfs(x + 1, 0);
//       } else {
//         dfs(x, y + 1);
//       }
//       if (!isComplete) {
//         board[x][y] = '.';
//       } else {
//         return;
//       }
//     }
//   }
//   function findCandidate(x, y) {
//     var set = new Set();
//     var candidate = [];
//     var cell = -1;
//     //row
//     for (i = 0; i < 9; i++) {
//       cell = board[x][i];
//       if (!set.has(cell)) {
//         set.add(cell);
//       }
//     }
//     //column
//     for (i = 0; i < 9; i++) {
//       cell = board[i][y];
//       if (!set.has(cell)) {
//         set.add(cell);
//       }
//     }
//     //square
//     var offsetX = parseInt(x / 3) * 3;
//     var offsetY = parseInt(y / 3) * 3;
//     for (i = 0; i <= 2; i++) {
//       for (j = 0; j <= 2; j++) {
//         cell = board[i + offsetX][j + offsetY];
//         if (!set.has(cell)) {
//           set.add(cell);
//         }
//       }
//     }
//     //find candidate
//     for (i = 1; i <= 9; i++) {
//       if (!set.has(i + "")) {
//         candidate.push(i + "");
//       }
//     }
//     return candidate;
//   }
// };
// /* var solveSudoku = function (board) {
//   function getBannedNum(x, y) {
//     let str = ""
//     str += board[x].join("")//得到行被禁位置
//     //得到列被禁位置
//     for (let i in board) {
//       str += board[i][y]
//     }
//     //得到九宫格被禁位置
//     let startRow = Number.parseInt(x / 3) * 3
//     let startCol = Number.parseInt(y / 3) * 3
//     for (let i = startRow; i < startRow + 3; i++) {
//       for (let j = startCol; j < startCol + 3; j++) {
//         str += board[i][j]
//       }
//     }
//     return new Set(str)
//   }
//   let isSuccess = false
//   function bt(x = 0, y = 0) {
//     let nextx = x
//     let nexty = y
//     if (y < 8) {
//       nexty++
//     } else {
//       if (x < 8) {
//         nextx++
//         nexty = 0
//       } else { //当x == 8 以及 y == 8的时候
//         if (board[x][y] == ".") {
//           for (let i = 1; i <= 9; i++) {
//             if (!(getBannedNum(x, y).has(String(i)))) {
//               isSuccess = true
//               board[x][y] = String(i)
//             }
//           }
//           return
//         }
//         isSuccess = true
//         return
//       }
//     }
//     if (board[x][y] == ".") {
//       let bannedPos = getBannedNum(x, y)
//       for (let i = 1; i <= 9; i++) {
//         if (!bannedPos.has(String(i))) {
//           board[x][y] = String(i)
//           bt(nextx, nexty)
//         }
//         if (isSuccess) {
//           return
//         }
//         board[x][y] = "."
//       }
//     } else { //当这个位置已经有数字的时候
//       bt(nextx, nexty)
//     }
//   }
//   bt(0, 0)
// }; */
// /* 
// var solveSudoku = function (board) {
//   function getCandidates(x, y) {
//     let str = ""
//     str += board[x].join("")//得到行被禁位置
//     //得到列被禁位置
//     for (let i in board) {
//       str += board[i][y]
//     }
//     //得到九宫格被禁位置
//     let startRow = Number.parseInt(x / 3) * 3
//     let startCol = Number.parseInt(y / 3) * 3
//     for (let i = startRow; i < startRow + 3; i++) {
//       for (let j = startCol; j < startCol + 3; j++) {
//         str += board[i][j]
//       }
//     }
//     let bannedNum =  new Set(str)
//     let candidates = []
//     for (let i = 1; i <= 9; i++)  {
//       if (!bannedNum.has(String(i))) {
//         candidates.push(String(i))
//       }
//     }
//     return candidates
//   }
//   let isSuccess = false
//   function bt(x = 0, y = 0) {
//     let nextx = x
//     let nexty = y
//     if (y < 8) {
//       nexty++
//     } else {
//       if (x < 8) {
//         nextx++
//         nexty = 0
//       } else { //当x == 8 以及 y == 8的时候
//         if (board[x][y] == ".") {
//           let candidates = getCandidates(x, y)
//           board[x][y] = candidates[0]
//         }
//         isSuccess = true
//         return
//       }
//     }
//     if (board[x][y] == ".") {
//       let candidates = getCandidates(x, y)
//       for (let i in candidates) {
//         board[x][y] = candidates[i]
//         bt(nextx, nexty)
//         if (isSuccess) {
//           return
//         }
//         board[x][y] = "."
//       }
//     } else { //当这个位置已经有数字的时候
//       bt(nextx, nexty)
//     }
//   }
//   bt(0, 0)
// };
// var board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// solveSudoku(board)
// console.log(board) 
//  */
// /* var countVowelStrings = function(n) {
//   let sum = 0
//   let result = []
//   let alphabet = ["a", "e", "i", "o", "u"]
//   function bt(iteranum = 1, lastIdx = 0, history = "") {
//       if (iteranum == n + 1) {
//           result.push(history)
//           sum++
//           return 
//       }
//       for (let i = lastIdx; i < 5; i++) {
//           bt(iteranum + 1, i, history + alphabet[i])
//       }
//       return 
//   }
//   bt()
//   return result
// };
// console.log(countVowelStrings(2))
//  */
// /* var numTilePossibilities = function(tiles) {
//   // naive, loop through each
//   // memoize answers and check if they exist
//   const count = []
//   const visited = {};
//   const sortedTiles = tiles.split('').sort();
//   let result = []
//   backtrack(sortedTiles, 0, visited, count, "", result);
//   return count.length;
// };
// var backtrack = function(tiles, length, visited, count, history = "", result) {
//   if (tiles.length === length) {
//       result.push(history)
//       return;
//   }
//   for (let i = 0; i < tiles.length; i++) {
//       if (visited[i]) {
//           continue;
//       }
//       if (i - 1 >= 0 && tiles[i] === tiles[i - 1] && !visited[i - 1]) {
//           continue;
//       }
//       count.push(true)
//       visited[i] = true;
//       backtrack(tiles, length+1, visited, count, history + tiles[i], result);
//       visited[i] = false;
//   }
// }
// console.log(numTilePossibilities("CDC"))
// var getPermutation = function (n, k) {
//   if (n == 1) {
//       return 1
//   }
//   let nums = Array.from({length: n}, (v, i) => i+1);
//   let length = n
//   let factorialAry = new Array(n - 1)
//   let result = ""
//   factorialAry[0] = 1
//   for (let i = 2; i < n; i++) {
//       factorialAry[i - 1] = i * factorialAry[i - 2]
//   }
//   let j = 1
//   while(result.length != length) {
//       let remainder = (k - 1) % factorialAry[n - j - 1]
//       let idx = ((k - 1 - remainder) / factorialAry[n - j - 1]) % nums.length
//       let digit = nums.splice(idx, 1)
//       result += digit
//       // k = remainder + 1
//       j++
//   }
//   return result
// }
// console.log(getPermutation(3, 1)) */
// /* function forEach(ary, fun) {
//   for (let i of ary) {
//     fun(i)
//   }
//   return
// }
// var sum = 0
// forEach([1,2,3,4], function asd(val) {
//   sum += val
// })
// console.log(sum) */
// /* repeat(5, function a(i) {
//   unless(i % 2, function b() {
//     console.log(i)
//   })
// })
// function repeat(times, action) {
//   for (var i = 0; i < times; i++)  {
//     action(i)
//   }
// }
// function unless(cond, action) {
//   if (!cond) {
//     action()
//   }
// } */
// /* function filter (ary, fun) {
//   let result = []
//   for (let i of ary) {
//     if(fun(i)) {
//       result.push(i)
//     }
//   }
//   return result
// }
// console.log(filter([1,2,3,4],function(it){
//   return it > 2
// }))
// var  a = [1,2,3,4]
// console.log(a.filter(function(it){
//   return it > 2
// }))
// console.log(a)
//  */
// /* let count = 0
// Array.prototype._forEach =function(fun){
//   for (let i in this) {
//     count++
//     fun(this[i], i, this)
//   }
//   return
// }
// let sum = 0
// var a = [1,2,3,4]
// a._forEach(function (it){
//   sum += it
// })
// console.log(sum)
//  */
// // Array.prototype._map = function(fun) {
// //   let result = []
// //   this.forEach(function(it,idx, ary) {
// //     result.push(fun(it, idx, ary))
// //   })
// //   return result
// // }
// // var a = [1,2,3,4]
// // console.log(a._map((it,idx) => idx * 2))
// // function reduce(ary, ini, fun) {
// //   ary.forEach(function(item,idx) {
// //     ini = fun(ini, item, idx)
// //   })
// //   /* for (let i in ary) {
// //     ini = fun(ini, ary[i])
// //   } */ 
// //   return ini
// // }
// // console.log(reduce([1,2,3,4],1,(a,b,idx) => {
// //   if (idx < 2) {
// //     return a + b
// //   } else {
// //     return a * b
// //   }
// // }))
// /* let obj = {}
// var a = ["rongxin", "zhangyuanyang", "zhoutianyi", "xialei", "baiyuke"]
// a.reduce((prev, curr) => {
//   prev[curr] = true
//   return prev
// }, obj)
// console.log(obj) */
// // a.forEach(function (name) {
// //   obj[name] = true
// // })
// // console.log(obj)
// /* var array = [
//   {"dir": "left", "code":97},
//   {"dir": "right", "code":100}
// ] 
// function keyBy(ary, by) {
//   let f = by
//   if (typeof by === "string") {
//     f = it => it[by]
//   }
//   return ary.reduce((result, item) => {
//     let key = f(item)
//     result[key] = item
//     return result
//   }, {})
// }
// console.log(keyBy(array, function(o) {
//   return String.fromCharCode(o.code)
// }))
// console.log(keyBy(array, "dir"))
// function groupBy(ary, by) {
//   let f = by
//   if (typeof by === "string") {
//     f = it => it[by]
//   }
//   return ary.reduce((result, item) => {
//     let key = f(item)
//     if (!(key in result)) {
//       result[key] = []
//     }
//     result[key].push(item)
//     return result
//   }, {})
// }
// console.log(groupBy(['one', 'two', 'three'], 'length'))
// console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) */
// /* var getHappyString = function(n, k) {
//   if (k > 3 * 2 ** (n - 1)) {
//       return ""
//   }
//   let dict = new Array(n)
//   let set = "abc"
//   dict[0] = 1
//   for (let i = 1; i < dict.length; i++) {
//       dict[i] = dict[i - 1] * 2
//   }
//   let result = ""
//   let temp = n
//   let left = set
//   while(temp != 0) {
//       let idx =  ((k - 1) / dict[temp - 1]) | 0
//       k = k - idx * dict[temp - 1]
//       result += left[idx]
//       left = set.replace(new RegExp(left[idx]),"")
//       temp--
//   }
//   console.log(result)
//   return result
// }(5,3); */
// // function reduce(ary, fun, ini) {
// //   ary.forEach((val, idx, ary) => {
// //     ini = fun(ini, val, idx, ary)
// //   })
// //   return ini
// // }
// // console.log(reduce([1,2,3,4], (ini, val, idx, ary) => Math.max(ini, val), 5))
// /* 
// function bind(f, ...args) {
//   return function(...left) {
//     return f(...args,...left)
//   }
// }
//  */
// // function map (ary, transform) {
// //   return ary.reduce(function(prev,curr,idx,ary) {
// //     prev.push(transform(curr,idx,ary))
// //     return prev
// //   }, [])
// // }
// /* function map (ary, transform) {
//   return ary.reduce(((prev, curr, idx, ary) => (prev.push(transform(curr,idx,ary)), prev)), [])
// }
// function filter(ary, test) {
//   return ary.reduce((prev,item,idx,ary) =>  {
//     if(test(item,idx,ary)) prev.push(item)
//     return prev
// }, [])
// }
// function forEach(ary, action) {
//   ary.reduce((_, item, idx, ary) => {
//     _ = action(item, idx, ary)
//   }, null)
// }
// let obj = {}
// forEach([1,2,3,4], function(it, idx) {
//   obj[idx] = it
// })
// console.log(obj)
// console.log(map([1,2,3,4], (it, idx) => idx ** 2))
// console.log(filter([1,2,3,4], (it, idx) => idx > 2))
// function foo(a,b,c,d) {
//   return a+b+c+d
// }
// var boo = foo.bind(null,1,2)
// boo(3,4)
//  */
// function every(obj, test) {
//   for (let i in obj) {
//     if (!test(obj[i])) {
//       return false
//     }
//   }
//   return true
// }
// function some(obj, test) {
//   function testPie(...args) {
//     return !test(...args)
//   }
//   return !every(obj, testPie)
// }
// /* function some(obj, test) {
//   for (let i in obj) {
//     if(test(obj[i])) {
//       return true
//     }
//   }
//   return false
// }
// function every(obj, test) {
//   function testPie(...args) {
//     return !test(...args)
//   }
//   return !some(obj, testPie)
// }
//  */
// console.log(every([true, 1, null, 'yes'], Boolean))
// console.log(some([true, 1, null, 'yes'], Boolean))
// // => false
// /* var users = [
//   { 'user': 'barney', 'age': 36, 'active': false },
//   { 'user': 'fred',   'age': 40, 'active': false }
// ];
// // The `_.matches` iteratee shorthand.
// every(users, { 'user': 'barney', 'active': false });
// // => false
// // The `_.matchesProperty` iteratee shorthand.
// every(users, ['active', false]);
// // => true
// // The `_.property` iteratee shorthand.
// every(users, 'active'); */
// function before(n, func) {
//   let result
//   return function (...args) {
//     if (n > 1) {
//       result = func(...args)
//       n--
//     }
//     return result
//   }
// }
// function after(n, func) {
//   let i = 1
//   return function (...args) {
//     if (i < n) {
//       i++
//       return
//     }
//     return func(...args)
//   }
// }
// function ary(func, n = func.length) {
//   return function () {
//     let args = Array.from(arguments)
//     return func(...args.slice(0, n))
//   }
// }
// function unary(func) {
//   return function () {
//     return func(arguments[0])
//   }
// }
// function flip(func) {
//   return function (...args) {
//     return func(...args.reverse())
//   }
// }
// var parseInt2 = flip(parseInt)
// var parseInt3 = parseInt2.bind(null, 16)
// var parseInt4 = ary(parseInt3, 1)
// console.log(["1", "2", "a"].map(parseInt4))
// function negate(predicate) {
//   return function (...args) {
//     return !predicate(...args)
//   }
// }
// function isEven(n) {
//   return n % 2 == 0;
// }
// console.log([1, 2, 3, 4, 5, 6].filter(negate(isEven)));
// /* function once(func) {
//   let n = 1
//   let result
//   return function (...args) {
//     if (n == 1) {
//       result = func(...args)
//       n--
//     }
//     return result
//   }
// } */
// var starlessnight = {};
// var on = once((a, b) => a + b)
// console.log(on(3, 4))
// console.log(on(4, 5))
// console.log(on(6, 7))
// function once(func) {
//   return before(2, func)
// }
// function spread(func, start = 0) {
//   return function (ary) {
//     return func.apply(null, ary)
//   }
// }
// var say = spread(function(who, what) {
//   return who + ' says ' + what;
// });
// function greet(greeting, punctuation) {
//   return greeting + " " + this.user + punctuation
// }
// function add(a,b,c,d) {
//   return a + b + c + d
// }
// var add2 = bind(add, null, null, 1, null, 1, 2)
// console.log(add2(3,4,5))
// function bind(func, thisArg, ...fixedArgs) {
//   return function (...args) {
//     let count = 0
//     let copy = fixedArgs.slice()
//     copy.forEach((item, idx, ary) => {
//       if (item === null) {
//         ary[idx] = args[count++]
//       }
//     })
//     while(count  < args.length) {
//         copy.push(args[count++])
//     }
//     return func.apply(thisArg, copy)
//   }
// }      
// var object = {"user": "fred"}
// var bound = bind(greet, object, null, "!");
// console.log(bound("hi"))
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

var users = [{
  'user': 'barney',
  'age': 36,
  'active': true
}, {
  'user': 'fred',
  'age': 40,
  'active': false
}];
console.log(filter(users, function (o) {
  return !o.active;
})); // => objects for ['fred']
// The `matches` iteratee shorthand.

console.log(filter(users, {
  'age': 36,
  'active': true
})); // => objects for ['barney']
// The `matchesProperty` iteratee shorthand.

console.log(filter(users, ['active', false])); // => objects for ['fred']
// The `property` iteratee shorthand.

console.log(filter(users, 'active')); // => objects for ['barney']

function fromPairs(ary) {
  return ary.reduce(function (prev, item, idx, ary) {
    prev[item[0]] = item[1];
    return prev;
  }, {});
}

console.log(fromPairs([['a', 1], ['b', 2], ["c", 3]]));