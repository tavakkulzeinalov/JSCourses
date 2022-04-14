'use strict';

class First {
    hello() {
        console.log(`Привет я метод родителя!`);
    }
}

class Second extends First {
    test() {
        super.hello();
    }
    hello() {
        console.log(`А я наследуемый метод!`);
    }
}
const seconds = new Second();
seconds.test();
seconds.hello();