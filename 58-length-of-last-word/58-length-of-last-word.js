/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let str = s
    if (s[0] === ' ' || s[s.length-1] === ' ') str = s.trim()
    let strArr = str.split(' ')
    if (strArr.length === 1) return strArr[0].length
    else return strArr[strArr.length-1].length
};