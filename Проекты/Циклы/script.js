"use strict"

for (let a = 1, b = 1, c=0;b != 9 || a != 11; a++) {
    b = a == 11 ? ++b : b=b;
    a = a == 11 ? 1 : a;
    c = a*b
    console.log(`${a} * ${b} = ${c}`)
}

