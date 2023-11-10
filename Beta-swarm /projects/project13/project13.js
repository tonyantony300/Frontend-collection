let left = document.querySelector(".left");
let right = document.querySelector(".right");
let container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  container.classList.remove("show-right");
  container.classList.add("show-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.remove("show-left");
  container.classList.add("show-right");
});
