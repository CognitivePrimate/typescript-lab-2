import {HtmlGreeter} from "../src/HtmlGreeter";

describe("HtmlGreeter", () => {
    // arrange
    let HtmlGreeter1 = new HtmlGreeter("Hullo");
    let HtmlGreeter2 = new HtmlGreeter("What it is", "<div>");
    let HtmlGreeter3 = new HtmlGreeter("Yo yo", "<article>");
    // act

    // assert
    test("HtmlGreeter is defined", () => {
        expect(HtmlGreeter).toBeDefined();
    });
    test("HtmlGreeter returns <h1> with no parameters", () => {
        expect(HtmlGreeter1.greet("Guv'nor")).toEqual("<h1>Hullo, Guv'nor!<h1>");
    });
    test("HtmlGreeter returns greeting with <div>", () => {
        expect(HtmlGreeter2.greet("muthatruckah")).toEqual("<div>What it is, muthatruckah!<div>")
    });
    test("HtmlGreeter returns greeting with <article>", () => {
        expect(HtmlGreeter3.greet("Francis")).toEqual("<article>Yo yo, Francis!<article>");
    });



})