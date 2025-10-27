//console.log(document.location);

let heading = document.getElementById("heading");
console.log(heading);

const btn = document.querySelector(".btn"); 
heading.addEventListener("mouseover", function() {
    heading.innerHTML = '<center> Hooorayyy!!!! </center>'; 
    heading.style.color = 'pink';
    for (item of para) {
        item.style.color = "red"; 
    }
})

// function changeText() { }

/* const h3 = document.querySelector("h3");
h3.setAttribute("class", "red"); */ 

/* const body = document.querySelector("body"); 
let time = 10; 
if (time <= 20) {
    body.setAttribute("class", "light");
} else {
    body.setAttribute("class", "dark"); 
} */

// const para = document.getElementsByClassName("para"); 
// const para = document.getElementsByTagName("p"); 
// console.log(para); 

/* const paraGetElem = document.getElementsByClassName("para"); 
const para = document.querySelectorAll(".para"); 
console.log(paraGetElem); 
console.log(para); */ 