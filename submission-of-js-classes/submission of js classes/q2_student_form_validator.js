// Q2 – Student Form Validator (Forms + RegExp)
"use strict";

const studentForm = document.getElementById("studentForm");
const validators = {
    name: /^[A-Za-z]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).+$/
};
const messages = {
    name: "Use alphabets only (no spaces or numbers).",
    email: "Enter an email such as example@domain.com.",
    phone: "Phone must contain exactly 10 digits.",
    password: "Password needs an uppercase letter, a number, and a special character."
};

function validateField(fieldName) {
    const input = studentForm.elements[fieldName];
    const errorElement = document.getElementById(`${fieldName}Error`);
    const isValid = validators[fieldName].test(input.value.trim());

    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
    errorElement.textContent = isValid || input.value === "" ? "" : messages[fieldName];
    if (input.value === "") {
        input.classList.remove("valid");
        input.classList.add("invalid");
        errorElement.textContent = `${fieldName} is required.`;
        return false;
    }
    return isValid;
}

Object.keys(validators).forEach((fieldName) => {
    studentForm.elements[fieldName].addEventListener("input", () => validateField(fieldName));
});

studentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const allValid = Object.keys(validators).map(validateField).every(Boolean);
    document.getElementById("result").textContent =
        allValid ? "Registration form is valid!" : "Please fix the highlighted fields.";
});