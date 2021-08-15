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

const passWord = person.password;
// if(passWord === person.password){
//     console.log("please change password");
// }else{
//     console.log("thank you for changing password")
// }
// console.log(passWord === person.password);
// console.log(passWord);

person.password === passWord
? console.log("please change password")
: console.log("thank you for changing the password");