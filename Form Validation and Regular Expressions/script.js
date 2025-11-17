// let firstNameValue = document.getElementById("firstName");
//Submit Event
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    console.log(event);
    console.log(form.firstName.value);
    console.log(form.lastName.value);
    console.log(form.contact.value);
    console.log(form.bio.value);
}); 

// Regular Expression
const namePattern = /^[A-Z][a-z]{6,10}/;