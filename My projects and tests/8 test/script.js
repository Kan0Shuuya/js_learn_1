"use strict";
let z;
let bill =[10000,5000,2000,1000,500,200,100,50,20,10,5,2,1]
let quantity = [];
let inputCash = +prompt("Введите, сколько деняг вы дали.", 500)
let costProduct = +prompt("Сколько вышло в чеке?", 235)
let deliveryCash = inputCash-costProduct;
for (let i of bill) {
    while (true) {
        if (deliveryCash >= i){
            ++z 
            deliveryCash = deliveryCash - i;
        }else{
            quantity.push(z)
        }
        
    }
}
console.log(quantity)
console.log(deliveryCash)