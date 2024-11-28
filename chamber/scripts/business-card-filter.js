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
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      membersData = data.businesses;
      
      // Check for filter parameter in URL
      const urlParams = new URLSearchParams(window.location.search);
      const filter = urlParams.get('filter');
      
      if (filter === 'gold') {
        const goldMembers = membersData.filter(member => member.membershipLevel === 'Gold');
        displayMembers(goldMembers, 'grid');
        updateHeading('Gold Members Spotlight');
      } else {
        displayMembers(membersData, 'grid');
        updateHeading('Member Directory');
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      display.innerHTML = `<p class="error-message">Failed to load data. Please try again later.</p>`;
    }
  }

  // Render member cards on the page
function displayMembers(members, viewType) {
    display.innerHTML = "";
    members.forEach((member) => {
      const card = document.createElement("section");
      if (viewType === 'grid') {
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
    display.className = viewType === 'grid' ? 'business-grid' : 'business-list';
  }
  
  // Update the heading
  function updateHeading(text) {
    const heading = document.querySelector('.hero-container-directory-h1');
    if (heading) {
      heading.textContent = text;
    }
  }
  
  // Event listeners for grid/list toggling
  gridButton.addEventListener("click", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter');
    const displayData = filter === 'gold' ? membersData.filter(member => member.membershipLevel === 'Gold') : membersData;
    displayMembers(displayData, 'grid');
  });
  
  listButton.addEventListener("click", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter');
    const displayData = filter === 'gold' ? membersData.filter(member => member.membershipLevel === 'Gold') : membersData;
    displayMembers(displayData, 'list');
  });
  
  // Fetch and display the business data when the page loads
  getBusinessData();