const images = document.querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("click", (ev) => {
    if (!document.startViewTransition) {
      updateDOM(ev.target);
      return;
    }

    document.startViewTransition(() => {
      updateDOM(ev.target);
    });
  });
});

function updateDOM(target) {
  const src = target.getAttribute("src");
  const transtionName = target.getAttribute("data-name");

  document.querySelector(
    ".content"
  ).innerHTML = `<img src=${src} width="800" style="view-transition-name: ${transtionName}" />`;

  setTimeout(() => {
    renderAllImages();
  }, 2000);
}
