function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million population and its capital city is ${capitalCity}`

}
let result = describeCountry('Finland', 6, 'Helsinki');
console.log(result);

const fun = function (name) {
    console.log(`Bye ${name}`);
}
fun('Hamim')