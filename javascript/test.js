function swap(ary, i, j) {
    let temp = ary[i]
    ary[i] = ary[j]
    ary[j] = temp
}



var maxSubArray = function(nums) {
    let curMax = 0
    let sum = 0
    let isNegArray = true
    let posIdx
    let range = Array[2]

    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > 0){
            isNegArray = false
            posIdx = i
            range[0] = posIdx
            break
        }
    }
    if (isNegArray) {
        let max = -Infinity
        let temp
        for(let i = 0; i < nums.length; i++){
            if (nums[i] > max) {
                max = nums[i]
                temp = i
            }
        }
        range[0] = i
        range[1] = i
        return max
    }
    
    
    
    for (let i = posIdx; i < nums.length; i++) {
        let temp = sum + nums[i]
        if (nums[i] >= 0) {
            sum = temp
        } else {
            if(sum > curMax) {
                curMax = sum
            }
            if(temp < 0) {
                sum = 0
            } else {
                sum = temp
            }
        }
    }
    
    return sum > curMax ? sum : curMax
};