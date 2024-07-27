// Function delcaration
const worldPop = 7900;

function percentageOfWorld1(population) {
  return Math.round((population / worldPop) * 100);
}
const result = percentageOfWorld1(1441);
console.log(`${result}% `);

// Function Expression

const percentageOfWorld2 = function (population) {
  return Math.round((population / worldPop) * 100);
};

const result2 = percentageOfWorld2(600);
console.log(`${result2}% `);

// Arrow Function

const percentageOfWorld3 = (population) =>
  Math.round((population / worldPop) * 100);

const result3 = percentageOfWorld3(1900);

console.log(`${result3}% `);

// Calling function inside another function

const describePopulation = function (country, population) {
  const perc = percentageOfWorld3(population);
  return `${country} has ${population} million people, which is about ${perc}% of the world`;
};

const result4 = describePopulation("China", 1300);
console.log(result4);
