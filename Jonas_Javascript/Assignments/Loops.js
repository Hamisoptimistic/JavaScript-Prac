// for (i = 0; i <= 50; i++) {
//     console.log(`Voter Number ${i} is currently Voting`)
// }

const pop = [160, 700, 1300, 650];
let percentages = [];
let worldPop = 7900;

const percentageOfWorld3 = (population) => Math.round((population / worldPop) * 100);

for (i = 0; i < pop.length; i++) {
    const perce = percentageOfWorld3(pop[i]);
    percentages.push(perce);
}

console.log(percentages)