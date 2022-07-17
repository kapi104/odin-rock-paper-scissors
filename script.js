
let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) return 'rock';
    if (number === 1) return 'paper';
    if (number === 2) return 'scissors';
}

function playRound(playerChoice, computerChoice) {
    
        if (playerChoice == computerChoice) {
            return `it's a draw. You have ${playerPoints} and computer have ${computerPoints}`;
        } else if (playerChoice === `paper` && computerChoice === `scissors` ||
                    playerChoice === `scissors` && computerChoice === `rock` ||
                    playerChoice === `rock` && computerChoice === `paper`) {
            computerPoints = computerPoints + 1;
            return `You lose ${computerChoice} beats ${playerChoice}. You have ${playerPoints} and computer have ${computerPoints}`;
        } else {
            playerPoints = playerPoints + 1;
            return `You won ${playerChoice} beats ${computerChoice}. You have ${playerPoints} and computer have ${computerPoints}`;
        }
}

function compare() {
    if (playerPoints == computerPoints) return `it's a draw. You both had ${playerPoints}`;
    else if (playerPoints > computerPoints) return `You won with ${playerPoints} points. computer had only ${computerPoints}`;
    else return `You lose with ${playerPoints} points. computer had ${computerPoints}`; 
}

function play() {
    console.clear;
    for (i=0; i<=5; i++) {
        if (i < 5) {
            let computerSelection = getComputerChoice();
            let playerSelection = prompt(`rock, paper or scissors`).toLowerCase();
            console.log(playRound(playerSelection, computerSelection))
        } else {
            console.log(compare())
        }
    }
}


