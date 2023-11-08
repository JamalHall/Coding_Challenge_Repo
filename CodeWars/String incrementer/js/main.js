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
  let arrayString = string.split()
  let number = 0
  const regex = new RegExp(/^[0-9]$/)
  for (var i = arrayString.length - 1; i >= 0; --i) {
    if (arrayString[i] == regex && (+arrayString[i] >= 0 && +arrayString[i - 1] >= 0)) {
      number+=arrayString[i]
    } else if (+arrayString[i] == regex) {
      number+=arrayString[i]
   }
  }
  //arrayString.filter(e => e == /^[0-9]$/).join()
  //string2 = string.split(number)[0]
  
 return number
}

console.log(incrementString("foobar000"), "foobar001")
console.log(incrementString("foobar999"), "foobar1000")
console.log(incrementString("foobar00999"), "foobar01000")
console.log(incrementString("foo"), "foo1")
console.log(incrementString("foobar001"), "foobar002")
console.log(incrementString("foobar1"), "foobar2")
console.log(incrementString("1"), "2")
console.log(incrementString("009"), "010")
console.log(incrementString("fo99obar99"), "fo99obar100")
