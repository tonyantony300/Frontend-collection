const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f85629546848256ca6bac7a75b7736a0&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=f85629546848256ca6bac7a75b7736a0&query="';

let form = document.getElementById("form");
let search = document.getElementById("search");
let main = document.getElementById("main");

function getRatingColor(average) {
  if (average >= 7) {
    return "green";
  } else if (average >= 6) {
    return "orange";
  } else {
    return "red";
  }
}

function displayItems(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    let { title, poster_path, overview, vote_average } = movie;
    console.log(title, poster_path, overview, vote_average);
    let movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getRatingColor(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
        <h3>Overview</h3>
        ${overview}
    </div>`;

    main.append(movieEl);
  });
}

async function getMovies(url) {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.results);
  displayItems(data.results);
  //Insert into dom
}

getMovies(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let term = search.value;
  if (term && term !== "") {
    getMovies(SEARCH_URL + term);
    search.value = "";
  } else {
    window.location.reload();
  }
});
