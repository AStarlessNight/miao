"use strict";

// /* function createTreeNode(val) {
//   return {
//     val: val,
//     left: null,
//     right: null
//   }
// }
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
  function aryCertainPos2Tree(ary) {
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (ary[i] == null) {
      return null;
    }

    return {
      val: ary[i],
      left: aryCertainPos2Tree(ary, 2 * i + 1),
      right: aryCertainPos2Tree(ary, 2 * i + 2)
    };
  }

  return aryCertainPos2Tree(ary, 0);
} //   return aryCertainPos2Tree(ary, 0)
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


var preOrderArray = [];

function preOrderTraversal(root) {
  if (root == null) {
    //console.log(null)
    return;
  }

  preOrderArray.push(root.val);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
}

var postOrderArray = [];

function postOrderTraversal(root) {
  if (root == null) {
    //console.log(null)
    return;
  }

  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  postOrderArray.push(root.val);
}

var inOrderArray = [];

function inOrderTraversal(root) {
  if (root == null) {
    //console.log(null)
    return;
  }

  inOrderTraversal(root.left);
  inOrderArray.push(root.val);
  inOrderTraversal(root.right);
}
/* var b = ary2tree([1, 2, 3, 4, 5, 6, 7])
preOrderTraversal(b)
postOrderTraversal(b)
inOrderTraversal(b)
console.log(preOrderArray,postOrderArray,inOrderArray) */


var iterativeResult = [];
var iterativeStack = [];

function preOrderIterative(root) {
  while (true) {
    var pushFlag = true;

    while (root && !root.right && iterativeStack.length) {
      if (pushFlag) {
        iterativeResult.push(root.val);
      }

      root = iterativeStack[iterativeStack.length - 1].right;
      iterativeStack.pop();
    }

    if (!root) {
      return;
    }

    while (root.left) {
      iterativeResult.push(root.val);
      iterativeStack.push(root);
      root = root.left;
    }

    iterativeResult.push(root.val);

    if (iterativeStack.length == 0) {
      return;
    }

    root = iterativeStack[iterativeStack.length - 1].right;
    iterativeStack.pop();
  }
} //循环写法(4分)


function preOrderIterative2nd(root) {
  var stack = [];
  var result = [];
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

  while (root || stack.length) {
    if (!root) {
      root = stack.pop().right;
      continue;
    }

    stack.push(root);
    result.push(root.val);
    root = root.left;
  }

  return result;
}

function findPrecursorNode(root) {
  var temp = root;

  if (root.left === null) {
    return null;
  }

  root = root.left;

  while (root.right && root.right != temp) {
    root = root.right;
  }

  return root;
}

function preOrderIterative3rd(root) {
  var result = [];

  while (root) {
    var node = findPrecursorNode(root);

    if (node === null) {
      result.push(root.val);
      root = root.right;
    } else if (node.right === root) {
      node.right = null;
      root = root.right;
    } else if (node.right === null) {
      node.right = root;
      result.push(root.val);
      root = root.left;
    }
  }

  return result;
}