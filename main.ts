let mydisplay: HTMLElement = document.getElementById("display") as HTMLElement;
var num1 : string;
var num2 : string;
var result;
var isPlus;
var isMinus;
var isTimes;
var isDivided;
var isDone;
let value;

function printval(button:any) {
  value = button.value;
  if (isDone == 1) {
    num2 += Number(value);
    console.log(num2);
    mydisplay.innerHTML = num2;
  } else {
    num1 += Number(value);
    console.log(num1);
    mydisplay.innerHTML = num1;
  }
}

function equalss() {
  switch (true) {
    case isMinus === 1:
      result = Number(num1) - Number(num2);
      break;
    case isPlus === 1:
      result = Number(num1) + Number(num2);
      break;
    case isTimes === 1:
      result = Number(num1) * Number(num2);
      break;
    case isDivided === 1:
      result = Number(num1) / Number(num2);
      break;
    default:
      result = "No hay";
      break;
  }

  mydisplay.innerHTML = result;
  resetvar();
  num1 = result;
}

function pluss() {
  isPlus = 1;
  console.log("Sumando");
  mydisplay.innerHTML = "";
  isDone = 1;
  if(num1 && num2) {
    equalss()
  }
}

function minuss() {
  isMinus = 1;
  console.log("Restando");
  mydisplay.innerHTML = "";
  isDone = 1;
  if(num1 && num2) {
    equalss()
  }
}

function timess() {
  isTimes = 1;
  console.log("Multiplicando");
  mydisplay.innerHTML = "";
  isDone = 1;
  if(num1 && num2) {
    equalss()
  }
}

function divide() {
  isDivided = 1;
  console.log("Dividiendo");
  mydisplay.innerHTML = "";
  isDone = 1;
  if(num1 && num2) {
    equalss()
  }
}

function clearr() {
  resetvar();
  console.info("HAS LIMPIADO AMBOS NUMEROS");
  mydisplay.innerHTML = "";
}

function resetvar() {
  isDone = 0;
  value = 0;
  isTimes = 0;
  isDivided = 0;
  isMinus = 0;
  isPlus = 0;
  num1 = "";
  num2 = "";
}