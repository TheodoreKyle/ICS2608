console.log("Hello World");
console.log("31" - 3); console.log("31" + 3); console.log(typeof("31" * 3)); console.log("31" / 3); console.log("31" % 3);

let number = 5;
if (number < 2) {
    let heading = document.querySelector("#heading");
    heading.style.color = "red";
    heading.innerText = "Welcome to JavaScript";
} 

const date = new Date(/* "2022-03-25" */);
//document.getElementById("time-demo").innerHTML = date;
document.getElementById("time-demo").innerHTML = date.getFullYear() + " " + date.getHours() + ":" 
                                                + date.getMinutes() + ":" + date.getSeconds();

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Pineapple"); 
console.log(fruits);
let fruits_p = document.getElementById("array-demo");
fruits_p.innerHTML = fruits + "<br>" + fruits.toString();  
fruits_p.style.color = "green";
fruits_p.style.fontSize = "20px";

const set_example = new Set();
set_example.add("A");
set_example.add("B");
set_example.add("C");
set_example.add("A");
console.log(set_example);
let set_p = document.getElementById("set-demo");
set_p.innerText = Array.from(set_example);
set_p.style.color = "blue";
set_p.style.fontSize = "20px";

let button = document.getElementById("myBtn");
button.addEventListener("click", function() {
    alert("Button Clicked!");
});
console.log(typeof(button));

const elements = document.getElementsByClassName("info");
console.log(elements.length);
elements[0].style.color = "red";
elements[1].style.color = "green";
elements[2].style.color = "blue"; 

let button2_boolean = false;
let button2 = document.getElementById("changeTextBtn");
button2.addEventListener("click", function() {
    let change_p = document.getElementById("intro2");
    if (!button2_boolean) {
        change_p.innerHTML = "The text has been changed!";
        change_p.style.fontSize = "18px";
        button2_boolean = true; 
    } else {
        change_p.innerHTML = "This paragraph will change dynamically.";
        change_p.style.fontSize = "18px";
        button2_boolean = false;
    }
});

let hoverText = document.querySelector("#hoverText");
hoverText.addEventListener("mouseover", function() {
    hoverText.style.color = "purple"; 
    hoverText.innerHTML = "You Hovered"
});
hoverText.addEventListener("mouseout", function() {
    hoverText.style.color = "black"; 
    hoverText.innerHTML = "Hover over this text"; 
});

let button_age = document.getElementById("button-age");
button_age.addEventListener("click", function() {
    let age = document.getElementById("age").value + 0;  
    if (age < 13) {
        document.getElementById("age-checker").innerHTML = "You are a child.";
    } else if (age <= 17) {
        document.getElementById("age-checker").innerHTML = "You are a teenager.";
    } else {
        document.getElementById("age-checker").innerHTML = "You are an adult.";
    }
});

let list_visible = false; 
let subjects = ["Math", "Science", "English", "TLE", "History"]; 
let button_subjects = document.querySelector("#subjects"); 
button_subjects.addEventListener("click", function() {
    let list = document.getElementById("list"); 
    if (!list_visible) {
        list.innerHTML = "";
        for (let i = 0; i < subjects.length; i++) {
            let li = document.createElement("li"); 
            li.textContent = subjects[i]; 
            list.appendChild(li);
        }
        list_visible = true; 
    } else {
        list.innerHTML = "";
        list_visible = false; 
    }
});