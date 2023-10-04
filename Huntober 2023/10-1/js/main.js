/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
*/
function isSortedAndHow(array) {
  let toggle = new Set();
  for (let i=0; i < array.length; i++) {
    if (array[i] > array[i + 1])
    { toggle.add("yes, descending"); }
    if (array[i] < array[i + 1])
      { toggle.add("yes, ascending"); }
    if (toggle.size >1) { return ("no"); }
  }
  return Array.from(toggle)[0]
}

//// best answer
const isSortedAndHow = array => {
  let ascending = array.filter((e, i, a) => e > a[i+1]).length == 0
  let descending = array.filter((e, i, a) => e < a[i+1]).length == 0
  
  return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
}

console.log(isSortedAndHow([1, 2]), "=>yes ascending");
console.log(isSortedAndHow([15, 7, 3, -8]), "=>yes descending");
console.log(
  isSortedAndHow([
    5384, 6222, -818, 7253, -3550, 515, 5520, -8919, -8495, 3082, -7820, -3887,
    -7634, -459, -6517, 201, -8902, -1019, -979, -5236, 4612, -3200, -4054,
    5164, 321, 4206, -2681, 2379, 162, -7014, -3702, -2733, 6725, 2183, 1314,
    -9330, -8627, 8362, -5517, 6723, 888, 6104, 8442, -6037, -7030, -9910,
    -3046, -9982, 8237, 6649, 6159, 7424, -8583, -6650, -5379, 6169, 1772, -610,
    -9902, 9463, 664, -4062, 783, 7101, 462, -9410, 7894, 9393, 5920, 3171,
    -1735, 5705, -7464, -9357, -1955, -2581, -7402, 2010, -6960, 6155, 8714,
    -604, 1567, -8792, -1639, -9234, 7258, 560, -8618, 3427, -9853, 7042, 6566,
    3089, -1382, 4096, -8092, 3070, -7276, 2628,
  ]),
  "=>no"
);
