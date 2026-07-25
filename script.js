// Computer to generates a random choice
function getComputerChoice() {
    // Create a integer variable randNum and store a randomly generated number 1 - 3
    const randNum = Math.floor(Math.random() * 3) + 1;
    // If randNum is 1 return rock
    if (randNum === 1) {
        return "rock";
    } else if (randNum === 2) {
        // If randNum is 2 return paper
        return "paper";
    } else if (randNum === 3) {
        // If randNum is 3 return scissors
        return "scissors";
    }
}

// Get choice from the user
function getHumanChoice() {
    // Create a string variable userChoice to store the input of the user
    const userChoice = prompt("Enter rock paper or scissors: ");

    // return the user's choice
    return userChoice;
}

// Create function to simulate 5 round of the game
function playGame() {
    // Create an integer variable named humanScore to keep track of user's score
    let humanScore = 0;
    // Create an integer variable named computerScore to keep track of the computer's score
    let computerScore = 0;

    // Simulate a round of play between the computer and user
    function playRound(humanChoice,computerChoice) {
        // convert human choice to lower case so game is none case sensitive
        const lowerHumanChoice = humanChoice.toLowerCase();
        // If the computer choice and human choice is the same it is a draw
        if (lowerHumanChoice === computerChoice) {
            console.log(`You draw! You both chose ${lowerHumanChoice}`);
            
            // Exit function so next if statement does run
            return;
        }

        // If human loses to computer
        if ((lowerHumanChoice === "rock" && computerChoice === "paper")
            || (lowerHumanChoice === "paper" && computerChoice === "scissors")
            || (lowerHumanChoice  === "scissors" && computerChoice === "rock")
        ) {
            console.log(`You lose! ${computerChoice} beats ${lowerHumanChoice}.`);
            computerScore ++;
        } else {
            // Remaining choice is if human wins
            console.log(`You win! ${lowerHumanChoice} beats ${computerChoice}.`);
            humanScore ++;
        };

    };
}