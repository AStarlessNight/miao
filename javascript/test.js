// // // // // /**
// // // // //  * @param {character[][]} board
// // // // //  * @return {void} Do not return anything, modify board in-place instead.
// // // // //  */
// // // // // var solveSudoku = function (board) {
// // // // //   var isComplete = false;
// // // // //   dfs(0, 0);

// // // // //   function dfs(x, y) {
// // // // //     if (isComplete) {
// // // // //       return;
// // // // //     }
// // // // //     var candidates = findCandidate(x, y);
// // // // //     if (x === 8 && y == 8) {
// // // // //       if (board[8][8] === '.') {
// // // // //         board[8][8] = candidates[0];
// // // // //       }
// // // // //       isComplete = true;
// // // // //       return;
// // // // //     }

// // // // //     if (board[x][y] !== '.') {
// // // // //       if (y === 8) {
// // // // //         dfs(x + 1, 0);
// // // // //         return;
// // // // //       } else {
// // // // //         dfs(x, y + 1);
// // // // //         return;
// // // // //       }
// // // // //     }
// // // // //     for (var i = 0; i < candidates.length; i++) {
// // // // //       board[x][y] = candidates[i];
// // // // //       if (y === 8) {
// // // // //         dfs(x + 1, 0);
// // // // //       } else {
// // // // //         dfs(x, y + 1);
// // // // //       }
// // // // //       if (!isComplete) {
// // // // //         board[x][y] = '.';
// // // // //       } else {
// // // // //         return;
// // // // //       }
// // // // //     }
// // // // //   }

// // // // //   function findCandidate(x, y) {
// // // // //     var set = new Set();
// // // // //     var candidate = [];
// // // // //     var cell = -1;
// // // // //     //row
// // // // //     for (i = 0; i < 9; i++) {
// // // // //       cell = board[x][i];
// // // // //       if (!set.has(cell)) {
// // // // //         set.add(cell);
// // // // //       }
// // // // //     }
// // // // //     //column
// // // // //     for (i = 0; i < 9; i++) {
// // // // //       cell = board[i][y];
// // // // //       if (!set.has(cell)) {
// // // // //         set.add(cell);
// // // // //       }
// // // // //     }
// // // // //     //square
// // // // //     var offsetX = parseInt(x / 3) * 3;
// // // // //     var offsetY = parseInt(y / 3) * 3;
// // // // //     for (i = 0; i <= 2; i++) {
// // // // //       for (j = 0; j <= 2; j++) {
// // // // //         cell = board[i + offsetX][j + offsetY];
// // // // //         if (!set.has(cell)) {
// // // // //           set.add(cell);
// // // // //         }
// // // // //       }
// // // // //     }
// // // // //     //find candidate
// // // // //     for (i = 1; i <= 9; i++) {
// // // // //       if (!set.has(i + "")) {
// // // // //         candidate.push(i + "");
// // // // //       }
// // // // //     }
// // // // //     return candidate;
// // // // //   }
// // // // // };



// // // // // /* var solveSudoku = function (board) {
// // // // //   function getBannedNum(x, y) {
// // // // //     let str = ""
// // // // //     str += board[x].join("")//得到行被禁位置
// // // // //     //得到列被禁位置
// // // // //     for (let i in board) {
// // // // //       str += board[i][y]
// // // // //     }
// // // // //     //得到九宫格被禁位置
// // // // //     let startRow = Number.parseInt(x / 3) * 3
// // // // //     let startCol = Number.parseInt(y / 3) * 3
// // // // //     for (let i = startRow; i < startRow + 3; i++) {
// // // // //       for (let j = startCol; j < startCol + 3; j++) {
// // // // //         str += board[i][j]
// // // // //       }
// // // // //     }
// // // // //     return new Set(str)
// // // // //   }

// // // // //   let isSuccess = false
// // // // //   function bt(x = 0, y = 0) {
// // // // //     let nextx = x
// // // // //     let nexty = y
// // // // //     if (y < 8) {
// // // // //       nexty++
// // // // //     } else {
// // // // //       if (x < 8) {
// // // // //         nextx++
// // // // //         nexty = 0
// // // // //       } else { //当x == 8 以及 y == 8的时候
// // // // //         if (board[x][y] == ".") {
// // // // //           for (let i = 1; i <= 9; i++) {
// // // // //             if (!(getBannedNum(x, y).has(String(i)))) {
// // // // //               isSuccess = true
// // // // //               board[x][y] = String(i)
// // // // //             }
// // // // //           }
// // // // //           return
// // // // //         }
// // // // //         isSuccess = true
// // // // //         return
// // // // //       }
// // // // //     }

