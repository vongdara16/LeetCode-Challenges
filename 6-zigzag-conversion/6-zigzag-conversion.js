/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1) return s
  
  let arr = new Array(numRows)
  let fwd = false

  for (let i = 0; i < s.length; i++){
    let rem = (i % (numRows-1))
    if (rem === 0){
      fwd = !fwd
    }
    if (fwd){
      if (arr[rem] === undefined) arr[rem] = s[i]
      else arr[rem] = arr[rem] + s[i]
    } else {
      if (arr[(numRows-1)-rem] === undefined) arr[(numRows-1)-rem] = s[i]
      else arr[(numRows-1)-rem] = arr[(numRows-1)-rem] + s[i]
    }
  }
  return arr.join('')
}