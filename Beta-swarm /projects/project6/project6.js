let button = document.getElementById("toggle");
let nav = document.getElementById("nav");

button.addEventListener("click", () => {
  console.log("button cliiecked");
  nav.classList.toggle("active");
});
