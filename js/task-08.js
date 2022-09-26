const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;
  if (email.value === "" || password.value === "") {
    return alert("Заполните пустые поля!");
  }
  console.log({ email: email.value, password: password.value });
  formEl.reset();
}
