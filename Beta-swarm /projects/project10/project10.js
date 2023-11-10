let bg = document.querySelector(".bg");

let percentage = document.querySelector(".loading-text");

let load = 0;

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function update() {
  load++;
  if (load > 99) {
    clearInterval(intervalId);
  }
  percentage.innerHTML = `${load}%`;
  percentage.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
}

let intervalId = setInterval(update, 30);
