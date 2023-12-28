// let obj = {
//   name:'Shirt',
//   deliveryTime: 'Depends',
//   rating: {
//     stars: 5,
//     review: 'positive'
//   }
// };


// // console.log (obj.rating.stars);

// let x = JSON.stringify(obj);
// console.log (x);

// let y= JSON.parse(x);
// console.log (y);


localStorage.setItem('key1', 'Hello world');

let y = localStorage.getItem('key1');
console.log(y);