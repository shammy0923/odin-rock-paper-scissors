const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

alert(computerPlay());