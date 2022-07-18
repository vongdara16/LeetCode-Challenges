/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let xArr = x.toString().split('')
  let neg = false
  let result
  if (xArr[0] === '-') {
    neg = true
    xArr.shift()
  }
  if (neg){
    result = xArr.reverse()
    result.unshift('-')
    return Number(result.join('')) < -(2**31) ? 0 : Number(result.join(''))
  } else {
    result = xArr.reverse()
    return Number(result.join('')) > ((2**31)-1) ? 0 : Number(result.join(''))
  }
};