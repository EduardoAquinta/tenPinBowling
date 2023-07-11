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
        expect(bowlingScore(frames)).toBe(28);
    })
    it("returns 23 if the input is '1/ 45", () => {
        let frames = "1/ 45";
        expect(bowlingScore(frames)).toBe(23);
    })
    it("returns 39 if the input is 'X X 45", () => {
        let frames = "X X 45";
        expect(bowlingScore(frames)).toBe(38);
    })
    it("returns if the input is '4/ 09 X 34 23 X 12 45 8/ 30'", () => {
        let frames = "4/ 09 X 34 23 X 12 45 8/ 30";
        expect(bowlingScore(frames)).toBe(89);
    })
    it("returns if the input is '43 62 01 X 8/ 70 00 63 9/ 53'", () => {
        let frames = "43 62 01 X 8/ 70 00 63 9/ 53";
        expect(bowlingScore(frames)).toBe(92);
    })
    it("returns 300 if the input is '9/ 90 36 53 X X 6/ 04 26 XXX'", () => {
        let frames = "9/ 90 36 53 X X 6/ 04 26 XXX"
        expect(bowlingScore(frames)).toBe(143);
    })
    it("returns 300 if the input is 'X X X X X X X X X X XXX'", () => {
        let frames = "X X X X X X X X X XXX"
            expect(bowlingScore(frames)).toBe(300);
    })
})