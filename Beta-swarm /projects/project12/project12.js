let boxes = document.querySelectorAll(".box");
let triggerBottom = (window.innerHeight / 5) * 3;

update();

function update() {
  boxes.forEach((item) => {
    let boxTop = item.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", update);
