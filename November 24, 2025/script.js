let nums = [1,2,3];
let copynum = [...nums];
// let copynum = nums; 
// nums.push(4); 
// nums = [3,4,5];

copynum.push(4);

console.log(nums);
console.log(copynum);


let person = {
    name: "Theo",
    age: 19,
    gender: "Male",
    favSubject: ['Math', 'English', 'Filipino'],
    pet: {
        petName: 'Junjun',
        type: 'Shark', 
    },
    greet: function() {
        console.log(`Hello User: ${this.name}`);
    },
    yr: "2nd",
} 

// let {name: pangalan, age: edad, gender, favSubject, yr = "Not Enrolled"} = person; 
// console.log(`My name is ${pangalan}
// I am ${edad}yrs old`);
// console.log(`Favorite Subject: ${favSubject[0]}`);
// console.log(yr);



// // console.log(person.favSubject[0]);

// // person.name = "Gabriel";
// // person.age = 32;

// // person.greet(); 

// // console.log(`Pet: ${person.pet.petName} 
// // Type: ${person.pet.type}`);



// // // let person2 = new Object(); 
// // person2.name = "Theo";
// // person2.age = 19;

// // console.log(person2);
// // console.log(`Hello ${person2["name"]} ${person2.age}`);

// let user = {
//     name: "Theodore Kyle Choa",
//     age: 19,
//     gender: "Male",
//     username: "|   Ascension   |",
//     password: "123456",
// }

// let { name, age, ...propetc } = user; 

// let course = {
//     courseCode: 'ICS2608',
//     courseName: 'App Dev 1',
//     courseDescription: 'Web Frontend Development Using HTML, CSS, and Javascript',
// }

// let student01 = { name, age, ...course }; 
// console.log(student01);

// console.log(user);

// let {age, name, gender, ...logindetails} = user;

// console.log(name);
// console.log(age);
// console.log(logindetails);

// let {username, password} = user;
// console.log(`Username: ${username}
// Password: ${password}`);

let settings = {
    theme: 'dark',
    notifications: true,
}
// settings.notifications = false;
let updatedSettings = {...settings, notifications: false}

console.log(settings);
console.log(updatedSettings);

function addNum(num, ...numetc) {
    console.log(num);
    console.log(...numetc);
}
addNum(1,2,3,4,5,6,7,8);

let employees = [
    {name: "Theodore Choa", age: 21},
    {name: "Theodore Cho", age: 2},
    {name: "Theodore Ch", age: 212},
    {name: "Theodore C", age: 2123},
]
console.log(employees[1]);
console.log(employees[1].name);
// for (let i = 0; i < employees.length; i++) {
//     console.log(employees[i].name);
// }
// employees.forEach((employee) => console.log(employee.name));
for (employee of employees) {
    console.log(employee.name);
}