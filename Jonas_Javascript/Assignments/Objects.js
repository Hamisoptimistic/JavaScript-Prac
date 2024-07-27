const myCountry = {
    country: 'India',
    capital: "Delhi",
    language: "English",
    population: 140,
    neighbours: ['Pakistan', 'Srilanka']
}

// console.log(myCountry);

// Dot and bracket Notation

// console.log(`${myCountry.country} has ${(myCountry.population) / 100} billion speaking ${myCountry.language} Language, ${myCountry.neighbours.length} neighbouring countries and capital called ${myCountry.capital}`);

// OBJECTS METHODS

myCountry.describe = function () {
    console.log(`${this.country} has ${(this.population) / 100} billion speaking ${this.language} Language`)
}


myCountry.describe();

myCountry.checkIsland = function () {
    return this.isIsland = this.neighbours.length === 0 ? true : false
}

// console.log(myCountry);

console.log((myCountry.checkIsland()));