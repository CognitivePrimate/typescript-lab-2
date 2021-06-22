import {JavaScriptGreeter} from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter", () => {
    // arrange
    let jsGreeter1 = new JavaScriptGreeter("Howdy");
    let jsGreeter2 = new JavaScriptGreeter("Merry Christmas");
    let jsGreeter3 = new JavaScriptGreeter("G'day");

    // act

    // assert
    test("greeter1 has class Greeter", () => {
        expect(JavaScriptGreeter).toBeDefined();
    });
    test("greet method, howdy, cletus!", () => {
        expect(jsGreeter1.greet("Cletus")).toEqual("console.log('Howdy, Cletus!')");
    });
    test("greet method, Merry Christmas, Karen!", () => {
        expect(jsGreeter2.greet("Karen")).toEqual("console.log('Merry Christmas, Karen!')");
    });
    test("greet method, G'day, mate!", () => {
        expect(jsGreeter3.greet("mate")).toEqual("console.log('G'day, mate!')");
    });

})