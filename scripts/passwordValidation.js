//Initiate variables
const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#form-message");

kp2.addEventListener("focusout", checkSame);

function checkSame() {
    message.textContent = "";
    message.classList.remove("show-message");

    if (kp1.value !== kp2.value) {
        message.textContent = "Password DO NOT MATCH!";
        message.classList.add('show-message');
        kp2.value = "";
        kp2.focus();
    } 
}