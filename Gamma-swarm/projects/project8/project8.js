const imageContainer = document.querySelector(".loveMe");
const count = document.getElementById("times");
let clickTime = 0;
let counter = 0;

function createIcon(e) {
  const loveSign = document.createElement("i");
  loveSign.classList.add("fas");
  loveSign.classList.add("fa-heart");
  loveSign.style.top = `${e.offsetY}px`;
  loveSign.style.left = `${e.offsetX}px`;
  imageContainer.appendChild(loveSign);
  setTimeout(() => {
    loveSign.remove();
  }, 1000);
}

imageContainer.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createIcon(e);
      counter++;
      count.innerHTML = counter;
    }
    clickTime = 0;
  }
});
