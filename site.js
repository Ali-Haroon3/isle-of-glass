"use strict";
const screens = {
  play: {
    file: "play.png",
    alt: "Draw connected sea-glass pieces that follow the puzzle’s size rule.",
    caption: "Draw a piece or cut a seam. Every valid solution is welcome.",
  },
  hints: {
    file: "hints.png",
    alt: "The hint panel checks progress and offers one possible piece.",
    caption: "Find a possible next piece, without changing your work.",
  },
  shapes: {
    file: "shapes.png",
    alt: "The shape bank displays silhouettes that fit the current area rule.",
    caption: "Turn an idea around. Explore shapes that fit the rule.",
  },
};
for (const button of document.querySelectorAll("[data-screen]")) {
  button.addEventListener("click", () => {
    const screen = screens[button.dataset.screen];
    if (!screen) return;
    const image = document.getElementById("gallery-image");
    image.src = `assets/${screen.file}`;
    image.alt = screen.alt;
    document.getElementById("gallery-caption").textContent = screen.caption;
    for (const item of document.querySelectorAll("[data-screen]")) {
      const selected = item === button;
      item.classList.toggle("selected", selected);
      item.setAttribute("aria-pressed", String(selected));
    }
  });
}
