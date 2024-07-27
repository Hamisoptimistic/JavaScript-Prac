let tip;
const calcTip = function (billValue) {

    (billValue >= 50 && billValue <= 300) ? tip = (billValue * 0.15) : tip = (billValue * 0.20)
    return tip;
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips);

const total = bills + tips;
console.log(total);