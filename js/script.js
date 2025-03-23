// script.js
document.addEventListener("DOMContentLoaded", () => {
    const themeSwitcher = document.querySelector(".theme-switcher");
    const body = document.body;

    // Обработчик изменения темы
    themeSwitcher.addEventListener("change", (event) => {
        const selectedTheme = event.target.value;
        body.setAttribute("data-theme", selectedTheme);
    });
});