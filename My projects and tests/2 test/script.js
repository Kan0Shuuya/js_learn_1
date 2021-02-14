"use strict"
function cal(a, b, y) {
    switch (y) {
        case "+":
            return a+b;
            break;
        case "-":
            return a-b;
            break
        case "*":
            return a*b;
            break
        case "/":
            return a/b;
            break
        default:
            alert("error")
    
    }
}
console.log(cal(9,8,"+"))