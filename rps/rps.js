console.log("connected");
let moves = ["Rock","Paper","Scissors"]
let playerSelection;


function randomMove(){
    //Returns a random move from the move array
    return moves[Math.floor(Math.random()*moves.length)];
}

function chooseMove(){
    playerSelection = "";
    while (!moves.includes(playerSelection)){
        input = prompt("Choose: "+ moves);
        cleanedInput = input.substr(0,1).toUpperCase() +input.substr(1).toLowerCase();
        playerSelection = cleanedInput;
    }
    return playerSelection;
}

// takes results of 2 functions to determine winner 
function playRound(playerMove = chooseMove(),computerMove = randomMove()){
    let player   = moves.indexOf(playerMove);
    let computer = moves.indexOf(computerMove);
    
    if (player == computer){
        console.log(playerMove+" ties "+computerMove);
        return 0;
    }else if((player-computer+moves.length)%moves.length == 1){
        console.log(playerMove+" beats "+computerMove);
        return +1;
    }else{
        console.log(playerMove+" loses to "+computerMove);
        return -1;
    }

}

function game(){
    let score = 0;
    for (i = 0; i < 5; i++){
        score += playRound();
    }
    if (score == 0){
        console.log("Tie.");
    }else if (score > 0){
        console.log("Win.");
    }else{
        console.log("Lose.");
    }
}
