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

let a = 2;
let b = 2;
console.log(operate("+", a, b))
console.log(operate("-", a, b))
console.log(operate("*", a, b))
console.log(operate("/", a, b))
console.log(operate("l", a, b))
console.log(add(a,b));
console.log(subtract(a,b));
console.log(multiply(a,b));
console.log(divide(a,b));


