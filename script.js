'use strict';
const question = prompt('Как называется ваш проект?');
const title = question;
// console.log(title);

const question1 = prompt('Какие типы экранов нужно разработать?',"Простые, Сложные, Интерактивные");
let screens = question1;
// console.log(screens);


const question2 = +prompt('Сколько будет стоить данная работа?', 12000);
const screenPrice = parseInt(question2);
// console.log(parseInt(screenPrice));


const question3 = confirm('Нужен ли адаптив на сайте?');
const adaptive = question3;
// console.log(adaptive);

const service1 = prompt('Какой дополнительный тип услуги нужен?','service1');
const ques1 = service1;
// console.log(ques1);

const servicePrice1 = +prompt('Сколько это будет стоить?','servicePrice1');
const ques2 = parseInt(servicePrice1);
// console.log(parseInt(ques2));

const service2 = prompt('Какой дополнительный тип услуги нужен?','service2');
const ques3 = service2;
// console.log(ques3);

const servicePrice2 = +prompt('Сколько это будет стоить?','servicePrice2');
const ques4 = parseInt(servicePrice2);
// console.log(parseInt(ques4));

const sum = screenPrice + servicePrice1 + servicePrice2;
const fullPrice = sum;
// console.log(sum);

const rollback = 42; // откат посреднику
const servicePercentPrice = fullPrice - rollback;
console.log(Math.ceil(servicePercentPrice));

if(fullPrice > 30000){
    console.log('Даем скидку в 10%');
}else if(fullPrice > 15000 && fullPrice < 30000){
    console.log('Даем скидку в 5%');
}else if(fullPrice < 15000 && fullPrice > 0){
    console.log('Скидка не предусмотрена');
}else if(fullPrice <= 0){
    console.log('Что то пошло не так');
}
