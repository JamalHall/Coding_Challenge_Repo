/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
*/
function isSortedAndHow(array) {
  console.log(array)
  if(array[0]>array[1] && array[array.length-2]>array[array.length-1]){
    return 'yes, descending'
  }
    if(array[0]<array[1] && array[array.length-2]<array[array.length-1]){
    return 'yes, ascending'
  }
  return 'no'
}

 it("[1, 2]", function() {
    Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
  });
  
  it("[15, 7, 3, -8]", function() {
    Test.assertEquals(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
  });
  
  it("[4, 2, 30]", function() {
    Test.assertEquals(isSortedAndHow([4, 2, 30]), 'no');
  });

