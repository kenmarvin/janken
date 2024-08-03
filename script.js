// select the elements necessary
const buttons = document.querySelectorAll("button");

//get computer's value
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"]
    return choices[Math.floor(Math.random() * choices.length)];
};

// function to disable buttons when done

function disableButton() {
    buttons.forEach(btn => {
        btn.disabled = true;
    })
}

//initiate the score
let playerScore = 0;
let computerScore = 0;
//make the game logic
function playRound (playerChoice) {
    let computerChoice = getComputerChoice();
    let result = '';
    

    if ((playerChoice == 'Rock' && computerChoice == 'Scissor')
    || (playerChoice== 'Paper' && computerChoice == 'Rock')
    || (playerChoice == 'Scissor' && computerChoice == 'Paper')) {
        result = `${playerChoice} beats ${computerChoice}! You win!`
        playerScore++;
        if(playerScore == 5) {
            result = `You won the game, reload to play again`;
            disableButton();
        }
    } else if ((playerChoice == 'Scissor' && computerChoice == 'Rock')
    || (playerChoice== 'Rock' && computerChoice == 'Paper')
    || (playerChoice == 'Paper' && computerChoice == 'Scissor')) {
        result = `${computerChoice} beats ${playerChoice}, You lost.`
        computerScore++;
        if(computerScore == 5) {
            result = `Computer won the game, reload to play again`;
            disableButton();
        }
    } else {
        result = `It's a tie.`
    }

    let endScore = document.getElementById("score")
    endScore.textContent = `${playerScore} - ${computerScore}`
    let endResult = document.getElementById("result")
    endResult.textContent = result;
    return;
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playRound(e.target.textContent)
    })
})


