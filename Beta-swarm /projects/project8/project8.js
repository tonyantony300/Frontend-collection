let cups = document.querySelectorAll(".cup-small");
let liters = document.getElementById("liters");
let percentage = document.getElementById("percentage");
let remaining = document.getElementById("remained");

updateBigCup();

function handleFilling(idx) {
  if (
    cups[idx].classList?.contains("full") &&
    !cups[idx].nextElementSibling?.classList?.contains("full")
  ) {
    idx--;
  }
  cups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList?.add("full");
    } else {
      cup.classList?.remove("full");
    }
  });

  updateBigCup();
}

cups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    handleFilling(idx);
  });
});

function updateBigCup() {
  let filledCups = document.querySelectorAll(".cup-small.full");
  percentage.style.height = `${(filledCups.length / cups.length) * 330}px`;

  if (filledCups.length === 8) {
    remaining.style.visibility = "hidden";
    remaining.style.height = 0;
  } else if (filledCups.length === 0) {
    percentage.style.visibility = "hidden";
  } else {
    remaining.style.visibility = "visible";
    percentage.style.visibility = "visible";
    percentage.innerText = `${(filledCups.length * 250) / 1000}L`;
    liters.innerText = `${2 - (filledCups.length * 250) / 1000}L`;
  }
}
