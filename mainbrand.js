let display = document.getElementById('display');
const btn0 = document.getElementById("1");
const btn1 = document.getElementById("2");
const btn2 = document.getElementById("3");
const btn3 = document.getElementById("4");
const btn4 = document.getElementById("5");
const btn5 = document.getElementById("6");
const btn6 = document.getElementById("7");
const btn7 = document.getElementById("8");
const btn8 = document.getElementById("9");
const btn9 = document.getElementById("10");
const plus = document.getElementById("plus");
const btn00 = document.getElementById("1-2");
const btn01 = document.getElementById("2-2");
const btn02 = document.getElementById("3-2");
const btn03 = document.getElementById("4-2");
const btn04 = document.getElementById("5-2");
const btn05 = document.getElementById("6-2");
const btn06 = document.getElementById("7-2");
const btn07 = document.getElementById("8-2");
const btn08 = document.getElementById("9-2");
const btn09 = document.getElementById("10-2");
const equals = document.getElementById("equals");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divided = document.getElementById("divided");
var num1 = "";
var num2 = "";
var result;
var isPlus;
var isMinus;
var isTimes;
var isDivided;

btn0.addEventListener("click", () => {
  num1 += Number("0");
  console.log(num1);
  display.innerHTML = num1;
});
btn1.addEventListener("click", () => {
  num1 += Number("1");
  console.log(num1);
  display.innerHTML = num1;
});
btn2.addEventListener("click", () => {
  num1 += Number("2");
  console.log(num1);
  display.innerHTML = num1;
});
btn3.addEventListener("click", () => {
  num1 += Number("3");
  console.log(num1);
  display.innerHTML = num1;
});
btn4.addEventListener("click", () => {
  num1 += Number("4");
  console.log(num1);
  display.innerHTML = num1;
});
btn5.addEventListener("click", () => {
  num1 += Number("5");
  console.log(num1);
  display.innerHTML = num1;
});
btn6.addEventListener("click", () => {
  num1 += Number("6");
  console.log(num1);
  display.innerHTML = num1;
});
btn7.addEventListener("click", () => {
  num1 += Number("7");
  console.log(num1);
  display.innerHTML = num1;
});
btn8.addEventListener("click", () => {
  num1 += Number("8");
  console.log(num1);
  display.innerHTML = num1;
});
btn9.addEventListener("click", () => {
  num1 += Number("9");
  display.innerHTML = num1;
});
// #*

function hidefirst() {
  btn0.classList.remove("first");
  btn0.classList.add("second");
  btn1.classList.remove("first");
  btn1.classList.add("second");
  btn2.classList.remove("first");
  btn2.classList.add("second");
  btn3.classList.remove("first");
  btn3.classList.add("second");
  btn4.classList.remove("first");
  btn4.classList.add("second");
  btn5.classList.remove("first");
  btn5.classList.add("second");
  btn6.classList.remove("first");
  btn6.classList.add("second");
  btn7.classList.remove("first");
  btn7.classList.add("second");
  btn8.classList.remove("first");
  btn8.classList.add("second");
  btn9.classList.remove("first");
  btn9.classList.add("second");
}

function showsecond() {
  btn00.classList.remove("second");
  btn00.classList.add("first");
  btn01.classList.remove("second");
  btn01.classList.add("first");
  btn02.classList.remove("second");
  btn02.classList.add("first");
  btn03.classList.remove("second");
  btn03.classList.add("first");
  btn04.classList.remove("second");
  btn04.classList.add("first");
  btn05.classList.remove("second");
  btn05.classList.add("first");
  btn06.classList.remove("second");
  btn06.classList.add("first");
  btn07.classList.remove("second");
  btn07.classList.add("first");
  btn08.classList.remove("second");
  btn08.classList.add("first");
  btn09.classList.remove("second");
  btn09.classList.add("first");
}

btn00.addEventListener("click", () => {
  num2 += Number("0");
  console.log(num2);
  display.innerHTML = num2;
});
btn01.addEventListener("click", () => {
  num2 += Number("1");
  console.log(num2);
  display.innerHTML = num2;
});
btn02.addEventListener("click", () => {
  num2 += Number("2");
  console.log(num2);
  display.innerHTML = num2;
});
btn03.addEventListener("click", () => {
  num2 += Number("3");
  console.log(num2);
  display.innerHTML = num2;
});
btn04.addEventListener("click", () => {
  num2 += Number("4");
  console.log(num2);
  display.innerHTML = num2;
});
btn05.addEventListener("click", () => {
  num2 += Number("5");
  console.log(num2);
  display.innerHTML = num2;
});
btn06.addEventListener("click", () => {
  num2 += Number("6");
  console.log(num2);
  display.innerHTML = num2;
});
btn07.addEventListener("click", () => {
  num2 += Number("7");
  console.log(num2);
  display.innerHTML = num2;
});
btn08.addEventListener("click", () => {
  num2 += Number("8");
  console.log(num2);
  display.innerHTML = num2;
});
btn09.addEventListener("click", () => {
  num2 += Number("9");
  display.innerHTML = num2;
});

minus.addEventListener("click", () => {
  isMinus = 1;
  console.log(isMinus);
  display.innerHTML = "";
  hidefirst();
  showsecond();
});
plus.addEventListener("click", () => {
  isPlus = 1;
  console.log(isPlus);
  display.innerHTML = "";
  hidefirst();
  showsecond();
});
times.addEventListener("click", () => {
  isTimes = 1;
  console.log(isPlus);
  display.innerHTML = "";
  hidefirst();
  showsecond();
});
divided.addEventListener("click", () => {
  isDivided = 1;
  console.log(isPlus);
  display.innerHTML = "";
  hidefirst();
  showsecond();
});
equals.addEventListener("click", () => {
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
  display.innerHTML = result;
});
