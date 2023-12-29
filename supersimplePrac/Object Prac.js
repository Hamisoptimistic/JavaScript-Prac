let basketball =  {
  price:2095,
  "delivery-time":''
}

basketball.price +=  500;
basketball["delivery-time"] = '3Days';
console.log (basketball["delivery-time"]);
///

function comparePrice(product1, product2) {
  if (product1.price < product2.price) {
    return product1.name
  }
  else {
    return `${product2.name} is Cheaper and it costs ${product2.price}`
  }
}


let product1 = {
  name:'shoes',
  price:1000
}

let product2 = {
  name: 'short',
  price:500
}

console.log(comparePrice(product1, product2));

console.log (product2.name.toUpperCase());
console.log (product1.name.repeat(2));