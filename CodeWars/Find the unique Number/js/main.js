/* 
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/
function findUniq(arr) {
let obj={}
let arr2=arr.filter(e=>typeof(e)=='number')
console.log(arr2)
for(a of arr2){
    obj[a]=obj[a]+1||1
    }
let unique
    for(k in obj){ 
        if(obj[k]===1)unique = k         
    }    
return +unique
}
  

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))
console.log(findUniq([ 1, 0, 0 ]),'=> 1')
console.log(findUniq([ 0, 1, 0 ]),'=> 1')
console.log(findUniq([ 0, 0, 1 ]),'=> 1')
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]),'=> 2')
console.log(findUniq([ 1, 1, 2, 1, 1 ]),'=> 2')
console.log(findUniq([ 3, 10, 3, 3, 3 ]),'=> 10')
console.log(findUniq([ 4, 4, 4, 3, , 4, 4, 4, 4]),'=> 3')