/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
  var solveSudoku = function(board) {
  var isComplete = false;
  dfs(0, 0);

  function dfs(x, y){
      if(isComplete){
          return;
      }
      var candidates = findCandidate(x, y);
      if(x === 8 && y == 8){
          if(board[8][8] === '.'){
               board[8][8] = candidates[0];
          }
          isComplete = true;
          return;
      }

      if(board[x][y] !== '.'){
          if(y === 8){
              dfs(x + 1, 0);
              return;
          }else{
              dfs(x, y + 1);
              return;
          }
      }
      for(var i = 0; i < candidates.length; i++){
          board[x][y] = candidates[i];
          if(y === 8){
              dfs(x + 1, 0);
          }else{
              dfs(x, y + 1);
          }
          if(!isComplete){
              board[x][y] = '.'; 
          }else{
              return;
          }
      }
  }

  function findCandidate(x, y){
      var set = new Set();
      var candidate = [];
      var cell = -1;
      //row
      for(i = 0; i < 9; i++){
          cell = board[x][i];
          if(!set.has(cell)){
              set.add(cell);
          }   
      }
      //column
      for(i = 0; i < 9; i++){
          cell = board[i][y];
          if(!set.has(cell)){
              set.add(cell);
          }  
      }
      //square
      var offsetX = parseInt(x / 3) * 3;
      var offsetY = parseInt(y / 3) * 3;
      for(i = 0; i <= 2; i++){
          for(j = 0; j <= 2; j++){
              cell = board[i + offsetX][j + offsetY];
              if(!set.has(cell)){
                  set.add(cell);
              }
          }
      }
      //find candidate
      for(i = 1; i <= 9; i++){
          if(!set.has(i + "")){
              candidate.push(i + "");
          }
      }
      return candidate;
  } 
}; 



/* var solveSudoku = function (board) {
  function getBannedNum(x, y) {
    let str = ""
    str += board[x].join("")//得到行被禁位置
    //得到列被禁位置
    for (let i in board) {
      str += board[i][y]
    }
    //得到九宫格被禁位置
    let startRow = Number.parseInt(x / 3) * 3
    let startCol = Number.parseInt(y / 3) * 3
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        str += board[i][j]
      }
    }
    return new Set(str)
  }

  let isSuccess = false
  function bt(x = 0, y = 0) {
    let nextx = x
    let nexty = y
    if (y < 8) {
      nexty++
    } else {
      if (x < 8) {
        nextx++
        nexty = 0
      } else { //当x == 8 以及 y == 8的时候
        if (board[x][y] == ".") {
          for (let i = 1; i <= 9; i++) {
            if (!(getBannedNum(x, y).has(String(i)))) {
              isSuccess = true
              board[x][y] = String(i)
            }
          }
          return
        }
        isSuccess = true
        return
      }
    }
      
    if (board[x][y] == ".") {
      let bannedPos = getBannedNum(x, y)
      for (let i = 1; i <= 9; i++) {
        if (!bannedPos.has(String(i))) {
          board[x][y] = String(i)
          bt(nextx, nexty)
        }
        if (isSuccess) {
          return
        }
        board[x][y] = "."
      }
    } else { //当这个位置已经有数字的时候
      bt(nextx, nexty)
    }
  }
  bt(0, 0)

}; */





/* 

var solveSudoku = function (board) {
  function getCandidates(x, y) {
    let str = ""
    str += board[x].join("")//得到行被禁位置
    //得到列被禁位置
    for (let i in board) {
      str += board[i][y]
    }
    //得到九宫格被禁位置
    let startRow = Number.parseInt(x / 3) * 3
    let startCol = Number.parseInt(y / 3) * 3
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        str += board[i][j]
      }
    }
    let bannedNum =  new Set(str)
    let candidates = []
    for (let i = 1; i <= 9; i++)  {
      if (!bannedNum.has(String(i))) {
        candidates.push(String(i))
      }
    }
    return candidates
  }

  let isSuccess = false
  function bt(x = 0, y = 0) {
    let nextx = x
    let nexty = y
    if (y < 8) {
      nexty++
    } else {
      if (x < 8) {
        nextx++
        nexty = 0
      } else { //当x == 8 以及 y == 8的时候
        if (board[x][y] == ".") {
          let candidates = getCandidates(x, y)
          board[x][y] = candidates[0]
        }
        isSuccess = true
        return
      }
    }
      
    if (board[x][y] == ".") {
      let candidates = getCandidates(x, y)
      for (let i in candidates) {
        board[x][y] = candidates[i]
        bt(nextx, nexty)
        if (isSuccess) {
          return
        }
        board[x][y] = "."
      }
    } else { //当这个位置已经有数字的时候
      bt(nextx, nexty)
    }
  }
  bt(0, 0)

};


var board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
solveSudoku(board)
console.log(board) 
 */


/* var countVowelStrings = function(n) {
  let sum = 0
  let result = []
  let alphabet = ["a", "e", "i", "o", "u"]
  function bt(iteranum = 1, lastIdx = 0, history = "") {
      if (iteranum == n + 1) {
          result.push(history)
          sum++
          return 
      }
      for (let i = lastIdx; i < 5; i++) {
          bt(iteranum + 1, i, history + alphabet[i])
      }
      return 
  }
  bt()
  return result
};

console.log(countVowelStrings(2))
 */


var numTilePossibilities = function(tiles) {
  // naive, loop through each
  // memoize answers and check if they exist
  
  const count = []
  const visited = {};
  const sortedTiles = tiles.split('').sort();
  let result = []
  backtrack(sortedTiles, 0, visited, count, "", result);
  return count.length;
  
};

var backtrack = function(tiles, length, visited, count, history = "", result) {
  if (tiles.length === length) {
      result.push(history)
      return;
  }
  for (let i = 0; i < tiles.length; i++) {
      if (visited[i]) {
          continue;
      }
      if (i - 1 >= 0 && tiles[i] === tiles[i - 1] && !visited[i - 1]) {
          continue;
      }
      count.push(true)
      visited[i] = true;
      backtrack(tiles, length+1, visited, count, history + tiles[i], result);
      visited[i] = false;
  }
}

console.log(numTilePossibilities("CDC"))





var getPermutation = function (n, k) {
  if (n == 1) {
      return 1
  }

  let nums = Array.from({length: n}, (v, i) => i+1);
  let length = n
  let factorialAry = new Array(n - 1)
  let result = ""
  factorialAry[0] = 1
  for (let i = 2; i < n; i++) {
      factorialAry[i - 1] = i * factorialAry[i - 2]
  }
  
  let j = 1
  while(result.length != length) {
      let remainder = (k - 1) % factorialAry[n - j - 1]
      let idx = ((k - 1 - remainder) / factorialAry[n - j - 1]) % nums.length
      let digit = nums.splice(idx, 1)
      result += digit
      // k = remainder + 1
      j++
  }
  return result
}


console.log(getPermutation(3, 1))