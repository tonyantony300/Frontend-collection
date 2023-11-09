let progressBlock = document.querySelector(".progress-block");
let projects = document.querySelectorAll(".project");
let rightButton = document.querySelector(".right-button");
let leftButton = document.querySelector(".left-button");
let container = document.querySelector(".canvas-container");

let initIndex = 0;
let temp = 0;

function updateProgress() {
  var elem = document.elementFromPoint(
    window.innerWidth / 2,
    window.innerHeight / 2
  );

  var projectIndex = parseInt(
    elem.id.replace("project", "").replace("-box", "")
  );

  temp = projectIndex;

  progressBlock.style.width = (projectIndex / projects.length) * 100 + "%";

  if (projectIndex === 1) {
    leftButton.disabled = true;
    rightButton.disabled = false;
  } else if (projectIndex === projects.length) {
    rightButton.disabled = true;
    leftButton.disabled = false;
  } else {
    leftButton.disabled = false;
    rightButton.disabled = false;
  }
}

var viewportWidthInPixels = window.innerWidth;

container.style.width = projects.length * 100 + "vw";

function toTheRight() {
  if (temp > initIndex) {
    initIndex = temp;
  } else {
    initIndex++;
  }

  if (initIndex > projects.length) {
    initIndex = projects.length;
  }

  window.scrollTo(initIndex * viewportWidthInPixels, 0);
}

function toTheLeft() {
  if (initIndex === 0) {
    initIndex = temp;
  }

  initIndex--;

  if (initIndex < 0) {
    initIndex = 0;
  }

  window.scrollTo(initIndex * viewportWidthInPixels, 0);
}

window.addEventListener("scroll", updateProgress);

document.querySelector(".right-button").addEventListener("click", toTheRight);

document.querySelector(".left-button").addEventListener("click", toTheLeft);
