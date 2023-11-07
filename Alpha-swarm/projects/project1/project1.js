let button = document.querySelector(".btn");
let fill = document.querySelector(".filler");
let text = document.querySelector(".btn span");

let extensionId = "bhfoljdmecmfjblkbonecndkambhdnmb";

let counting;

let data = "Comprehensive Valuable data";

// button.addEventListener("click", function () {
//   let data = "Comprehensive Valuable data";
//   console.log("Button click");
//   let intervalId = setInterval(update, 20);
//   chrome.runtime.sendMessage(extensionId, { data: data }, function (response) {
//     // Handle the response from the extension
//     console.log(response);
//   });
// });

let load = 0;
let intervalId;

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function update() {
  if (counting) {
    load++;
    if (load === 99) {
      console.log("Initiating connection");
      // chrome.runtime.sendMessage(
      //   extensionId,
      //   { data: data },
      //   function (response) {
      //     console.log("response from extsn =>", response);
      //   }
      // );

      var port = chrome.runtime.connect(extensionId);
      port.postMessage("Pinging from webApp");

      // port.onMessage.addListener(function (msg) {
      //   // See other examples for sample onMessage handlers.
      //   console.log("web page received: ", msg);
      // });
    } else if (load > 99) {
      clearInterval(intervalId);
      load = 100;
    }
    button.style.backgroundColor = `rgba(130, 140, 174, ${scale(
      load,
      0,
      100,
      1,
      0.5
    )})`;
    fill.style.width = `${scale(load, 0, 100, 0, 100)}%`;
  }
}

button.addEventListener("mousedown", function () {
  counting = true;
  intervalId = setInterval(update, 20);
});

button.addEventListener("mouseup", function () {
  counting = false;
  fill.style.width = `0`;
  load = 0;
});
