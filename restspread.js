const person = {
    firstname: 'Orlando',
    lastname: 'Nava',
    email: ['orlandonavajr@yahoo.com','onavajr@yahoo.com'],
    username: 'galunggong',
    password: 'thisisthepassword',
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

const fruits = [
    'orange',
    'apple',
    'banana',
    'citrus'
]

const [first,,third, ...all] = fruits;
console.log(first + third + all);

//making copy of the object

const copyObject = { ...person};
console.log("Original Person");
console.log(person);
console.log("Copy of Person");
console.log(copyObject);
console.log("Third copy of Person with new edited password")
const copyObject3 = {...person, password:'newPassword'};
console.log(copyObject3);

const notsimilar = copyObject === person;
console.log("Are these varialble copyobject and person desame or not, the answer is " + notsimilar);