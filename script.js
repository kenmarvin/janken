// get randomized value of computer.
let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber <= 33) {
        return "rock"
    } else if (randomNumber <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}
// get value of player.

let getHumanChoice = () => {
    let choice = prompt("Rock, Paper or Scissors?")
    choice = choice.toLowerCase();
    if(choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}

// tracking the scores
let humanScore = 0;
let computerScore = 0;

// the conditions and rules of the game (the logic)

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("Paper beats Rock, you lost!")
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("Rock beats scissors, you won!")
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("Rock beats scissors, you lost!")
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("Scissors beats paper, you won!")
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("Paper beats rock, you won!")
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("Scissors beat paper, you lost!")
    } else {
        console.log("It was a tie.")
    }
}


playGame();
// Make the game a more competitive one (5 rounds to decide a winner);

function playGame () {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    }
    console.log('The last score is ' + humanScore + ' - ' + computerScore)
}