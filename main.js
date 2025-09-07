const counterValue = document.getElementById("counter-value");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  counterValue.innerText = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  counterValue.innerText = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterValue.innerText = count;
});
