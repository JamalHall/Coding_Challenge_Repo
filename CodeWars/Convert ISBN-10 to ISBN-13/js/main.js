/* 
ISBN stands for International Standard Book Number.

For more than thirty years, ISBNs were 10 digits long. On January 1, 2007 the ISBN system switched to a 13-digit format. Now all ISBNs are 13-digits long. Actually, there is not a huge difference between them. You can convert a 10-digit ISBN to a 13-digit ISBN by adding the prefix number (978) to the beginning and then recalculating the last, check digit using a fairly simple method.

Method
Take the ISBN ("1-85326-158-0").
Remove the last character, which can be a number or "X".
Add the prefix number (978) and a hyphen (-) to the beginning.

*Take the 12 digits, then alternately multiply each digit from left to right by 1 or 3.
*Add up all 12 numbers you got.
*Take the number and perform a modulo 10 division.
*If the result is 0, the check digit is 0. If it isn't 0, then subtract the result from 10. In this case, that is the check digit.

Add the check digit to the end of the result from step 3.
Return the 13-digit ISBN in the appropriate format:
"prefix number - original ISBN except the last character - check digit"
"978 - 1 - 85326 - 158 - 9"
Example
ISBN = "1-85326-158-0"
remove_last_character = "1-85326-158-"
add_prefix = "978-1-85326-158-"
twelve_digits = 978185326158

check_digit = 9*1 + 7*3 + 8*1 + 1*3 + 8*1 + 5*3 + 3*1 + 2*3 + 6*1 + 1*3 + 5*1 + 8*3
            =   9 +  21 +   8 +   3 +   8 +  15 +   3 +   6 +   6 +   3 +   5 +  24
            = 111
            111 % 10 = 1
            10 - 1 = 9

thirteen_digit = 9781853261589

return "978-1-85326-158-9"

*/
function isbnConverter(isbn) {
let isbn13=isbn.slice(0,-2)
isbn13='978-'+isbn13
let cd = (isbn13.split('').filter(e=>e!='-').filter((e,i,a)=>i%2!=0).map((e,i,a)=>e*3).reduce((acc,cv)=>acc+cv)+isbn13.split('').filter(e=>e!='-').filter((e,i,a)=>i%2==0).map((e,i,a)=>e*1).reduce((acc,cv)=>acc+cv))%10
cd = cd==0?0:10-cd
isbn13=isbn13+'-'+cd
return isbn13;
}

console.log(isbnConverter("1-85326-158-0"), "978-1-85326-158-9");
console.log(isbnConverter("0-14-143951-3"), "978-0-14-143951-8");
console.log(isbnConverter("0-02-346450-X"), "978-0-02-346450-8");
console.log(isbnConverter("963-14-2164-3"), "978-963-14-2164-4");
console.log(isbnConverter("1-7982-0894-6"), "978-1-7982-0894-6");