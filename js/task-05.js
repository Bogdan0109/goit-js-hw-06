const input = document.querySelector("input#name-input");
const span = document.querySelector("span#name-output");

input.addEventListener("input", (event) => {
  return event.currentTarget.value == ""
    ? (span.textContent = "Anonymous")
    : (span.textContent = event.currentTarget.value);
});
