"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaScriptGreeter = void 0;
const greeter_1 = require("./greeter");
class JavaScriptGreeter extends greeter_1.Greeter {
    constructor(greeting) {
        super(greeting);
    }
    greet(name) {
        return `console.log('${this.greeting}, ${name}!')`;
    }
}
exports.JavaScriptGreeter = JavaScriptGreeter;
