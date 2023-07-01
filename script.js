// // Fetch JSON data
// fetch('db.json')
//   .then(response => response.json())
//   .then(data => {
//     const filmsList = document.getElementById('films');

//     // Populate movie list
//     data.films.forEach(movie => {
//       const li = document.createElement('li');
//       li.textContent = movie.title;
//       li.addEventListener('click', () => showMovieDetails(movie));
//       filmsList.appendChild(li);
//     });

//     // Show details for the first movie
//     showMovieDetails(data.films[0]);
//   });

// // Function to show movie details
// function showMovieDetails(movie) {
//   // Update movie details
//   document.getElementById('poster').src = movie.poster;
//   document.getElementById('title').textContent = movie.title;
//   document.getElementById('runtime').textContent = `Runtime: ${movie.runtime} minutes`;
//   document.getElementById('showtime').textContent = `Showtime: ${movie.showtime}`;
  
//   // Calculate available tickets
//   const availableTickets = movie.capacity - movie.tickets_sold;
//   document.getElementById('tickets').textContent = `Available Tickets: ${availableTickets}`;

//   // Disable buy button if sold out
//   const buyButton = document.getElementById('buy-ticket');
//   buyButton.disabled = availableTickets === 0;
//   buyButton.textContent = availableTickets === 0 ? 'Sold Out' : 'Buy Ticket';
//   buyButton.addEventListener('click', () => buyTicket(movie));
// }

// // Function to buy a ticket
// function buyTicket(movie) {
//   // Calculate available tickets
//   const availableTickets = movie.capacity - movie.tickets_sold;

//   // Check if tickets are available
//   if (availableTickets > 0) {
//     // Update tickets sold
//     movie.tickets_sold++;
//     document.getElementById('tickets').textContent = `Available Tickets: ${availableTickets - 1}`;

//     // Persist the updated number of tickets_sold on the server
//     // You need to implement the server-side logic to handle this

//     // Check if the movie is now sold out
//     if (movie.tickets_sold === movie.capacity) {
//       document.getElementById('buy-ticket').disabled = true;
//       document.getElementById('buy-ticket').textContent = 'Sold Out';
//     }
//   }
// }

    

// Fetch JSON data from localhost server
fetch('http://localhost:3000/films')
  .then(response => response.json())
  .then(data => {
    const filmsList = document.getElementById('films');

    // Populate movie list
    data.forEach(movie => {
      const li = document.createElement('li');
      li.textContent = movie.title;
      li.addEventListener('click', () => showMovieDetails(movie));
      filmsList.appendChild(li);
    });

    // Show details for the first movie
    showMovieDetails(data[0]);
  });

// Function to show movie details
function showMovieDetails(movie) {
  // Update movie details
  document.getElementById('poster').src = movie.poster;
  document.getElementById('title').textContent = movie.title;
  document.getElementById('runtime').textContent = `Runtime: ${movie.runtime} minutes`;
  document.getElementById('showtime').textContent = `Showtime: ${movie.showtime}`;

  // Calculate available tickets
  const availableTickets = movie.capacity - movie.tickets_sold;
  document.getElementById('tickets').textContent = `Available Tickets: ${availableTickets}`;

  // Disable buy button if sold out
  const buyButton = document.getElementById('buy-ticket');
  buyButton.disabled = availableTickets === 0;
  buyButton.textContent = availableTickets === 0 ? 'Sold Out' : 'Buy Ticket';
  buyButton.addEventListener('click', () => buyTicket(movie));
}

// Function to buy a ticket
function buyTicket(movie) {
  // Calculate available tickets
  const availableTickets = movie.capacity - movie.tickets_sold;

  // Check if tickets are available
  if (availableTickets > 0) {
    // Update tickets sold
    movie.tickets_sold++;
    document.getElementById('tickets').textContent = `Available Tickets: ${availableTickets - 1}`;

    // Persist the updated number of tickets_sold on the server
    // You need to implement the server-side logic to handle this

    // Check if the movie is now sold out
    if (movie.tickets_sold === movie.capacity) {
      document.getElementById('buy-ticket').disabled = true;
      document.getElementById('buy-ticket').textContent = 'Sold Out';
    }
  }
}
