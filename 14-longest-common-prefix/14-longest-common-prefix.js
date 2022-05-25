/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(arr) {
  // console.log(arr)
  let temp = ''
  let short = arr.reduce((prev, curr) => prev.length <=curr.length ? prev : curr)
  // console.log(short)
  if (short.length === 1 ){
    if (arr.every(str => str.startsWith(short))){
      // console.log('testttt')
      return short
    }
  } else {
    for (let i = 0; i<short.length; i++){
      temp = temp+short[i]
      let test = arr.every(str => str.startsWith(temp))
      // console.log('temp', temp, 'test', test)
      if (!test){
        temp = short.slice(0,i)
        // console.log('final', temp)
        break
      }
    }
  }
  return temp

  
};