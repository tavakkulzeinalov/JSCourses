'use strict';

let title;
let screens;
let screenPrice;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;
let servicePrice;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    title = prompt('Как называется ваш проект?', 'JavaScript');
    screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
};

do {
    screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);
} while (screenPrice < 1);

const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительый тип услуг нужен?');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительый тип услуг нужен?');
        }
        while (!isNumber(servicePrice = prompt('Сколько это будет стоить?'))) {
            sum += prompt('Сколько это будет стоить?');
        }
    }
    return sum;
};

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getFullPrice = function () {
    return screenPrice + allServicePrices;
};

const getServicePercentPrice = function () {
    return fullPrice - (fullPrice * (rollback / 100));
};

const getTitle = function () {
    return title.replace(/(^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);


console.log('allServicePrices', allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(screens.length);
console.log(servicePercentPrice);
console.log(+servicePrice.replace(/[\D]+/g, ''));