
function expect (val) {
  compareVal = val;
  return {
    toBe:function (compareVal) {
      if (compareVal === val) {
          console.log ("Equal");
      } else {
          console.log (true);
      }
    },
    notToBe: function (compareVal) {
      if (compareVal !== val) {
          console.log ('Not Equal');
      } else {
          console.log (true);
      }
    }
  }
}
  
expect(9).toBe(6); 
expect(5).notToBe(5);



