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
function incrementString(string) {
  let arrayString = string.split('')
  let concatString = string.split()
  let number =''
  const regex = new RegExp("[0-9]",i)
  for (var i = arrayString.length - 1; i >= 0; --i) {
    console.log(arrayString, arrayString[i], arrayString[i-1])
    if (regex.test(+arrayString[i]) && regex.test(+arrayString[i-1])) {
      number = arrayString[i]+number
      console.log("this", number)
    } else if (regex.test(+arrayString[i])) {
      console.log("that", number)
      number = arrayString[i]+number
   }
  }
  const numberLength = (number).length
  const sliceString = string.slice(0, -numberLength)
  console.log(numberLength, sliceString)
  console.log(sliceString,number) 
 return sliceString+(+number+1)
}

console.log(incrementString("foobar000"), "foobar001")
console.log(incrementString("foobar999"), "foobar1000")
console.log(incrementString("foobar00999"), "foobar01000")
console.log(incrementString("foo"), "foo1")
// console.log(incrementString("foobar001"), "foobar002")
// console.log(incrementString("foobar1"), "foobar2")
// console.log(incrementString("1"), "2")
// console.log(incrementString("009"), "010")
// console.log(incrementString("fo99obar99"), "fo99obar100")
