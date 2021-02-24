"use strict";

/* var JOURNAL = [
    { "events": ["carrot", "exercise", "weekend"], "squirrel": false },
    { "events": ["bread", "pudding", "brushed teeth", "weekend", "touched tree"], "squirrel": false },
    { "events": ["carrot", "nachos", "brushed teeth", "cycling", "weekend"], "squirrel": false },
    { "events": ["brussel sprouts", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false },
    { "events": ["potatoes", "candy", "brushed teeth", "exercise", "weekend", "dentist"], "squirrel": false },
    { "events": ["brussel sprouts", "pudding", "brushed teeth", "running", "weekend"], "squirrel": false },
    { "events": ["pizza", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false },
    { "events": ["bread", "beer", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["cauliflower", "brushed teeth", "work"], "squirrel": false },
    { "events": ["pizza", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["lasagna", "nachos", "brushed teeth", "work"], "squirrel": false },
    { "events": ["brushed teeth", "weekend", "touched tree"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "television", "weekend"], "squirrel": false },
    { "events": ["spaghetti", "brushed teeth", "work"], "squirrel": false },
    { "events": ["brushed teeth", "computer", "work"], "squirrel": false },
    { "events": ["lettuce", "nachos", "brushed teeth", "work"], "squirrel": false },
    { "events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["brushed teeth", "work"], "squirrel": false },
    { "events": ["cauliflower", "reading", "weekend"], "squirrel": false },
    { "events": ["bread", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["lasagna", "brushed teeth", "exercise", "work"], "squirrel": false },
    { "events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false },
    { "events": ["carrot", "ice cream", "brushed teeth", "television", "work"], "squirrel": false },
    { "events": ["spaghetti", "nachos", "work"], "squirrel": false },
    { "events": ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["spaghetti", "peanuts", "computer", "weekend"], "squirrel": true },
    { "events": ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false },
    { "events": ["potatoes", "ice cream", "brushed teeth", "work"], "squirrel": false },
    { "events": ["peanuts", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["potatoes", "exercise", "work"], "squirrel": false },
    { "events": ["pizza", "ice cream", "computer", "work"], "squirrel": false },
    { "events": ["lasagna", "ice cream", "work"], "squirrel": false },
    { "events": ["cauliflower", "candy", "reading", "weekend"], "squirrel": false },
    { "events": ["lasagna", "nachos", "brushed teeth", "running", "weekend"], "squirrel": false },
    { "events": ["potatoes", "brushed teeth", "work"], "squirrel": false },
    { "events": ["carrot", "work"], "squirrel": false },
    { "events": ["pizza", "beer", "work", "dentist"], "squirrel": false },
    { "events": ["lasagna", "pudding", "cycling", "work"], "squirrel": false },
    { "events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false },
    { "events": ["spaghetti", "pudding", "television", "weekend"], "squirrel": false },
    { "events": ["bread", "brushed teeth", "exercise", "weekend"], "squirrel": false },
    { "events": ["lasagna", "peanuts", "work"], "squirrel": true },
    { "events": ["pizza", "work"], "squirrel": false },
    { "events": ["potatoes", "exercise", "work"], "squirrel": false },
    { "events": ["brushed teeth", "exercise", "work"], "squirrel": false },
    { "events": ["spaghetti", "brushed teeth", "television", "work"], "squirrel": false },
    { "events": ["pizza", "cycling", "weekend"], "squirrel": false },
    { "events": ["carrot", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["carrot", "beer", "brushed teeth", "work"], "squirrel": false },
    { "events": ["pizza", "peanuts", "candy", "work"], "squirrel": true },
    { "events": ["carrot", "peanuts", "brushed teeth", "reading", "work"], "squirrel": false },
    { "events": ["potatoes", "peanuts", "brushed teeth", "work"], "squirrel": false },
    { "events": ["carrot", "nachos", "brushed teeth", "exercise", "work"], "squirrel": false },
    { "events": ["pizza", "peanuts", "brushed teeth", "television", "weekend"], "squirrel": false },
    { "events": ["lasagna", "brushed teeth", "cycling", "weekend"], "squirrel": false },
    { "events": ["cauliflower", "peanuts", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "television", "work"], "squirrel": false },
    { "events": ["potatoes", "brushed teeth", "computer", "work"], "squirrel": false },
    { "events": ["bread", "candy", "work"], "squirrel": false },
    { "events": ["potatoes", "nachos", "work"], "squirrel": false },
    { "events": ["carrot", "pudding", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"], "squirrel": false },
    { "events": ["brussel sprouts", "running", "work"], "squirrel": false },
    { "events": ["brushed teeth", "work"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["candy", "brushed teeth", "work"], "squirrel": false },
    { "events": ["brussel sprouts", "brushed teeth", "computer", "work"], "squirrel": false },
    { "events": ["bread", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["cauliflower", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["spaghetti", "candy", "television", "work", "touched tree"], "squirrel": false },
    { "events": ["carrot", "pudding", "brushed teeth", "work"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "work"], "squirrel": false },
    { "events": ["carrot", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["pizza", "brushed teeth", "work"], "squirrel": false },
    { "events": ["spaghetti", "peanuts", "exercise", "weekend"], "squirrel": true },
    { "events": ["bread", "beer", "computer", "weekend", "touched tree"], "squirrel": false },
    { "events": ["brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"], "squirrel": false },
    { "events": ["lasagna", "brushed teeth", "television", "work"], "squirrel": false },
    { "events": ["cauliflower", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["carrot", "reading", "weekend"], "squirrel": false },
    { "events": ["carrot", "peanuts", "reading", "weekend"], "squirrel": true },
    { "events": ["potatoes", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["lasagna", "ice cream", "work", "touched tree"], "squirrel": false },
    { "events": ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["pizza", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "work"], "squirrel": false },
    { "events": ["bread", "brushed teeth", "television", "weekend"], "squirrel": false },
    { "events": ["cauliflower", "peanuts", "brushed teeth", "weekend"], "squirrel": false }
];


var correlationCal = function (table) {
    let row1 = table[0] + table[1]
    let row2 = table[2] + table[3]
    let col1 = table[0] + table[2]
    let col2 = table[1] + table[3]
    return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt(row1 * row2 * col1 * col2)
}


var specificEventCorrelationCal = function (event, journal) {
    let table = [0, 0, 0, 0]
    for (let day of journal) {
        let index = 0
        if (day.squirrel) {
            index += 2
        }
        for (let activity of day.events) {
            if (activity == event) {
                index += 1
            }
        }
        table[index] += 1
    }
    return correlationCal(table)
}


var getAllEventsArray = function (journal) {
    let stack = []
    for (let day of journal) {
        if (day.events.includes("peanuts") && !day.events.includes("brushed teeth")) {
            day.events.push("peanuts with not brushed teeth")
        }
        for (let activity of day.events) {
            
            if (!stack.includes(activity)) {
                stack.push(activity)
            }
        }
    }
    return stack
}

var getAllEventsCorrelation = function (journal) {
    let allEvents = getAllEventsArray(journal)

    for (let event of allEvents) {
        let correlation = specificEventCorrelationCal(event, journal)
        if (Math.abs(correlation) > 0.1) {
            console.log(event + ": " + correlation)
        }
    }
    return
}(JOURNAL)



 */