// // // // //     if (board[x][y] == ".") {
// // // // //       let bannedPos = getBannedNum(x, y)
// // // // //       for (let i = 1; i <= 9; i++) {
// // // // //         if (!bannedPos.has(String(i))) {
// // // // //           board[x][y] = String(i)
// // // // //           bt(nextx, nexty)
// // // // //         }
// // // // //         if (isSuccess) {
// // // // //           return
// // // // //         }
// // // // //         board[x][y] = "."
// // // // //       }
// // // // //     } else { //当这个位置已经有数字的时候
// // // // //       bt(nextx, nexty)
// // // // //     }
// // // // //   }
// // // // //   bt(0, 0)

// // // // // }; */





// // // // // /* 

// // // // // var solveSudoku = function (board) {
// // // // //   function getCandidates(x, y) {
// // // // //     let str = ""
// // // // //     str += board[x].join("")//得到行被禁位置
// // // // //     //得到列被禁位置
// // // // //     for (let i in board) {
// // // // //       str += board[i][y]
// // // // //     }
// // // // //     //得到九宫格被禁位置
// // // // //     let startRow = Number.parseInt(x / 3) * 3
// // // // //     let startCol = Number.parseInt(y / 3) * 3
// // // // //     for (let i = startRow; i < startRow + 3; i++) {
// // // // //       for (let j = startCol; j < startCol + 3; j++) {
// // // // //         str += board[i][j]
// // // // //       }
// // // // //     }
// // // // //     let bannedNum =  new Set(str)
// // // // //     let candidates = []
// // // // //     for (let i = 1; i <= 9; i++)  {
// // // // //       if (!bannedNum.has(String(i))) {
// // // // //         candidates.push(String(i))
// // // // //       }
// // // // //     }
// // // // //     return candidates
// // // // //   }

// // // // //   let isSuccess = false
// // // // //   function bt(x = 0, y = 0) {
// // // // //     let nextx = x
// // // // //     let nexty = y
// // // // //     if (y < 8) {
// // // // //       nexty++
// // // // //     } else {
// // // // //       if (x < 8) {
// // // // //         nextx++
// // // // //         nexty = 0
// // // // //       } else { //当x == 8 以及 y == 8的时候
// // // // //         if (board[x][y] == ".") {
// // // // //           let candidates = getCandidates(x, y)
// // // // //           board[x][y] = candidates[0]
// // // // //         }
// // // // //         isSuccess = true
// // // // //         return
// // // // //       }
// // // // //     }

// // // // //     if (board[x][y] == ".") {
// // // // //       let candidates = getCandidates(x, y)
// // // // //       for (let i in candidates) {
// // // // //         board[x][y] = candidates[i]
// // // // //         bt(nextx, nexty)
// // // // //         if (isSuccess) {
// // // // //           return
// // // // //         }
// // // // //         board[x][y] = "."
// // // // //       }
// // // // //     } else { //当这个位置已经有数字的时候
// // // // //       bt(nextx, nexty)
// // // // //     }
// // // // //   }
// // // // //   bt(0, 0)

// // // // // };


// // // // // var board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// // // // // solveSudoku(board)
// // // // // console.log(board) 
// // // // //  */


// // // // // /* var countVowelStrings = function(n) {
// // // // //   let sum = 0
// // // // //   let result = []
// // // // //   let alphabet = ["a", "e", "i", "o", "u"]
// // // // //   function bt(iteranum = 1, lastIdx = 0, history = "") {
// // // // //       if (iteranum == n + 1) {
// // // // //           result.push(history)
// // // // //           sum++
// // // // //           return 
// // // // //       }
// // // // //       for (let i = lastIdx; i < 5; i++) {
// // // // //           bt(iteranum + 1, i, history + alphabet[i])
// // // // //       }
// // // // //       return 
// // // // //   }
// // // // //   bt()
// // // // //   return result
// // // // // };

// // // // // console.log(countVowelStrings(2))
// // // // //  */


// // // // // /* var numTilePossibilities = function(tiles) {
// // // // //   // naive, loop through each
// // // // //   // memoize answers and check if they exist

// // // // //   const count = []
// // // // //   const visited = {};
// // // // //   const sortedTiles = tiles.split('').sort();
// // // // //   let result = []
// // // // //   backtrack(sortedTiles, 0, visited, count, "", result);
// // // // //   return count.length;

// // // // // };

// // // // // var backtrack = function(tiles, length, visited, count, history = "", result) {
// // // // //   if (tiles.length === length) {
// // // // //       result.push(history)
// // // // //       return;
// // // // //   }
// // // // //   for (let i = 0; i < tiles.length; i++) {
// // // // //       if (visited[i]) {
// // // // //           continue;
// // // // //       }
// // // // //       if (i - 1 >= 0 && tiles[i] === tiles[i - 1] && !visited[i - 1]) {
// // // // //           continue;
// // // // //       }
// // // // //       count.push(true)
// // // // //       visited[i] = true;
// // // // //       backtrack(tiles, length+1, visited, count, history + tiles[i], result);
// // // // //       visited[i] = false;
// // // // //   }
// // // // // }

