const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };


for (let [fruit, quantity] of (Object.entries(fruits))) { console.log(`${fruit} : ${quantity}`) }

