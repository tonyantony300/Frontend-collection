let left = document.getElementById("left");
let right = document.getElementById("right");
let body = document.body;

let slides = document.querySelectorAll(".slide");

let mainIndex = 0;

left.addEventListener("click", () => {
  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      slide.classList.remove("active");
      if (index === 0) {
        mainIndex = slides.length - 1;
      } else {
        mainIndex = index - 1;
      }
    }
  });
  updateImage(mainIndex);
});

right.addEventListener("click", () => {
  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      slide.classList.remove("active");
      if (index === slides.length - 1) {
        mainIndex = 0;
      } else {
        mainIndex = index + 1;
      }
    }
  });
  updateImage(mainIndex);
});

function updateImage(mainIndex) {
  slides[mainIndex].classList.add("active");
  body.style.backgroundImage = slides[mainIndex].style.backgroundImage;
}
