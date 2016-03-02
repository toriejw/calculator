calculateButton = document.getElementById('calculate-button');

calculateButton.addEventListener('click', function() {
  var firstNumber = getFirstNumber();
  var secondNumber = getSecondNumber();
  var operator = getOperator();

  solveEquation(firstNumber, secondNumber, operator);
})

function getFirstNumber() {
  return parseFloat(document.getElementById('equation-first-number').value);
}

function getSecondNumber() {
  return parseFloat(document.getElementById('equation-second-number').value);
}

function getOperator() {
  return document.getElementById('equation-operator').value;
}

function solveEquation(firstNumber, secondNumber, operator) {
  if (isValidOperator(operator)) {
    printResult(firstNumber, secondNumber, operator);
  } else {
    printOutput("Invalid operator was entered. Try again.");
  }
}

function isValidOperator(operator) {
  return ["+", "-", "/", "*"].includes(operator)
}

function printOutput(msg) {
  outputCanvas = document.getElementById('calculator-output');

  outputCanvas.innerHTML = msg;
}

function printResult(firstNumber, secondNumber, operator) {
  if (operator === "+") {
    var answer = firstNumber + secondNumber;
  } else if (operator === "-") {
    var answer = firstNumber - secondNumber;
  } else if (operator === "*") {
    var answer = firstNumber * secondNumber;
  } else {
    var answer = firstNumber / secondNumber;
  }

  printOutput('Answer: <br><br>' + answer);
}
