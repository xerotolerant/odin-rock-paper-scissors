console.log('Hello World');
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