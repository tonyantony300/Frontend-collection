let container = document.querySelector(".search");
let button = document.querySelector(".btn");
let input = document.querySelector(".input");

button.addEventListener("click", () => {
  container.classList.toggle("active");
  input.focus();
});
