import {LoudGreeter} from "../src/LoudGreeter";


describe("LoudGreeter", () => {
    // arrange
    let loudGreeter1 = new LoudGreeter("Yo");
    let loudGreeter2 = new LoudGreeter("Ahoy");
    let loudGreeter8 = new LoudGreeter("Meow")
    // act
    loudGreeter2.addVolume();

    loudGreeter8.addVolume();
    loudGreeter8.addVolume();
    loudGreeter8.addVolume();
    loudGreeter8.addVolume();
    loudGreeter8.addVolume();
    loudGreeter8.addVolume();

    // assert
    test("LoudGreeter has class Greeter", () => {
        expect(LoudGreeter).toBeDefined();
    });
    // testing overwritten greet method
    test("Double !!", () => {
        expect(loudGreeter1.greet("Brunhilde")).toEqual("Yo, Brunhilde!!");
    });
    // testing overwritten greet method with addVolume method
    test("Triple !!!", () => {
        expect(loudGreeter2.greet("scurvy landlubbers")).toEqual("Ahoy, scurvy landlubbers!!!");
    });
    test("Octuple!!!!!!!!", () => {
        expect(loudGreeter8.greet("human")).toEqual("Meow, human!!!!!!!!");
    });

})