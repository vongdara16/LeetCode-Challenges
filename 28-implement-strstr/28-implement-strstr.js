/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack.includes(needle)){
    // console.log('yes')
        return haystack.indexOf(needle)
    } else {
        return -1
    }
};