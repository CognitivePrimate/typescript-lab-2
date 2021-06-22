import {Greeter} from "./greeter";
import promptSync from "prompt-sync";



const prompt = promptSync();
const user = prompt("New phone, who dis?");

const greeter1 = new Greeter("What it is")

console.log(greeter1.greet(user));