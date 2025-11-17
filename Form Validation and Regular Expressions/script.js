let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let genderRadios = document.querySelectorAll('input[name="gender"]');
let contact = document.getElementById("contact");
let address = document.getElementById("address"); 
let bio = document.getElementById("bio"); 
const form = document.querySelector("form");

// Regular Expression
const namePattern = /^[A-Z][a-z]{1,20}( [A-Z][a-z]{1,35})?$/ 
const lastnamePattern = /^[A-Z][a-z]{1,20}$/;
let contactPattern = /^09[0-9]{9}$/;
let addressPattern = /^\d+\s[A-Za-z0-9\s\.]+(?:,?\s?(?:Apt|Unit|#)?\s?\d*)?$/; 
let bioPattern = /^.{20,150}$/;

//Submit Event
form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    console.log(event);
    console.log(form.firstName.value);
    console.log(form.lastName.value);
    console.log(form.contact.value);
    console.log(form.address.value);
    console.log(form.bio.value);

    const genderResult = validateGender();

    let result_firstname = namePattern.test(form.firstName.value);
    console.log(result_firstname);

    let result_lastname = lastnamePattern.test(form.lastName.value);
    console.log(result_lastname);

    let contact_result = contactPattern.test(form.contact.value); 
    console.log(contact_result);

    let address_result = addressPattern.test(form.address.value);
    console.log(address_result);

    let bio_result = bioPattern.test(form.bio.value);
    console.log(bio_result);

    let message = document.querySelector("span"); 
    if (result_firstname && result_lastname && contact_result && address_result && bio_result && genderResult) {
        // console.log("Form Submitted Successfully!");
        message.setAttribute("class", "success");
        message.innerHTML = "Form Submitted Successfully!"
    } else {
        // console.log("Please Check Your Input");
        message.setAttribute("class", "error");
        message.innerHTML = "Please Check Your Input"
    }

    
}); 

// For Validation
firstName.addEventListener("keyup", (event) => {
    let fNameResult = namePattern.test(event.target.value);
    if (fNameResult) {
        form.firstName.setAttribute("class", "accepted");
    } else {
        form.firstName.setAttribute("class", "rejected");
    }
    console.log(event.target.value);
}); 

lastName.addEventListener("keyup", (event) => {
    let lNameResult = lastnamePattern.test(event.target.value);
    if (lNameResult) {
        form.lastName.setAttribute("class", "accepted");
    } else {
        form.lastName.setAttribute("class", "rejected");
    }
    console.log(event.target.value);
}); 

function validateGender() {
    const isSelected = Array.from(genderRadios).some(radio => radio.checked);

    genderRadios.forEach(radio => {
        if (isSelected) {
            radio.parentElement.classList.add("accepted");
            radio.parentElement.classList.remove("rejected");
        } else {
            radio.parentElement.classList.add("rejected");
            radio.parentElement.classList.remove("accepted");
        }
    });
    return isSelected;
}

contact.addEventListener("keyup", (event) => {
    let contact = contactPattern.test(event.target.value);
    if (contact) {
        form.contact.setAttribute("class", "accepted");
    } else {
        form.contact.setAttribute("class", "rejected");
    }
    console.log(event.target.value);
}); 


address.addEventListener("keyup", (event) => {
    let address = addressPattern.test(event.target.value);
    if (address) {
        form.address.setAttribute("class", "accepted");
    } else {
        form.address.setAttribute("class", "rejected");
    }
    console.log(event.target.value);
});

bio.addEventListener("keyup", (event) => {
    let bio = bioPattern.test(event.target.value);
    if (bio) {
        form.bio.setAttribute("class", "accepted");
    } else {
        form.bio.setAttribute("class", "rejected");
    }
    console.log(event.target.value);
}); 