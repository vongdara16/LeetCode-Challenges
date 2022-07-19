/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let n = height.length
  let area = 0
  let left = 0
  let right = n-1

  while(left<right){
    let h = height[left] > height[right] ? height[right] : height[left]
    let w = right-left
    let temp = h*w
    if (temp > area){
      area = temp
    }
    if (height[left] > height[right]){
      right--
    } else{
      left++
    }

  }
  return area

}