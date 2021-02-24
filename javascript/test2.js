/* var aryLike = {
    0:1,
    1:2,
    length: 2,
}

aryLike.push = function(item) {
     this[this.length++] = item
     return this.length
}


console.log(aryLike.push(5))
console.log(aryLike)


var ary =[1,2,3] 
ary.push2 = function(val) {
    this[this.length] = val
    return this.length
} */



function forOwn(obj, action) {
    for (let key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
            action(obj[key], key, obj)
        }
    }
    return obj
}




