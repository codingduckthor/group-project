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
