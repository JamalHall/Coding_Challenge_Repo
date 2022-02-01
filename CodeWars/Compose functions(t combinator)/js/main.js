/* 
Let's make a function called compose that accepts a value as a parameter, as well as any number of functions as additional parameters.

The function will return the value that results from the first parameter being used as a parameter for all of the accepted function parameters in turn.

compose(n, f1, f2, f3..., fn) // === fn(...(f3(f2(f1(n)))))
So:

var doubleTheValue = function(val) { return val * 2; }
var addOneToTheValue = function(val) { return val + 1; }

compose(5, doubleTheValue) // should === 10
compose(5, doubleTheValue, addOneToTheValue) // should === 11
If only a single parameter is passed in, return that parameter.

compose(n) = n
*/
var compose = function(...n) {
  const arr=Array.from(n)
let memo=arr[0]
 if (arr.length===1) return n[0]    
 arr.forEach(e=> {
   if(typeof(e)=='function') {
     //console.log(e)
     memo = e(memo) 
   }
   })
   return memo
}

var doubleTheValue = function(v) {return v * 2 };
var addOneToTheValue = function(v) { return v + 1 };
var valueLength = function(v) { return v.length };

console.log(compose(), undefined);
console.log(compose(42), 42);
console.log(compose("Hello, world"), "Hello, world" );
console.log(compose(5, doubleTheValue), 10 );
console.log(compose(5, doubleTheValue, addOneToTheValue), 11 );
console.log(compose("Hello, world", valueLength, doubleTheValue, addOneToTheValue), 25 );
console.log(compose(1, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue, addOneToTheValue), 10);
