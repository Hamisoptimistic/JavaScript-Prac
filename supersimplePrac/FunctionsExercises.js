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

result = convertToFahrenheit(35);
console.log (result);

function convertToCelcius (degree) {
  let result = '';
  let Celcius = (degree -32) * 5/9;
  return Celcius;
}

result = convertToCelcius(110);
console.log (result);



function convertTemp(degree,unit) {
  if (unit === 'C') {
    let result = convertToFahrenheit(degree);
    return result;
    
  }
  else if (unit === "F") {
    result = convertToCelcius(degree);
    return result;
  }
}

let conversion = convertTemp(50, 'C')
console.log (`${conversion}` );


