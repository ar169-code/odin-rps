// Computer to generates a random choice
function getComputerChoice() {
    // Create a integer variable randNum and store a randomly generated number 1 - 3
    const randNum = Math.floor(Math.random() * 3) + 1
    // If randNum is 1 return rock
    if (randNum === 1) {
        return "rock"
    } else if (randNum === 2) {
        // If randNum is 2 return paper
        return "paper"
    } else if (randNum === 3) {
        // If randNum is 3 return scissors
        return "scissors"
    }
}

// Get choice from the user
function getHumanChoice() {

}