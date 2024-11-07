document.addEventListener("DOMContentLoaded", () => {
    const ratingInput = document.getElementById('page-rating');
    const ratingValue = document.getElementById('rating-value');

    // Display initial value
    ratingValue.textContent = ratingInput.value;

    // Update value on input change
    ratingInput.addEventListener('input', () => {
        ratingValue.textContent = ratingInput.value;
    });
});