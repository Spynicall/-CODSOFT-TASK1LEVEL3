// Grab elements
var display = document.getElementById('display');
var buttons = document.querySelectorAll('.btn');

// Keeps track of what's currently on screen
var currentInput = '';

// Loop through every button and attach one click listener each
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (event) {
    var button = event.target;
    var action = button.getAttribute('data-action');
    var value = button.getAttribute('data-value');

    if (action === 'clear') {
      currentInput = '';
    } else if (action === 'delete') {
      currentInput = currentInput.slice(0, -1);
    } else if (action === 'equals') {
      currentInput = calculate(currentInput);
    } else if (value !== null) {
      currentInput += value;
    }

    display.value = currentInput;
  });
}

// Evaluates a simple expression with one operator: a (+ - * /) b
function calculate(expression) {
  var operators = ['+', '-', '*', '/'];
  var operatorUsed = '';
  var operatorIndex = -1;

  // Find which operator is in the expression (skip index 0 so a
  // leading minus sign, e.g. "-5", isn't mistaken for an operator)
  for (var i = 1; i < expression.length; i++) {
    if (operators.indexOf(expression[i]) !== -1) {
      operatorUsed = expression[i];
      operatorIndex = i;
      break;
    }
  }

  if (operatorIndex === -1) {
    return expression; // no operator found, nothing to calculate
  }

  var firstNumber = parseFloat(expression.slice(0, operatorIndex));
  var secondNumber = parseFloat(expression.slice(operatorIndex + 1));

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return 'Error';
  }

  var result;

  if (operatorUsed === '+') {
    result = firstNumber + secondNumber;
  } else if (operatorUsed === '-') {
    result = firstNumber - secondNumber;
  } else if (operatorUsed === '*') {
    result = firstNumber * secondNumber;
  } else if (operatorUsed === '/') {
    if (secondNumber === 0) {
      return 'Error';
    }
    result = firstNumber / secondNumber;
  }

  return result.toString();
}
