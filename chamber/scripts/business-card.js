// Define the URL where the JSON data is hosted
const url = "https://alfonsoscudiero.github.io/wdd230/chamber/data/member.json";

// Select DOM elements
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector(".business-grid");

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
        display.innerHTML = `<p class="error-message">Failed to load data. Please try again later.</p>`;
    }
}

// Render member cards on the page
function displayMembers(members, viewType) {
    console.log(members); // Log the data passed for debugging

    display.innerHTML = ""; // Clear previous content
    if (viewType === 'grid') {
        display.className = 'business-grid';
    } else {
        display.className = 'business-list';
    }

    members.forEach((member) => {
        let card = document.createElement("section");

        if (viewType === 'grid') {
            card.classList.add("business-card");
            card.innerHTML = `
                <img src="${member.logo}" alt="${member.name} Logo" width="200" height="200" class="business-card-img">
                <h2 class="business-card-h2">${member.name}</h2>
                <p class="business-card-p">${member.address}</p>
                <p class="business-card-p">${member.phone}</p>
                <p class="business-card-p">Membership Level: <span class="business-card-span">${member.membershipLevel}</span></p>
                <p class="business-card-a">${member.url}</p>
            `;
        } else {
            card.id = "list";
            card.innerHTML = `
                <h2 class="list-card-h2">${member.name}</h2>
                <p class="list-address">${member.address}</p>
                <p class="list-contact">${member.phone}</p>
                <p class="list-membership">Membership level: <span class="business-list-card-span">${member.membershipLevel}</span></p>
                <p class="list-url">${member.url}</p>
            `;
        }

        display.appendChild(card);
    });
}

// Function to toggle view
function toggleView(viewType) {
    const members = JSON.parse(display.dataset.members || '[]');
    displayMembers(members, viewType);
}

// Add event listeners for grid/list toggling
gridButton.addEventListener("click", () => toggleView('grid'));
listButton.addEventListener("click", () => toggleView('list'));

// Fetch and display the business data when the page loads
getBusinessData();