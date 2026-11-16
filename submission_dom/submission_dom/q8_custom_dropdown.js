// Q8: Custom dropdown. Capturing phase closes it when clicking outside.

const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");

dropdownButton.addEventListener("click", function () {
    const shouldOpen = dropdownOptions.hidden;
    dropdownOptions.hidden = !shouldOpen;
    dropdownButton.setAttribute("aria-expanded", String(shouldOpen));
});

dropdownOptions.addEventListener("click", function (event) {
    const selectedOption = event.target.closest("button[data-value]");
    if (!selectedOption) return;

    dropdownButton.textContent = selectedOption.dataset.value;
    dropdownOptions.hidden = true;
    dropdownButton.setAttribute("aria-expanded", "false");
});

// true means this listener runs during the capturing phase.
document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
        dropdownOptions.hidden = true;
        dropdownButton.setAttribute("aria-expanded", "false");
    }
}, true);
