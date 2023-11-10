let sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

function stopSounds() {
  sounds.forEach((sound) => {
    let song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}

sounds.forEach((sound) => {
  let button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = sound;

  button.addEventListener("click", () => {
    stopSounds();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(button);
});
