// URL of the JSON file
const url = "https://alfonsoscudiero.github.io/wdd230/final-website/data/rentals.json";
const rentalOptionContainer = document.querySelector('#card-section-rental-options');

// Fetch and filter rental data
async function getRentalData() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        // Get the type filter from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const typeFilter = urlParams.get('type');

        // Filter options based on the type
        const filteredOptions = typeFilter
            ? data.options.filter(option => option.type.toLowerCase() === typeFilter.toLowerCase())
            : data.options;

        displayRentalCards(filteredOptions);
    } catch (error) {
        console.error("Error fetching data:", error);
        rentalOptionContainer.innerHTML = `<p>Failed to load rental data. Please try again later.</p>`;
    }
}

// Display filtered rental cards
function displayRentalCards(options) {
    rentalOptionContainer.innerHTML = ""; // Clear container

    if (options.length === 0) {
        rentalOptionContainer.innerHTML = `<p>No rentals available for the selected type.</p>`;
        return;
    }

    options.forEach(option => {
        const card = document.createElement('section');
        card.classList.add('rental-option');

        card.innerHTML = `
            <img src="${option.imageUrl}" alt="Image of ${option.make} ${option.type}" loading="lazy" width="300" height="200">
            <h4>${option.make} ${option.model} - ${option.type}</h4>
            <p><span class="bold-span">Max. persons:</span> ${option["max-persons"]}</p>
            <p><span class="bold-price">${option["reservation-full-day"]}</span> /Full Day</p>
            <p><span class="bold-price">${option["reservation-half-day"]}</span> /Up to 3hrs</p>
        `;

        rentalOptionContainer.appendChild(card);
        console.log("Generated card:", card.innerHTML);

    });
}

// Initialize the page
getRentalData();
