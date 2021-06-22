"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greeter_1 = require("./greeter");
const prompt_sync_1 = require("prompt-sync");
const prompt = prompt_sync_1.promptSync();
const user = prompt("New phone, who dis?");
const greeter1 = new greeter_1.Greeter("What it is");
console.log(greeter1.greet(user));
