//Vector类
function Vector(x, y) {
    this.x = x
    this.y = y
}

Vector.prototype.plus = function (v) {
    return new Vector(this.x + v.x, this.y + v.y)
}

Vector.prototype.minus = function (v) {
    return new Vector(this.x - v.x, this.y - v.y)
}

Object.defineProperty(Vector.prototype, "length", {
    get: function () {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
})

    ; (function testVector() {
        let v1 = new Vector(1, 2)
        let v2 = new Vector(3, 4)
        console.log(v1.plus(v2))
        console.log(v1.minus(v2))
        console.log(v1.length)
        console.log(v2.plus(v1).length)
        console.log("---Vector test finished---")
    })()


//Complex类型
function Complex(real, imag) {
    this.real = real
    this.imag = imag
}

Complex.prototype.plus = function (com) {
    return new Complex(this.real + com.real, this.imag + com.imag)
}
Complex.prototype.minus = function (com) {
    return new Complex(this.real - com.real, this.imag - com.imag)
}
Complex.prototype.multiple = function (com) {
    let a = this.real
    let b = this.imag
    let c = com.real
    let d = com.imag
    return new Complex(a * c - b * d, a * d + b * c)
}
Complex.prototype.dividedBy = function (com) {
    let a = this.real
    let b = this.imag
    let c = com.real
    let d = com.imag
    let deno = c ** 2 + d ** 2
    let temp = this.multiple(new Complex(c, -d))
    return new Complex(temp.real / deno, temp.imag / deno)
}

Complex.of = function (str) {
    function isNegative(char) {
        if (char === "-") {
            return true
        }
        return false
    }
    let real = 0
    let imag = 0
    let result = null
    // 5 + 3i
    let reg1 = /^\s*([+-]??)\s*(\d*?)\s*([+-]?)\s*(\d*)i\s*$/
    // 3i + 5
    let reg2 = /^\s*([+-]??)\s*(\d*)i\s*([+-]?)\s*(\d*)\s*$/
    //5
    let reg3 = /^\s*([+-]??)\s*(\d*)\s*$/

    if (result = reg1.exec(str)) {
        real = Number(result[2])
        if (real && isNegative(result[1])) {
            real = -real;
        }
        if (!result[4]) {
            imag = 1
        } else {
            imag = Number(result[4])
        }
        if (imag && isNegative(result[3])) {
            imag = -imag
        }
    } else if (result = reg2.exec(str)) {
        if (!result[2]) {
            imag = 1
        } else {
            imag = Number(result[2])
        }
        if (imag && isNegative(result[1])) {
            imag = -imag
        }
        real = Number(result[4])
        if (real && isNegative(result[3])) {
            real = -real;
        }
    } else if (result = reg3.exec(str)) {
        real = Number(result[2])
        if (real && isNegative(result[1])) {
            real = -real
        }
        imag = 0
    } else {
        return null
    }
    return new Complex(real, imag)
}

    ; (function testComplex() {
        let c1 = Complex.of("-0")
        let c2 = Complex.of(" 3i + 0")
        console.log(c1, c2)
        console.log(c1.plus(c2))
        console.log(c1.minus(c2))
        console.log(c1.multiple(c2))
        console.log(c1.dividedBy(c2))
    })()


//实现闭包
var Person = (function (){
    var map = new Map()

    function Person(name, age) {
        this.name = name
        var privateFields = {
            age: age
        }
        map.set(this, privateFields)
    }

    Person.prototype.getAge = function(){
        return map.get(this).age
    }
    return Person
})()


