const words = "View Transitions API".toUpperCase().split(" ");
const rate = 1000;
const $message = document.querySelector("#container h1");
let index = 0;

setInterval(() => {
  $message.textContent = words[index++];
  if (index >= words.length) {
    index = 0;
  }
}, rate);
