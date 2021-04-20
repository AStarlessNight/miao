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
                return this
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

// var heap = new priorityQueue().push(4).push(5).push(6).push(9).push(1).push(7)
// console.log(heap)
// console.log(heap.pop().elements)
// console.log(heap.pop().elements)
// console.log(heap.pop().elements)
var heap = new priorityQueue([4,1,5,2,7,0,9,3,4,7,8,1])
console.log(heap.elements)
// console.log(heap.pop().elements)
// console.log(heap.pop().elements)
// console.log(heap.pop().elements)