// // // // // console.log(numTilePossibilities("CDC"))





// // // // // var getPermutation = function (n, k) {
// // // // //   if (n == 1) {
// // // // //       return 1
// // // // //   }

// // // // //   let nums = Array.from({length: n}, (v, i) => i+1);
// // // // //   let length = n
// // // // //   let factorialAry = new Array(n - 1)
// // // // //   let result = ""
// // // // //   factorialAry[0] = 1
// // // // //   for (let i = 2; i < n; i++) {
// // // // //       factorialAry[i - 1] = i * factorialAry[i - 2]
// // // // //   }

// // // // //   let j = 1
// // // // //   while(result.length != length) {
// // // // //       let remainder = (k - 1) % factorialAry[n - j - 1]
// // // // //       let idx = ((k - 1 - remainder) / factorialAry[n - j - 1]) % nums.length
// // // // //       let digit = nums.splice(idx, 1)
// // // // //       result += digit
// // // // //       // k = remainder + 1
// // // // //       j++
// // // // //   }
// // // // //   return result
// // // // // }


// // // // // console.log(getPermutation(3, 1)) */



// // // // // /* function forEach(ary, fun) {
// // // // //   for (let i of ary) {
// // // // //     fun(i)
// // // // //   }
// // // // //   return
// // // // // }

// // // // // var sum = 0

// // // // // forEach([1,2,3,4], function asd(val) {
// // // // //   sum += val
// // // // // })

// // // // // console.log(sum) */

// // // // // /* repeat(5, function a(i) {
// // // // //   unless(i % 2, function b() {
// // // // //     console.log(i)
// // // // //   })
// // // // // })


// // // // // function repeat(times, action) {
// // // // //   for (var i = 0; i < times; i++)  {
// // // // //     action(i)
// // // // //   }
// // // // // }


// // // // // function unless(cond, action) {
// // // // //   if (!cond) {
// // // // //     action()
// // // // //   }
// // // // // } */

// // // // // /* function filter (ary, fun) {
// // // // //   let result = []
// // // // //   for (let i of ary) {
// // // // //     if(fun(i)) {
// // // // //       result.push(i)
// // // // //     }
// // // // //   }
// // // // //   return result
// // // // // }

// // // // // console.log(filter([1,2,3,4],function(it){
// // // // //   return it > 2
// // // // // }))

// // // // // var  a = [1,2,3,4]
// // // // // console.log(a.filter(function(it){
// // // // //   return it > 2
// // // // // }))

// // // // // console.log(a)
// // // // //  */


// // // // // /* let count = 0



// // // // // Array.prototype._forEach =function(fun){
// // // // //   for (let i in this) {
// // // // //     count++
// // // // //     fun(this[i], i, this)
// // // // //   }
// // // // //   return
// // // // // }

// // // // // let sum = 0
// // // // // var a = [1,2,3,4]
// // // // // a._forEach(function (it){
// // // // //   sum += it
// // // // // })

// // // // // console.log(sum)
// // // // //  */




// // // // // // Array.prototype._map = function(fun) {
// // // // // //   let result = []
// // // // // //   this.forEach(function(it,idx, ary) {
// // // // // //     result.push(fun(it, idx, ary))
// // // // // //   })
// // // // // //   return result
// // // // // // }
// // // // // // var a = [1,2,3,4]
// // // // // // console.log(a._map((it,idx) => idx * 2))


// // // // // // function reduce(ary, ini, fun) {
// // // // // //   ary.forEach(function(item,idx) {
// // // // // //     ini = fun(ini, item, idx)
// // // // // //   })
// // // // // //   /* for (let i in ary) {
// // // // // //     ini = fun(ini, ary[i])
// // // // // //   } */ 
// // // // // //   return ini
// // // // // // }


// // // // // // console.log(reduce([1,2,3,4],1,(a,b,idx) => {
// // // // // //   if (idx < 2) {
// // // // // //     return a + b
// // // // // //   } else {
// // // // // //     return a * b
// // // // // //   }
// // // // // // }))
// // // // // /* let obj = {}
// // // // // var a = ["rongxin", "zhangyuanyang", "zhoutianyi", "xialei", "baiyuke"]
// // // // // a.reduce((prev, curr) => {
// // // // //   prev[curr] = true
// // // // //   return prev
// // // // // }, obj)

// // // // // console.log(obj) */

// // // // // // a.forEach(function (name) {
// // // // // //   obj[name] = true
// // // // // // })

// // // // // // console.log(obj)


// // // // // /* var array = [
// // // // //   {"dir": "left", "code":97},
// // // // //   {"dir": "right", "code":100}
// // // // // ] 

