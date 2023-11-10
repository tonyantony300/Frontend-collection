let button = document.querySelector(".btn");
let joke = document.querySelector(".joke");

const config = {
  headers: {
    Accept: "application/json",
  },
};

function fetchJoke() {
  fetch("https://icanhazdadjoke.com", config)
    .then((data) => data.json())
    .then((data) => (joke.innerText = data.joke));
}

fetchJoke();

button.addEventListener("click", fetchJoke);
