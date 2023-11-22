let cups = document.querySelectorAll(".cup-small");
let liters = document.getElementById("liters");
let percentage = document.getElementById("percentage");
let remaining = document.getElementById("remained");

function handleFilling(idx) {
  cups.forEach((cup, idx2) => {
    if (
      cups[idx].classList?.contains("full") &&
      !cups[idx].nextElementSibling.classList?.contains("full")
    ) {
      idx--;
    }
    if (idx2 <= idx) {
      cup.classList?.add("full");
    } else {
      cup.classList?.remove("full");
    }
  });
}

cups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    handleFilling(idx);
  });
});
