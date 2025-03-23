// script.js
document.addEventListener("DOMContentLoaded", () => {
    const themeSwitcher = document.querySelector(".theme-switcher");
    const body = document.body;

    // Устанавливаем тему по умолчанию (темная)
    if (!body.getAttribute("data-theme")) {
        body.setAttribute("data-theme", "dark");
    }

    // Обработчик изменения темы
    themeSwitcher.addEventListener("change", (event) => {
        const selectedTheme = event.target.value;
        body.setAttribute("data-theme", selectedTheme);
    });
});