// // // // // function keyBy(ary, by) {
// // // // //   let f = by
// // // // //   if (typeof by === "string") {
// // // // //     f = it => it[by]
// // // // //   }

// // // // //   return ary.reduce((result, item) => {
// // // // //     let key = f(item)
// // // // //     result[key] = item
// // // // //     return result
// // // // //   }, {})
// // // // // }

// // // // // console.log(keyBy(array, function(o) {
// // // // //   return String.fromCharCode(o.code)
// // // // // }))
// // // // // console.log(keyBy(array, "dir"))


// // // // // function groupBy(ary, by) {
// // // // //   let f = by
// // // // //   if (typeof by === "string") {
// // // // //     f = it => it[by]
// // // // //   }
// // // // //   return ary.reduce((result, item) => {
// // // // //     let key = f(item)
// // // // //     if (!(key in result)) {
// // // // //       result[key] = []
// // // // //     }
// // // // //     result[key].push(item)
// // // // //     return result
// // // // //   }, {})
// // // // // }

// // // // // console.log(groupBy(['one', 'two', 'three'], 'length'))
// // // // // console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) */




// // // // // /* var getHappyString = function(n, k) {
// // // // //   if (k > 3 * 2 ** (n - 1)) {
// // // // //       return ""
// // // // //   }
// // // // //   let dict = new Array(n)
// // // // //   let set = "abc"
// // // // //   dict[0] = 1
// // // // //   for (let i = 1; i < dict.length; i++) {
// // // // //       dict[i] = dict[i - 1] * 2
// // // // //   }

// // // // //   let result = ""
// // // // //   let temp = n
// // // // //   let left = set
// // // // //   while(temp != 0) {
// // // // //       let idx =  ((k - 1) / dict[temp - 1]) | 0
// // // // //       k = k - idx * dict[temp - 1]
// // // // //       result += left[idx]
// // // // //       left = set.replace(new RegExp(left[idx]),"")
// // // // //       temp--
// // // // //   }
// // // // //   console.log(result)
// // // // //   return result

// // // // // }(5,3); */


// // // // // // function reduce(ary, fun, ini) {
// // // // // //   ary.forEach((val, idx, ary) => {
// // // // // //     ini = fun(ini, val, idx, ary)
// // // // // //   })
// // // // // //   return ini
// // // // // // }

// // // // // // console.log(reduce([1,2,3,4], (ini, val, idx, ary) => Math.max(ini, val), 5))

// // // // // /* 
// // // // // function bind(f, ...args) {
// // // // //   return function(...left) {
// // // // //     return f(...args,...left)
// // // // //   }
// // // // // }
// // // // //  */
// // // // // // function map (ary, transform) {
// // // // // //   return ary.reduce(function(prev,curr,idx,ary) {
// // // // // //     prev.push(transform(curr,idx,ary))
// // // // // //     return prev
// // // // // //   }, [])
// // // // // // }

// // // // // /* function map (ary, transform) {
// // // // //   return ary.reduce(((prev, curr, idx, ary) => (prev.push(transform(curr,idx,ary)), prev)), [])
// // // // // }
// // // // // function filter(ary, test) {
// // // // //   return ary.reduce((prev,item,idx,ary) =>  {
// // // // //     if(test(item,idx,ary)) prev.push(item)
// // // // //     return prev
// // // // // }, [])
// // // // // }
// // // // // function forEach(ary, action) {
// // // // //   ary.reduce((_, item, idx, ary) => {
// // // // //     _ = action(item, idx, ary)
// // // // //   }, null)
// // // // // }



// // // // // let obj = {}
// // // // // forEach([1,2,3,4], function(it, idx) {
// // // // //   obj[idx] = it
// // // // // })

// // // // // console.log(obj)


// // // // // console.log(map([1,2,3,4], (it, idx) => idx ** 2))
// // // // // console.log(filter([1,2,3,4], (it, idx) => idx > 2))


// // // // // function foo(a,b,c,d) {
// // // // //   return a+b+c+d
// // // // // }

// // // // // var boo = foo.bind(null,1,2)
// // // // // boo(3,4)
// // // // //  */


// // // // // function every(obj, test) {
// // // // //   for (let i in obj) {
// // // // //     if (!test(obj[i])) {
// // // // //       return false
// // // // //     }
// // // // //   }
// // // // //   return true
// // // // // }

// // // // // function some(obj, test) {
// // // // //   function testPie(...args) {
// // // // //     return !test(...args)
// // // // //   }
// // // // //   return !every(obj, testPie)
// // // // // }

// // // // // /* function some(obj, test) {
// // // // //   for (let i in obj) {
// // // // //     if(test(obj[i])) {
// // // // //       return true
// // // // //     }
// // // // //   }
// // // // //   return false
// // // // // }

