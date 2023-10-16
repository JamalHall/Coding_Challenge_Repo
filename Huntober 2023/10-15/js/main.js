/*
Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid 
number because only valid numbers are used in the tests.

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34
https://www.codewars.com/kata/5641a03210e973055a00000d/train/javascript
*/

function twoDecimalPlaces(n) {
  const roundedNumber = Math.round(n * 100) / 100;
  return roundedNumber;
}

//long way using recursion

function twoDecimalPlaces(n) {
  function checkLast(n2){
  let num = Math.trunc(n2*1000)
  let num2 = num.toString().split('')
    let num3 = num2[num2.length - 1]
    console.log(n, num, num2, num3, +num3)
  return +num3
  }  
  let num4 = checkLast(n)>=5?+Math.trunc(n*100)+1:Math.trunc(n*100)
  console.log(checkLast(num4), num4)
  if(checkLast(num4/100)>=5){
    return twoDecimalPlaces(num4/100)
  }   
  return num4/100
  }

console.log(twoDecimalPlaces(4.659725356), 4.66, "didn't work for 4.659725356");
console.log(twoDecimalPlaces(173735326.3783732637948948), 173735326.38, "didn't work for 173735326.3783732637948948");
console.log(twoDecimalPlaces(4.653725356), 4.65, "didn't work for 4.653725356");