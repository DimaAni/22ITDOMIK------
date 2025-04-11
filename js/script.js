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
// Переключение темы
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitchers = document.querySelectorAll('.theme-option');
    
    themeSwitchers.forEach(switcher => {
        switcher.addEventListener('change', function() {
            document.body.setAttribute('data-theme', this.value);
        });
    });
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
// Добавляем динамическое свечение при наведении
document.addEventListener('DOMContentLoaded', function() {
    const appButtons = document.querySelectorAll('.app-button');
    
    appButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const x = e.pageX - this.offsetLeft;
            const y = e.pageY - this.offsetTop;
            
            this.style.setProperty('--x', `${x}px`);
            this.style.setProperty('--y', `${y}px`);
        });
    });
});