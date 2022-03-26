const title = 'JavaScript';
console.log(typeof title);

let screens = 'Простые Сложные Интерактивные';
console.log(screens.length);
console.log(screens.toLowerCase().split(' '));


const screenPrice = 100;
console.log('Стоимость версти экрана ' + screenPrice + ' долларов');

const rollback = 42;

const fullPrice = 100000;
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей');
console.log(typeof fullPrice);

// fullPrice у меня 100%  rollback делю на 100 умножаю на fullPrice получаю 42000 и это все делю на 1000 и получаю 42 процента
const working = fullPrice * (rollback / 100) / 1000;
console.log(working + '%');

const adaptive = true;
console.log(typeof adaptive);
