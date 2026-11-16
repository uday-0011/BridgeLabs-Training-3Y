// Q4: Apply themes by manipulating the body's attributes.

const themeButtons = document.querySelectorAll("[data-theme-choice]");
const currentThemeText = document.getElementById("currentTheme");

function applyTheme(themeName) {
    // setAttribute updates the custom data-theme attribute on <body>.
    document.body.setAttribute("data-theme", themeName);
    currentThemeText.textContent = "Current theme: " +
        themeName.charAt(0).toUpperCase() + themeName.slice(1);
}

for (let i = 0; i < themeButtons.length; i++) {
    themeButtons[i].addEventListener("click", function () {
        const selectedTheme = themeButtons[i].getAttribute("data-theme-choice");
        applyTheme(selectedTheme);
    });
}

applyTheme("light");
