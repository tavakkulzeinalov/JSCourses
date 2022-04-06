const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
const book4 = book[4];
const adv = document.querySelectorAll('.adv');
const li = document.querySelectorAll('li');
const ES6 = document.createElement('li');


books[0].prepend(book[1]);
book[2].before(book[3]);
book[3].before(book[4]);
book[2].before(book[5]);
adv[0].remove();
li[4].before(li[6]);
li[4].before(li[8]);
li[10].before(li[2]);
li[48].before(li[55]);
li[51].before(li[48]);
li[54].before(li[51]);
book4.innerHTML = `<h2>
<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes"
    target="_blank">Книга 3. this и <strong>Пропопипы</strong> Объектов</a></h2>
<ul>
<li>Введение</li>
<li>Предисловие</li>
<li>Глава 1: <em>this</em> Or That?</li>
<li>Глава 2: <em>this</em> теперь приобретает смысл!</li>
<li>Глава 3: Объекты</li>
<li>Глава 4: Смешивая объекты "классов"</li>
<li>Глава 5: Прототипы</li>
<li>Глава 6: Делегирование поведения</li>
<li>Приложение A: ES6 <em>классы</em></li>
<li>Приложение B: Благодарности!</li>
</ul>`;
ES6.innerHTML = 'Глава 8: За пределами ES6';
ES6.classList.add('li');
li[26].append(ES6);
document.body.style.backgroundImage = "url(/image/you-dont-know-js.jpg)";