const words = "View Transitions API".toUpperCase().split(" ");
const rate = 1000;

let index = 0;

setInterval(() => {
  document.startViewTransition(() => {
    container.textContent = words[index++];
    if (index >= words.length) {
      index = 0;
    }
  });
}, rate);
