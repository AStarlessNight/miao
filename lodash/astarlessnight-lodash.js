

var astarlessnight = function () {
    function chunk(array, size = 1) {
        let result = new Array(Math.ceil(array.length / size))
        let count = (array.length / size) | 0
        let idx = 0
        let start = 0

        for (let i = 1; i <= count; i++) {
            result[idx++] = array.slice(start, start + size)
            start = start + size
        }

        if (start != array.length) {
            result[idx++] = array.slice(start)
        }

        return result

    }
    return {
        chunk,
    }
}()


console.log(astarlessnight.chunk(["0", "1", "2", "3", "4", "5"], 2))
console.log(astarlessnight.chunk(["0", "1", "2", "3", "4", "5"], 3))
console.log(astarlessnight.chunk(["0", "1", "2", "3", "4", "5"], 4))