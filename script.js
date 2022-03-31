'use strict';

let title;
let screens;
let screenPrice;
let rollback = 10;

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

const getAllServicePrices = function () {
    let service1;
    let service2;
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительый тип услуг нужен?');
            console.log('service1', service1);
        } else if (i === 1) {
            service2 = prompt('Какой дополнительый тип услуг нужен?');
            console.log('service2', service2);
        }
        let servicePrice = +prompt('Сколько это будет стоить?');
        console.log('servicePrice', servicePrice);
        while (!isNumber(servicePrice)) {
            servicePrice = +prompt('Сколько это будет стоить?');
            console.log('servicePrice', servicePrice);
        }
        sum += parseInt(servicePrice);
    }
    return sum;
};

asking();

const allServicePrices = getAllServicePrices();
const fullPrice = getFullPrice();
const servicePercentPrice = getServicePercentPrice();
title = getTitle();


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

showTypeOf(title);
showTypeOf(screenPrice);

console.log('allServicePrices', allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(screens.length);
console.log(servicePercentPrice);