for (let b = 1, a = 1; b != 3; a++) {
    b = a == 10 ? ++b : b=b;
    console.log(`${a} u ${b}`)    
}