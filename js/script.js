'use strict';

const title = document.getElementsByTagName('h1')[0];
const handlerBtn = document.getElementsByClassName('handler_btn');
let start = handlerBtn[0];
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
const main = document.querySelector('.main');
const cms = document.getElementById('cms-open');
const mainControls = document.querySelectorAll('.main-controls__input')[8];
const select = document.getElementById('cms-select')[2];
const customChackbox = document.querySelectorAll('.custom-checkbox');
let input = document.querySelectorAll('input');
const selectScreen = document.querySelectorAll('select');
const selectZero = selectScreen[0];
const selectOne = selectScreen[1];
const other = document.querySelector('#none');

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
        this.addTitle();
        start.addEventListener('click', this.start);
        screenBtn.addEventListener('click', this.addScreenBlock);
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

        function hiddenBtn() {
            document.getElementById('reset').style.display = 'inline-block';
        }
        start.addEventListener('click', hiddenBtn);

        function NoneBtn() {
            document.getElementById('start').style.display = 'none';
        }
        start.addEventListener('click', NoneBtn);


        reset.onclick = function () {
            input[0].value = '';
            selectZero.value = '';
            rollback.value = '' || 0;
            span.innerHTML = 0 + '%';
            screenBtn.innerHTML = '+';
            let cloneScreen = screens[0].cloneNode(false);
            screens[screens.length - 1].remove(cloneScreen);
            document.querySelector('.hidden-cms-variants').style.display = 'none';

            function displayNone() {
                document.querySelectorAll('select').style.display = 'none';
            }
            reset.addEventListener('click', displayNone);


            const inputs = main.querySelectorAll('.total-input');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = '';
                start.style.display = 'block';
                reset.style.display = 'none';
            }
            const customChackboxes = document.querySelectorAll('.custom-checkbox');
            for (let i = 0; i < customChackboxes.length; i++) {
                customChackboxes[i].checked = '';
                start.style.display = 'block';
                reset.style.display = 'none';
            }
            customChackbox.forEach(i => {
                for (let i = 0; i < customChackbox.length; i++) {
                    customChackbox[i].disabled = !customChackbox[i].checked;
                }
            });
            input.forEach(i => {
                for (let i = 0; i < input.length; i++) {
                    input[0].disabled = input[0].checked;
                }
            });
            customChackbox.forEach(i => {
                for (let i = 0; i < customChackbox.length; i++) {
                    customChackbox[i].disabled = customChackbox[i].checked;
                }
            });

            if (rollback) {
                rollback.disabled = false;
            } else {
                return;
            }

            if (selectZero) {
                selectZero.disabled = false;
            } else {
                return;
            }
            if (screenBtn) {
                screenBtn.disabled = false;
            } else {
                return;
            }
            if (selectOne) {
                selectOne.disabled = false;
            } else {
                return;
            }
            reset.addEventListener('click', () => {
                this.fullPrice = 0;
                this.rollback = 0;
                this.screenPrice = 0;
                this.screens = '';
                this.servicePercentPrice = 0;
            });
        };

        function otherCms() {
            document.querySelector('#none').style.display = 'inline-block';
        }
        other.addEventListener('click', otherCms);

        function cmsVariant() {
            document.querySelector('.hidden-cms-variants').style.display = 'flex';
            if (cms.checked === false) {
                document.querySelector('.hidden-cms-variants').style.display = 'none';
            } else {
                return;
            }
        }
        cms.addEventListener('click', cmsVariant);

        function mainControlInput() {
            document.querySelectorAll('.main-controls__input')[8].style.display = 'inline-block';
        }
        select.addEventListener('click', mainControlInput);


        const mainControlsInput = document.getElementsByClassName('main-controls__input')[0];
        start = document.getElementById("start");

        start.disabled = true;
        mainControlsInput.addEventListener("change", stateHandle);

        function stateHandle() {
            if (document.getElementsByClassName('main-controls__input')[0].value === "" && selectZero === selectZero[0]) {
                start.disabled = true;
            } else {
                start.disabled = false;
            }
        }
    },
    addTitle: function () {
        document.title = title.textContent;
    },

    start: function () {
        let selectScreen = document.querySelectorAll('select');
        selectScreen.forEach(i => {
            for (let i = 0; i < selectScreen.length; i++) {
                selectScreen[i].disabled = !selectScreen[i].disabled;
            }
        });

        let input = document.querySelectorAll('input');

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

        customChackbox.forEach(i => {
            for (let i = 0; i < customChackbox.length; i++) {
                customChackbox[i].disabled = !customChackbox[i].checked;
            }
        });
        input.forEach(i => {
            for (let i = 0; i < input.length; i++) {
                input[i].disabled = !input[i].disabled;
                if (input[i].disabled) {
                    return;
                } else {
                    input[i].disabled = !input[i].disabled;
                }
            }
        });
        if (selectZero) {
            selectZero.disabled = true;
        } else {
            return;
        }
        if (screenBtn) {
            screenBtn.disabled = true;
        } else {
            return;
        }
        if (selectOne) {
            selectOne.disabled = true;
        } else {
            return;
        }
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
        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            });
        });
    },
    showResult: function () {
        total.value = this.screenPrice;
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
        fullTotalCount.value = this.fullPrice;
        totalCountRollback.value = this.fullPrice + (this.rollback / 100) * this.fullPrice;
        // totalCountRollback.value = ((+span.textContent + this.rollback) / 100) * this.fullPrice;
    },
    addServices: function () {
        otherItemsPercent.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }
        });
    },
    addScreenBlock: function () {
        let cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },
    addPrices: function () {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price;
        }

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent += (this.screenPrice * (this.servicesPercent[key] / 100));
        }
        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

        this.servicePercentPrice = this.fullPrice + (this.rollback / 100) * this.fullPrice;
    },
    getServicePercentPrice: () => {

    },
};
appData.init();
console.log(appData);