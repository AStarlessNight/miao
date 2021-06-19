function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


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


var widthOfBinaryTree = function (root) {
    let currRow = [root]
    let currRowIndex = [0]
    let nextRow = []
    let nextRowIndex = []
    let maxWidth = 1

    while (currRow.length) {
        for (let i = 0; i < currRow.length; i++) {
            let node = currRow[i]
            let nodeIndex = currRowIndex[i]
            if (node.left) {
                nextRow.push(node.left)
                nextRowIndex.push(2 * nodeIndex + 1)
            }
            if (node.right) {
                nextRow.push(node.right)
                nextRowIndex.push(2 * nodeIndex + 2)
            }
        }
        let tempWidth = currRowIndex[currRowIndex.length - 1] - currRowIndex[0] + 1
        if (tempWidth > maxWidth) {
            maxWidth = tempWidth
        }
        currRow = nextRow
        currRowIndex = nextRowIndex
        nextRow = []
        nextRowIndex = []
    }
    return maxWidth
};


var bstFromPreorder = function (preorder) {
    function walk(start, end) {
        if (end < start) {
            return null
        }
        let root = new TreeNode(preorder[start])
        let fstRightChildIdx = preorder.findIndex(it => it > root.val)
        if (fstRightChildIdx == -1) {
            fstRightChildIdx = end + 1
        }
        root.left = walk(start + 1, fstRightChildIdx - 1)
        root.right = walk(fstRightChildIdx, end)
        return root
    }

    return walk(0, preorder.length - 1)

};


var serialize = function(root) {
    if (root === null) {
        return "#"
    }
    let str = root.val
    str = str + "," + serialize(root.left)
    str = str + "," + serialize(root.right)
    return str
};

var deserialize = function(data) {
    let ary = data.split(",")
    let root = new TreeNode()
    let dummy = root
    let stack = [root]
    for (let idx = 0; idx < ary.length; idx++) {
        let item = ary[idx]
        if (item === "#") {
            let node = null
            while (item === "#" && idx < ary.length - 1) {
                item = ary[++idx]
                node = stack.pop()
            }
            if (item !== "#") {
                node.right = new TreeNode(Number(item))
                root = node.right
                stack.push(root)
            }
            continue
        }
        root.left = new TreeNode(Number(item))
        root = root.left
        stack.push(root)
    }
    return dummy.left
}

console.log(deserialize(serialize(ary2tree([1,2,3,null,null,4,5]))))



function arrayToList(nums) {
    function returnList(ary) {
        if (ary.length == 0) {
            return null
        }
        let head = {
            val: ary[0],
            next: returnList(ary.slice(1)),
        }

        return head
    }

    return returnList(nums)
}


var deleteDuplicates = function(head) {
    let dummy = head
    let prev = null
    while (head) {
        let repeatFlag = false
        while (head.next && head.next.val === head.val) {
            head = head.next
            repeatFlag = true
        }
        if (repeatFlag === false) {
            if (prev === null) {
                prev = head
                dummy = prev
            } else {
                prev.next = head
                prev = prev.next
            }
        }
        head = head.next
    }
    return dummy
};

console.log(deleteDuplicates(arrayToList([1,1,3,3,4])))




var isSymmetric = function (root) {
    let curRow = [root]
    let nextRow = []
    
    while(curRow.length) {
        let count = 0
        let compareIdx = curRow.length
        let moveIdx = compareIdx
        for (let i in curRow) {
            let node = curRow[i]
            if (node === null) {
                if (count < compareIdx) {
                    moveIdx -= 2
                }
                count += 2
                continue
            }
            if (count >= compareIdx) {
                let val1 = node.left ? node.left.val : node.left
                let val2 = nextRow[--moveIdx]
                val2 = val2 ? val2.val : val2
                if (val1 !== val2) {
                    return false
                }
            } else {
                count++
            }
            nextRow.push(node.left)
            if (count >= compareIdx) {
                let val1 = node.right ? node.right.val : node.right
                let val2 = nextRow[--moveIdx]
                val2 = val2 ? val2.val : val2
                if (val1 !== val2) {
                    return false
                }
            } else {
                count++
            }
            nextRow.push(node.right)
        }
        curRow = nextRow
        nextRow = []
    }
    return true
};

var isSymmetric2 = function (root) {
    let curRow = [root]
    let nextRow = []
    
    while(curRow.length) {
        let compareStack = []
        let count = 0
        for (let i in curRow) {
            let node = curRow[i]
            if (count === curRow.length) {
                let val = node.left ? node.left.val : node.left
                if (val !== compareStack.pop()) {
                    return false
                }
            } else {
                compareStack[count++] = node.left ? node.left.val : node.left
            }
            if (count === curRow.length) {
                let val = node.right ? node.right.val : node.right
                if (val !== compareStack.pop()) {
                    return false
                }
            } else {
                compareStack[count++] = node.right ? node.right.val : node.right
            }
            if (node.left !== null) {
                nextRow.push(node.left)
            }
            if (node.right !== null) {
                nextRow.push(node.right)
            }
        }
        curRow = nextRow
        nextRow = []
    }
    return true
};


console.log(isSymmetric(ary2tree([1,2,2,3,null,null,3])))


var findTilt = function(root) {
    function sumOfTree(root) {
        if (root === null) {
            return 0
        }
        let leftSum = sumOfTree(root.left)
        let rightSum = sumOfTree(root.right)
        allTilt += Math.abs(leftSum, rightSum)
        return leftSum + rightSum + root.val
    }
    let allTilt = 0
    sumOfTree(root)
    return allTilt
};


var countNodes = function (root) {
    if (root === null) {
        return 0
    }
    let leftDepth = countLevels(root.left) + 1
    let maxDepth = leftDepth
    let nodesSum = (1 << maxDepth) - 1
    let rightDepth = countLevels(root.right) + 1
    let curDepth = 1
    while (true) {
        if (leftDepth === rightDepth) {
            root = root.right
            curDepth++
        } else {
            root = root.left
            curDepth++
            nodesSum -= 1 << (maxDepth - curDepth)
        }
        if (root === null) {
            break
        }
        leftDepth = countLevels(root.left)
        rightDepth = countLevels(root.right)
    }
    return nodesSum
};

var countLevels = function (root) {
    let count = 0
    while (root) {
        root = root.left
        count++
    }
    return count
}

console.log(countNodes(ary2tree(Array(50000).fill(0).map(()=>Math.random() * 100| 0))))
