const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
var num1 = "";
var num2 = "";
let operator;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();
    if (!isNan(value)) {
      if (!operator) {
        num1 += value;
        display.innerHTML = num1;
      } else {
        num2 += value;
        display.innerHTML;
      }
    } else if (value === "+" || value === "-" || value === "*" || value === "/")
      operator = value;
    display.innerHTML = "";
  });
});

document.getElementById('equals').addEventListener('click', ()=> {
    let resultado
    switch (operator) {
        case "+":
            resultado = num1 + num2;
            display.innerHTML = resultado;
            break
        case "-":
            resultado = num1 - num2;
            display.innerHTML = resultado;
            break
        case "*":
            resultado = num1 * num2;
            display.innerHTML = resultado;
            break
        case "/":
            resultado = num1 / num2;
            display.innerHTML = resultado;
            break
    }   

})