const display = document.getElementById("result");
const buttons = document.querySelectorAll("button");
let num1 = "";
let num2 = "";
let operator;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();
    if (!isNaN(value)) {
      if (!operator) { 
        num1 += value;
        display.innerHTML = num1;
      } else {
        num2 += value;
        display.innerHTML = num2;
      }
    } else if (value === "+" || value === "-" || value === "*" || value === "/") {
      operator = value;
      display.innerHTML = "";
    }
  });
});

document.getElementById("equals").addEventListener("click", () => {
  let result;
  switch (operator) {
    case "-":
      result = Number(num1) - Number(num2);
      break;
    case "+":
      result = Number(num1) + Number(num2);
      break;
    case "*":
      result = Number(num1) * Number(num2);
      break;
    case "/":
      result = Number(num1) / Number(num2);
      break;
    default:
      result = "No hay";
      break;
  }
  display.innerHTML = result;
});
