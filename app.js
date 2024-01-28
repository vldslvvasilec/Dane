function submitForm(event) {
    event.preventDefault();

    let formData = new FormData(document.getElementById("ProgCalcFree"));

    let checkboxes = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    );
    checkboxes.forEach((checkbox) => {
        formData.append(checkbox.name, checkbox.value);
    });

    // Получаем все значения полей ввода
    for (let [key, value] of formData.entries()) {
        console.log(`${key}:${value}`);
    }

    // Далее можно использовать значения, например, отправить их на сервер
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Успешный ответ: ", data);
        })
        .catch((error) => {
            console.error("Ошибка при отправке запроса: ", error);
        });
}
