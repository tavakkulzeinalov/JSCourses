'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    rollback: 10,
    service1: '',
    service2: '',
    servicePrice: '',
    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'JavaScript');
        appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);
        } while (appData.screenPrice < 1);
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    getFullPrice: function () {
        return appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrice: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getTitle: function () {
        return appData.title.replace(/(^|\s)\S/g, function (a) {
            return a.toUpperCase();
        });
    },
    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt('Какой дополнительый тип услуг нужен?');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительый тип услуг нужен?');
            }
            appData.servicePrice = +prompt('Сколько это будет стоить?');
            while (!appData.isNumber(appData.servicePrice)) {
                appData.servicePrice = +prompt('Сколько это будет стоить?');
            }
            sum += parseInt(appData.servicePrice);
        }
        return sum;
    },
    getRollbackMessage: function (price) {
        if (price > 30000) {
            return 'Даем скидку в 10%';
        } else if (price > 15000 && price < 30000) {
            return 'Даем скидку в 5%';
        } else if (price < 15000 && price > 0) {
            return 'Скидка не предусмотрена';
        } else if (price <= 0) {
            return 'Что то пошло не так';
        }
    },
    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrice();
        appData.title = appData.getTitle();
        appData.logger();
        for (let key in appData.logger()) {
            console.log(key);
            break;
        }
    },
    logger: function () {
        console.log('allServicePrices', appData.allServicePrices);
        console.log(appData.getRollbackMessage(appData.fullPrice));
        console.log(typeof appData.title);
        console.log(typeof appData.screenPrice);
        console.log(appData.screens.length);
        console.log(appData.servicePercentPrice);
    }
};
appData.start();