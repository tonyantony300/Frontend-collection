let hourEl = document.querySelector(".hour");
let minuteEl = document.querySelector(".minute");
let secondEl = document.querySelector(".second");
let timeEl = document.querySelector(".time");
let toggleEl = document.querySelector(".toggle");
let dateEl = document.querySelector(".date");
let circle = document.querySelector(".circle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

console.log(hourEl, minuteEl, secondEl);

toggleEl.addEventListener("click", () => {
  let html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    toggleEl.innerText = "Light Mode";
  } else {
    html.classList.add("dark");
    toggleEl.innerText = "Dark Mode";
  }
});

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function setTime() {
  let time = new Date();
  let hours = time.getHours();
  let hoursForClock = hours % 12;
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let month = time.getMonth();
  let day = time.getDay();
  let dateNum = time.getDate();
  let ampm = hours > 12 ? "PM" : "AM";

  console.log(hoursForClock, minutes, seconds, month, day, dateNum);

  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerText = `${hoursForClock}: ${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${dateNum}</span>`;
}

setInterval(() => {
  setTime();
}, 1000);
