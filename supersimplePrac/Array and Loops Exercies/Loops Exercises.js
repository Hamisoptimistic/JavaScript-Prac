// 1. Loop that couunt form zero to 10 but counts up by 2

// for (let i = 0; i < 11; i = i + 2) {
//   console.log (i)
// }

// 1st loop but using while Loop
// let i = 2;

// while (i < 11) {
//   console.log (i);
//   i+= 2;
// }

// 3. for loop that count form 5 to 0

// for (let i = 5; i > -1; i = i - 1) {
//   console.log (i);
// }

// let i = 5;
// while (i > -1) {
//   console.log(i);
//   i = i - 1; 
// };

// 4. Create a loop that takes an array of numbers and creates a new array where each number is increased   by 1   • [1, 2, 3] => [2, 3, 4]



// let array = [1,2,3,4,5,6,7,8,9,10]
// let newArray = [];

// for (i = 0; i < array.length; i++) {
//   let value = array[i];
//   let result = value + 1;

//   newArray.push(result);
  
// }

// console.log(newArray);

//5. Create a function addOne(array) that takes an array of numbers and returns an array where each number is increased by 1. • addOne([1, 2, 3]) => [2, 3, 4] • addOne([-2, -1, 0, 99]) => [-1, 0, 1, 100]

// function addOne(array) {
//   let newArray = [];

//   for (i = 0; i < array.length; i++) {
//     let value = array[i];
//     let result = value + 1;

//     newArray.push(result);
//   }
//   return newArray;
// }

// console.log (addOne([-2,-1,0]))


/// 6. same but with extra parameter
// function addOne(array,num) {
//   let newArray = [];

//   for (i = 0; i < array.length; i++) {
//     let value = array[i];
//     let result = value + num;

//     newArray.push(result);
//   }
//   return newArray;
// }

// console.log (addOne([1,2,3], 5))

let newArray = [1,2,3,4,5,6]

function twicesum (array) {
  let newArray = [];

  for (i = 0; i < array.length; i = i + 2) {
    let result = array[i] + array[i+1];
    newArray.push(result);
  }
  return newArray;
}

console.log (twicesum(newArray));

