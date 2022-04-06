'use strict';
const header = document.getElementsByTagName('h1');
const btn = document.getElementsByClassName('handler_btn');
const btnPlus = document.querySelector('.screen-btn');
const percent = document.querySelectorAll('.other-items.percent');
const number = document.querySelectorAll('.other-items.number');
const rollback = document.querySelector('.rollback input[type="range"]');
const span = document.querySelector('.rollback span');
const totalInput = document.getElementsByClassName('total-input');
let screen = document.querySelectorAll('.screen');

console.log(header[0]);
console.log(btn);
console.log(btnPlus);
console.log(percent);
console.log(number);
console.log(rollback);
console.log(span);
console.log(screen);

for (let key of totalInput) {
    console.log(key);
}