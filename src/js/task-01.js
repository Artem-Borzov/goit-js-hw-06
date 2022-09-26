const allLiRef = document.querySelectorAll(".item");
const categoriesCount = allLiRef.length;
console.log("Number of categories:", categoriesCount);

const h2list = [...allLiRef].map((category) => {
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", category.querySelectorAll("li").length);
});
