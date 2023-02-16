const movieName = document.getElementById("movie-name");
const btn = document.getElementById("btn");
const movie = document.getElementById("movie");

function fetchMovie() {
  const nameOfMovie = movieName.value;
  const key = "b186333";
  if (movieName.length <= 0) {
    movie.innerHTML = `<h2 class="error">Please, enter a valid movie</h2>`;
  } else {
    fetch(`http://www.omdbapi.com/?t=${nameOfMovie}&apikey=${key}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response == "True") {
          movie.innerHTML = `<div class="movie-info">
                <img src=${data.Poster} class="poster" >
                <div class="rating">
                    <h2>${data.imdbRating}</h2>
                </div>
                <div class="title-plot">
                <h2>${data.Title}</h2>
                <p>${data.Plot}</p>
                </div>
                <div class="info-list">
                    <ul>
                        
                        <li>Release: ${data.Released}</li>
                        <li>Type: ${data.Type}</li>
                        <li>Writer: ${data.Writer}</li>
                    </ul>
                </div>
            </div>
            `;
        } else {
          movie.innerHTML = `<h2 class="error">The movie does not exist</h2>`;
        }
      })
      .catch(() => {
        movie.innerHTML = `<h2 class="error">An error has occured</h2>`;
      });
  }
}
btn.addEventListener("click", fetchMovie);
window.addEventListener("load", fetchMovie);
