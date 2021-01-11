String.prototype.new_match = function(reg = /(?:)/){
    let match = null
    let stack = []
    if (!reg.global) {
        return reg.exec(this)
    } else {
        while(match = reg.exec(this)){
            stack.push(match[0])
        }
    }
    return match
}




RegExp.prototype.new_test = function (str) {
    return this.exec(str) != null
}

console.log("foofoofoo".match(/foo/g))
console.log("foofoofoo".match(/foo/))

// console.log(/foo/.new_test())



