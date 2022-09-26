const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const liEls = ingredients.map((ingredient) => {
  const liElsMapped = document.createElement("li");
  liElsMapped.classList.add("item");
  liElsMapped.textContent = ingredient;
  return liElsMapped;
});

const ulEl = document.querySelector("#ingredients");
ulEl.append(...liEls);
