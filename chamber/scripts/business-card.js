// Define the URL where the JSON data is hosted
const url = "https://alfonsoscudiero.github.io/wdd230/chamber/data/member.json";

// Select DOM elements
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const businessDirectory = document.querySelector(".business-grid");

// Fetch data from the JSON file
async function getBusinessData() {
    try {
        const response = await fetch(url); // Make a network request
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Convert the response to JSON
        console.log(data.businesses); // Log the fetched JSON data Object for debugging
        displayMembers(data.businesses); // Call the display function with the data
    } catch (error) {
        console.error("Error fetching data:", error);
        display.innerHTML = `<p class="error-message">Failed to load reference. Please try again later.</p>`;
    }
}

// Render member cards on the page
function displayMembers(members) {
    console.log(members); // Log the data passed for debugging

    members.forEach(({ name, address, phone, membershipLevel, url, logo }) => {
        // Create card elements
        let card = document.createElement("section");
        let img = document.createElement("img");
        let title = document.createElement("h2");
        let location = document.createElement("p");
        let contact = document.createElement("p");
        let membership = document.createElement("p");
        let link = document.createElement("p");

        // Populate content
        img.src = logo;
        // img.alt = `${name} logo`;
        title.textContent = name;
        location.textContent = address;
        contact.textContent = phone;
        membership.innerHTML = `<span>Membership Level:</span> ${membershipLevel}`;
        link.innerHTML = `<a href="${url}" target="_blank">${url}</a>`;

        // Apply CSS classes
        card.classList.add("business-card");
        img.classList.add("business-card-img");
        title.classList.add("business-card-h2");
        location.classList.add("business-card-p");
        contact.classList.add("business-card-p");
        membership.classList.add("business-card-p", "business-card-span");
        link.classList.add("business-card-a");

        // Append elements to the card
        card.append(img, title, location, contact, membership, link);
        businessDirectory.appendChild(card);
    });
}

// Add event listeners for grid/list toggling
gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});

// Fetch and display the business data when the page loads
getBusinessData();