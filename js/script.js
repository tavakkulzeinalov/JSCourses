'use strict';
const h1 = document.getElementsByTagName('h1');
const title = h1[0];
const handlerBtn = document.getElementsByClassName('handler_btn');
const start = handlerBtn[0];
const reset = handlerBtn[1];
const screenBtn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsPercentZero = otherItemsPercent[0];
const otherItemsPercentOne = otherItemsPercent[1];
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const otherItemsNumberZero = otherItemsNumber[0];
const otherItemsNumberOne = otherItemsNumber[1];
const otherItemsNumberTwo = otherItemsNumber[2];
const otherItemsNumberThree = otherItemsNumber[3];
const otherItemsNumberFour = otherItemsNumber[4];
const rollback = document.querySelector('.rollback input[type="range"]');
const span = document.querySelector('.rollback span');
const totalInput = document.getElementsByClassName('total-input');
let screen = document.querySelectorAll('.screen');
const scrn = screen[0];

console.log(title);
console.log(start);
console.log(reset);
console.log(screenBtn);
console.log(otherItemsPercentZero);
console.log(otherItemsPercentOne);
console.log(otherItemsNumberZero);
console.log(otherItemsNumberOne);
console.log(otherItemsNumberTwo);
console.log(otherItemsNumberThree);
console.log(otherItemsNumberFour);
console.log(rollback);
console.log(span);
console.log(scrn);

for (let key of totalInput) {
    console.log(key);
}