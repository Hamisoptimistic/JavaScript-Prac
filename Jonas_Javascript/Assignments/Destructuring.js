// // let user = {
// //     name: "John",
// //     years: 30
// // };

// // let { name, years: age, isAdmin = false } = user
// // // console.log(name, age, isAdmin);

// // let salaries = {
// //     "John": 100,
// //     "Pete": 250,
// //     "Mary": 250
// // };

// // const topSalary = function (salaries) {

// //     let maxSalary = 0
// //     let maxName = null;
// //     for (let [name, salary] of Object.entries(salaries)) {
// //         if (salary > maxSalary) {
// //             maxSalary = salary;
// //             maxName = name;
// //         }
// //     }
// //     return maxName;
// // }
// // const max = topSalary(salaries);
// // console.log(max);

// Obj dest
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function ({ location = 22, time = 19, mainIndex, starterIndex }) {
        console.log(this.starterMenu);
        console.log(`Order Received, ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} on ${location}`);
    }
};

// retieiving values from Nested Object 
const { openingHours: Open } = restaurant
// console.log(typeof Open);

const { sat: { open, close } } = restaurant.openingHours
// console.log(open, close);

// Mutation of already declared variables.

let a = 10
let b = 20


console.log(a, b);
const obj = { a: 30, b: 100 };

({ a, b } = obj) //wrap it in bracket
// mutated value from object to outside variable

console.log(a, b)

// Using destructuring in function arguments
const argObj = {
    starterIndex: 1,
    mainIndex: 2,
    // time: 23.00,
    // location: "vienna,Italy"
}

// 1. Pass a object as arg while calling the function.

restaurant.order({
    starterIndex: 1,
    mainIndex: 2,
    time: 23.00,
    location: "vienna"
})
