let arr = ['mohammad', 30 , 'Amman']; //Array

let personalData= {                      //Object
    name: 'Ali',
    age : 31,
    adress: 'Zarqaa',
}

let users = 
[
    {
        id: 1,
        username: "john_doe",
        email: "john@example.com",
        fullName: "John Doe",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345",
            country: "USA"
        }
    },
    {
        id: 2,
        username: "jane_smith",
        email: "jane@example.com",
        fullName: "Jane Smith",
        age: 25,
        address: {
            street: "456 Elm St",
            city: "Othertown",
            state: "NY",
            zip: "54321",
            country: "USA"
        }
    }
];

let name = document.getElementById('name');
let age = document.getElementById('age1');
let adress1 = document.getElementById('adress1');

// // name.innerHTML = arr[0];
// // age.innerHTML = arr[1];
// // adress.innerHTML = arr[2];

name.innerHTML= personalData.name;
age.innerHTML= personalData.age;
adress1.innerHTML= personalData.adress1;

let _id=document.getElementById('id');
let username=document.getElementById('username');
let email=document.getElementById('email');
let fullName=document.getElementById('fullName');
let age1=document.getElementById('age');
let adress_street=document.getElementById('adress_street');
let adress_city=document.getElementById('adress_city');
let adress_state=document.getElementById('adress_state');
let _id2=document.getElementById('id2');
let username2=document.getElementById('username2');
let email2=document.getElementById('email2');
let fullName2=document.getElementById('fullName2');
let age2=document.getElementById('age2');
let adress_stree2=document.getElementById('adress_street2');
let adress_city2=document.getElementById('adress_city2');
let adress_state2=document.getElementById('adress_state2');

_id.innerHTML=users[0].id;
username.innerHTML=users[0].username;
email.innerHTML=users[0].email;
fullName.innerHTML=users[0].fullName;
age1.innerHTML=users[0].age;
adress_street.innerHTML=users[0].address.street;
adress_city.innerHTML=users[0].address.city;
adress_state.innerHTML=users[0].address.state;

_id2.innerHTML=users[1].id;
username2.innerHTML=users[1].username;
email2.innerHTML=users[1].email;
fullName2.innerHTML=users[1].fullName;
age2.innerHTML=users[1].age;
adress_street2.innerHTML=users[1].address.street;
adress_city2.innerHTML=users[1].address.city;
adress_state2.innerHTML=users[1].address.state;

