'use strict';
const h1 = document.getElementsByTagName('h1');
const handlerBtn = document.getElementsByClassName('handler_btn');
const screenBtn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const rollback = document.querySelector('.rollback input[type="range"]');
const span = document.querySelector('.rollback span');
const totalInput = document.getElementsByClassName('total-input');
let screen = document.querySelectorAll('.screen');

console.log(h1[0]);
console.log(handlerBtn[0]);
console.log(handlerBtn[1]);
console.log(screenBtn);
console.log(otherItemsPercent[0]);
console.log(otherItemsPercent[1]);
console.log(otherItemsNumber[0]);
console.log(otherItemsNumber[1]);
console.log(otherItemsNumber[2]);
console.log(otherItemsNumber[3]);
console.log(otherItemsNumber[4]);
console.log(rollback);
console.log(span);
console.log(screen[0]);

for (let key of totalInput) {
    console.log(key);
}