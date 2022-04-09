'use strict';

const title = document.getElementsByTagName('h1')[0];
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
const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];
let screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    rollback: 10,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    serve: [],
    init: function () {
        appData.addTitle();
        start.addEventListener('click', appData.start);
        screenBtn.addEventListener('click', appData.addScreenBlock);
        const rollbackAndSpan = function (event) {
            span.textContent = event.target.value;
        };
        rollback.addEventListener('input', rollbackAndSpan);
        screenBtn.addEventListener('click', ({
            target: count
        }) => {
            if (count.classList.contains('screen-btn')) {
                count.innerText = (count.innerText | 0) + 1;
                totalCount.value = (count.innerText | 0) + 1;
            }
        });
    },
    addTitle: function () {
        document.title = title.textContent;
    },

    start: function () {
        screens = document.querySelectorAll('.screen');
        let flagScreens = false;
        screens.forEach(item => {
            let selectItem = item.querySelector('select');
            let inputItem = item.querySelector('input');
            if (selectItem.selectedIndex === 0 || inputItem.value.trim() === '') {
                flagScreens = false;
            } else {
                flagScreens = true;
            }
        });
        if (flagScreens) {
            appData.addScreens();
            appData.addServices();
            appData.addPrices();
            appData.getServicePercentPrice();
            // appData.logger();
            appData.showResult();
        } else {
            return;
        }
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen');
        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            });
        });
    },
    showResult: function () {
        total.value = appData.screenPrice;
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
        totalCountRollback.value = appData.servicePercentPrice + +span.textContent; 
    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += (appData.screenPrice * (appData.servicesPercent[key] / 100));
        }
        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

        appData.servicePercentPrice = appData.fullPrice + (appData.rollback / 100) * appData.fullPrice;
    },
    getServicePercentPrice: function () {

    },
};
appData.init();