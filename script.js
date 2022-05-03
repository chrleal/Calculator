const containerButton = document.querySelector('.buttons');
const display = document.querySelector('.display')
const buttons = containerButton.querySelectorAll('button')

buttons.forEach((button) => {
        button.addEventListener('click', populateDisplay)
});

function populateDisplay(e) {
    if (e.target.textContent == "1") {
        return display.textContent = '1';    
    } else if (e.target.textContent == "2") {
        return display.textContent = '2';    
    } else if (e.target.textContent == "3") {
        return display.textContent = '3';    
    } else if (e.target.textContent == "4") {
        return display.textContent = '4';    
    } else if (e.target.textContent == "5") {
        return display.textContent = '5';    
    } else if (e.target.textContent == "6") {
        return display.textContent = '6';    
    } else if (e.target.textContent == "7") {
        return display.textContent = '7';    
    } else if (e.target.textContent == "8") {
        return display.textContent = '8';    
    } else if (e.target.textContent == "9") {
        return display.textContent = '9';    
    } else if (e.target.textContent == "0") {
        return display.textContent = '0';
    } else if (e.target.textContent == "C") {
        return display.textContent = '0';
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

function operate(operator, a, b) {
    if (operator == "+") {
        return add(a,b);
    } else if (operator == "-") {
       return subtract(a,b);
    } else if (operator == "*") {
        return multiply (a,b);
    } else if (operator == "/") {
        return divide(a,b);
    } else {
        return ('error')
    }
}