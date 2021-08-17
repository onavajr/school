const cars = ['Tesla','Mercedes','Honda'];
const [ randomCar ] = cars;
const [,otherCar] = cars;

console.log(randomCar);
console.log(otherCar);


const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tela'
}

const {name: otherName} = employee;
// console.log(name);
console.log(otherName);


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
}

const password = '1234';
const {password:hashedpassword} = person;
console.log(password);
console.log(hashedpassword);

const numbers = [8,2,3,5,6,1,67,12,2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;

console.log(first == second);
console.log(first == third);

const lastTest = {
    key: 'value',
    secondkey: [1,5,1,8,3,3]
}

const {key} = lastTest;
const {secondkey} = lastTest;
const [,willThisWork] = secondkey;

console.log(key);
console.log(secondkey);
console.log(secondkey[0]);
console.log(willThisWork);



