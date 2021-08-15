const person = {
    firstname: 'Orlando',
    lastname: 'Nava',
    email: ['orlandonavajr@yahoo.com', 'onavajr@yahoo.com'],
    address: '2322 Balme Dr. San Jose, CA'
}

const {email,firstname} = person;
console.log(email);

const fruits = [
    'orange',
    'apple',
    'banana',
    'citrus'
]

const [naval,red,,sour,] = fruits;
console.log(naval,red,sour);