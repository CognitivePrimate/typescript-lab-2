"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlGreeter = void 0;
const greeter_1 = require("./greeter");
class HtmlGreeter extends greeter_1.Greeter {
    constructor(greeting, tagName) {
        super(greeting);
        this.tagName = tagName || "<h1>";
    }
    greet(name) {
        return `${this.tagName}${this.greeting}, ${name}!${this.tagName}`;
    }
}
exports.HtmlGreeter = HtmlGreeter;
