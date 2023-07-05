function bowlingScore(frames) {
    let total = 0;
    let arrayOfScores = frames.split("")
    let nonWhiteSpaceScores = arrayOfScores.filter((element) => element !== " ");
    console.log("Array of Scores", nonWhiteSpaceScores);

    nonWhiteSpaceScores.forEach((single, index) => {
        if(single === "X"){
            let firstRoll = parseInt(nonWhiteSpaceScores[index + 1]);
            let secondRoll = parseInt(nonWhiteSpaceScores[index + 2]);
            if(isNaN(firstRoll) === false || isNaN(secondRoll) === false) {
                total += ((10 + firstRoll + secondRoll) + 10);
            } else {
                total += 10;
            }
        }
        if(single === "/"){
            let firstRoll = parseInt(nonWhiteSpaceScores[index + 1]);
            let previousRoll = parseInt(nonWhiteSpaceScores[index - 1]);
            if(isNaN(firstRoll) === false) {
                total += ((10 + firstRoll) - previousRoll );
            } else {
                total += 10;
            }
        }
        //strike is next full frame total plus 10
        //spare is next roll plus ten

        let integer = parseInt(single);
        console.log("single roll", integer);
        if(nonWhiteSpaceScores[index -1] !== "X" && nonWhiteSpaceScores[index - 2] !== "X") {
            if (isNaN(integer) === false) {
                total += integer;
            }
        }
    })

        return total;
}

module.exports = bowlingScore;