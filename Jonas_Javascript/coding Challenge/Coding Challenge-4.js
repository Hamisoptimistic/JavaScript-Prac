const billValue = 430;


(billValue >= 50 && billValue <= 300) ? tip = (billValue * 0.15) : tip = (billValue * 0.20)

console.log(`The bill was Rs.${billValue}, the tip was Rs.${tip}, and the total value is Rs.${billValue + tip} `)