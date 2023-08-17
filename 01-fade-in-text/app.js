const words = "View Transitions API".toUpperCase().split(" ");
const rate = 1000;
const $message = document.querySelector("#container h1");
const $container = document.querySelector("#container");
let index = 0;

setInterval(() => {
  const $newElement = document.createElement("h1");
  $newElement.textContent = words[index++];
  $newElement.classList.add("fade-in");
  $newElement.addEventListener("animationend", function () {
    this.classList.remove("fade-in");
  });

  $container.prepend($newElement);

  if (index >= words.length) {
    index = 0;
  }
}, rate);
