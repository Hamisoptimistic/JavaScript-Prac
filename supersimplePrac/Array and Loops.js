
myarray = [1,2,4,6,2,5]

myarray.push (123);
myarray.splice (4,1);
myarray.push (8);

console.log (myarray);


let index = 1;

while (index <= 10) {
  console.log (index);
  index++;
}

for (let i = 1; i < 6; i++) {
  console.log(i);
}




  let randomNum = 0;

  while (randomNum < 0.5) {
  randomNum = Math.random();
  console.log(randomNum);
  
  } 


const todoList = [
  "Make Dinner",
  "Watch youtube",
  "Sleep"
];

for (i = 0; i <= todoList.length - 1; i++) {
  let result = todoList[i]
  console.log(result);
} 


// let Numbers = [1,2,6];
// let totalNum = 0;

// for (let i = 0; i < Numbers.length; i++) {
//   currentNum = Numbers[i];
//   totalNum = totalNum + currentNum;
//   // console.log (totalNum);
// }
// console.log (totalNum); 


// double the values in Array
let Numbers = [1,2,6];
let NumDoubled = [];


for (let i = 0; i < Numbers.length; i++) {
  let num = Numbers[i];
  NumDoubled.push(num * 2);
  
}
console.log (NumDoubled)
