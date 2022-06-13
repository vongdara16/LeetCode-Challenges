/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

  if (nums.length === 1){
    if (target > nums[0]) return 1
    else return 0
  }
  if (nums.includes(target)){
    return nums.indexOf(target)
  } else {
    let mid = Math.floor(nums.length/2)
    if (target > nums[mid]){
      console.log('big')
      for (let i = mid; i<nums.length; i++){
        console.log(nums[i], 'nums[i]')
        if (target > nums[i]){
          if (target < nums[i+1] || !nums[i+1]){
            return i+1
          }
        }
      }
    } else {
      console.log('small')
      for (let i = mid; i>=0; i--){
        console.log(nums[i], 'nums[i]')
        if (target < nums[i]){
          if (target > nums[i-1] || !nums[i-1]){
            return i
          }
        }
      }
    }
  }
};