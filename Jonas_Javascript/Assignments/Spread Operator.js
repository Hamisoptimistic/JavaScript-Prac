// bullshit

let fname = "hamim"
let lname = "Basha"

// console.log(...fname + lname);

const newArr = [1, 2, 3, 4, 5]

function first(a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c)
}

first(...newArr)

// String example
console.log([...fname]); // ['h', 'a', 'm', 'i', 'm']

// Object example
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3, ...obj1 };
console.log(obj2); // { z: 3, x: 1, y: 2 }

// Set example
const mySet = new Set([1, 2, 3]);
console.log([...mySet]); // [1, 2, 3]
