// 1.
let array = [10,20,30]

array[2] = 99;
console.log (array);

// 2. Returns Last value form an array then add 1st and last elemnent and multiply it by 2

function get_last_Value(array) {
  let result = (array[0] + array[array.length - 1]) * 2
  // console.log (result);
  return result;
}

let ing = get_last_Value([1,2,3,4]);
console.log (ing)

// 3. Swap fist and last element

function arraySwap (array) {
  let first =array[0];
  let lastvalue = array[array.length - 1];

  array[0] = lastvalue;
  array[array.length - 1] = first;  
  
  return array;
}

console.log (arraySwap([1,2,3]));