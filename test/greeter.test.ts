import {Greeter} from "../src/greeter";

describe("greeter", () => {
    // arrange
    const greeter1 = new Greeter("Howdy");
    const greeter2 = new Greeter("Merry Christmas");
    const greeter3 = new Greeter("G'day");
    // act

    // assert
    test("greeter1 has class Greeter", () => {
        expect(Greeter).toBeDefined();
    });
    test("greet method, howdy, cletus!", () => {
        expect(greeter1.greet("Cletus")).toEqual("Howdy, Cletus!");
    });
    test("greet method, Merry Christmas, Karen!", () => {
        expect(greeter2.greet("Karen")).toEqual("Merry Christmas, Karen!");
    });
    test("greet method, G'day, mate!", () => {
        expect(greeter3.greet("mate")).toEqual("G'day, mate!");
    });
})