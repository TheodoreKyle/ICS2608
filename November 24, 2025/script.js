let nums = [1,2,3,4,5];
console.log(nums.length);

let person = {
    name: "Theo",
    age: 19,
    favSubject: ['Math', 'English', 'Filipino'],
    pet: {
        petName: 'Junjun',
        type: 'Shark', 
    },
    greet: function() {
        console.log(`Hello User: ${this.name}`);
    }
} 
person.name = "Gabriel";
person.age = 32; 
person.gender = "male"; 

// console.log(`Pet: ${person.pet.petName} 
// Type: ${person.pet.type}`);

person.greet(); 

// let person = new Object(); 
// person.name = "Theo";
// person.age = 19;

// console.log(person);
// console.log(`Hello ${person["name"]} ${person.age}`);