// // // // // function every(obj, test) {
// // // // //   function testPie(...args) {
// // // // //     return !test(...args)
// // // // //   }
// // // // //   return !some(obj, testPie)
// // // // // }
// // // // //  */
// // // // // console.log(every([true, 1, null, 'yes'], Boolean))
// // // // // console.log(some([true, 1, null, 'yes'], Boolean))

// // // // // // => false

// // // // // /* var users = [
// // // // //   { 'user': 'barney', 'age': 36, 'active': false },
// // // // //   { 'user': 'fred',   'age': 40, 'active': false }
// // // // // ];

// // // // // // The `_.matches` iteratee shorthand.
// // // // // every(users, { 'user': 'barney', 'active': false });
// // // // // // => false

// // // // // // The `_.matchesProperty` iteratee shorthand.
// // // // // every(users, ['active', false]);
// // // // // // => true

// // // // // // The `_.property` iteratee shorthand.
// // // // // every(users, 'active'); */


// // // // // function before(n, func) {
// // // // //   let result
// // // // //   return function (...args) {
// // // // //     if (n > 1) {
// // // // //       result = func(...args)
// // // // //       n--
// // // // //     }
// // // // //     return result
// // // // //   }
// // // // // }



// // // // // function after(n, func) {
// // // // //   let i = 1
// // // // //   return function (...args) {
// // // // //     if (i < n) {
// // // // //       i++
// // // // //       return
// // // // //     }
// // // // //     return func(...args)
// // // // //   }
// // // // // }

// // // // // function ary(func, n = func.length) {
// // // // //   return function () {
// // // // //     let args = Array.from(arguments)
// // // // //     return func(...args.slice(0, n))
// // // // //   }
// // // // // }


// // // // // function unary(func) {
// // // // //   return function () {
// // // // //     return func(arguments[0])
// // // // //   }
// // // // // }


// // // // // function flip(func) {
// // // // //   return function (...args) {
// // // // //     return func(...args.reverse())
// // // // //   }
// // // // // }

// // // // // var parseInt2 = flip(parseInt)
// // // // // var parseInt3 = parseInt2.bind(null, 16)
// // // // // var parseInt4 = ary(parseInt3, 1)
// // // // // console.log(["1", "2", "a"].map(parseInt4))


// // // // // function negate(predicate) {
// // // // //   return function (...args) {
// // // // //     return !predicate(...args)
// // // // //   }
// // // // // }

// // // // // function isEven(n) {
// // // // //   return n % 2 == 0;
// // // // // }

// // // // // console.log([1, 2, 3, 4, 5, 6].filter(negate(isEven)));

// // // // // /* function once(func) {
// // // // //   let n = 1
// // // // //   let result
// // // // //   return function (...args) {
// // // // //     if (n == 1) {
// // // // //       result = func(...args)
// // // // //       n--
// // // // //     }
// // // // //     return result
// // // // //   }
// // // // // } */
// // // // // var starlessnight = {};

// // // // // var on = once((a, b) => a + b)
// // // // // console.log(on(3, 4))
// // // // // console.log(on(4, 5))
// // // // // console.log(on(6, 7))


// // // // // function once(func) {
// // // // //   return before(2, func)
// // // // // }

// // // // // function spread(func, start = 0) {
// // // // //   return function (ary) {
// // // // //     return func.apply(null, ary)
// // // // //   }
// // // // // }


// // // // // var say = spread(function(who, what) {
// // // // //   return who + ' says ' + what;
// // // // // });

// // // // // function greet(greeting, punctuation) {
// // // // //   return greeting + " " + this.user + punctuation
// // // // // }

// // // // // function add(a,b,c,d) {
// // // // //   return a + b + c + d
// // // // // }

// // // // // var add2 = bind(add, null, null, 1, null, 1, 2)
// // // // // console.log(add2(3,4,5))


// // // // // function bind(func, thisArg, ...fixedArgs) {
// // // // //   return function (...args) {
// // // // //     let count = 0
// // // // //     let copy = fixedArgs.slice()
// // // // //     copy.forEach((item, idx, ary) => {
// // // // //       if (item === null) {
// // // // //         ary[idx] = args[count++]
// // // // //       }
// // // // //     })
// // // // //     while(count  < args.length) {
// // // // //         copy.push(args[count++])
// // // // //     }
// // // // //     return func.apply(thisArg, copy)
// // // // //   }
// // // // // }      

// // // // // var object = {"user": "fred"}
// // // // // var bound = bind(greet, object, null, "!");
// // // // // console.log(bound("hi"))






