const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = []
const totals = []

const calcTip = function (billValue) {
    let tip;
    (billValue >= 50 && billValue <= 300) ? tip = (billValue * 0.15) : tip = (billValue * 0.20)
    return tip;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(Math.round(calcTip(bills[i])));
    totals.push(bills[i] + tips[i])
}

console.log(tips);
console.log(totals);

// Calc Average 
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcAverage = function (array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    const avg = sum / array.length
    return avg;
}

const average = calcAverage(bills);
console.log(average);

document.querySelector().