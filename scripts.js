const choices = ["rock", "paper", "scissors"];

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const playerScore = document.getElementById("player-score");
const botScore = document.getElementById("bot-score");

const textResult = document.getElementsByClassName("text-result")

const Buttons = [rockButton, paperButton, scissorsButton]

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

for (let i in Buttons) {
    Buttons[i].addEventListener("click", function() {
        let computerSelection = computerPlay();

        playerSelection = Buttons[i].id;

        let Result = playRound(playerSelection, computerSelection);

        if (Result == "You win!") {
            playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
        } else if (Result == "You lose!") {
            botScore.innerHTML = parseInt(botScore.innerHTML) + 1;
        } else if (Result == "We have a tie!") {
            textResult.innerText = "Yall tied!";
        }

        if (parseInt(playerScore.innerHTML) >= 5 || parseInt(botScore.innerHTML) >= 5) {

            if (parseInt(playerScore.innerHTML) >= 5) {
                textResult.innerHTML = "Player won!";
            } else if (parseInt(botScore.innerHTML) >= 5) {
                textResult.innerHTML = "Player lost!";
            }

            playerScore.innerHTML = 0;
            botScore.innerHTML = 0;
            textResult.innerText = "";
        }
    });
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