/* 
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/
// hot garbage lol
function high(x){
  let biggest = [0,'']  
  const string = x.split(' ')
    for(word of string){
      let acc=[]
      for(let i=0;i<=word.length;i++){        
        acc.push(word.charCodeAt(i)-96) 
        value = acc.reduce((a,c)=>a+c,0)
          if(value>biggest[0]){
            biggest[0] = value
            biggest[1] = word
          } 
        }
    }
  console.log(biggest)
  return biggest[1]
  }


// better and refactored a bit
function high(x){
let biggest = [0,'']
let value = 0
const string = x.split(' ')
  for(word of string){
    let i=0
    value=0
      while(i<word.length){
        value=value+word.charCodeAt(i)-96
        i++
      }
    if(value>biggest[0]){
      biggest[0] = value
      biggest[1] = word           
     } 
  }
console.log(biggest)
return biggest[1] 
  }



console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano'); 
console.log(high('take me to semynak'), 'semynak');   
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');

//code wars solutions i like

function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}



function high (x) {
  let maxSum = 0;
  let sumArr = [];
  sumArr = x.split(' ')
    .map(w => [...w].reduce((acc, i) => acc + i.charCodeAt() - 'a'.charCodeAt() + 1, 0))
  maxSum = Math.max(...sumArr);
  return x.split(" ")[sumArr.indexOf(maxSum)];
}
