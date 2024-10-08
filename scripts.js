let humanScore = 0;
let computerScore = 0;
let rounds = 0;
document.addEventListener('click', (e) => {

    const computerChoice = getComputerChoice();
    switch (e.target.id) {
        case 'rock':
            playRound('rock', computerChoice);
            break;

        case 'paper':
            playRound('paper', computerChoice);
            break;

        case 'scissors':
            playRound('scissors', computerChoice);
            break;

        case 'start':
            playGame();
            break;

    }
});
// call play round when button is clicked with the correct player selection

// Add a divfor displaying results and change console.logs to DOM methods


// display the running score and announce the winner of the game once the player reaches 5 points



// Write a function that randomly returns 'rock', 'paper', or 'scissors'.
function getComputerChoice() {
    // Generate a random number between 1 and 3 inclusive
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    // Use the random number to select either 'rock', 'paper', or 'scissors' from a list of strings
    // return the selected value
    switch (randomNumber) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}



function playRound(humanChoice, computerChoice) {
    const roundsDiv = document.querySelector('#rounds');
    roundsDiv.textContent = `round: ${++rounds}`;
    const resultDiv = document.querySelector('#results');
    resultDiv.textContent = '';
    // if both choices are equal it is a draw
    if (humanChoice == computerChoice) {
        console.log('draw');
        resultDiv.textContent = 'Draw, try again.';
    } else if (
        (humanChoice == 'rock' && computerChoice == 'paper')
        || (humanChoice == 'scissors' && computerChoice == 'rock')
    ) {
        console.log('computer win');
        resultDiv.textContent = `Computer played ${computerChoice}.You lose, try again`;
        computerScore++;
    } else {
        resultDiv.textContent = `Computer played ${computerChoice}.You win!`;
        console.log('human win');
        humanScore++;
    }

    const scoreDiv = document.querySelector('#score');
    scoreDiv.textContent = `Player: ${humanScore}, Computer: ${computerScore}`;

    if (rounds >= 5 && humanScore !== computerScore) {
        const winMessage = humanScore > computerScore ? 'You Win' : 'You Lose'
        resultDiv.textContent = `Game complete. ${winMessage}`;
    }
}

function playGame() {
    // reset game state

    rounds = 0;
    computerScore = 0;
    humanScore = 0;


}