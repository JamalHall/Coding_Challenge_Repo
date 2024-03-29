/* 
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
*/
// function incrementString(string) {
//   let arrayString = string.split('')
//   let concatString = string.split()
//   let number = 0
//   const regex = new RegExp("[0-9]",i)
//   for (var i = arrayString.length - 1; i >= 0; --i) {   
//     if (regex.test(+arrayString[i]) && regex.test(+arrayString[i-1])) {
//       number +=arrayString[i]    
//     } else if (regex.test(+arrayString[i])) {     
//       number += arrayString[i]
//    }
//   }
//   const numberLength = (+number).toString().length
//   const sliceString = string.slice(0,-numberLength)
//   console.log(string,sliceString,number, +number+1) 
//  return sliceString+(+number+1)
// }

//let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)

// function incrementString(str){
// 	var c = str[str.length-1];
// 		switch(c){
//             case '0':
//             case '1':
//             case '2':
//             case '3':
//             case '4':
//             case '5':
//             case '6':
//             case '7':
//             case '8': return str.substring(0, str.length-1) + (parseInt(c)+1);
//             case '9': return incrementString(str.substring(0, str.length-1)) + 0;
//             default: return str+"1";
//                 }
// }


const incrementString = strng =>
  strng.replace(/[0-8]?9*$/, val => ++val);

console.log(incrementString("foobar000"), "foobar001")
console.log(incrementString("foobar999"), "foobar1000")
console.log(incrementString("foobar00999"), "foobar01000")
console.log(incrementString("foo"), "foo1")
//console.log(incrementString("foobar001"), "foobar002")
// console.log(incrementString("foobar1"), "foobar2")
// console.log(incrementString("1"), "2")
// console.log(incrementString("009"), "010")
// console.log(incrementString("fo99obar99"), "fo99obar100")
