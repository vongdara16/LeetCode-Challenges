/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    let newNum = Number(x.toString().split('').reverse().join(''))
     if (x === newNum) return true
     else return false
};