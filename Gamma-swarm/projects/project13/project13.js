const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.getElementById("replay");

runAnimation();

function runAnimation() {
  nums.forEach((number, index) => {
    number.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn") {
        number.classList.remove("in");
        number.classList.add("out");
      } else if (e.animationName === "goOut" && number.nextElementSibling) {
        number.classList.remove("out");
        nums[index + 1].classList.add("in");
      } else if (!number.nextElementSibling) {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

function resetDOM() {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");
  nums.forEach((number) => {
    number.classList.value = "";
  });
  nums[0].classList.add("in");
}

replay.addEventListener("click", () => {
  resetDOM();
  runAnimation();
});
