// Define the URL where the JSON data is hosted
const url = "https://alfonsoscudiero.github.io/wdd230/chamber/data/member.json";

// Select DOM elements
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector(".business-grid");

// Initialize a variable to store member data
let membersData = [];

// Fetch data from the JSON file
async function getBusinessData() {
    try {
        const response = await fetch(url); // Make a network request
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Convert the response to JSON
        membersData = data.businesses; // Store the fetched data in a global variable

        // Initially display members in grid view
        displayMembers(membersData, 'grid');
    } catch (error) {
        console.error("Error fetching data:", error);
        display.innerHTML = `<p class="error-message">Failed to load data. Please try again later.</p>`;
    }
}

// Render member cards on the page
function displayMembers(members, viewType) {
    display.innerHTML = ""; // Clear previous content

    members.forEach((member) => {
        const card = document.createElement("section");

        if (viewType === 'grid') {
            card.classList.add("business-card");
            card.innerHTML = `
                <img src="${member.logo}" alt="${member.name} Logo" width="200" height="200" class="business-card-img">
                <h2 class="business-card-h2">${member.name}</h2>
                <p class="business-card-p">${member.address}</p>
                <p class="business-card-p">${member.phone}</p>
                <p class="business-card-p">Membership Level: <span class="business-card-span">${member.membershipLevel}</span></p>
                <p class="business-card-a">
                    <a href="${member.url}" target="_blank" rel="noopener noreferrer">${member.url}</a>
                </p>
            `;
        } else {
            card.classList.add("card-list");
            card.innerHTML = `
                <h2 class="list-card-h2">${member.name}</h2>
                <p class="list-address">${member.address}</p>
                <p class="list-contact">${member.phone}</p>
                <p class="list-membership">Membership level: <span class="business-list-card-span">${member.membershipLevel}</span></p>
                <p class="list-url">
                    <a href="${member.url}" target="_blank" rel="noopener noreferrer">${member.url}</a>
                </p>
            `;
        }

        display.appendChild(card);
    });

    // Update the display container's class
    display.className = viewType === 'grid' ? 'business-grid' : 'business-list';
}

// Event listeners for grid/list toggling
gridButton.addEventListener("click", () => {
    displayMembers(membersData, 'grid');
});

listButton.addEventListener("click", () => {
    displayMembers(membersData, 'list');
});

// Fetch and display the business data when the page loads
getBusinessData();
