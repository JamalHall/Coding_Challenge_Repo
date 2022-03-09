/* 
Create a function method that allow you to wrap an existing function. The method signature would look something like this:

Usage Example:
function speak(name){
   return "Hello " + name;
}

speak = speak.wrap(function(original, yourName, myName){
   greeting = original(yourName);
   return greeting + ", my name is " + myName;
})

var greeting = speak("Mary", "Kate");

*/
//codewars solution
Function.prototype.wrap = function(that) {
  return (...args) => that(this, ...args);
}


add = (x,y) => x+y
logger = (func) => { 
  return function(ax,by){
    console.log(`The argeuments are${ax} and ${by}`)
  return func(ax,by)}
}
add = logger(add)
console.log(add(5,9))

