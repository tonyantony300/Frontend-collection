let header = document.getElementById("header");
let title = document.getElementById("title");
let excerpt = document.getElementById("excerpt");
let profileImg = document.getElementById("profile_img");
let authorName = document.getElementById("name");
let date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_texts = document.querySelectorAll(".animated-bg-text");

function getData() {
  header.innerHTML =
    '<img src="https://source.unsplash.com/zqtpm5m2fFc" alt="Placeholder">';
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, perspiciatis.";
  profileImg.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="author headshot">';
  authorName.innerHTML = "Jhon Doe";
  date.innerHTML = "Oct 08, 2023";
  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}

setTimeout(getData, 2000);
