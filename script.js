'use strict';
const question = prompt('Как называется ваш проект?');
const title = question;
const question1 = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
let screens = question1;
const question2 = +prompt('Сколько будет стоить данная работа?', 12000);
const screenPrice = parseInt(question2);
const servicePrice1 = +prompt('Сколько это будет стоить?', 'servicePrice1');
const ques2 = parseInt(servicePrice1);
const servicePrice2 = +prompt('Сколько это будет стоить?', 'servicePrice2');
const ques4 = parseInt(servicePrice2);
const sum = screenPrice + servicePrice1 + servicePrice2;
const fullPrice = sum;
const rollback = 42;
const servicePercentPrice = fullPrice - rollback;

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
    if (price > 30000) {
        return 'Даем скидку в 10%';
    } else if (price > 15000 && price < 30000) {
        return 'Даем скидку в 5%';
    } else if (price < 15000 && price > 0) {
        return 'Скидка не предусмотрена';
    } else if (price <= 0) {
        return 'Что то пошло не так';
    }
};

const getAllServicePrices = function (a, b) {
    return (a + b);
};
getAllServicePrices(servicePrice1, servicePrice2);
const allServicePrices = getAllServicePrices;

function getFullPrice() {
    return screenPrice + allServicePrices;
}
getFullPrice();

function getTitle(str) {
    return str.replace(/(^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
}

const getServicePercentPrices = function (fullPriceMoney, rollbackPrice) {
    console.log(fullPriceMoney - rollbackPrice);
};
getServicePercentPrices(fullPrice, rollback);
const ServicePercentPrices = getServicePercentPrices;

showTypeOf(title);
showTypeOf(screens);
showTypeOf(screenPrice);
showTypeOf(ques2);
showTypeOf(ques4);
showTypeOf(screenPrice);


console.log(getRollbackMessage(fullPrice));
console.log(screens);
console.log(getTitle(title));