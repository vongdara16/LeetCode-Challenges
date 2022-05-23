/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length;
    while (len>0) {
        for (let i=0; i<s.length-len+1; i++) {
            let str = s.slice(i, i+len);
            if (isPalindrom(str))
                return str;
        }
        len--;
    }
    return "";
};

const isPalindrom = function(arr) {
    let i=0;
    let j=arr.length-1;
    while (i<=j) {
        if (arr[i]!==arr[j])
            return false;
        i++; j--;
    }
    return true;
}