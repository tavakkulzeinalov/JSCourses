'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    serve: [],

    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrice();
        appData.getTitle();
        appData.logger();
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    isStr: function (str) {
        return !isNaN(String(str));
    },

    asking: function () {
        let write;
        do {
            write = prompt('Как называется ваш проект?', 'JavaScript');
        } while (appData.isNumber(write));

        for (let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt('Какие типы экранов нужно разработать?');
            } while (appData.isNumber(name));

            let price = 0;

            do {
                price = +prompt('Сколько будет стоить данная работа?', 12000);
            } while (!appData.isNumber(price));

            appData.screens.push({
                id: i,
                name: name,
                price: price
            });
            // сложное задание номер 2
            const result = appData.screens.reduce(function (n, p) {
                return n + p.price;
            }, 0);
            console.log(result);
        }

        for (let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt('Какой дополнительный тип услуг нужен?');
            } while (appData.isNumber(name));
            // сложное задание номер один
            appData.serve.push({
                id: i,
                name: name
            });
            let price = 0;
            do {
                price = prompt('Сколько это будет стоить?');
            } while (!appData.isNumber(price));
            appData.services[name] = +price;
        }
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrice: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getTitle: function () {
        appData.title = appData.title.replace(/(^|\s)\S/g, function (a) {
            appData.title = a.toUpperCase();
        });
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
    logger: function () {
        console.log(appData.servicePercentPrice);
        console.log(appData.fullPrice);
        console.log(appData.screens);
        console.log(appData.services);
    }
};
appData.start();