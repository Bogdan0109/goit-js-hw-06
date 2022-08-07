const form = document.querySelector("form.login-form");
const emailInput = document.querySelector(`input[name="email"]`);
const passwordInput = document.querySelector(`input[name="password"]`);

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

const users = [];
let user = {};

function handleInput(event) {
  event.preventDefault();
  user[event.target.name] = event.target.value;
}

function handleSubmit(event) {
  event.preventDefault();

  if (emailInput.value === "" || passwordInput.value === "") {
    return alert("Все поля должны быть заполнены");
  }
  // if (event.target.value == "") {
  // }
  users.push(user);

  user = {};
  event.target.reset();
  users.map((user) =>
    console.log(`Email: ${user.email}
Password: ${user.password}`)
  );
}
