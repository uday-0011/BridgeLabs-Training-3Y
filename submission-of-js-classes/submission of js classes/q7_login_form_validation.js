// Q7 – Login Form Validation using RegExp
"use strict";

const loginForm = document.getElementById("loginForm");
const usernamePattern = /^.{5,}$/;
const passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9\s]).{8,}$/;

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = loginForm.elements.username.value;
    const password = loginForm.elements.password.value;
    const errors = [];

    if (!usernamePattern.test(username)) {
        errors.push("Username must contain at least 5 characters.");
    }
    if (password.length < 8) {
        errors.push("Password must contain at least 8 characters.");
    }
    if (!/[0-9]/.test(password)) errors.push("Password must include a number.");
    if (!/[A-Z]/.test(password)) errors.push("Password must include an uppercase letter.");
    if (!/[a-z]/.test(password)) errors.push("Password must include a lowercase letter.");
    if (!/[^A-Za-z0-9\s]/.test(password)) errors.push("Password must include a special character.");

    const message = document.getElementById("message");
    if (errors.length === 0 && passwordPattern.test(password)) {
        message.className = "success";
        message.textContent = "Validation successful!";
    } else {
        message.className = "failure";
        message.textContent = errors.join("\\n");
    }
});