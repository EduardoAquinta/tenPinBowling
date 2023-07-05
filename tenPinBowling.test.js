const bowlingScore = require("./tenPinKata");

describe("Unit tests for the ten pin bowling Kata", () => {
    it("returns a numerical value", () => {
        let frames = "2"
        expect(typeof bowlingScore(frames)).toBe("number")
    })
    it("returns 1 if the input is 1", () =>{
        let frames = "1";
        expect(bowlingScore(frames)).toBe(1);
    })
    it("returns 9 if the input is '45' ", () => {
        let frames = "45";
        expect(bowlingScore(frames)).toBe(9);
    })
    it("returns 15 if the input is '45 06'", () => {
        let frames = "45 06";
        expect(bowlingScore(frames)).toBe(15);
    })
    it("returns 90 if the input is '45 27 54 18 36 63 27 81 90 27'", () => {
        let frames = "45 27 54 18 36 63 27 81 90 27";
        expect(bowlingScore(frames)).toBe(90);
    });
    it("returns 10 if the input is X", () => {
        let frames = "X";
        expect(bowlingScore(frames)).toBe(10);
    })
    it("returns 10 if the input is '0/'", () => {
        let frames = "0/";
        expect(bowlingScore(frames)).toBe(10);
    })
    it("returns 29 if the input is 'X 45'", () => {
        let frames = "X 45";
        expect(bowlingScore(frames)).toBe(29);
    })
})