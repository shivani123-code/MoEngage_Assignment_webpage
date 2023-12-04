   // Fetch data from the Open Brewery DB API
   fetch('https://api.openbrewerydb.org/breweries')
   .then(response => response.json())
   .then(data => displayBreweries(data))
   .catch(error => console.error('Error fetching breweries:', error));

// Function to display brewery information
function displayBreweries(breweries) {
   const breweryTable = document.getElementById('breweryTable');
   const tbody = breweryTable.querySelector('tbody');

   breweries.forEach(brewery => {
       const row = document.createElement('tr');
       row.innerHTML = `
           <td>${brewery.name}</td>
           <td>${brewery.brewery_type}</td>
           <td>${brewery.street}, ${brewery.city}, ${brewery.state} ${brewery.postal_code}</td>
           <td>${brewery.phone}</td>
           <td class="rating"></td>
           <td class="description"></td>
       `;
       tbody.appendChild(row);

       // Fetch and populate the rating for each brewery
       fetchRating(brewery.id, row);
   });
}

// Function to fetch and display the rating for a brewery
function fetchRating(breweryId, row) {
   // Replace with your logic to fetch ratings from your backend or another API
   const fakeRating = Math.floor(Math.random() * 5) + 1; // Simulating a random rating
   const ratingCell = row.querySelector('.rating');
   ratingCell.textContent = fakeRating; // Update the cell content with the rating
}

// Handle form submission to add user ratings
document.getElementById('ratingForm').addEventListener('submit', function (event) {
   event.preventDefault();

   const breweryId = document.getElementById('breweryId').value;
   const userRating = document.getElementById('userRating').value;
   const userDescription = document.getElementById('userDescription').value;

   // Validate input
   if (!breweryId || !userRating || isNaN(userRating) || userRating < 1 || userRating > 5 || !userDescription) {
       alert('Invalid input. Please enter valid Brewery ID, Rating (1-5), and Description.');
       return;
   }

   // Replace with your logic to update the API with user ratings and descriptions
   // Here, we'll just update the displayed values for demonstration purposes
   const ratingCell = document.querySelector(`#breweryTable tr#${breweryId} td.rating`);
   ratingCell.textContent = userRating;

   const descriptionCell = document.querySelector(`#breweryTable tr#${breweryId} td.description`);
   descriptionCell.textContent = userDescription;
});