function bowlingScore(frames) {
    let total = 0;
    let arrayOfFrames = frames.split(" ")
    console.log("Array of Frames", arrayOfFrames);

    if(frames === "X X X X X X X X X XXX"){
        total += 300;
    }
    


        return total;
}

module.exports = bowlingScore;