// 掷奇怪的骰子

/* function r(){
    if (Math.random() < 0.3) {
        return 0
    } else {
        return 1
    }
}


function tossStrangeCoins(){
    let fst = r()
    let snd = r()
    if (fst ^ snd) {
        return fst
    } else {
        return tossStrangeCoins()
    }
}

var onetimes = 0
for (let i = 0; i < 10000; i++) {
    if(tossStrangeCoins()) {
        onetimes++
    }
}

console.log(onetimes,onetimes / 100) */

/* function arrayToList(nums) {
    let obj = {}
    let list = obj
    for (let i = 0; i < nums.length; i++) {
        list["val"] = nums[i]
        if (i != nums.length - 1) {
            list["next"] = {}
        } else {
            list["next"] = null
        }
        list = list["next"]
    }
    return obj
} */

/* function arrayToList(nums) {
    let obj = {}
    let list = obj
    for (let i = 0; i < nums.length; i++) {
        let node = {
            val: nums[i],
            next: null,
        }
        list.next = node
        list = list.next
    }
    return obj.next
}
var a = arrayToList([1,2,3,4])
 */

/* function arrayToList(nums) {
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
var a = arrayToList([1,2,4]) */
var head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
};
/* var listToArray = function(head) {
    let stack = []
    let prev = head
    while(prev) {
        stack.push(prev.val)
        prev = prev.next
    }
    console.log(stack)
    return stack
}(head) */

/* var listToArray = function(head) {
    let stack = []
    function toArrayHead(obj) {
        if(!obj) {
            return
        }
        stack.push(obj.val)
        toArrayHead(obj.next)
    }
    toArrayHead(head)
    return stack
}


var a = listToArray(head) */

/* function append(val,head) {
    while(head.next) {
        head = head.next
    }
    head.next = {}
}

function nth(head,idx) {
    for (let i = 1; i < idx; i++) {
        if(!head) {
            return undefined
        }
        head = head.next
    }
    if (!head || idx <= 0) {
        return undefined
    }
    return head.val
}


function nth2(head,idx) {
    if (head === null || idx <= 0) {
        return undefined
    }

    if (idx == 1) {
        return head.val
    }
    return nth2(head.next, idx - 1)
}


console.log(nth2(head,-1)) */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(nums) {
  function returnList(ary) {
    if (ary.length == 0) {
      return null;
    }

    var head = {
      val: ary[0],
      next: returnList(ary.slice(1))
    };
    return head;
  }

  return returnList(nums);
}

