/* 
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

*/
const rps = (p1, p2) => {
    let r='rock'
    let p='paper'
    let s='scissors'
    let pone='Player 1 won!'
    let ptwo='Player 2 won!'
    if(p1==p2){
      return 'Draw!'
      }else if(p1==r && p2==s) {
      return pone
      }else if(p1==p && p2==r){
        return pone
        } else if(p1==s && p2==p){
          return pone
        } else return ptwo   
          
  };
  const getMsg = (n) => `Player ${n} won!`;

  console.log(rps('rock', 'scissors'), getMsg(1));
  console.log(rps('scissors', 'paper'), getMsg(1));
  console.log(rps('paper', 'rock'), getMsg(1));
  console.log(rps('scissors', 'rock'), getMsg(2));
  console.log(rps('paper', 'scissors'), getMsg(2));
  console.log(rps('rock', 'paper'), getMsg(2));
  console.log(rps('rock', 'rock'), 'Draw!');
  console.log(rps('scissors', 'scissors'), 'Draw!');
  console.log(rps('paper', 'paper'), 'Draw!');

     
  
    