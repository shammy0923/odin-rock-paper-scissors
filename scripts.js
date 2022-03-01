const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

let playerSelection = prompt("Choose Rock, paper, or scissors!").toLowerCase();

while (!choices.includes(playerSelection)) {
    playerSelection = prompt("You must choose ROCK, PAPER, or SCISSORS.").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    
}