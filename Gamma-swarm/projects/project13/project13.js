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

replay.addEventListener("click", () => {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");
  nums[0].classList.add("goIn");
  runAnimation();
});
