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


var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a, b) => a - b)
    let len = satisfaction.length
    if (satisfaction[len - 1] <= 0) {
        return 0
    }
    let sum = [satisfaction[0]]
    for (let i = 1; i < len; i++) {
        sum[i] = sum[i - 1] + satisfaction[i]
    }
    let start = len
    for (let i = 0; i < len; i++) {
        let profit = sum[len - 1] - (i === 0 ? 0 : sum[i - 1])
        if (profit > 0) {
            start = i
            break
        }
    }
    let max = 0
    for (let i = start; i < len; i++) {
        max += (i - start + 1) * satisfaction[i]
    }   
    return max
}([-8, -1, 0,  5, -7]);