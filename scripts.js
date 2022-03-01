const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

const computerSelection = computerPlay();
let playerSelection = prompt("Choose Rock, paper, or scissors!").toLowerCase();

while (!choices.includes(playerSelection)) {
    playerSelection = prompt("You must choose ROCK, PAPER, or SCISSORS.").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "We have a tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You lose!";
        } else if (computerSelection == "scissors"){
            return "You win!";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "You lose!";
        } else if (computerSelection == "rock") {
            return "You win!";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You lose!";
        } else if (computerSelection == "paper") {
            return "You win!";
        }
    }
}

const Result = playRound(playerSelection, computerSelection);

alert(`You chose ${playerSelection} and your opponent chose ${computerSelection}. ` + Result);