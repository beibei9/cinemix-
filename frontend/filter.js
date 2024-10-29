document.addEventListener("DOMContentLoaded", function () {
    const filterRating = document.getElementById("filter-rating");
    const filterYear = document.getElementById("filter-year");
    const applyFiltersButton = document.getElementById("apply-filters");
    const movieList = document.getElementById("movie-list");
    const noMoviesMessage = document.createElement("div");


    // Load filter settings from local storage
    function loadFilters() {
        const savedRating = localStorage.getItem("filterRating");
        const savedYear = localStorage.getItem("filterYear");

        if (savedRating) filterRating.value = savedRating;
        if (savedYear) filterYear.value = savedYear;
    }

    // Save filter settings to local storage
    function saveFilters() {
        localStorage.setItem("filterRating", filterRating.value);
        localStorage.setItem("filterYear", filterYear.value);
    }

    // Function to filter and display movies
    function applyFilters() {
        const rating = parseInt(filterRating.value) || 0;
        const year = filterYear.value;

        // Filter movies based on the rating and year
        const filteredMovies = movies.filter(movie => {
            const matchesRating = rating === 0 || movie.rating >= rating;
            const matchesYear = !year || movie.year === parseInt(year);
            return matchesRating && matchesYear;
        });

        displayMovies(filteredMovies);
        saveFilters(); // Save settings after applying filters
    }

    // Function to display movies (only shows filtered results)
    function displayMovies(movies) {
        movieList.innerHTML = ""; // Clear current movies
        noMoviesMessage.textContent = ""; // Clear any previous messages
    
        if (movies.length === 0) {
            // No movies found
            noMoviesMessage.textContent = "No movies found that match the selected criteria.";
            noMoviesMessage.classList.add("alert", "alert-warning"); // Add Bootstrap alert classes for styling
            movieList.appendChild(noMoviesMessage);
        } else {
            // Display the filtered movies
            movies.forEach(movie => {
                const movieItem = document.createElement("div");
                movieItem.classList.add("movie-item");
                movieItem.innerHTML = `
                    <h3><a href="${movie.pageUrl}">${movie.title}</a></h3>
                    <p>Rating: ${movie.rating}</p>
                    <p>Year: ${movie.year}</p>
                `;
                movieList.appendChild(movieItem);
            });
        }
    }

    // Example movie data (only filtered results will be shown)
    const movies = [
        { title: "Avatar", rating: 7.8, year: 2009, pageUrl: "fantasy_movie4.html"},
        { title: "Always Be My Maybe", rating: 6.8, year: 2019, pageUrl: "romcom_movie4.html"},
        { title: "How to Lose a Guy in 10 Days", rating: 6.4, year: 2003, pageUrl: "romcom_movie1.html"},
        { title: "10 Things I Hate About You", rating: 7.3, year: 1999, pageUrl: "romcom_movie2.html"},
        { title: "My Best Friend’s Wedding", rating: 6.3, year: 1997, pageUrl: "romcom_movie3.html"},
        { title: "13 Going on 30", rating: 6.2, year: 2004, pageUrl: "romcom_movie5.html"},
        { title: "To All the Boys I've Loved Before", rating: 7.1, year: 2018, pageUrl: "romcom_movie6.html"},
        { title: "The Lord of the Rings: The Fellowship of the Ring", rating: 8.8, year: 2001, pageUrl: "fantasy_movie1.html"},
        { title: "Harry Potter and the Philosopher's Stone", rating: 7.6, year: 2001, pageUrl: "fantasy_movie2.html" },
        { title: "The Chronicles of Narnia", rating: 6.9, year: 2005, pageUrl: "fantasy_movie3.html" },
        { title: "Pan's Labyrinth", rating: 8.2, year: 2006, pageUrl: "fantasy_movie5.html" },
        { title: "The Sorcerer's Apprentice", rating: 6.1, year: 2010, pageUrl: "fantasy_movie6.html" },
        { title: "Se7en", rating: 8.6, year: 1995, pageUrl: "thriller_movie1.html" },
        { title: "The Silence of the Lambs", rating: 8.6, year: 1991, pageUrl: "thriller_movie2.html" },
        { title: "Gone Girl", rating: 8.1, year: 2014, pageUrl: "thriller_movie3.html" },
        { title: "Prisoners", rating: 8.1, year: 2013, pageUrl: "thriller_movie4.html" },
        { title: "Shutter Island", rating: 8.2, year: 2010, pageUrl: "thriller_movie5.html" },
        { title: "Zodiac", rating: 7.7, year: 2007, pageUrl: "thriller_movie6.html" },
    ];

    // Event listener to apply filters
    applyFiltersButton.addEventListener("click", applyFilters);

    // Initial load filters but do not display movies until filter is applied
    loadFilters();
});
