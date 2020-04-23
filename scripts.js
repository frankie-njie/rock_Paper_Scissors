let playerSelection;
let computerSelection = computerPlay();

let playerResult = document.querySelector("#playerResult");
let computerResult = document.querySelector("#computerResult");

let playerScore = 0;
let computerScore = 0;

events();

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "Scissors" ||
        playerSelection == "paper" && computerSelection == "Rock" ||
        playerSelection == "scissors" && computerSelection == "Paper") {

        playerScore++;
        return "You win " + String(playerSelection).toLowerCase() + " beats " + String(computerSelection).toLowerCase();

    } else if (playerSelection == "rock" && computerSelection == "Rock" ||
        playerSelection == "scissors" && computerSelection == "Scissors" ||
        playerSelection == "paper" && computerSelection == "Paper") {

        return `It's a tie !!`;

    } else {
        computerScore++;
        return "You lose " + String(computerSelection).toLowerCase() + " beats " + String(playerSelection).toLowerCase();
    }

}

function computerPlay() {
    let computerChoose = ["Rock", "Paper", "Scissors"];
    return computerChoose = computerChoose[Math.floor(Math.random() * computerChoose.length)];
}

function showSelections(playerSelection, computerSelection) {
    playerSelection.innerHTML = `Player's move: ${playerSelection}`;
    let Selection = document.getElementsByClassName("selections");

}

function gameOver(playerScore, computerScore) {
    playerScore = 0;
    computerScore = 0;
}

function game() {

    let computerSelection = computerPlay();
    document.querySelector('#playerSelection').innerHTML = playerSelection;
    document.querySelector('#computerSelection').innerHTML = computerSelection;

    showSelections(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);

    finalScore();
}

//Events function
function events() {
    let rock = document.getElementById("rock");
    rock.addEventListener("click", function(e) {
        playerSelection = 'rock';
        game();
    });

    let paper = document.getElementById("paper");
    paper.addEventListener("click", function(e) {
        playerSelection = 'paper';
        game();
    });

    let scissors = document.getElementById("scissors");
    scissors.addEventListener("click", function(e) {
        playerSelection = 'scissors';
        game();
    });
}

function finalScore() {

    playerResult.innerHTML = playerScore;
    computerResult.innerHTML = computerScore;
    if (playerScore === 5 && computerScore === 5) {
        document.querySelector("#winner").innerHTML = "It's a Tie";
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore === 5 && playerScore > computerScore) {
        document.querySelector("#winner").innerHTML = "You win";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5 && computerScore > playerScore) {
        document.querySelector("#winner").innerHTML = "You lost";
        playerScore = 0;
        computerScore = 0;
    }


}