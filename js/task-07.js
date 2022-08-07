const input = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");
input.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);
  span.style.fontSize = `${event.currentTarget.valueAsNumber}px`;
});
