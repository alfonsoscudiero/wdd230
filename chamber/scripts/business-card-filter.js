// Fetch the URL parameter to determine if we need to filter by gold membership
const queryParams = new URLSearchParams(window.location.search);
const filter = queryParams.get("filter") || "all";  // Default to "all" if no filter is specified

// Fetch business data
async function getBusinessData() {
    try {
        const response = await fetch("https://alfonsoscudiero.github.io/wdd230/chamber/data/member.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        let members = data.businesses;

        // If the filter is set to 'gold', filter members by gold membership level
        if (filter === "gold") {
            members = members.filter(member => member.membershipLevel === "Gold");
            document.querySelector("h1.hero-container-directory-h1").textContent = "Gold Members Spotlight";  // Update the heading
        } else {
            document.querySelector("h1.hero-container-directory-h1").textContent = "Chamber of Commerce Member Directory";  // Default heading
        }

        // Display the members
        displayMembers(members, "grid");

    } catch (error) {
        console.error("Error fetching member data:", error);
        const display = document.querySelector(".business-grid");
        display.innerHTML = `<p>Failed to load members. Please try again later.</p>`;
    }
}

// Display member cards
function displayMembers(members, viewType) {
    const display = document.querySelector(".business-grid");
    display.innerHTML = "";  // Clear any previous content

    members.forEach((member) => {
        const card = document.createElement("section");

        if (viewType === "grid") {
            card.classList.add("business-card");
            card.innerHTML = `
                <img src="${member.logo}" alt="${member.name} Logo" width="200" height="200" class="business-card-img" loading="lazy">
                <h2 class="business-card-h2">${member.name}</h2>
                <p class="business-card-p">${member.address}</p>
                <p class="business-card-p">${member.phone}</p>
                <p class="business-card-p">Membership Level: <span class="business-card-span">${member.membershipLevel}</span></p>
                <p class="business-card-a">
                    <a href="${member.url}" target="_blank">${member.url}</a>
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
                    <a href="${member.url}" target="_blank">${member.url}</a>
                </p>
            `;
        }

        display.appendChild(card);
    });

    // Toggle view mode between grid and list
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");

    gridButton.addEventListener("click", () => {
        displayMembers(members, "grid");
    });

    listButton.addEventListener("click", () => {
        displayMembers(members, "list");
    });
}

// Load the business data when the page is ready
getBusinessData();
