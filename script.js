let firstNum = prompt("Enter First Num ::");
let secondNum = prompt("Enter second Num ::");
let opration = prompt("Enter any arthematic Opration '+ - x / %' ::");

if (opration === "+") {
  let res = Number(firstNum) + Number(secondNum);
  document.getElementById("pp").innerHTML = `The result is :: ${res} `;
} else if (opration == "-") {
  let res = firstNum - secondNum;
  document.getElementById("pp").innerHTML = `The result is :: ${res} `;
} else if (opration == "x") {
  let res = firstNum * secondNum;
  document.getElementById("pp").innerHTML = `The result is :: ${res}`;
} else if (opration == "/") {
  let res = firstNum / secondNum;
  document.getElementById("pp").innerHTML = `The result is ::${res} `;
} else if (opration == "%") {
  let res = firstNum % secondNum;
  document.getElementById("pp").innerHTML = `The result is :: ${res}`;
} else {
  document.getElementById("pp").innerHTML = "You entered the wrong Oprator!!";
}
