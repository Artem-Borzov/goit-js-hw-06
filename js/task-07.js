const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = inputEl.value + "px";
inputEl.addEventListener("input", fontChange);

function fontChange(event) {
  {
    console.log(textEl.style.fontSize);
    console.log(event.currentTarget.value);
    textEl.style.fontSize = event.currentTarget.value + "px";
  }
}
