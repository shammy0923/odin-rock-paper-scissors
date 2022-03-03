const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

let computerSelection;
let playerSelection;

function playRound() {

    computerSelection = computerPlay();

    playerSelection = prompt("Choose Rock, paper, or scissors!").toLowerCase();

    while (!choices.includes(playerSelection)) {
        playerSelection = prompt("You must choose ROCK, PAPER, or SCISSORS.").toLowerCase();
    }

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

function Game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; playerScore < 5  && computerScore < 5; i++) {
        const roundResult = playRound();
        if (roundResult == "You win!") {
            playerScore += 1;
        } else if (roundResult == "You lose!") {
            computerScore += 1;
        } 
        alert(`You chose ${playerSelection} and your opponent chose ${computerSelection}.`);
    }

    console.log(`Player: ${playerScore}, Opponent: ${computerScore}`);
}


Game();