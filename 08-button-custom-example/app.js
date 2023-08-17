const $button = document.querySelector("#button");

let isDisplayingText = false;

$button.addEventListener("click", function (e) {
  if (!document.startViewTransition) {
    updateDOM();
    return;
  }

  document.startViewTransition(() => {
    updateDOM();
  });
});

function updateDOM() {
  const content = document.querySelector(".content");
  if (isDisplayingText) {
    content.innerHTML = "";
    isDisplayingText = false;
  } else {
    content.innerHTML = "<h1>Nuevo contenido!</h1>";
    isDisplayingText = true;
  }
}
