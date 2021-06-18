import {Greeter} from "./greeter";

export class LoudGreeter extends Greeter {
    private extra: string;

    constructor(greeting: string){
        super(greeting);
        this.extra = "!!";
    }

    addVolume(): void{
        this.extra += "!";
    }
}