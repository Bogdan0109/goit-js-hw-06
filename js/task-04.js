const counterValue = {
  value: 0,

  decrement() {
    this.value -= 1;
  },

  increment() {
    this.value += 1;
  },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueBtn = document.querySelector("span#value");

decrementBtn.addEventListener("click", function () {
  counterValue.decrement();
  valueBtn.textContent = counterValue.value;
});

incrementBtn.addEventListener("click", function () {
  counterValue.increment();
  valueBtn.textContent = counterValue.value;
});
