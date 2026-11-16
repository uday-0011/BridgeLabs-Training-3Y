// Q9: Block form submission, show inline errors, and clear errors as fields are corrected.

const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const successMessage = document.getElementById("successMessage");

function validateName() {
    const isValid = nameInput.value.trim() !== "";
    document.getElementById("nameError").textContent =
        isValid ? "" : "Name is required.";
    return isValid;
}

function validateEmail() {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim());
    document.getElementById("emailError").textContent =
        isValid ? "" : "Enter a valid email address containing @.";
    return isValid;
}

function validatePassword() {
    const isValid = passwordField.value.length >= 6;
    document.getElementById("passwordError").textContent =
        isValid ? "" : "Password must contain at least 6 characters.";
    return isValid;
}

// Once validation has been attempted, each input updates its own error live.
nameInput.addEventListener("input", validateName);
emailField.addEventListener("input", validateEmail);
passwordField.addEventListener("input", validatePassword);

signupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the browser's normal form submission.
    successMessage.textContent = "";

    const nameIsValid = validateName();
    const emailIsValid = validateEmail();
    const passwordIsValid = validatePassword();

    if (nameIsValid && emailIsValid && passwordIsValid) {
        successMessage.textContent = "Form Submitted Successfully";
        signupForm.reset();
        document.querySelectorAll(".error").forEach(function (errorElement) {
            errorElement.textContent = "";
        });
    }
});
