// arguments in  a function
// using rest and spread operator at the same time
const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const add = function (a, ...num) {
    let sum = 0;
    // here num is an array when we use rest operator
    console.log(num);
    for (i = 0; i < num.length; i++) {
        sum = sum + num[i]
    }
    console.log(sum + a);
}
add(1, ...newArr);





