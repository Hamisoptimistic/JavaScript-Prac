// arguments in  a function
// using rest and spread operator at the same time
const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const add = function (a, ...num) {
    // rest operator ⬆️⬆️⬆️⬆️
    let sum = 0;
    // here num is an array when we use rest operator
    // console.log(num);
    for (i = 0; i < num.length; i++) {
        sum = sum + num[i]
    }
    console.log(sum + a);
}
add(10, ...newArr); // spread operator


const er = function (a, b, ...rest) {
    console.log(a, b);
    console.log(...rest);
}
er(1, 2, ..."Hello");



