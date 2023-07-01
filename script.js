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
