document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const usernameInput = document.querySelector("input[name='username']");
  const passwordInput = document.querySelector("input[name='password']");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Предотвратим отправку формы по умолчанию

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    // Здесь можно отправить данные на сервер
    console.log("Форма прошла валидацию. Отправка...");

    // Пример: отправка на backend (если будет Django, Flask, и т.п.)
    /*
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert("Регистрация успешна!");
        window.location.href = "/login.html";
      } else {
        alert("Ошибка: " + data.message);
      }
    })
    .catch(err => {
      console.error("Ошибка запроса:", err);
    });
    */
  });
});



document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.login-form');
    const inputs = document.querySelectorAll('.login-form input');
    
    // 1. Анимация появления формы
    form.style.opacity = '0';
    form.style.transform = 'translateY(20px)';
    form.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        form.style.opacity = '1';
        form.style.transform = 'translateY(0)';
    }, 300);

    // 2. Анимация фокуса на инпутах
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = 'var(--blue-main)';
            input.style.boxShadow = '0 0 5px rgba(0, 87, 183, 0.3)';
        });
        input.addEventListener('blur', () => {
            input.style.borderColor = '#ccc';
            input.style.boxShadow = 'none';
        });
    });

    // 3. Анимация кнопки submit
    const submitBtn = document.querySelector('.login-form button');
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        submitBtn.textContent = 'Отправка...';
        submitBtn.style.width = submitBtn.offsetWidth + 'px';
        
        setTimeout(() => {
            submitBtn.textContent = '✓ Готово';
            setTimeout(() => {
                submitBtn.textContent = 'Подтвердить';
            }, 1000);
        }, 800);
    });
});