// Global variables
const containerButton = document.querySelector('.buttons');
const displayUp = document.querySelector('.displayup');
const display= document.querySelector('.displaydown');
const buttons = containerButton.querySelectorAll('button');
const eraseButton = document.querySelector('.erase')
let displayNumber = {num1: null, num2: null};
let currentOperation = {num1: null, num2: null};
let operator = "";
let equal;
let aux = null;
let number = "";


buttons.forEach((button) => {
        button.addEventListener('click', populateDisplay)
});

eraseButton.addEventListener('click', () => {
    console.log("ok")
    let removeLast = display.textContent.split('')
    removeLast.pop('');
    display.textContent = removeLast.join('');   
    console.log(typeof display.textContent)
})

// Executes the action of the clicked button and displays it on the screen
function populateDisplay(e) {
    if (e.target.textContent == "1") {
        number = "1";
        showNumber(number);
    } else if (e.target.textContent == "2") {
        number = "2";
        showNumber(number);
    } else if (e.target.textContent == "3") {
        number = "3";
        showNumber(number);
    } else if (e.target.textContent == "4") {
        number = "4";
        showNumber(number);
    } else if (e.target.textContent == "5") {
        number = "5";
        showNumber(number);
    } else if (e.target.textContent == "6") {
        number = "6";
        showNumber(number);
    } else if (e.target.textContent == "7") {
        number = "7"; 
        showNumber(number);
    } else if (e.target.textContent == "8") {
        number = "8";
        showNumber(number);
    } else if (e.target.textContent == "9") {
        number = "9"; 
        showNumber(number);
    } else if (e.target.textContent == "0") {
        if (display.textContent != "0") {
            number = "0";
            showNumber(number);
        }
    } else if (e.target.textContent == ".") {
        let split = display.textContent.split('')
        if (display.textContent == "") {
            display.textContent = ""
        } else if (split.includes(".") == true) {
            return
        } else {
            number = "."
            showNumber(number);
        }
    } else if (e.target.textContent == "AC") {
        displayNumber.num1 = null;
        displayNumber.num2 = null;
        number = "";
        operator = ""
        display.textContent = '';
        displayUp.textContent = '';
    } else if (e.target.textContent == "÷") {
        operator = "÷";
        setOperation(operator);
    } else if (e.target.textContent == "x") {
        operator = "x";
        setOperation(operator)
    } else if (e.target.textContent == "+") {
        operator = "+";
        setOperation(operator)
    } else if (e.target.textContent == "-") {
        operator = "-";
        setOperation(operator)
    } else if (e.target.textContent == "=") {
        pressEqual()
    }
}

// Prevents exceeding the number allowed on the screen, concatenates number entries and shows them
function showNumber(number) {
    if (display.textContent.length < 7) {
        display.textContent += number;
    }
}

// Selects the operation that should be done
function setOperation(operator) {
    if (aux == "=") {
        displayNumber.num1 = parseFloat(display.textContent);
        display.textContent = "";
        displayUp.textContent = `${displayNumber.num1} ${operator} `;
        aux = null;
    } else if (display.textContent == "" && displayUp.textContent == "") {
        displayNumber.num1 = parseFloat("0");
        display.textContent = "";
        displayUp.textContent = `${displayNumber.num1} ${operator} `
    } else {
        if (displayNumber.num1 == null && displayNumber.num2 == null) {
            displayNumber.num1 = parseFloat(display.textContent);
            display.textContent = "";
            displayUp.textContent = `${displayNumber.num1} ${operator} `;
        } else {
            let split = displayUp.textContent.split('');
            console.log(split);
            let filter = split.filter(operator => (operator == '÷' || operator == 'x' || operator == '+' || operator == '-'))
            if (filter == operator) {
                console.log(operator)
                displayNumber.num2 = parseFloat(display.textContent);
                while (display.textContent != ""){
                    equal = operate(operator, displayNumber.num1, displayNumber.num2);
                    displayUp.textContent = `${equal} ${operator}`;
                    display.textContent = ``;
                    displayNumber.num1 = equal;
                }
            } else {
                displayUp.textContent = `${displayNumber.num1} ${operator} `;
                let previousOperator = operator;
                if (filter.length = 1) {
                    operator = filter.join('');
                    displayNumber.num2 = parseFloat(display.textContent);
                    while (display.textContent != ""){
                        equal = operate(operator, displayNumber.num1, displayNumber.num2);
                        displayUp.textContent = `${equal} ${previousOperator}`;
                        display.textContent = ``;
                        displayNumber.num1 = equal;
                    }
                } else {
                    filter.pop();
                    operator = filter.join('');
                    displayNumber.num2 = parseFloat(display.textContent);
                    while (display.textContent != "") {
                        equal = operate(operator, displayNumber.num1, displayNumber.num2);
                        displayUp.textContent = `${equal} ${previousOperator}`;
                        display.textContent = ``;
                        displayNumber.num1 = equal;
                    }
                }
            }
        }
    }
}

// Evaluates the operation
function pressEqual() {
    if (display.textContent == "" && displayUp.textContent == "") {
        display.textContent == "";
    } else {
        aux = "=";
        while (display.textContent != "") {
        displayNumber.num2 = parseFloat(display.textContent);
        equal = operate(operator, displayNumber.num1, displayNumber.num2);
        getExponentialEqual(equal);
        }
    }
}

// Sets the result to exponential if it exceeds the screen limit
function getExponentialEqual(number) {
    if (number.toString().length > 7) {
        let roundNumber = number.toExponential(2);
        displayUp.textContent = `${displayNumber.num1} ${operator} ${displayNumber.num2}`;
        display.textContent = `${roundNumber}`;
        displayNumber.num1 = number;
        operator = ""
    } else {
        displayUp.textContent = `${displayNumber.num1} ${operator} ${displayNumber.num2}`;
        display.textContent = `${number}`;
        displayNumber.num1 = number;
        operator = ""
    }
}

function add(a,b) {
    let sum = a + b;
    return sum
}

function subtract(a,b) {
    let sub = a - b;
    return sub
}

function multiply (a,b) {
    let multi = a * b;
    return multi
}

function divide (a,b) {
    let div = a / b;
    return div
}

// Does the math
function operate(operator, a, b) {
    if (operator == "+") {
        return add(a,b);
    } else if (operator == "-") {
    return subtract(a,b);
    } else if (operator == "x") {
        return multiply (a,b);
    } else if (operator == "÷") {
        return divide(a,b);
    }
}