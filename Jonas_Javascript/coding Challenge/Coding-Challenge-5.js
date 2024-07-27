const calcAverage = (score1, score2, score3) => Math.round((score1 + score2 + score3) / 3)


// console.log(calcAverage(10, 10, 10));

const avgDolpins = calcAverage(90, 93, 160);
const avgKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolpins, avgKoalas) {
    console.log(avgDolpins);
    console.log(avgKoalas);
    if (avgDolpins >= 2 * avgKoalas) {
        console.log(`Dolphins win with an avg score of ${avgDolpins} vs avg of koalas ${avgKoalas}`)
    } else {
        console.log(`Koalas win with an avg score of ${avgKoalas}`)
    }
}

checkWinner(avgDolpins, avgKoalas); 