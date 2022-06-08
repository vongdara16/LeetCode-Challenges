/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++){
        if (nums[i] === val){
            nums.splice(i, 1, '_')
        }
    }
    
    nums.sort()
    if (nums.indexOf('_') === -1) return nums.length
    else return nums.indexOf('_')
};