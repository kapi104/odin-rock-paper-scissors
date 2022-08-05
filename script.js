
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
        return `it's a draw.`;
    } else if (playerChoice === `paper` && computerChoice === `scissors` ||
        playerChoice === `scissors` && computerChoice === `rock` ||
        playerChoice === `rock` && computerChoice === `paper`) {
        computerPoints += 1;
        if (playerPoints === 5 || computerPoints === 5) return compare();
        else return `You lose.`;
    } else {
        playerPoints += 1;
        if (playerPoints === 5 || computerPoints === 5) return compare();
        else return `You won.`;
    }
}

function compare() {
    if (playerPoints > computerPoints) {
        let result = `You won with ${playerPoints} points. computer had only ${computerPoints}`
        playerPoints = 0;
        computerPoints = 0;
        return result;
    }
    else {
        let result = `You lose with ${playerPoints} points. computer had ${computerPoints}`
        playerPoints = 0;
        computerPoints = 0;
        return result;
    }
}

function play() {
    let playerSelection = this.value;
    let computerSelection = getComputerChoice();
    let div = document.querySelector('.result');
    div.innerHTML = playRound(playerSelection, computerSelection) + `<br>Current score is:<br>You: ${playerPoints}<br>Computer: ${computerPoints}`
}

let btn = document.querySelectorAll('button');
btn.forEach(but => but.addEventListener('click', play)
)