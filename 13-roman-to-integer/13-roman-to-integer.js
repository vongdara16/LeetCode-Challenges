/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const numerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    const values = [1, 5, 10, 50, 100, 500, 1000]
    let temp = ''
    let result = 0
  
    for (let i=0; i < s.length; i++){
    // console.log(s[i-1])
    let idx = numerals.indexOf(s[i])
    // result += values[idx]
    temp = s[i+1]
    if (s[i] === 'I', 'X', 'C'){
      result += values[idx]
      if ((temp === 'V' || temp === 'X') && (s[i] === 'I')) result -= 2
      if ((temp === 'L' || temp === 'C') && (s[i] === 'X')) result -= 20
      if ((temp === 'D' || temp === 'M') && (s[i] === 'C')) result -= 200
    }
  }
  return result
};