const person = {
    firstname: 'Orlando',
    lastname: 'Nava',
    email: ['orlandonavajr@yahoo.com','onavajr@yahoo.com'],
    username: 'galunggong',
    address:[
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C',
            zipcode: '2050'
        },
        {
            address: '2322 Balme Dr,',
            city: 'San Jose, CA',
            zipcode: '95122'
        }
    ]
};
const{email:newemailname,username,address} = person;
console.log(newemailname,username,address);

const {address: [house1]} = person;
console.log("Second Line***")
console.log(house1,newemailname,username,address);
// const {firstname, lastname} = person;
// console.log(firstname,lastname);

// const fruits = [
//     'orange',
//     'apple',
//     'banana',
//     'citrus'
// ]

// const [naval,red,,sour,] = fruits;
// console.log(naval,red,sour);