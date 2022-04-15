'use strict';

const title = document.getElementsByTagName('h1')[0];
const plusBtn = document.querySelector('.screen-btn');
const otherItemsWithPercent = document.querySelectorAll('.other-items.percent');
const otherItemsWithNumber = document.querySelectorAll('.other-items.number');
const inputRange = document.querySelector('.rollback input[type="range"]');
const inputRangeValue = document.querySelector('.rollback span.range-value');
const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];
const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];
const checkboxes = document.querySelectorAll('input[type=checkbox]');
const openCMS = document.getElementById('cms-open');
const noneCMS = document.getElementById('cms-open');
const hiddenCMS = document.querySelector('.hidden-cms-variants');
const cmsSelect = document.getElementById('cms-select');
const hiddenInput = document.querySelector('.hidden-cms-variants > .main-controls__input');
let screens = document.querySelectorAll('.screen');
let selects = document.querySelectorAll('select[name=views-select]:not(#cms-select)');
let inputsScreensQuantity = document.querySelectorAll('.main-controls__input > input:not(#cms-other-input)');
const customChackbox = document.querySelectorAll('.custom-checkbox');


const appData = {
    title: '',
    screens: [],
    // count: 0,
    screenPrice: 0,
    adaptive: true,
    rollback: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        this.addTitle();
        startBtn.addEventListener('click', this.isCheckedSelects.bind(appData));
        plusBtn.addEventListener('click', this.addScreenBlock.bind(appData));
        inputRange.addEventListener('input', this.addRollback.bind(appData));
        resetBtn.addEventListener('click', this.reset.bind(appData));
        openCMS.addEventListener('change', this.openCMS.bind(appData));
        noneCMS.addEventListener('change', this.noneCMS.bind(appData));
        plusBtn.addEventListener('click', ({
            target: count
        }) => {
            if (count.classList.contains('screen-btn')) {
                count.innerText = (count.innerText | 0) + 1;
                totalCount.value = (count.innerText | 0) + 1;
            }
        });
    },
    addTitle: function () {
        this.title = title.textContent;
        document.title = title.textContent;
    },
    start: function () {
        startBtn.style.display = 'none';
        resetBtn.style.display = 'flex';
        this.toDisable();
        this.addScreens();
        this.addServices();
        this.addPrices();
        this.logger();
        this.showResult();
        customChackbox.forEach(i => {
            for (let i = 0; i < customChackbox.length; i++) {
                customChackbox[i].disabled = !customChackbox[i].checked;
                if (customChackbox[i].checked === true) {
                    customChackbox[i].disabled = customChackbox[i].checked;
                }
            }
        });
        if (startBtn) {
            inputRange.disabled = true;
        } else {
            return;
        }
    },
    reset: function () {
        startBtn.style.display = 'flex';
        resetBtn.style.display = 'none';
        this.resetValues();
        this.deleteElems();
        this.showResult();
        this.logger();
        customChackbox.forEach(i => {
            for (let i = 0; i < customChackbox.length; i++) {
                customChackbox[i].disabled = customChackbox[i].checked;
            }
        });
    },
    resetValues: function () {
        this.screens = [];
        // this.count = 0;
        this.screenPrice = 0;
        this.rollback = 0;
        this.servicePricesPercent = 0;
        this.servicePricesNumber = 0;
        this.fullPrice = 0;
        this.servicePercentPrice = 0;
        this.servicesPercent = {};
        this.servicesNumber = {};
        inputRange.value = 0;
        inputRangeValue.textContent = 0 + '%';
    },
    deleteElems: function () {
        screens = document.querySelectorAll('.screen');
        screens.forEach((screen, index) => {
            if (index !== 0) {
                screen.remove();
            }
        });
        selects = document.querySelectorAll('select[name=views-select]:not(#cms-select)');
        inputsScreensQuantity = document.querySelectorAll('.main-controls__input > input:not(#cms-other-input)');
        selects[0].value = '';
        selects[0].disabled = false;
        inputsScreensQuantity[0].value = '';
        inputsScreensQuantity[0].disabled = false;
        plusBtn.disabled = false;
        hiddenCMS.style.display = 'none';
        hiddenInput.style.display = 'none';
        cmsSelect.disabled = false;
        hiddenInput.querySelector('input').disabled = false;
        checkboxes.forEach(box => {
            box.checked = false;
        });
    },
    openCMS: function () {
        hiddenCMS.style.display = 'flex';
        cmsSelect.addEventListener('change', () => {
            if (cmsSelect.value === 'other') {
                hiddenInput.style.display = 'flex';
            } else {
                hiddenInput.style.display = 'none';
            }
        });
    },
    noneCMS: function () {
        openCMS.addEventListener('change', () => {
            if (openCMS.checked === false) {
                hiddenCMS.style.display = 'none';
            } else {
                hiddenCMS.style.display = 'flex';
            }
        });
    },
    showResult: function () {
        total.value = this.screenPrice;
        // totalCount.value = this.count;
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
        fullTotalCount.value = this.fullPrice;
        totalCountRollback.value = this.servicePercentPrice;
    },
    isCheckedSelects: function () {
        let isChecked = this.checkSelects();
        if (isChecked) {
            this.start();
        }
    },
    toDisable: function () {
        selects.forEach(select => {
            select.disabled = true;
        });
        inputsScreensQuantity.forEach(input => {
            input.disabled = true;
        });
        plusBtn.disabled = true;
        cmsSelect.disabled = true;
        hiddenInput.querySelector('input').disabled = true;
    },
    checkSelects: function () {
        selects = document.querySelectorAll('select[name=views-select]:not(#cms-select)');
        inputsScreensQuantity = document.querySelectorAll('.main-controls__input > input:not(#cms-other-input)');
        let isChecked = true;
        selects.forEach(select => {
            const selectName = select.options[select.selectedIndex].textContent;
            if (selectName === 'Тип экранов') {
                isChecked = false;
            }
        });
        inputsScreensQuantity.forEach(input => {
            if (input.value === "" || input.value === 0 || input.value === null) {
                isChecked = false;
            }
        });
        return isChecked;
    },
    addScreens: function () {
        this.screens = [];
        // this.count = 0;
        screens = document.querySelectorAll('.screen');
        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            // this.count += +input.value;
            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            });
        });
    },
    addScreenBlock: function () {
        screens = document.querySelectorAll('.screen');
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },
    addServices: function () {
        otherItemsWithPercent.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }
        });
        otherItemsWithNumber.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }
        });
        if (openCMS.checked) {
            if (cmsSelect.value === 'other') {
                this.servicesPercent['CMS-other'] = +hiddenInput.querySelector('input').value;
            } else {
                this.servicesPercent['CMS-Wordpress'] = +cmsSelect.value;
            }
        }
    },
    addPrices: function () {
        this.screenPrice = this.screens.reduce((accumulator, current) => (accumulator + current.price), 0);

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }
        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
        }
        this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
        this.servicePercentPrice = this.fullPrice - Math.floor(this.fullPrice * this.rollback / 100);
    },
    addRollback: function (event) {
        inputRangeValue.textContent = event.target.value + '%';
        this.rollback = +event.target.value;
        totalCountRollback.value = this.fullPrice - Math.floor(this.fullPrice * +event.target.value / 100);
    },
    logger: function () {
        console.log(this);
    }
};
appData.init();