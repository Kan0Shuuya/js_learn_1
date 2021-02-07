"use strict"
function calculate(a, b, y) {
    switch (y) {
        case "+":
            console.log(a+b);
            break;
        case "-":
            console.log(a-b);
            break
        case "*":
            console.log(a*b);
            break
        case "/":
            console.log(a/b);
            break
        default:
            alert("error")
    
    }
}
calculate(+prompt("Введите 1 число", 9), +prompt("Введите 2 число", 10), prompt("Введите действие: +, -, *, /.","/"))