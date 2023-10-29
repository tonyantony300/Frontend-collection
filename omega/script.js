let progressBlock = document.querySelector(".progress-block");

let rightButton = document.querySelector(".right-button");
let leftButton = document.querySelector(".left-button");

function updateProgress() {
  var elem = document.elementFromPoint(
    window.innerWidth / 2,
    window.innerHeight / 2
  );

  var projectIndex = parseInt(
    elem.id.replace("project", "").replace("-box", "")
  );
  progressBlock.style.width = projectIndex * 20 + "%";
}

function toTheRight() {
  console.log("Right clicked");
}

function toTheLeft() {
  console.log("Left clicked");
}

window.addEventListener("scroll", updateProgress);

document.querySelector(".right-button").addEventListener("click", toTheRight);

document.querySelector(".left-button").addEventListener("click", toTheLeft);
