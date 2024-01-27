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

  let cartbutton = document.querySelector('.cartbutton').innerHtml
  console.log (cartbutton);

  setTimeout (function() {
    if (cartbutton === "Add to Cart") {
      document.querySelector('.CartButton').innerHTML = "Added"
    }
  },1000)
};
