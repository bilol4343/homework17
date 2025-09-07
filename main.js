const num1El = document.getElementById("num1")
const num2El = document.getElementById("num2")
const operatorEl = document.getElementById("operator")
const resultBox = document.getElementById("resultBox")
const calculateBtn = document.getElementById("calculate")
const resetBtn = document.getElementById("reset")

calculateBtn.addEventListener("click", function() {
  const num1 = parseFloat(num1El.value);
  const num2 = parseFloat(num2El.value);
  const operator = operatorEl.value;
  let result = "";

  if (isNaN(num1) || isNaN(num2)) {
    result = " Ikkala sonni ham kiriting!";
  } else {
    switch (operator) {
      case "add":
        result = num1 + num2;
        break;
      case "minus":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        result = num2 !== 0 ? (num1 / num2) : " Nolga bolib bolmaydi!";
        break;
      default:
        result = " Operator tanlanmadi!";
    }
  }
  resultBox.innerText = "Result: " + result;
});

resetBtn.addEventListener("click", function() {
  num1El.value = "";
  num2El.value = "";
  operatorEl.value = "";
  resultBox.innerText = "Result:";
});