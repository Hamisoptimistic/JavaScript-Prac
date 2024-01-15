function addOne(array,num) {
  let newArray = [];
  
  for (i = 0; i < array.length; i++) {
    let value = array[i];
    let result = value + num;
    
    newArray.push(result);
  }
  return newArray;
}

console.log (addOne([1,2,3], 5))