// // // // function filter(ary, predicate) {
// // // //   let temp = predicate
// // // //   if (typeof predicate === "string") {
// // // //     predicate = item => item[temp]
// // // //   } else if(Array.isArray(predicate)) {
// // // //     predicate = item => item[temp[0]] == temp[1]
// // // //   } else if (typeof predicate === "object") {
// // // //     predicate = item => {
// // // //       for(let i in temp) {
// // // //         if (temp[i] !== item[i]) {
// // // //           return false
// // // //         }
// // // //       }
// // // //       return true
// // // //     }
// // // //   }
// // // //   return ary.filter(predicate)
// // // // }

// // // var users = [
// // //   { 'user': 'barney', 'age': 36, 'active': true },
// // //   { 'user': 'fred',   'age': 40, 'active': false }
// // // ];

// // // console.log(filter(users, function(o) { return !o.active; }))
// // // // => objects for ['fred']

// // // // The `matches` iteratee shorthand.
// // // console.log(filter(users, { 'age': 36, 'active': true }))
// // // // => objects for ['barney']

// // // // The `matchesProperty` iteratee shorthand.
// // // console.log(filter(users, ['active', false]))
// // // // => objects for ['fred']

// // // // The `property` iteratee shorthand.
// // // console.log(filter(users, 'active'))
// // // // => objects for ['barney']


// // // function chunk(array, size = 1) {
// // //   let result = new Array(Math.ceil(array.length / size))
// // //   let count = (array.length / size) | 0
// // //   let idx = 0
// // //   let start = 0

// // //   for (let i = 1; i <= count; i++) {
// // //       result[idx++] = array.slice(start, start + size)
// // //       start = start + size
// // //   }
// // //   if (start != array.length) {
// // //       result[idx++] = array.slice(start)
// // //   }
// // //   return result
// // // }

// // // function fromPairs(ary) {
// // //   return ary.reduce((prev, item, idx, ary) => {
// // //     prev[item[0]] = item[1]
// // //     return prev
// // //   },{})
// // // }

// // // console.log(fromPairs([['a', 1], ['b', 2], ["c", 3]]));

// // // function property(predicate) {
// // //   return obj => obj[predicate]
// // // }

// // // function matches(predicate) {
// // //   return obj => {
// // //     for (let i in predicate) {
// // //       if (obj[i] !== predicate[i]) {
// // //         return false
// // //       }
// // //     }
// // //     return true
// // //   }
// // // }

// // // function matchesProperty(predicate) {
// // //   return matches(fromPairs(chunk(predicate, 2)))
// // // }

// // // function iteratee(predicate) {
// // //   if (typeof predicate === "string") {
// // //     predicate = property(predicate)
// // //   } else if (Array.isArray(predicate)) {
// // //     predicate = matchesProperty(predicate)
// // //   } else if (typeof predicate === "object") {
// // //     predicate = matches(predicate)
// // //   }
// // //   return predicate
// // // }


// // // function filter(ary, predicate) {
// // //   predicate = iteratee(predicate)
// // //   return ary.filter(predicate)
// // // }


// // function bind(func, thisArg, ...fixedArgs) {
// //   return function (...args) {
// //     let count = 0
// //     let copy = fixedArgs.slice()
// //     copy.forEach((item, idx, ary) => {
// //       if (item === null) {
// //         ary[idx] = args[count++]
// //       }
// //     })
// //     while (count < args.length) {
// //       copy.push(args[count++])
// //     }
// //     return func.apply(thisArg, copy)
// //   }
// // }

// // function curry(func, arity = func.length) {
// //   if (arity == 0) {
// //     return func()
// //   }
// //   return function (...args) {
// //     let temp = arity
// //     let i = 0
// //     while (temp != 0) {
// //       if (args[i++] != null) {
// //         temp--
// //       }
// //       if (i == args.length) {
// //         break
// //       }
// //     }
// //     return curry(bind(func, null, ...args), temp)
// //   }
// // }

// // var abc = function (a, b, c) {
// //   return [a, b, c]
// // }

// // var curried = curry(abc, 3)
// // console.log(curried(1)(2)(3));
// // // => [1, 2, 3]

// // console.log(curried(1, 2)(3));
// // // => [1, 2, 3]

// // console.log(curried(1, 2, 3));
// // // => [1, 2, 3]

// // // Curried with placeholders.
// // console.log(curried(null,1)(null, 2, 3));
// // // => [1, 2, 3]




// // /* var b = Array.from({ length: 10 }, (item, idx, ary) => {
// //   if (idx == 0) return 1
// //   else return 2 * ary[idx - 1]
// // }
// // ) */


// // var c = Array.from({length: 10})
// // c.forEach((_, idx, ary) => {
// //   if(idx == 0) ary[idx] = 1
// //   else ary[idx] = 2 * ary[idx - 1]
// // })
// // console.log(c)

// // // console.log(b)


// // function listNode(val = 0, obj = null) {
// //   return {
// //     val: val,
// //     next: obj
// //   }
// // }




 function createTreeNode(val) {
  if (val === null) {
      return null
  }
  return {
    val: val,
    left: null,
    right: null
  }
}

