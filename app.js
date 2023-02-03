function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const mapping = {
    rock: 0,
    paper: 1,
    scissors: 2
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    playerMapping = mapping[playerSelection];
    computerMapping = mapping[computerSelection];

    const isPlayerWin = playerMapping - computerMapping === 1 || playerMapping - computerMapping === -2;
    const isComputerWin = computerMapping - playerMapping === 1 || computerMapping - playerMapping === -2;

    if (isPlayerWin) {
        return {
            winner: "player",
            msg: `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`
        };
    } else if (isComputerWin) {
        return {
            winner: "computer",
            msg: `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`
        };
    } else {
        return {
            msg: "You Draw!"
        };
    }
}

function game() {
    let playerWin = 0;
    let computerWin = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection;
        do {
            playerSelection = prompt("Choose between Rock, Paper and Scissors");
        } while(!(playerSelection in mapping))
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result.msg);
        if (result.winner) {
            if (result.winner === "player") {
                playerWin ++;
            } else {
                computerWin ++;
            }
        }
    }
    console.log(`You ${playerWin} : Com ${computerWin}`);
    if (playerWin > computerWin) {
        console.log("You Win the Game!");
    } else if (playerWin < computerWin) {
        console.log("You Loose the Game!");
    } else {
        console.log("You Draw the Game!");
    }
}

game();