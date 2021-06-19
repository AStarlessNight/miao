class priorityQueue {
    constructor(initial = []) {
        this.elements = initial.slice()
        this.heapify()
    }
    //查看堆顶元素
    peak(val) {
        return this.elements[0]
    }

    //往堆里添加元素
    push(val) {
        this.elements.push(val)
        this._heapUp(this.size - 1)
        return this
    }

    push2(val) {
        this.elements.push(val)
        let childIdx = this.size - 1
        let ancIdx = Math.floor(childIdx / 2)
        while (ancIdx >= 0) {
            if (this.elements[ancIdx] >= this.elements[childIdx]) {
                return thisq
            }
            this._swap(childIdx, ancIdx)
            childIdx = ancIdx
            ancIdx = Math.floor(childIdx / 2)
        }

        return this
    }


    //从堆顶pop元素
    pop() {
        this._swap(0, this.size - 1)
        let top = this.elements.pop()
        let ancIdx = 0
        let leftIdx = ancIdx * 2 + 1
        let rightIdx = ancIdx * 2 + 2
        while (leftIdx < this.size) {
            let compareIdx = this.elements[rightIdx] >= this.elements[leftIdx] ? rightIdx : leftIdx
            if (this.elements[ancIdx] >= this.elements[compareIdx]) {
                return this
            }
            this._swap(ancIdx, compareIdx)
            ancIdx = compareIdx
            leftIdx = ancIdx * 2 + 1
            rightIdx = ancIdx * 2 + 2
        }
        return this
    }

    pop2() {
        if (this.size === 0) {
            return null
        }
        this._swap(0, this.size - 1)
        let top = this.elements.pop()
        this._heapDown(0)
        return this
    }

    heapify() {
        let startIdx = Math.floor((this.size - 2) / 2)
        for (let i = startIdx; i >= 0; i--) {
            this._heapDown(i)
        }
        return this
    }

    get size() {
        return this.elements.length
    }

    _swap(p1, p2) {
        let temp = this.elements[p1]
        this.elements[p1] = this.elements[p2]
        this.elements[p2] = temp
    }

    _heapUp(idx) {
        if (idx <= 0) {
            return
        }
        let ancIndex = Math.floor((idx - 1) / 2)
        if (this.elements[ancIndex] <= this.elements[idx]) {
            this._swap(idx, ancIndex)
            this._heapUp(ancIndex)
        }
    }
    _heapUpOnce(idx) {
        if (idx <= 0) {
            return
        }
        let ancIndex = Math.floor((idx - 1) / 2)
        if (this.elements[ancIndex] <= this.elements[idx]) {
            this._swap(idx, ancIndex)
        }
    }



    _heapDown(idx) {
        if (idx < 0) {
            return
        }
        let leftIdx = 2 * idx + 1
        if (leftIdx >= this.size) {
            return
        }
        let rightIdx = 2 * idx + 2
        let compareIdx = this.elements[rightIdx] >= this.elements[leftIdx] ? rightIdx : leftIdx
        if (this.elements[idx] >= this.elements[compareIdx]) {
            return
        }
        if (compareIdx === idx) {
            return
        }
        this._swap(idx, compareIdx)
        this._heapDown(compareIdx)
    }
}


class PriorityQueue2 extends Array {
    constructor(initial, predicate = (upper, lower) => upper >= lower) {
        super()
        super.push(...initial)
        this.predicate = predicate
        this.heapify()
    }
    heapify() {
        let startIdx = Math.floor((this.length - 2) / 2)
        for (let i = startIdx; i >= 0; i--) {
            this.heapDown(i)
        }
    }
    peek() {
        return this[0]
    }
    push(item) {
        super.push(item)
        this.heapUp(this.length - 1)
    }
    pop() {
        let top = this[0]
        this[0] = this[this.length - 1]
        super.pop()
        this.heapDown(0)
        return top
    }
    heapUp(startIdx) {
        let ancIdx = Math.floor((startIdx - 1) / 2)
        let temp = this[startIdx]
        while (ancIdx >= 0) {
            if (this.predicate(this[ancIdx], temp)) {
                break
            }
            this[startIdx] = this[ancIdx]
            startIdx = ancIdx
            ancIdx = Math.floor((startIdx - 1) / 2)
        }
        this[startIdx] = temp
        return
    }
    heapDown(startIdx, endIdx = this.length - 1) {
        if (startIdx >= endIdx) {
            return
        }
        let temp = this[startIdx]
        let leftIdx = 2 * startIdx + 1
        let rightIdx = leftIdx + 1

        while (leftIdx <= endIdx) {
            let compareIdx = this.predicate(this[rightIdx], this[leftIdx]) ? rightIdx : leftIdx
            if (this.predicate(temp, this[compareIdx])) {
                break
            }
            this[startIdx] = this[compareIdx]
            startIdx = compareIdx
            leftIdx = 2 * startIdx + 1
            rightIdx = leftIdx + 1
        }
        this[startIdx] = temp
        return
    }

    _swap(i, j) {
        let temp = this[i]
        this[i] = this[j]
        this[j] = temp
    }
}


(function () {
    var maxHeap = new PriorityQueue2([], (upper, lower) => upper.val >= lower.val)




    console.log(maxHeap)
})()




var deleteAndEarn = function (nums) {
    function walk(ary, startIdx = 0) {
        if (startIdx >= ary.length) {
            return 0
        } else if (startIdx === ary.length - 1) {
            return ary[startIdx]
        }
        let curr = ary[startIdx]
        let dupLastIdx = startIdx

        while (ary[dupLastIdx + 1] === curr) {
            dupLastIdx++
        }

        let sum = (dupLastIdx - startIdx + 1) * curr
        let nextIdx = dupLastIdx + 1
        let next = ary[nextIdx]
        if (next - curr === 1) {
            while (ary[nextIdx + 1] === next) {
                nextIdx++
            }
            nextIdx++
        }
        return Math.max(walk(ary, dupLastIdx + 1), sum + walk(ary, nextIdx))
    }
    nums.sort((a, b) => a - b)
    return walk(nums)
};


deleteAndEarn([1, 2, 2, 3, 4, 5, 6, 11, 11, 11, 12, 12, 13, 14, 15, 16, 17, 19, 19, 20, 21, 22, 22, 23, 27, 28, 29, 29, 32, 32, 33, 33, 34, 35, 36, 37, 37, 38, 38, 40, 42, 42, 44, 45, 46, 48, 49, 51, 51, 51, 53, 53, 55, 55, 57, 58, 58, 59, 60, 60, 62, 62, 63, 63, 64, 64, 65, 65, 66, 70, 71, 71, 72, 74, 76, 77, 78, 78, 78, 80, 82, 84, 85, 85, 90, 90, 90, 91, 91, 91, 92, 92, 92, 93, 93, 95, 96, 97, 100, 100])