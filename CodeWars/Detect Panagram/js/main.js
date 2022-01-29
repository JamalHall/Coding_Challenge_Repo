/* 
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/
function isPangram(string){
let obj ={}
string=string.toLowerCase()
  for(alpha of string){
    if(alpha.charCodeAt()<97 || alpha.charCodeAt>122) continue;
    obj[alpha] = obj[alpha]+1||1    
  }
console.log(Object.keys(obj).length, obj)
if (Object.keys(obj).length==26) return true
return false
}


var string2 = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string2), true)

var string1 = "This is not a pangram."
console.log(isPangram(string1), false)