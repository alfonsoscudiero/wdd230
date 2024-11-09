// Variable
const timestampField = document.querySelector("#timestamp");

// Set the hidden input field with the current date and time in milliseconds
window.addEventListener("DOMContentLoaded", () => {
    timestampField.value = Date.now();
});