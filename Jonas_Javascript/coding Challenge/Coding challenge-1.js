// coding challenge -1

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 78;
let johnHeight = 1.69;

let BMI_mark = markWeight / Math.round(markHeight ** 2)
console.log(BMI_mark);

let BMI_John = 20.09;

(BMI_mark > BMI_John) ? console.log(`Mark's BMI (${BMI_mark}) is greater than John's BMI (${BMI_John})`) : console.log(`John's BMI (${BMI_John}) is greater than Mark's BMI (${BMI_mark})`)

