"use strict"
let user ={
    fun   : prompt("Введите функцию, используя х, на английском.", "x+3+x+4"),
    i     : +prompt("Сколько чисел, должны запросить", "5"),
    in    : [],
    out   : []
};
for (let x = 0; user.i != x; x++) {
        user.in[x]=+prompt("Введите числа, для подставления.")
        user.out[x]=(eval(user.fun.replace(/x/g, user.in[x])))
        console.log(user.out)
}

