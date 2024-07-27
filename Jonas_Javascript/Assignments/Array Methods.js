const neighbours = ['China', 'Pakistan', 'Bangladesh']

console.log(neighbours);

neighbours.push('utopia');
console.log(neighbours);

neighbours.pop('utopia');
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Not a european country')
}

const indexno = neighbours.indexOf('Pakistan');
console.log(indexno);

neighbours[1] = 'Afghanistan';
console.log(neighbours);
