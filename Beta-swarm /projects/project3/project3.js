let circles = document.querySelectorAll(".circle");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let currentIndex = 1;

next.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > circles.length) {
    currentIndex = circles.length;
  }
  updateDom();
});

prev.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 1) {
    currentIndex = 1;
  }
  updateDom();
});

function updateDom() {
  circles.forEach((circle, index) => {
    if (index < currentIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  let active = document.querySelectorAll(".active");
  let progess = document.getElementById("progress");

  progess.style.width =
    ((active.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentIndex === 1) {
    prev.disabled = true;
  } else if (currentIndex === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
