// Q3: Three-step form with validation, Back, Next, and summary.

const steps = document.querySelectorAll(".step");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const summary = document.getElementById("summary");
let currentStep = 0;

const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

function validateCurrentStep() {
    if (currentStep === 0) {
        const isValid = fullNameInput.value.trim() !== "";
        document.getElementById("nameError").textContent = isValid ? "" : "Please enter your name.";
        return isValid;
    }

    if (currentStep === 1) {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
        document.getElementById("emailError").textContent = isValid ? "" : "Please enter a valid email.";
        return isValid;
    }

    const isValid = passwordInput.value.length >= 6;
    document.getElementById("passwordError").textContent = isValid ? "" : "Password must be at least 6 characters.";
    return isValid;
}

function showStep() {
    for (let i = 0; i < steps.length; i++) {
        steps[i].hidden = i !== currentStep;
    }
    backButton.disabled = currentStep === 0;
    nextButton.textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
}

nextButton.addEventListener("click", function () {
    if (!validateCurrentStep()) return;

    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep();
    } else {
        document.getElementById("registrationForm").hidden = true;
        document.getElementById("summaryName").textContent = "Name: " + fullNameInput.value.trim();
        document.getElementById("summaryEmail").textContent = "Email: " + emailInput.value.trim();
        summary.hidden = false;
    }
});

backButton.addEventListener("click", function () {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
});

showStep();
