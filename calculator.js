// strat vribals
const btnNum = document.querySelectorAll(".btn-num");
const btnSymb = document.querySelectorAll(".btn-symb");
const result = document.querySelector(".result");
const equalBtn = document.querySelector(".equalBtn");
const btnDel = document.querySelector(".btn-del");
const reset = document.querySelector(".reset");
const laBel = document.querySelector(".header .label");
var text = document.querySelectorAll(".text");
var body = document.body,
  manitor = document.querySelector(".manitor"),
  keybord = document.querySelector(".btns"),
  reserBtn = document.querySelector(".reset")
;
let counterNumber = "0";
let prevNumber = "";
let opretion = null;
// start mang Number
for (let i = 0; i < btnNum.length; i++) {
  btnNum[i].addEventListener("click", () => {
    if (counterNumber === "0" && counterNumber !== ".") {
      counterNumber = btnNum[i].textContent;
    } else {
      counterNumber += btnNum[i].textContent;
    }
    result.textContent = counterNumber;
  });
}
// start mang Button counter
for (let i = 0; i < btnSymb.length; i++) {
  btnSymb[i].addEventListener("click", () => {
    if (counterNumber !== "") {
      if (prevNumber !== "" && opretion) {
        prevNumber = calculate(prevNumber, counterNumber, opretion);
      } else {
        prevNumber = counterNumber;
      }
      counterNumber = "";
      opretion = btnSymb[i].textContent;
      result.textContent = prevNumber;
    }
  });
}
// start counter
equalBtn.addEventListener("click", () => {
  if (counterNumber !== "" && prevNumber !== "" && opretion) {
    counterNumber = calculate(prevNumber, counterNumber, opretion);
    prevNumber = "";
    opretion = null;
    result.textContent = counterNumber;
  }
});

// start Delet button
btnDel.addEventListener("click", () => {
  if (counterNumber.length > 1) {
    counterNumber = counterNumber.slice(0, -1);
  } else {
    counterNumber = '0';
  }
  result.textContent = counterNumber;
});

reset.addEventListener("click", () => {
  if (counterNumber !== "0") {
    counterNumber = "";
  }
  result.textContent = 0;
});

// strat calculate
const calculate = (num1, num2, opretion) => {
  const a = parseFloat(num1);
  const b = parseFloat(num2);
  switch (opretion) {
    case "+":
      return (a + b).toString();
    case "-":
      return (a - b).toString();
    case "x":
      return (a * b).toString();
    case "/":
      return b !== 0 ? (a / b).toString() : console.log("no");
    default:
      return "";
  }
};

// start Theme colors function
function theme(
  classBody,
  classManitor,
  classKeybord,
  classReset,
  classEqualBtn,
  classText,
  classBtnNum
) {
  body.classList.add(classBody);
  manitor.classList.add(classManitor);
  keybord.classList.add(classKeybord);
  reserBtn.classList.add(classReset);
  btnDel.classList.add(classReset);
  equalBtn.classList.add(classEqualBtn);
  for (let i = 0; i < btnNum.length; i++) {
    btnNum[i].classList.add(classBtnNum);
  }
  for (let i = 0; i < text.length; i++) {
    text[i].classList.add(classText);
  }
}
function themeElse(
  classBody,
  classManitor,
  classKeybord,
  classReset,
  classEqualBtn,
  classText,
  classBtnNum
) {
  body.classList.remove(classBody);
  manitor.classList.remove(classManitor);
  keybord.classList.remove(classKeybord);
  reserBtn.classList.remove(classReset);
  btnDel.classList.remove(classReset);
  equalBtn.classList.remove(classEqualBtn);
  for (let i = 0; i < btnNum.length; i++) {
    btnNum[i].classList.remove(classBtnNum);
  }
  for (let i = 0; i < text.length; i++) {
    text[i].classList.remove(classText);
  }
}
// start Theme color function value
const boxRang = document.querySelector(".box-rang");
boxRang.value = 1;
boxRang.addEventListener("input", () => {
  if(boxRang.value ==1){
    boxRang.style.background = ' hsl(223, 31%, 20%)'
  }
  if (boxRang.value == 2) {
    boxRang.classList.add("box-rang-two");
    boxRang.style.background = '#D3CDCD'
    laBel.classList.add("label-two");
    
    theme(
      "theme-two-body-color",
      "theme-two-manitor-color",
      "theme-two-keybord-color",
      "theme-two-reset",
      "theme-two-equalBtn",
      "theme-two-text-color",
      "theme-two"
    );
  } else {
    boxRang.classList.remove("box-rang-two");
    laBel.classList.remove("label-two");
    themeElse(
      "theme-two-body-color",
      "theme-two-manitor-color",
      "theme-two-keybord-color",
      "theme-two-reset",
      "theme-two-equalBtn",
      "theme-two-text-color",
      "theme-two"
    );
  }
  if (boxRang.value == 3) {
    boxRang.classList.add("box-rang-three");
    boxRang.style.background = '#1E0836'
    laBel.classList.add("label-three");
    theme(
      "theme-three-body-color",
      "theme-three-manitor",
      "theme-three-keybord-color",
      "theme-three-reset",
      "theme-three-equalBtn",
      "theme-three-text-color",
      "theme-three"
    );
  } else {
    boxRang.classList.remove("box-rang-three");
    laBel.classList.remove("label-three");
    themeElse(
      "theme-three-body-color",
      "theme-three-manitor",
      "theme-three-keybord-color",
      "theme-three-reset",
      "theme-three-equalBtn",
      "theme-three-text-color",
      "theme-three"
    );
  }
});
