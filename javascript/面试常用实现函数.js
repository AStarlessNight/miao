/* bind的实现 */
// es6写法
function bind(f, ...args) {
    return function (...remain) {
        return f(...args, ...remain)
    }
}
//传统写法
function bind(f) {
    let fixedArgs = Array.from(arguments).slice(1)
    return function () {
        let args = Array.from(arguments).slice(1)
        return f.apply(null, fixedArgs.push(...args))
    }
}



//forEach, filter, map用reduce实现
function map(ary, transform) {
    return ary.reduce(((prev, curr, idx, ary) => (prev.push(transform(curr, idx, ary)), prev)), [])
}
function filter(ary, test) {
    return ary.reduce((prev, item, idx, ary) => {
        if (test(item, idx, ary)) prev.push(item)
        return prev
    }, [])
}
function forEach(ary, action) {
    ary.reduce((_, item, idx, ary) => {
        _ = action(item, idx, ary)
    }, null)
}