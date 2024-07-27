const Mark = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
};

const John = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
};

Mark.calcBMI = function () {
    this.BMI = Math.round(this.mass / this.height ** 2);
    return this.BMI;
};
John.calcBMI = function () {
    this.BMI = Math.round(this.mass / this.height ** 2);
    return this.BMI;
};
Mark.calcBMI();
John.calcBMI();

if (Mark.BMI > John.BMI) {
    console.log(
        `${Mark.name}'s BMI ${Mark.BMI} is higher than ${John.name}'s BMI ${John.BMI}`
    );
} else {
    console.log(
        `${John.name}'s BMI ${John.BMI} is higher than ${Mark.name}'s BMI ${Mark.BMI}`
    );
}

console.log(Mark);
