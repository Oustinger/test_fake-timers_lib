var FakeTimers = require("@sinonjs/fake-timers");

FakeTimers.install();

class DateTime extends Date {
    constructor() {
        super();

        this.bar = 'bar';
    }

    foo() {
        console.log('Lorem inpsum');
    }
}

var dateTime = new DateTime();

dateTime.foo();
