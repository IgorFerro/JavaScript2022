//Primitives types
let lastName = 'Willians';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName,oldLastName);

//Reference Type
const jessica = {
    firstName: 'Jessica',
    lastName: 'Willians',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage', marriedJessica);

//Copyng objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Willians',
    age: 27,
    family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName ='Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Jonh');

console.log('Before marriage', jessica2);
console.log('After marriage',jessicaCopy);

