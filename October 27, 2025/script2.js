const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".ul");

console.log(input); 
input.addEventListener("change", (event) => console.log(event)); 

btn.addEventListener("click", function(){
    const item = document.createElement("li")
    item.innerText = input.value; 
    list.appendChild(item);
})