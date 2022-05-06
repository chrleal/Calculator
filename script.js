const containerButton = document.querySelector('.buttons');
const displayUp = document.querySelector('.displayup');
const display= document.querySelector('.displaydown');
const buttons = containerButton.querySelectorAll('button');
let displayNumber = {num1: null, num2: null}
let operator = null;

buttons.forEach((button) => {
        button.addEventListener('click', populateDisplay)
});

function populateDisplay(e) {
    if (e.target.textContent == "1") {
        display.textContent += "1";
    } else if (e.target.textContent == "2") {
        display.textContent += "2";
    } else if (e.target.textContent == "3") {
        display.textContent += "3";
    } else if (e.target.textContent == "4") {
        display.textContent += "4";
    } else if (e.target.textContent == "5") {
        display.textContent += "5";
    } else if (e.target.textContent == "6") {
        display.textContent += "6";
    } else if (e.target.textContent == "7") {
        display.textContent += "7"; 
    } else if (e.target.textContent == "8") {
        display.textContent += "8";
    } else if (e.target.textContent == "9") {
        display.textContent += "9"; 
    } else if (e.target.textContent == "0") {
        if (display.textContent != "0") {
            display.textContent += "0";
        }
    } else if (e.target.textContent == ".") {
        display.textContent += "."; 
    } else if (e.target.textContent == "C") {
        displayNumber.num1 = null;
        displayNumber.num2 = null;
        display.textContent = '';
        displayUp.textContent = '';
    } else if (e.target.textContent == "/") {
        displayNumber.num2 = null;
        operator = "/";
        displayNumber.num1 = parseFloat(display.textContent);
        display.textContent = "";
        displayUp.textContent = `${displayNumber.num1} ${operator} `;
    } else if (e.target.textContent == "*") {
        displayNumber.num2 = null;
        operator = "*";
        displayNumber.num1 = parseFloat(display.textContent);
        display.textContent = "";
        displayUp.textContent = `${displayNumber.num1} ${operator} `;
    } else if (e.target.textContent == "+") {
        displayNumber.num2 = null;
        operator = "+";
        displayNumber.num1 = parseFloat(display.textContent);
        display.textContent = "";
        displayUp.textContent = `${displayNumber.num1} ${operator} `;
    } else if (e.target.textContent == "-") {
        displayNumber.num2 = null;
        operator = "-";
        displayNumber.num1 = parseFloat(display.textContent);
        display.textContent = "";
        displayUp.textContent = `${displayNumber.num1} ${operator} `;
    } else if (e.target.textContent == "=") {
        if (displayNumber.num1 != null && displayNumber.num2 != null) {
            displayNumber.num1 = null;
            displayNumber.num2 = null; 
        } else if (displayNumber.num1 != null && displayNumber.num2 == null) {
            displayNumber.num2 = parseFloat(display.textContent);
            let equal = operate(operator, displayNumber.num1, displayNumber.num2);
            displayUp.textContent = `${displayNumber.num1} ${operator} ${displayNumber.num2}`;
            display.textContent = `${equal}`;
            displayNumber.num1 = equal;
        }
    }
    console.log(displayNumber.num1);
    console.log(displayNumber.num2);
    return
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

function operate(operator, a, b) {
    if (operator == "+") {
        return add(a,b);
    } else if (operator == "-") {
       return subtract(a,b);
    } else if (operator == "*") {
        return multiply (a,b);
    } else if (operator == "/") {
        return divide(a,b);
    }
}