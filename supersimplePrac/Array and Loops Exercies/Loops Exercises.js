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

// 7. add 1st and 2nd element in an Array and then add 3rd and 4th element
// let newArray = [1,2,3,4,5,6]

// function twicesum (array) {
//   let newArray = [];
  
//   for (i = 0; i < array.length; i = i + 2) {
//     let result = array[i] + array[i+1];
//     newArray.push(result);
//   }
//   return newArray;
// }

// console.log (twicesum(newArray));

//8. add 2 arrays simple



// function add2array(array1,array2) {
//   let sumarray = [];

//   for (let i = 0; i<array1.length; i++) {
//     sumarray[i] =array1[i] + array2[i];
//   }
//   return sumarray;
// }

// console.log (add2array([1,2,3],[1,2,3]));

// 9. takes and array and finds how many numbers are greater than zero

// function greaterThanZero(array) {
//   let starray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//       // starray = starray + 1;
//       starray.push(array[i])
//     }
//   }
//   let arraylen = starray.length;
//   console.log (arraylen)
//   return starray;
// }
// console.log (greaterThanZero ([1,2,-3,1,2,3]));

// 10. find max and min in an array

function minMax(array) {
  // let max = 0;
  // let min = 0;
  let result = {Maxval:0,Minval:0};
  for (i = 0; i < array.length; i++) {
    if (array[i] > result.Maxval) {
      result.Maxval = array[i];
    }
    else if (array[i] < result.Minval) {
      result.Minval = array[i];
    }
  }
  return result;
  
}
console.log (minMax([1,2,-3,-4,50000]))

  