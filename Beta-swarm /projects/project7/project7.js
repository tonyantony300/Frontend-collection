let counts = document.querySelectorAll(".counter");

counts.forEach((count) => {
  count.innerText = 0;
  let limit = +count.getAttribute("data-target");

  let starter = limit / 200;
  let step = 0;

  // count.innerText = starter;

  const update = () => {
    if (step < limit) {
      step = step + starter;
      count.innerText = step;
      setTimeout(update, 10);
    }
  };

  update();
});
