// Q8 – Dynamic Object Updater
"use strict";

const user = { name: "John", email: "john@mail.com", age: 21 };
const userForm = document.getElementById("userForm");

function displayUser() {
    document.getElementById("userOutput").textContent = JSON.stringify(user, null, 2);
}

userForm.elements.name.value = user.name;
userForm.elements.email.value = user.email;
userForm.elements.age.value = user.age;
displayUser();

userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Update the existing object with the current form values.
    user.name = userForm.elements.name.value.trim();
    user.email = userForm.elements.email.value.trim();
    user.age = Number(userForm.elements.age.value);

    displayUser();
    console.log("Updated user object:", user);
});