var a = arrayToList([1]);
var b = arrayToList([1, 3, 4]);

var mergeTwoLists = function mergeTwoLists(l1, l2) {
  var stack = [];

  while (l1) {
    stack.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    stack.push(l2.val);
    l2 = l2.next;
  }

  stack.sort(function (a, b) {
    return a - b;
  });
  var list = new ListNode(stack[0]);
  var dummy = list;

  for (var i = 1; i < stack.length; i++) {
    var node = {
      val: stack[i],
      next: null
    };
    dummy.next = node;
    dummy = node;
  }

  return list;
};

var deleteNodes = function deleteNodes(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

var deleteDuplicates = function (head) {
  if (head === null) {
    return null;
  }

  var dummy = head;

  while (dummy.next) {
    if (dummy.val == dummy.next.val) {
      deleteNodes(dummy);
      continue;
    }

    dummy = dummy.next;
  }

  console.log(head);
  return head;
}(a);
/* var removeElements = function(head, val) {
    let dummy = head
    let prev = new ListNode()
    let prevdummy = prev
    while(dummy){
        while(dummy.val == val){
            dummy = dummy.next
            continue
        }
        let node = {
            val: dummy.val,
            next: null
        }
        prevdummy.next = node
        prevdummy = prevdummy.next
        dummy = dummy.next
    }
    return prev
}(a,2); */


var swapPairs = function (head) {
  var prev = new ListNode();
  var dummy = prev;

  function exchangeNodes(list) {
    if (!list) {
      return;
    } else if (!list.next) {
      dummy.next = list;
      return;
    }

    dummy.next = {
      val: list.next.val,
      next: {
        val: list.val,
        next: null
      }
    };
    dummy = dummy.next.next;

    if (list.next.next) {
      list = list.next.next;
      exchangeNodes(list);
    }
  }

  exchangeNodes(head);

  if (!prev.next) {
    return null;
  } else {
    prev.val = prev.next.val;
    prev.next = prev.next.next;
  }

  console.log(prev);
  return prev;
}(a);

var a = arrayToList([1, 2, 3, 4, 5]);

var oddEvenList = function (head) {
  var evenNodes = new ListNode();
  var evenDummy = evenNodes;
  var oddNodes = new ListNode();
  var oddDummy = oddNodes;
  var num = 1;

  while (head) {
    var headDummy = head;
    head = head.next;

    if (num % 2) {
      oddDummy.next = headDummy;
      oddDummy = oddDummy.next;
    } else {
      evenDummy.next = headDummy;
      evenDummy = evenDummy.next;
    }

    num++;
  }

  if (num % 2) {
    evenDummy.next = null;
  } else {
    oddDummy.next = null;
  }

  oddDummy.next = evenNodes.next;
  return oddNodes.next;
}(a);

var numComponents = function (head, G) {
  var conNum = 0;
  var conFlag = false;
  var dummy = head;

  while (dummy) {
    if (G.includes(dummy.val)) {
      if (!conFlag) {
        conNum++;
      }
    } else {
      conFlag = false;
    }

    dummy = dummy.next;
  }

  return conNum;
}(a, [0, 1, 3]);

var rotateRight = function (head, k) {
  if (!head || !head.next || !k) {
    return head;
  }

  var slow = head;
  var fast = head;
  var length = 0;
  var stepNum = k;

  while (stepNum && fast) {
    fast = fast.next;
    stepNum--;
    length++;
  }

  if (!fast) {
    stepNum = k % length;
    fast = head;
  }

  if (stepNum) {
    while (stepNum--) {
      fast = fast.next;
    }

    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }

    var newhead = slow.next;
    slow.next = null;
    fast.next = head;
    return newhead;
  } else {
    return head;
  }
}(a, 2);

var getDecimalValue = function (head) {
  var stack = [];

  while (head) {
    stack.push(head.val);
    head = head.next;
  }

  var sum = 0;
  var count = 0;

  while (stack.length >= 1) {
    var digit = stack.pop();

    if (digit) {
      sum += Math.pow(2, count);
    }

    count++;
  }

  return sum;
}(a);

var reverseList = function reverseList(head) {
  if (!head || !head.next) {
    return head;
  }

  var tail = head.next;
  head.next = null;
  var newhead = reverseList(tail);
  tail.next = head;
  return newhead;
};

var qsort = function qsort(nums) {
  var pivot = nums[0];
  var i = 0;
  var j = nums.length - 1;

  while (i < j) {
    if (nums[i] >= pivot) {
      if (nums[j] <= pivot) {
        var tempt = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      } else {
        j--;
      }
    } else {
      i++;
    }
  }
};