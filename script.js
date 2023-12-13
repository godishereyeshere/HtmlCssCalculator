// script.js

let currentInput = '0';
let operator = null;
let previousInput = null;

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateScreen();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateScreen();
    }
}

function setOperator(op) {
    if (operator !== null) {
        calculate();
    }
    operator = op;
    if (previousInput === null) {
        previousInput = currentInput;
        currentInput = '0';
    } else {
        previousInput = currentInput;
        currentInput = '0';
    }
    updateScreen();
}

function calculate() {
    if (operator !== null && previousInput !== null) {
        switch (operator) {
            case '+':
                currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
                break;
            case '-':
                currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
                break;
            case '*':
                currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
                break;
            case '/':
                currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
                break;
            default:
                break;
        }
        operator = null;
        previousInput = null;
        updateScreen();
    }
}

function updateScreen() {
    document.getElementById('screen').textContent = currentInput;
}
