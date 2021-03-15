"use strict";
let z,
    bill =[10000,5000,2000,1000,500,200,100,50,20,10,5,2,1],
    quantity = [],
    inputCash = +prompt("Введите, сколько деняг вы дали.", 500),
    costProduct = +prompt("Сколько вышло в чеке?", 235),
    deliveryCash = inputCash-costProduct;
for (let i of bill) {
    while (true) {
        if(deliveryCash >= i){
            deliveryCash = deliveryCash-i
            ++z    
        }
        else{
            if (z == 0 || "undefined") {
                break
            } else{
            quantity.push(`Наминал ${i}: ${z} кол-во`)
            z = 0
            break
            }
        }
    }
}
console.log(quantity)