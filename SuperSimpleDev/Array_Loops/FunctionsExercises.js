//7a

// function greet(name) {
//   if (!name) {
//     console.log ("Hi There");
//   }
//   else {
//     console.log ('Hi ' + name);
//   }
// }

// greet();


function convertToFahrenheit (degree) {
  result = '';
  let Fahrenheit = (degree * 9/5) + 32;
  return Fahrenheit;
}


function convertToCelcius (degree) {
  let result = '';
  let Celcius = (degree -32) * 5/9;
  return Celcius;
}

function converTemp (degree,unit) {
  if (unit === 'C') {
    result = Math.round (convertToFahrenheit(degree));
    return `${result} F`;
  }
  else if (unit === 'F') {
    result = Math.round (convertToCelcius(degree));
    return `${result} C`;
  }
}

let conv = converTemp(90, 'F');
console.log (`${conv}`);



