let progressBlock = document.querySelector(".progress-block");

let rightButton = document.querySelector(".right-button");
let leftButton = document.querySelector(".left-button");
// let container = document.querySelector(".canvas-container");
const projectsContainer = document.getElementById("canvas-container");
let projects = [];
let initIndex = 0;
let temp = 0;
progressBlock.style.width = "0%";

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

// // console.log("projects length =>", projects.length);
// // container.style.width = projects.length * 100 + "vw";

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

document.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch("projects/");

  const htmlContent = await response.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  const projectLinks = doc.querySelectorAll("a.icon.icon-directory");

  const projectNames = Array.from(projectLinks)
    .map((link) => link.getAttribute("href"))
    .map((href) => href.replace("/Alpha-swarm", ""))
    .map((href) => href.replace("/projects/", ""));

  const sortedProjectNames = projectNames.slice(1).sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);

    return numA - numB;
  });

  const projectsContainer = document.getElementById("canvas-container");

  sortedProjectNames.forEach((projectName) => {
    const iframe = document.createElement("iframe");
    iframe.className = "project";
    iframe.id = `${projectName}-box`;
    iframe.src = `projects/${projectName}/${projectName}.html`;
    projectsContainer.appendChild(iframe);
  });

  projects = document.querySelectorAll(".project");
  let container = document.querySelector(".canvas-container");
  container.style.width = projects.length * 100 + "vw";
});

window.addEventListener("scroll", updateProgress);

document.querySelector(".right-button").addEventListener("click", toTheRight);

document.querySelector(".left-button").addEventListener("click", toTheLeft);
