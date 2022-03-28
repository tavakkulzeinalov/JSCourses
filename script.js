'use strict';
const question = prompt('Как называется ваш проект?');
const title = question;

const question1 = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
let screens = question1;


const question2 = +prompt('Сколько будет стоить данная работа?', 12000);
const screenPrice = parseInt(question2);


const question3 = confirm('Нужен ли адаптив на сайте?');
const adaptive = question3;

const service1 = prompt('Какой дополнительный тип услуги нужен?', 'service1');
const ques1 = service1;

const servicePrice1 = +prompt('Сколько это будет стоить?', 'servicePrice1');
const ques2 = parseInt(servicePrice1);

const service2 = prompt('Какой дополнительный тип услуги нужен?', 'service2');
const ques3 = service2;

const servicePrice2 = +prompt('Сколько это будет стоить?', 'servicePrice2');
const ques4 = parseInt(servicePrice2);

const sum = screenPrice + servicePrice1 + servicePrice2;
const fullPrice = sum;

const rollback = 42;
const servicePercentPrice = fullPrice - rollback;
console.log(Math.ceil(servicePercentPrice));

if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice > 15000 && fullPrice < 30000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice <= 0) {
    console.log('Что то пошло не так');
}