const pop = [160, 700, 1300, 650];

if (pop.length = 4) {
    console.log(pop);
    console.log(pop[2]);
}
const worldPop = 7900;
const percentageOfWorld3 = population => Math.round((population / worldPop) * 100);


const percentages = [percentageOfWorld3(pop[0]), percentageOfWorld3(pop[1]), percentageOfWorld3(pop[2]), percentageOfWorld3(pop[3])]

console.log(percentages)