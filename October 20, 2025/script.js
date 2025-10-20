// alert("Hello"); 

let firstName = 'Theodore'; 
let age = 19; 
let num = 19; 
let num2 = "19";
let total2 = num + num2;
let isAdult = true;
let subjects = ["Math", "English", "Science"];  
subjects[1] = "Filipino";

console.log("My name is: " + firstName);
console.log("I am " + age + "yrs old");
console.log(total2);

if (num < num2) {
    console.log("yehey");
} else {
    console.log("huhu");
}

console.log(typeof isAdult);

/* console.log(subjects[0]); 
console.log(subjects[1]); */ 
for (let i = 0; i < subjects.length; i++) console.log(subjects[i]); 

function add() {
    let x = 3;
    let y = 4; 
    let total = x + y;
    return total;  
}
console.log(add());

function ADD(number1, number2) {
    return number1 + number2;
}
console.log(ADD(10, 26));
console.log(ADD(Number(num2), num));

/* const addition = function(num, num2) {
    return num + num2; 
}
console.log(addition(56, 78)); */

const addition = (num, num2) => num + num2;
console.log(addition(100, 4341)); 

const SUBJECTS = ["Math", "English", "Science", "Filipino"];
console.log(SUBJECTS); 
let newSbj = SUBJECTS.map((subj) => subj + " 4");
console.log(newSbj);