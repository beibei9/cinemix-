const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');

// Load movies from API
async function loadMovies(searchTerm) {
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=9aa773e0`;
    const res = await fetch(URL);
    const data = await res.json();
    if (data.Response == "True") {
        displayMovieList(data.Search);
        localStorage.setItem('searchResults', JSON.stringify(data.Search)); // Save search results
    }
}

function findMovies() {
    let searchTerm = (movieSearchBox.value).trim();
    if (searchTerm.length > 0) {
        searchList.classList.remove('hide-search-list');
        loadMovies(searchTerm);
        localStorage.setItem('lastSearchTerm', searchTerm); // Save the search term
    } else {
        searchList.classList.add('hide-search-list');
    }
}

function displayMovieList(movies) {
    searchList.innerHTML = "";
    for (let idx = 0; idx < movies.length; idx++) {
        let movieListItem = document.createElement('div');
        movieListItem.dataset.id = movies[idx].imdbID; // Setting movie id in data-id
        movieListItem.classList.add('search-list-item');
        let moviePoster = (movies[idx].Poster != "N/A") ? movies[idx].Poster : "image_not_found.png";

        movieListItem.innerHTML = `
            <div class="search-item-thumbnail">
                <img src="${moviePoster}">
            </div>
            <div class="search-item-info">
                <h3>${movies[idx].Title}</h3>
                <p>${movies[idx].Year}</p>
            </div>
        `;
        searchList.appendChild(movieListItem);
    }
    loadMovieDetails();
}

function loadMovieDetails() {
    const searchListMovies = searchList.querySelectorAll('.search-list-item');
    searchListMovies.forEach(movie => {
        movie.addEventListener('click', async () => {
            searchList.classList.add('hide-search-list');
            movieSearchBox.value = "";
            const result = await fetch(`https://www.omdbapi.com/?i=${movie.dataset.id}&apikey=fc1fef96`);
            const movieDetails = await result.json();
            displayMovieDetails(movieDetails);
        });
    });
}
function loadSavedMovieDetails() {
    const savedDetails = localStorage.getItem('movieDetails');
    if (savedDetails) {
        const details = JSON.parse(savedDetails);
        displayMovieDetails(details); // Display saved details if they exist
    }
}

function displayMovieDetails(details) {
    resultGrid.innerHTML = `
    <div class="movie-poster">
        <img src="${(details.Poster !== "N/A") ? details.Poster : "image_not_found.png"}" alt="movie poster">
    </div>
    <div class="movie-info">
        <h3 class="movie-title-search">${details.Title}</h3>
        <ul class="movie-misc-info">
            <li class="year">Year: ${details.Year}</li>
            <li class="rated">Ratings: ${details.Rated}</li>
            <li class="released">Released: ${details.Released}</li>
        </ul>
        <p class="genre"><b>Genre:</b> ${details.Genre}</p>
        <p class="writer"><b>Writer:</b> ${details.Writer}</p>
        <p class="actors"><b>Actors:</b> ${details.Actors}</p>
        <p class="plot"><b>Plot:</b> ${details.Plot}</p>
        <p class="language"><b>Language:</b> ${details.Language}</p>
        <p class="awards"><b><i class="fas fa-award"></i></b> ${details.Awards}</p>
    </div>
    `;
    
    // Save selected movie details in local storage
    localStorage.setItem('movieDetails', JSON.stringify(details));
}

// Load saved search term and results on page load
document.addEventListener('DOMContentLoaded', () => {
    const lastSearchTerm = localStorage.getItem('lastSearchTerm');
    const savedSearchResults = JSON.parse(localStorage.getItem('searchResults'));

    if (lastSearchTerm) {
        movieSearchBox.value = lastSearchTerm; // Restore last search term
    }
    if (savedSearchResults) {
        displayMovieList(savedSearchResults); // Display saved search results
    }
});

window.addEventListener('DOMContentLoaded', () => {
    loadSavedMovieDetails();
});

window.addEventListener('click', (event) => {
    if (event.target.className != "form-control") {
        searchList.classList.add('hide-search-list');
    }
});
