/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++){
        if (nums[i] === val){
            let idx = nums.indexOf(nums[i])
            nums.splice(idx, 1, '_')
            // nums.push('_')
        }
    }
  // console.log(nums)
    nums.sort()
    if (nums.indexOf('_') === -1){
        return nums.length
    } else {
        return nums.indexOf('_')
    }
};