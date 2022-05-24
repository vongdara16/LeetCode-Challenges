/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0
    let mid = 0
    let temp = 0
    let hi = nums.length - 1
    
    while (mid <= hi){
        if (nums[mid] === 0){
            temp = nums[low]
            nums[low] = nums[mid]
            nums[mid] = temp
            low++
            mid++
        } else if (nums[mid] === 1){
            mid++
        } else {
            temp = nums[mid]
            nums[mid] = nums[hi]
            nums[hi] = temp
            hi--
        }
    }
    return nums
};