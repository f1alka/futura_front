//Плавный переход между страницами
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-button");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const target = button.getAttribute("href");

            // Анимация исчезновения
            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location.href = target;
            }, 500); // Переход через 500мс
        });
    });

    // Анимация появления страницы
    document.body.style.opacity = "1";
});

// Ожидаем загрузки страницы
window.addEventListener("load", () => {
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");

    // Убираем экран приветствия через 3 секунды
    setTimeout(() => {
        introScreen.classList.add("intro-hidden");
        mainContent.style.overflow = "auto";
    }, 3000);
});

document.querySelector('.register-button').addEventListener('click', function() {
    document.getElementById('registration-window').style.display = 'block';
});

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Здесь можно обработать регистрацию
    alert('Регистрация успешна!');
    document.getElementById('registration-window').style.display = 'none';
});

// Открытие окна регистрации
function openRegistrationWindow() {
    document.getElementById('registration-window').style.display = 'block'; // Показываем окно регистрации
    // Убираем размытие с фона
    document.body.classList.remove('blurred');
}

// Закрытие окна регистрации
function closeRegistrationWindow() {
    document.getElementById('registration-window').style.display = 'none'; // Скрываем окно регистрации
    // Убираем размытие с фона
    document.body.classList.remove('blurred');
}

// Обработка отправки формы регистрации
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Предотвращаем стандартную отправку формы
    // Здесь можно добавить логику для обработки регистрации (например, отправка данных на сервер)
    alert('Регистрация успешна!');
    closeRegistrationWindow(); // Закрытие окна после успешной регистрации
});


  