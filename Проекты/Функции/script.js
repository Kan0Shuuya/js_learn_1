"use strict"
let user ={
    fun   : prompt("Введите функцию, используя х, на английском."),
    i     : +prompt("Сколько чисел, должны запросить"),
    in    : [],
    out   : []
};
for (let x = 0; user.i != x; x++) {
        user.in[x]=+prompt("Введите числа, для подставления.")
        user.out[x]=(eval(user.fun.replace(/x/g, user.in[x])))
        console.log(user.out)
}

