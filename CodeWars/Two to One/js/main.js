/* 
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//my comment I added 
If you change the description this would be an excellent kata. The last line needs to read "each taken only once - coming from s1 AND s2. combined". The or in the last line indicated that you want the user to return the longest of the 2 new values.


*/
function longest(s1, s2) {
  let totStr = s1+s2
  let combined = Array.from(new Set(totStr)).sort( ).join('')
  return(combined)
  }

console.log(longest("aretheyhere", "yestheyarehere", "aehrsty"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding", "abcdefghilnoprstu"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions", "acefghilmnoprstuy"), "acefghilmnoprstuy")
