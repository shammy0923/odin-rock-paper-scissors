const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

alert(computerPlay());