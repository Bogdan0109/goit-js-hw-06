const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),

  numberOfElements: [],
  objectOfElement: {},
  arrayNumberOfDiv: [],

  div: document.querySelector("div#boxes"),
};

refs.input.addEventListener("input", onHandlerInput);
refs.createBtn.addEventListener("click", onHandlerCreateBtn);
refs.destroyBtn.addEventListener("click", onHandlerDestroyBtn);

function onHandlerInput(event) {
  event.preventDefault();

  refs.objectOfElement[event.target.type] = event.target.value;
  refs.arrayNumberOfDiv.push(refs.objectOfElement.number);
}

function onHandlerCreateBtn(event) {
  event.preventDefault();

  if (refs.input.value === "") {
    return alert("Все поля должны быть заполнены");
  }

  refs.numberOfElements.push(refs.objectOfElement);
  refs.objectOfElement = {};
  refs.input.value = "";

  createBoxes(refs.arrayNumberOfDiv);
  refs.arrayNumberOfDiv.length = 0;

  console.log("Кнопка СОЗДАТЬ: ", refs.numberOfElements);
}

function onHandlerDestroyBtn(event) {
  event.preventDefault();

  refs.numberOfElements.length = 0;
  refs.arrayNumberOfDiv.length = 0;
  refs.input.value = "";

  destroyBoxes();
  console.log("Кнопка ОЧИСТИТЬ: ", refs.numberOfElements);
}

function createBoxes(amount) {
  let padding = 20;
  amount.forEach((el) => {
    const div = document.createElement("div");
    padding += 10;
    div.style.padding = `${padding}px`;

    div.style.backgroundColor = `${getRandomHexColor()}`;

    refs.div.append(div);

    div.textContent = amount;
    div.textContent = "";
  });
}

function destroyBoxes() {
  refs.div.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
