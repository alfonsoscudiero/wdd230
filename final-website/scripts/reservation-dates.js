// Initialize elements
const pickupDateInput = document.getElementById('pickup-date');
const dropoffDateInput = document.getElementById('dropoff-date');
const pickupTimeInput = document.getElementById('pickup-time');
const dropoffTimeInput = document.getElementById('dropoff-time');

// Function to generate time options for both pickup and dropoff
function generateTimeOptions() {
  const timeOptions = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeOptions.push(timeString);
    }
  }
  console.log('All generated time options:', timeOptions); // Debugging line
  return timeOptions;
}

// Function to generate time options for both pickup and dropoff
const timeOptions = generateTimeOptions();
pickupTimeInput.innerHTML = timeOptions.map(time => `<option value="${time}">${time}</option>`).join('');
dropoffTimeInput.innerHTML = timeOptions.map(time => `<option value="${time}">${time}</option>`).join('');

// Event listener for pickup date input
pickupDateInput.addEventListener('input', () => {
  const pickupDate = new Date(pickupDateInput.value);
  const today = new Date();

  console.log('Pickup date selected:', pickupDateInput.value); // Debugging line
  console.log('Today\'s date:', today); // Debugging line

  if (pickupDate <= today) {
    alert('Please select a date after today.');
    pickupDateInput.value = ''; // Clear the input field
  }
});

// Event listener for dropoff date input
dropoffDateInput.addEventListener('input', () => {
  const pickupDate = new Date(pickupDateInput.value); // Debugging line
  const dropoffDate = new Date(dropoffDateInput.value); // Debugging line

  console.log('Pickup date:', pickupDate);
  console.log('Dropoff date:', dropoffDate);

  // Ensure dropoff date is on or after the pickup date and within 30 days
  if (dropoffDate < pickupDate || dropoffDate - pickupDate > 30 * 24 * 60 * 60 * 1000) {
    console.log('Invalid dropoff date: Either before pickup or more than 30 days after'); //Debugging line
    alert('Dropoff date must be on or after the pickup date and within 30 days.');
    dropoffDateInput.value = ''; // Clear the dropoff date input
  } else {
    console.log('Valid dropoff date selected'); // Debugging line
  }
});