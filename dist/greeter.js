"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = void 0;
class Greeter {
    constructor(greeting) {
        this.greeting = greeting;
    }
    greet(name) {
        return `${this.greeting}, ${name}!`;
    }
}
exports.Greeter = Greeter;
