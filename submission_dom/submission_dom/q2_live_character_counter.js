// Q2: Live character counter with a 100-character limit.

const messageInput = document.getElementById("messageInput");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maximumCharacters = 100;

function updateCounter() {
    const remainingCharacters = maximumCharacters - messageInput.value.length;
    counter.textContent = remainingCharacters + " characters remaining";

    counter.className = "";
    if (remainingCharacters === 0) {
        counter.classList.add("danger");
    } else if (remainingCharacters <= 20) {
        counter.classList.add("warning");
    } else {
        counter.classList.add("normal");
    }
}

// preventDefault() blocks an additional character when the limit is reached.
messageInput.addEventListener("beforeinput", function (event) {
    const isAddingText = event.inputType.startsWith("insert");
    if (isAddingText && messageInput.value.length >= maximumCharacters) {
        event.preventDefault();
    }
});

messageInput.addEventListener("input", updateCounter);

resetButton.addEventListener("click", function () {
    messageInput.value = "";
    updateCounter();
});

updateCounter();
