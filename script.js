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