// function ary2tree(ary) {
//   function aryCertainPos2Tree(ary, i = 0) {
//     if (i >= ary.length) {
//       return null
//     }
//     let root = createTreeNode(ary[i])
//     root.left = aryCertainPos2Tree(ary, 2 * i + 1)
//     root.right = aryCertainPos2Tree(ary, 2 * i + 2)
//     return root
//   }
//   return aryCertainPos2Tree(ary, 0)
// }
//  */

function ary2tree(ary) {
    function aryCertainPos2Tree(ary, i = 0) {
        if (ary[i] == null) {
            return null
        }

        return {
            val: ary[i],
            left: aryCertainPos2Tree(ary, 2 * i + 1),
            right: aryCertainPos2Tree(ary, 2 * i + 2),
        }
    }
    return aryCertainPos2Tree(ary, 0)
}

//   return aryCertainPos2Tree(ary, 0)
// }

// function tree2ary(obj, ary, idx = 0) {
//   if (obj == null) {
//     return
//   }
//   ary[idx] = obj.val
//   tree2ary(obj.left, ary, 2 * idx + 1)
//   tree2ary(obj.right, ary, 2 * idx + 2)
//   return ary
// }

// var b = ary2tree([1,2,3,null,4,5])
// console.log(b)
// console.log(tree2ary(b, [], 0))


// function tree2compactary(obj) {
//   if (obj === null) {
//     return []
//   }
//   let result = []
//   let currRow = [obj]

//   while(currRow.length) {
//     let nextRow = []
//     for(let i of currRow) {
//       result.push(i.val)
//       if (i.left) {
//         nextRow.push(i.left)
//       } else {
//         result.push(null)
//       }
//       if (i.right) {
//         nextRow.push(i.right)
//       } else {
//         result.push(null)
//       }
//     }
//     currRow = nextRow
//   }
//   return result
// }

// console.log(tree2compactary(b)

//递归写法(2分)
function preOrderTraversal(root, action) {
    if (root == null) {
        //console.log(null)
        return
    }
    action(root.val)
    preOrderTraversal(root.left)
    preOrderTraversal(root.right)
}

function postOrderTraversal(root, action) {
    if (root == null) {
        //console.log(null)
        return
    }
    postOrderTraversal(root.left)
    postOrderTraversal(root.right)
    action(root.val)
}

function inOrderTraversal(root, action) {
    if (root == null) {
        //console.log(null)
        return
    }
    inOrderTraversal(root.left, action)
    action(root.val)
    inOrderTraversal(root.right, action)
}


/* var b = ary2tree([1, 2, 3, 4, 5, 6, 7])
preOrderTraversal(b)
postOrderTraversal(b)
inOrderTraversal(b)
console.log(preOrderArray,postOrderArray,inOrderArray) */



let iterativeResult = []
let iterativeStack = []
function preOrderIterative(root) {
    while (true) {
        let pushFlag = true
        while (root && (!root.right) && iterativeStack.length) {
            if (pushFlag) {
                iterativeResult.push(root.val)
            }
            root = iterativeStack[iterativeStack.length - 1].right
            iterativeStack.pop()
        }
        if (!root) {
            return
        }
        while (root.left) {
            iterativeResult.push(root.val)
            iterativeStack.push(root)
            root = root.left
        }
        iterativeResult.push(root.val)
        if (iterativeStack.length == 0) {
            return
        }
        root = iterativeStack[iterativeStack.length - 1].right
        iterativeStack.pop()
    }
}

//循环写法(4分)
function preOrderIterative2nd(root) {
    let stack = []
    let result = []
/*     while(true) {
        while(root) {
            stack.push(root)
            result.push(root.val)
            root = root.left
        }
        if(!stack.length){
            break
        }
        root = stack.pop().right
    } */
    while(root || stack.length) {
        if (!root) {
            root = stack.pop().right
            continue
        }
        stack.push(root)
        result.push(root.val)
        root = root.left
    }
    return result
}

function findPrecursorNode(root) {
    let temp = root
    if (root.left === null) {
        return null
    }
    root = root.left
    while(root.right && root.right != temp) {
        root = root.right
    }
    return root
}

function preOrderIterative3rd(root) {
    let result = []
    while(root) {
        let node = findPrecursorNode(root)
        if (node === null) {
            result.push(root.val)
            root = root.right
        } else if (node.right === root) {
            node.right = null
            root = root.right
        } else if (node.right === null) {
            node.right = root
            result.push(root.val)
            root = root.left
        }
    }
    return result
}

