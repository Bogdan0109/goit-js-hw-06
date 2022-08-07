const input = document.querySelector("input#validation-input");

input.addEventListener("input", (event) => {
  if (
    event.currentTarget.value.length !== +event.currentTarget.dataset.length
  ) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
});
