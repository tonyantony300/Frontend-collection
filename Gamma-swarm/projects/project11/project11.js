const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 500;

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(SQUARE) {
  const color = getRandomColor();
  SQUARE.style.backgroundColor = color;
  SQUARE.style.boxShadow = `0px 0px 2px ${color}, 0px 0px 10px ${color}`;
}

function removeColor(SQUARE) {
  SQUARE.style.backgroundColor = "#1d1d1d";
  SQUARE.style.boxShadow = `0px 0px 2px #000`;
}

for (let i = 0; i < SQUARES; i++) {
  const SQUARE = document.createElement("div");
  SQUARE.classList.add("square");
  SQUARE.addEventListener("mouseover", () => {
    setColor(SQUARE);
  });
  SQUARE.addEventListener("mouseout", () => {
    removeColor(SQUARE);
  });
  container.appendChild(SQUARE);
}
