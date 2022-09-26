function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const buttonElText = document.querySelector(".color");

buttonEl.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  const generatedColor = getRandomHexColor();
  bodyEl.style.backgroundColor = generatedColor;
  buttonElText.textContent = generatedColor;
}
