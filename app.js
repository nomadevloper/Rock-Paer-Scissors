const buttons = document.querySelectorAll("button");
const divResult = document.querySelector(".result");
const scoreboard = document.querySelector(".scoreboard");
const resetBtn = document.querySelector(".reset");
const mapping = {
    rock: 0,
    paper: 1,
    scissors: 2
}

let playerWinCount = 0;
let computerWinCount = 0;
let result = '';

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    const playerMapping = mapping[playerSelection];
    const computerMapping = mapping[computerSelection];

    const playerWin = playerMapping - computerMapping === 1 || playerMapping - computerMapping === -2;
    const computerWin = computerMapping - playerMapping === 1 || computerMapping - playerMapping === -2;

    if (playerWin) {
        playerWinCount++;
        return `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
    } else if (computerWin) {
        computerWinCount++;
        return `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`;
    } else {
        return "You Draw!";
    }
}

function updateScore() {
    divResult.textContent = result;
    scoreboard.textContent = `${playerWinCount} : ${computerWinCount}`;
}

function isGameOver() {
    return playerWinCount === 5 || computerWinCount === 5;
}

function restartGame() {
    playerWinCount = 0;
    computerWinCount = 0;
    result = '';
    updateScore();
}

resetBtn.addEventListener("click", function(){
    restartGame();
});

function clickButton() {
    const playerSelection = this.textContent;
    const computerSelection = getComputerChoice();

    result = playRound(playerSelection, computerSelection);
    updateScore();
    console.log(`${playerWinCount} : ${computerWinCount}`);
    if (isGameOver()) {
        const winner = playerWinCount > computerWinCount ? "Player" : "Computer";
        const wantToRestart = confirm(`Winner : ${winner}\nPress comfirm button to restart the game`);
        if (wantToRestart) {
            restartGame();
        }
    }
}

function game() {
    scoreboard.textContent = `${playerWinCount} : ${computerWinCount}`;
    buttons.forEach(button => button.addEventListener("click", clickButton));
    resetBtn.removeEventListener("click", clickButton);
}

game();