

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}



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







var mergeKLists = function (lists) {
    let end = lists.length - 1
    for (let i = 0; i <= end; i++) {
        while (lists[i] === null) {
            swap(lists, i, end--)
            if (i > end) {
                break
            }
        }
    }
    if (end < 0) {
        return null
    }
    let root = new ListNode()
    let dummy = root
    heapify(lists, end)
    while(true) {
        root.next = lists[0]
        root = root.next
        lists[0] = lists[0].next                                                                      
        if (lists[0] === null) {
            swap(lists, 0, end--)
            if (end < 0) {
                return dummy.next
            }
 
        }
        heapDown(lists, 0, end)
    }
};


var heapify = function(ary, end) {
    let idx = Math.floor((end - 1) / 2)
    for (let i = idx; i >= 0; i--) {
        heapDown(ary, i, end)
    }
}

var heapDown = function (ary, idx, end = ary.length - 1) {
    while (true) {
        let leftIdx = idx * 2 + 1
        if (leftIdx > end) {
            return
        }
        let rightIdx = idx * 2 + 2
        let compareIdx
        if (rightIdx > end) {
            compareIdx = leftIdx
        } else {
            compareIdx = ary[rightIdx].val < ary[leftIdx].val ? rightIdx : leftIdx
        }
        if (ary[compareIdx].val >= ary[idx].val) {
            return
        }
        swap(ary, idx, compareIdx)
        idx = compareIdx
    }
}


var swap = function(ary, i, j) {
    if (i === j) {
        return
    }
    let temp = ary[i]
    ary[i] = ary[j]
    ary[j] = temp
}




