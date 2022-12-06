const contain = document.querySelector(".container");

for (let i = 0; i < 100; i++) {
  const createB = document.createElement("div");
  createB.classList.add("blocks");
  contain.appendChild(createB);
}

function generate() {
  anime({
    targets: ".blocks",
    translateX: function () {
      return anime.random(-700, 700);
    },
    translateY: function () {
      return anime.random(-700, 700);
    },
    scale: function () {
      return anime.random(1, 6);
    },
  });
  //   window.requestAnimationFrame(generate);
  // step 2, remaining 4
}
