function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) return 'rock';
    if (number === 1) return 'paper';
    if (number === 2) return 'scissors';
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return `it's a draw`
    } else if (playerChoice === `paper` && computerChoice === `scissors` ||
                playerChoice === `scissors` && computerChoice === `rock` ||
                playerChoice === `rock` && computerChoice === `paper`) {
        return `you lose ${computerChoice} beats ${playerChoice}`;
    } else {
        return `you won ${playerChoice} beats ${computerChoice}`
    }
}

let computerSelection = getComputerChoice();
let playerSelection = prompt(`rock, paper or scissors`).toLowerCase();
console.log(playRound(playerSelection, computerSelection))