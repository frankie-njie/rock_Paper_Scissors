let options = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

let Winner = " ";

let playerSelection = "rock";
let computerSelection;

for (let i = 0; i < 3; i++) {
    computerSelection = options[Math.floor(Math.random() * options.length)];
    game();

}

function game() {
    if (playerSelection === computerSelection) {
        playerScore = playerScore + 1;
        computerScore = computerScore + 1;
        //console.log(' Its a tie');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore = playerScore + 1;
        //console.log('You win');
    } else {
        computerScore = computerScore + 1;
        //console.log(' the computer won');
    }


    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score ${computerScore}`);
    playerScore > computerScore ? winner = "player" : winner = "computer";

    //return computerScore && playerScore;
}

console.log(" ---------------------------------")
console.log(`The game winner is ${winner}`)
console.log(" ---------------------------------")









// My Rock Paper and Scissors Code 

let playerSelection = "";
let computerSelection = computerPlay();

function computerPlay() {

    let computerChoose = ["Rock", "Paper", "Scissors"];


    return computerChoose = computerChoose[Math.floor(Math.random() * computerChoose.length)];
    // console.log(computerChoose);
}

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "Scissors" ||
        playerSelection == "paper" && computerSelection == "Rock" ||
        playerSelection == "scissors" && computerSelection == "Paper") {

        playerScore++;
        return "You win " + String(playerSelection).toLowerCase() + " beats " + String(computerSelection).toLowerCase();

    } else if (playerSelection == "rock" && computerSelection == "Rock" ||
        playerSelection == "scissors" && computerSelection == "Scissors" ||
        playerSelection == "paper" && computerSelection == "Paper") {

        playerScore += 1;
        computerScore += 1;
        return `It's a tie !! `;
    } else {
        computerScore++;
        return "You lose " + String(computerSelection).toLowerCase() + " beats " + String(playerSelection).toLowerCase();
    }

}

function showSelections(playerSelection, computerSelection) {
    console.log(`Player's move: ${playerSelection}`);
    console.log(`Computer's move: ${computerSelection}`);
}


function game() {
    for (let i = 1; i < 6; i++) {
        let computerSelection = computerPlay();
        let playerSelect = prompt("Enter Your Choice Rock Paper or Scissors. First to 3 wins");
        let playerSelection = playerSelect.toLowerCase();

        console.log(playRound(playerSelection, computerSelection));
        console.log(showSelections(playerSelection, computerSelection));

        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score ${computerScore}`);

        // playerScore > computerScore ? "You Win game" : winner = "Game over, computer wins";

    }
    console.log(playerScore > computerScore ? 'You win!' : playerScore < computerScore ? 'You lose!' : 'Tie');
}