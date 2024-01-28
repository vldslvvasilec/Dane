const EmailForm = document.querySelector(".SendEmailForm");
const UserName = document.querySelector(".name");
const UserEmail = document.querySelector(".email");
const UserText = document.querySelector(".message");
const ButtonsCencel = document.querySelector(".emailButtonsCencelBut");

const ClinerInputsEmail = () => {
    document.querySelector("#Name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
};
ButtonsCencel.addEventListener("click", ClinerInputsEmail);
document
    .querySelector(".SendEmailForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.querySelector("#Name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
        // Здесь можно использовать полученные значения (name, email, message) для отправки через EmailJS или для других целей
        // Например, отправка данных через EmailJS
        const formData = {
            from_name: name,
            from_email: email,
            message: message,
        };
        emailjs.init("hpawoRdGpKEsGXPrT");
        const serviceID = "service_bp797oh";
        const templateID = "template_qbhjoi5";
        emailjs.send(serviceID, templateID, formData);
        ClinerInputsEmail();
    });
