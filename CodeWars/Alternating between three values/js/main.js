/*
Alternating Among Three Values
Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

What is the most efficient way to cycle among three values? Write a function f so that it satisfies

  f(a) = b
  f(b) = c
  f(c) = a
EXAMPLE
  f( 3, { a:3, b:4, c:5 } ) => 4
*/
 
function f(x, cc) {
   console.log(cc.a)
 for(v in cc){
   console.log(v,cc[v])
   return (x==cc.a)?cc.b:(x==cc.b)?cc.c:cc.a
  }
   }

console.log( f( 3, { a:3, b:4, c:5 } ),'=> 4 ');
console.log( f( 4, { a:3, b:4, c:5 } ),'=> 5 ');
console.log( f( 5, { a:3, b:4, c:5 } ),'=> 3 ');


// i like this also better to read
function f(x, cc) { 
   switch (x) {
     case cc.a: return cc.b;
     case cc.b: return cc.c;
     case cc.c: return cc.a;
   }
 }