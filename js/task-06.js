const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", (event) => {
  console.log(
    event.currentTarget.value.length ===
      Number(event.currentTarget.dataset.length)
  );
  if (
    !(
      event.currentTarget.value.length ===
      Number(event.currentTarget.dataset.length)
    )
  ) {
    event.currentTarget.classList.add("invalid");
  } else {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  }
});
