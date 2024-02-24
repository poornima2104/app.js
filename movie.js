document.getElementById('search-btn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-inp').ariaValue;
    if (searchTerm.trim() !== ' ') {
        fetchMovieData(searchTerm);
    }
});
function fetchMovieData(searchTerm) {
    const apikey ='a669e72a';
    const apiUrl ='http://www.omdbapi.com/apikey.aspx?VERIFYKEY=845c88f9-0d5c-4e5c-b623-013fb8072271';
fetch(apiUrl)
.then(response => 
    response.json())
    .then(data => {
        displayResults(data.Search);
    })
    .catch(error =>
        console.error('Error:', error));
    }
    function displayResults(movies) {
        const resultContainer =
        document.getElementById('result-container');
        resultContainer.innerHTML = '';
        if (movies) {
            movies.forEach(movie => {
                const movieTitle =
                document.createElement('p');
                movie.Title;
                resultContainer.appendChild(movieTitle);
            });
        } else {
            resultContainer.textContent = 'No results found';
        }
    }