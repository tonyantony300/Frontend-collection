let textarea = document.getElementById("textarea");
let tagsEl = document.querySelector(".tags");
let uniqueTags = [];

function addTags(input) {
  uniqueTags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";
  uniqueTags.forEach((tag) => {
    const newTag = document.createElement("span");
    newTag.classList.add("tag");
    newTag.innerText = tag;
    tagsEl.appendChild(newTag);
  });
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}
function removeHighlight(tag) {
  tag.classList.remove("highlight");
}

function randomlySelectTag() {
  let times = 30;
  let randomTag;

  let allTags = document.querySelectorAll(".tag");
  let interval = setInterval(() => {
    randomTag = allTags[Math.floor(Math.random() * allTags.length)];
    highlightTag(randomTag);
    setTimeout(() => {
      removeHighlight(randomTag);
    }, 100);
  }, 300);

  setTimeout(() => {
    clearInterval(interval);
    highlightTag(allTags[Math.floor(Math.random() * allTags.length)]);
  }, times * 100);
}

textarea.addEventListener("keyup", (e) => {
  addTags(e.target.value);

  //On enter
  if (e.key === "Enter") {
    textarea.value = "";
    randomlySelectTag();
  }
});
