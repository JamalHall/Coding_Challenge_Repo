/* 
Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

This should only work if the number has 4 digits or more. If not, return "Number is too small".

Example
lowestProduct("123456789") --> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small"

*/
 
function lowestProduct(input) { 
const arr = [...input +''].map(Number)
console.log(arr)
if(arr.length < 4) return "Number is too small"
let lowest=arr.reduce((pv,cv)=>pv*cv)
console.log(lowest)
arr.forEach((e,i) => { 
  if(!arr[i+3]) return lowest
  let curr = arr[i]*arr[i+1]*arr[i+2]*arr[i+3] 
  lowest = curr<=lowest?curr:lowest   
});
return lowest
}

console.log(lowestProduct("1234111"),4,"Numbers should be consecutives");  
console.log(lowestProduct("123456789"),24); 
console.log(lowestProduct("234567899"),120); 
console.log(lowestProduct("2345611117899"),1);
console.log(lowestProduct("333"),"Number is too small");
console.log(lowestProduct("419030408"),0); 
console.log(lowestProduct("4109702778"),0); 
console.log(lowestProduct("1691719083"),0);
