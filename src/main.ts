let clockElement: HTMLElement | null;

function getClock() {
  if (clockElement) {
    clockElement.innerText = new Date().toLocaleTimeString();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  clockElement = document.querySelector("#clock");

  getClock();

  setInterval(getClock, 1000);
});
