// // console.log("Bye World");
// // let myname = "Hamim"
// // let myfav = 69;

// // console.log(myfav);
// // console.log(myname);

// // let my$name = "Hamim"
// // console.log(my$name);

// let var1 = true;
// console.log(typeof var1);

// const birthYear = 2000;
// console.log(birthYear);

// let description = `what the fuck is this ${birthYear}`
// console.log(description);

// let y = (2016 === 2016);
// console.log(y);

// const age = 15;
// (age > 18) ? 'he can then' : console.log('asd');

//------------------------------------------------------//


// let userInput = 'EcmaScrsipt';

// let result = (userInput == 'EcmaScript') ? 'correct' : 'idiot';

// console.log(result);

// type conversion and coercion

// console.log(5 - '2')
// console.log(44 / '5')

// const bool = (Boolean({}))
// console.log(bool);

// truthy and falsy value
// let var1 = 'Hamim';

// (var1) ? console.log('its truthy value') : console.log('its a falsy value ');

// console.log(5 + 6 + '4' + 9 - 4 - 2);
//------------------------------------------------------------------------------------------------//
// prefix and postfix
// let a = 1;
// ++a
// console.log(a);

// switch statement.
//1. Using if-else first.

const day = "Saturday";
const di = "Friday"

// if (day === "Monday") {
//     console.log("a");
// } else if (day === "Tuesday" || day === "Wednesday") {
//     console.log("b");
// }

// 2. using switch statement.

switch (day) {
    case "Monday":
        console.log("its Monday today")
        break;
    case "Tuesday":
    case "Wednesday":
        console.log("Its Tuesday Today")
        break;
    default:
        console.log("enter valid day")
}


