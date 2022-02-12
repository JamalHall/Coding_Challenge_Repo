/* 
Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

Other Examples:
ls = [1, 2, 3, 4, 5, 6] 
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
Notes
Take a look at performance: some lists have thousands of elements.
Please ask before translating.
*/
 
function partsSums(ls,arr) {
  if(!arr) arr=[]
  let num=0
  for(n of ls){ num+=n }
  arr.push(num)
  console.log(num,arr,ls.length)
  if(ls.length<1) return arr 
  ls.shift()
  return partsSums(ls,arr)
  }




// function partsSums(ls) {
// let arr=[]
// goAround()
// function goAround(){
// let num=0
// for(let n of ls){ num+=n }
// arr.push(num)
// console.log(num,arr,ls.length)
// if(ls.length!==0){ 
// ls.shift()
// goAround()
// }}
// return arr 
// }


console.log(partsSums([]), [0])
console.log(partsSums([0, 1, 3, 6, 10]), [20, 20, 19, 16, 10, 0]) 
//console.log(partsSums([1, 2, 3, 4, 5, 6]), [21, 20, 18, 15, 11, 6, 0])
//console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]), 
//       [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]) 

// function partsSums(ls) {
//   let length = ls.length
//   let arr = []
//   if(length == 0 ) arr.push(0)
// while (length>0){
// let num = ls.reduce((acc,cv)=>acc+cv,0)
// arr.push(num)
// ls.shift() 
// length=length-1
// if(length == 0 ) arr.push(0)
// }
// return(arr)
// }
        

// function partsSums(ls) {
//   let arr = []
//   const l=ls.length
//    for( let i=0; i<=l; i++){    
//     let num = ls.reduce((acc,cv)=>acc+cv,0)
//     arr.push(num)
//     ls.shift()
//    }
//    return arr
// }

// function partsSums(ls) {
//   let arr = []   
//   for( let i=0; i<=ls.length; i++){    
//   let n = ls.slice(i).reduce((acc,cv)=>acc+cv,0)
//   arr.push(n)
//   }
//    return arr
// }


// function partsSums(ls,arr) {
//   if(!arr) arr=[]
//   let num=0
//   for(let n of ls){ num+=n }
//   arr.push(num)
//   console.log(num,arr,ls.length)
//   if(ls.length!==0){ 
//   ls.shift()
//   partsSums(ls,arr)}
//   return arr 
//   }