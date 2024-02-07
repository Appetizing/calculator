

const numButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const decimalButton = document.querySelector('.decimal');
const lastOperation = document.querySelector('.previousOperation');
const currentOperation = document.querySelector('.currentOperationScreen')

window.addEventListener('keydown', handleKeyboardInput);
equalButton.addEventListener('click', )
clearButton.addEventListener('click', )
deleteButton.addEventListener('click', )
decimalButton.addEventListener('click', )

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, operator, num2){

}

function display(num){

}