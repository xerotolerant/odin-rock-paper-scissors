console.log('Hello World');
let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    // show a prompt for human choice
    return prompt('Enter a choice of: rock, paper, or scissors');
    // return value entered by human

}


function playRound(humanChoice, computerChoice) {



    // if both choices are equal it is a draw
    if (humanChoice == computerChoice) {
        console.log('Draw, try again');
    } else if (
        (humanChoice == 'rock' && computerChoice == 'paper')
        || (humanChoice == 'scissors' && computerChoice == 'rock')
    ) {
        console.log(`Computer played: ${computerChoice}.You lose, try again`);
        computerScore++;
    } else {
        console.log(`Computer played: ${computerChoice}.You win!`);
        humanScore++;
    }


}

//playRound(humanSelection, computerSelection);


function playGame() {
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore == computerScore) {
        console.log('Draw');
    }
    else if (humanScore > computerScore) {
        console.log('You win!');


    } else {
        console.log('You lose');
    }

    console.log(`Player: ${humanScore}, Computer: ${computerScore}`);

}