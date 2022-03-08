const form = document.getElementById("form");

const input = document.querySelector(".input");

const messageError = document.querySelector(".error-message");

const button = document.querySelector(".button");

const regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

input.addEventListener("change", (e) => {
  if (regEx.test(e.target.value) == true) {
    input.classList.remove("input-error-icon");
    messageError.classList.remove("show-message");
  } else {
    input.classList.add("input-error-icon", "show-message");
    messageError.classList.add("show-message");
  }
});

button.addEventListener("click", () => {
  if (regEx.test(input.value) == true) {
    form.submit();
  }
});
