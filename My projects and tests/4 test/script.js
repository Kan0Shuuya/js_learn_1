"use strict"
let human = {
    head: {},
    hand: {},
    leg : {}
}

let x = 0;

for (let i = prompt("Сколько у вас рук?"); x != i; x++) {
    human.hand = prompt("какая у тебя там рука");
    //human.hand[prompt("Введите название руки:")] = x
    console.log(human)
};