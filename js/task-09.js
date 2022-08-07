function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const buttonChangeColor = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");

buttonChangeColor.addEventListener("click", onHandleClick);

function onHandleClick(event) {
  let changeBackgroundColor = getRandomHexColor();
  spanColor.textContent = `${changeBackgroundColor}`;
  body.style.backgroundColor = `${changeBackgroundColor}`;
  console.log((body.style.backgroundColor = `${changeBackgroundColor}`));
}
