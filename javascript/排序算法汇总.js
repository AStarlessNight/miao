//堆排序
//时间：n*log(n)
//空间：heapDown使用循环的话，O(1)
//稳定性：不稳定
var heapSort = function (ary) {
    heapify(ary) //time: O(n * log(n))
    for (let i = ary.length - 1; i > 0; i--) {
        swap(ary, 0, i)
        heapDown(ary, 0, i - 1) //time: O(log(n))
    }
    return ary
}

//数组的堆化
var heapify = function(ary) {
    let idx = Math.floor((ary.length - 2) / 2)
    for (let i = idx; i >= 0; i--) {
        heapDown(ary, i, ary.length - 1)
    }
} 

var heapDown = function (ary, idx, end = ary.length - 1) {
    let leftIdx = idx * 2 + 1
    if (leftIdx > end) {
        return
    }
    let rightIdx = idx * 2 + 2
    let compareIdx
    if (rightIdx > end) {
        compareIdx = leftIdx
    } else {
        compareIdx = ary[rightIdx] > ary[leftIdx] ? rightIdx : leftIdx
    }
 
    if (ary[compareIdx] <= ary[idx]) {
        return
    }

    swap(ary, idx, compareIdx)
    heapDown(ary, compareIdx, end)
}

//循环写法
var heapDown2 = function (ary, idx, end) {
    while(true) {
        let leftIdx = idx * 2 + 1
        if (leftIdx > end) {
            return
        }
        let rightIdx = idx * 2 + 2
        let compareIdx
        if (rightIdx > end) {
            compareIdx = leftIdx
        } else {
            compareIdx = ary[rightIdx] > ary[leftIdx] ? rightIdx : leftIdx
        }
     
        if (ary[compareIdx] <= ary[idx]) {
            return
        }
        swap(ary, idx, compareIdx)
        idx = compareIdx
    }
}

var swap = function(ary, i, j) {
    let temp = ary[i]
    ary[i] = ary[j]
    ary[j] = temp
}

console.log(heapSort(Array(100).fill(0).map(it => Math.random() * 1000 | 0)))