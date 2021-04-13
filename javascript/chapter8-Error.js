//习题1 重试
class MultiplicatorUnitFailure {
}
var errorTimes = 0
function primitiveMultiply(num1, num2) {
    if (Math.random() < 0.2) {
        return num1 * num2
    } else {
        errorTimes++
        throw new MultiplicatorUnitFailure()
    }
}

function getTwoNumsmMultiplication(num1, num2) {
    for (; ;) {
        try {
            return primitiveMultiply(num1, num2)
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure) {
                continue
            } else {
                throw e
            }
        }
    }
}

; (() => {
    errorTimes = 0
    console.log(getTwoNumsmMultiplication(3, 4), errorTimes)
})()


//习题2 带锁的盒子
const box = {
    locked: true,
    unlock() { this.locked = false },
    lock() { this.locked = true },
    _content: [],
    get content() {
        if (this.locked)
            throw new Error("Locked!")
        return this._content
    }
}

function withBoxUnlocked(fun) {
    box.unlock()
    try {
        return fun()
    } finally {
        box.lock()
    }
}


withBoxUnlocked(function () {
    box.content.push("gold piece")
})

try {
    withBoxUnlocked(function () {
        throw new Error("Pirates on the horizon! Abort!")
    })
} catch (e) {
    console.log("Error raised:", e)
}

console.log(box.locked, box._content)






