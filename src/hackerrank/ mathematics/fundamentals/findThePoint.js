function processData(input) {
    //Enter your code here
    const splitByN = input.split("\n");
    
    for(let i = 1; i < splitByN.length; i++){
        const thisRound = splitByN[i].split(" ");
        const xDifference = parseInt(thisRound[2]) - parseInt(thisRound[0]);
        const yDifference = parseInt(thisRound[3]) - parseInt(thisRound[1]);
        
        const xResult = parseInt(thisRound[2]) + parseInt(xDifference);
        const yResult = parseInt(thisRound[3]) + parseInt(yDifference)
        console.log(xResult + " " + yResult);
    }
} 