function inOrderIterative3rd(root) {
    let result = []
    while(root) {
        let node = findPrecursorNode(root)
        if (node === null) {
            result.push(root.val)
            root = root.right
        } else if (node.right === root) {
            node.right = null
            result.push(root.val)
            root = root.right
        } else if (node.right === null) {
            node.right = root
            root = root.left
        }
    }
    return result
}


function insertIntoBST(bst, val) {
    if (!bst) {
        return createTreeNode(val)
    }
    let curr = bst
    let prev
    while(curr){
        prev = curr
        curr = val <= curr.val ? curr.left : curr.right
    }
    val <= prev.val ? prev.left = createTreeNode(val) : prev.right = createTreeNode(val)
    return bst
}

//平衡树：对每一个左子树和右子树的深度差别不超过1时
//时间复杂度：O(n(ln(n)))最优，当树是比较平衡的
//空间复杂度 O(n)构造出来的BST占用的空间
function binarySearchTreeSort(ary) {
    if(!ary.length) {
        return null
    }
    let root = createTreeNode(ary[0])
    for (let i = 1; i < ary.length; i++) {  
        let curr = root
        let prev
        while(curr){
            prev = curr
            curr = ary[i] <= curr.val ? curr.left : curr.right
        }
        ary[i] <= prev.val ? prev.left = createTreeNode(ary[i]) : prev.right = createTreeNode(ary[i])
    }
    return root
}
function insertIntoBST2nd(bst, val) {
    if (!bst) {
        return createTreeNode(val)
    }
    if (val <= bst.val) {
        bst.left = insertIntoBST2nd(bst.left, val)
    } else {
        bst.right = insertIntoBST2nd(bst.right, val)
    }
    return bst
}

function binarySearchTreeSort2nd(ary) { 
    let root = null
    root = ary.reduce(((bst,item) => insertIntoBST(bst, item)), root)
    let result = []
    inOrderTraversal(root,(val) => {
        result.push(val)
    })
    return result
}



// preOrderIterative(ary2tree([1,2,null,4,5,null,null,null,null,6,7]))
// preOrderIterative(ary2tree([1, 2, 3, 4, 5, 6, 7, null, null, 8, 9, 10, 11, 12, 13]))
// console.log(iterativeResult)
/* console.log(preOrderIterative2nd(ary2tree([1, 2, 3, 4, 5, 6, 7, null, null, 8, 9, 10, 11, 12, 13])))
console.log(preOrderIterative2nd(ary2tree([1,2,null,4,5,null,null,null,null,6,7]))) */
/* console.log(preOrderIterative3rd(ary2tree([1, 2, 3, 4, 5, 6, 7, null, null, 8, 9, 10, 11, 12, 13])))
console.log(preOrderIterative3rd(ary2tree([1,2,null,4,5,null,null,null,null,6,7])))
console.log(inOrderIterative3rd(ary2tree([1, 2, 3, 4, 5, 6, 7, null, null, 8, 9, 10, 11, 12, 13])))
console.log(inOrderIterative3rd(ary2tree([1,2,null,4,5,null,null,null,null,6,7])))


console.log(binarySearchTreeSort([2,1,4,7,5,8,3,6,9,0]))
console.log(binarySearchTreeSort2nd([2,1,4,7,5,8,3,6,9,0])) */




var levelOrder = function(root) {
    let stack = [root]
    let result = []
    let start = 0
    let end = stack.length - 1
    
    while(true) {
        if(end < start) {
            break
        }
        let currAry = []
        for (let i = start; i <= end; i++) {
            if(!stack[i]) {
                continue
            }
            stack.push(stack[i].left)
            stack.push(stack[i].right)
            currAry.push(stack[i].val)            
        }
        start = end + 1
        end = end + currAry.length * 2
        if(currAry.length) {
            result.push(currAry)
        }
    } 
    return result
}(ary2tree([3,9,20,null,null,15,7]));


var invertTree = function(root) {
    let curRow = [root]
    while(true) {
        let nextRow = []
        for(let i = curRow.length - 1; i >= 0; i--) {
            let node = curRow[i]
            if(!node) {
                continue
            }
            nextRow.push(node.right)
            nextRow.push(node.left)
        }
        if(!nextRow.length) {
            break
        }
        let dummy = [...nextRow]
        for(let node of curRow) {
            node.left = dummy.shift()
            node.right = dummy.shift()
        }
        curRow = nextRow
    }
    return root
}(ary2tree([4,2,7,1,3,6,9]));



var deleteNode = function(root, key) {
    if (!root) {
        return root
    }
    if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else {
        if (!root.left || !root.right) {
            return root.left || root.right
        }
        let nextNode = root.left
        let temp = root.right
        let dummy = root
        root.val = nextNode.val
        root.left = nextNode.left
        root.right = nextNode.right
        while(dummy.right) {
            dummy = dummy.right
        }
        dummy.right = temp
    }
    return root
}(ary2tree([5,3,6,2,4,null,7]),5)