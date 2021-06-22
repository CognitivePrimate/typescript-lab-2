"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoudGreeter = void 0;
const greeter_1 = require("./greeter");
class LoudGreeter extends greeter_1.Greeter {
    constructor(greeting) {
        super(greeting);
        this.extra = "!";
    }
    addVolume() {
        this.extra += "!";
    }
    greet(name) {
        return `${this.greeting}, ${name}${this.extra}!`;
    }
}
exports.LoudGreeter = LoudGreeter;
