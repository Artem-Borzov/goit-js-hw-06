let counterValue = 0;
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

decrement.addEventListener("click", () => {
  counterValue -= 1;
  console.log(counterValue);
  counter.textContent = counterValue;
});
increment.addEventListener("click", () => {
  counterValue += 1;
  console.log(counterValue);
  counter.textContent = counterValue;
});
