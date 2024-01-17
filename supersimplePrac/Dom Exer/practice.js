function eval() {
let buttonValue = document.querySelector('.js-button').innerHTML = 'Loading'

setTimeout(function() {
  if (buttonValue === "Loading") {
    document.querySelector('.js-button').innerHTML = 'Finished'
  }
},2000);






console.log (buttonValue);
}
