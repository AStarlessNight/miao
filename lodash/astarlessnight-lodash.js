

var astarlessnight = function() {
    function chunk (array, size = 1) {
        let result = []
        let start = 0
        let count = (array.length / size) | 0

        for (let i = 1; i <= count; i++) {
            result.push(array.slice(start, start + size))
            start = start + size
        }

        if (start != array.length) {
            result.push(array.slice(start))
        }

        return result

    }
    return {
        chunk,
    }
}()
