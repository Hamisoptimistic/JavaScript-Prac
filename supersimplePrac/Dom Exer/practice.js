function eval() {
let buttonValue = document.querySelector('.js-button').innerHTML

setTimeout(function() {
  if (buttonValue === "Start") {
    document.querySelector('.js-button').innerHTML = 'Finished'
  }
},);
console.log (buttonValue);
}

function addtoCart() {

  let cartbutton = document.querySelector('.cart-button').innerText
  let messagevalue = document.querySelector('.message')
  messagevalue.innerHTML = 'Added NOW';

  setTimeout (function() {
    if (cartbutton === "Add to Cart") {
      document.querySelector('.cart-button').innerHTML = "Added"
    }
  },)

  setTimeout (function() {
    messagevalue.innerHTML = ''
  },2000)
};
