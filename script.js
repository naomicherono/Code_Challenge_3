/ Fetch JSON data from localhost server
fetch('http://localhost:3000/films')
  .then(response => response.json())
  .then(data => {
    const filmsList = document.getElementById('films');
