const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
const adv = document.querySelectorAll('.adv');
const li = document.querySelectorAll('li');

books[0].prepend(book[1]);
book[2].before(book[3]);
book[3].before(book[4]);
book[2].before(book[5]);
adv[0].remove();