// arguments in  a function

const add = function (a, ...num) {
    let sum = 0;
    console.log(a);
    for (i = 0; i < num.length; i++) {
        sum = sum + num[i]
    }
    console.log(sum + a);
}
add(1, 2, 3, 4, 5, 6, 7, 8, 9,);